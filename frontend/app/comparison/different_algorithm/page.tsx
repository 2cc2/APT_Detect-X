'use client';
import React, { useEffect, useState } from 'react';
import EChartComponent from '@/components/echart/MyEchart';
import { Breadcrumb, Button, message, Select, Upload } from 'antd';
import { HorizontalNav } from '@/components/footer&hernav/hernav';
import { SidebarWrapper } from '@/components/sidebar/sidebar';
import { HomeOutlined, UploadOutlined } from '@ant-design/icons';
import { Footer } from '@/components/footer&hernav/Footer';
import Loading from '@/components/loading/loading';
import axios from 'axios';

const { Option } = Select;

const Comparison_algorithm = () => {
    interface ClassificationReport {
        'macro avg': {
            precision: number;
            recall: number;
            'f1-score': number;
            support: number;
        };
        'weighted avg': {
            precision: number;
            recall: number;
            'f1-score': number;
            support: number;
        };
    }

    interface Data {
        'Classification Report': ClassificationReport;
    }

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [data, setData] = useState<Data[]>([]);
    const [results, setResults] = useState<string[]>([]);

    const [option, setOption] = useState({});
    const [barOption, setBarOption] = useState<any>(null);

    useEffect(() => {
        fetch('http://localhost:5001/kdd/models')
            .then(res => res.json())
            .then(results => setResults(results.map((result: string) => result.replace('.pkl', ''))));
    }, []);

    useEffect(() => {
        if (selectedOptions.length > 0) {
            Promise.all(
                selectedOptions.map(option =>
                    fetch(`http://localhost:5001/kdd/evaluate/${option}`)
                        .then(res => res.json())
                )
            ).then(setData);
        }
    }, [selectedOptions]);

    useEffect(() => {
        if (data.length > 0) {
            const seriesDataMacroAvg = data.map((d, i) => {
                const optionName = selectedOptions[i] ? selectedOptions[i].replace('.json', '') : `Option ${i + 1}`;
                return {
                    value: [
                        d['Classification Report']?.['macro avg']?.['precision'],
                        d['Classification Report']?.['macro avg']?.['recall'],
                        d['Classification Report']?.['macro avg']?.['f1-score']
                    ],
                    name: `${optionName} - Macro Avg`
                };
            });

            const seriesDataWeightedAvg = data.map((d, i) => {
                const optionName = selectedOptions[i] ? selectedOptions[i].replace('.json', '') : `Option ${i + 1}`;
                return {
                    value: [
                        d['Classification Report']?.['weighted avg']?.['precision'],
                        d['Classification Report']?.['weighted avg']?.['recall'],
                        d['Classification Report']?.['weighted avg']?.['f1-score']
                    ],
                    name: `${optionName} - Weighted Avg`
                };
            });

            const option = {
                title: [
                    {
                        text: 'Macro Average',
                        left: '25%',
                        textAlign: 'center'
                    },
                    {
                        text: 'Weighted Average',
                        left: '75%',
                        textAlign: 'center'
                    }
                ],
                legend: {
                    data: [...seriesDataMacroAvg.map(d => d.name), ...seriesDataWeightedAvg.map(d => d.name)],
                    orient: 'horizontal',
                    left: 'center',
                    bottom: 0,
                    top: '80%'
                },
                radar: [
                    {
                        indicator: [
                            { name: 'Precision', max: 1, min: 0.85 },
                            { name: 'Recall', max: 1, min: 0.85 },
                            { name: 'F1-score', max: 1, min: 0.85 }
                        ],
                        center: ['25%', '50%']
                    },
                    {
                        indicator: [
                            { name: 'Precision', max: 1, min: 0.9 },
                            { name: 'Recall', max: 1, min: 0.9 },
                            { name: 'F1-score', max: 1, min: 0.9 }
                        ],
                        center: ['75%', '50%']
                    }
                ],
                series: [
                    {
                        name: 'Algorithm Comparison - MacroAvg',
                        type: 'radar',
                        radarIndex: 0,
                        data: seriesDataMacroAvg
                    },
                    {
                        name: 'Algorithm Comparison - WeightedAvg',
                        type: 'radar',
                        radarIndex: 1,
                        data: seriesDataWeightedAvg
                    }
                ]
            };

            setOption(option);
        }
    }, [data, selectedOptions]);

    useEffect(() => {
        if (data.length > 0) {
            const barOption = {
                title: {
                    text: 'Algorithm Comparison'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['Precision', 'Recall', 'F1-score'],
                    orient: 'horizontal',
                    left: 'center',
                    bottom: 0
                },
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: selectedOptions.map(option => option.replace('.json', ''))
                },
                series: [
                    {
                        name: 'Precision',
                        type: 'bar',
                        stack: 'total',
                        data: data.map(d => d['Classification Report']?.['weighted avg']?.['precision'])
                    },
                    {
                        name: 'Recall',
                        type: 'bar',
                        stack: 'total',
                        data: data.map(d => d['Classification Report']?.['weighted avg']?.['recall'])
                    },
                    {
                        name: 'F1-score',
                        type: 'bar',
                        stack: 'total',
                        data: data.map(d => d['Classification Report']?.['weighted avg']?.['f1-score'])
                    }
                ]
            };
            setBarOption(barOption);
        }
    }, [data, selectedOptions]);

    const handleUpload = async (file: any) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:5001/kdd/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const uploadedData = response.data;
            const modelName = file.name.replace('.pkl', '');
            setData(prevData => [...prevData, uploadedData]);
            setSelectedOptions(prevOptions => [...prevOptions, modelName]);
            setResults(prevResults => [...prevResults, modelName]);
            message.success('模型上传并评估成功');
        } catch (error) {
            message.error('模型上传或评估失败');
        }
    };

    return (
        <div>
            <Select
                mode="multiple"
                placeholder="Select algorithm to compare"
                style={{ width: '100%', marginBottom: '10px' }}
                value={selectedOptions}
                onChange={(value: string[]) => setSelectedOptions(value)}>
                {results.map((result: string) => <Option key={result} value={result}>{result}</Option>)}
            </Select>
            <Upload
                customRequest={({ file }) => handleUpload(file)}
                showUploadList={false}
            >
                <Button icon={<UploadOutlined />}>上传模型</Button>
            </Upload>
            <div style={{ marginTop: '30px' }}>
                {option && <EChartComponent option={option} />}
            </div>
            <div style={{ marginTop: '30px' }}>
                {barOption && <EChartComponent option={barOption} />}
            </div>
        </div>
    );
};

const Layout = ({ children }: any) => (
    <div>
        <div style={{ flex: '1 0 auto' }}>
            <HorizontalNav />
        </div>
        <div className="flex">
            <SidebarWrapper />
            <div className="flex-grow">
                {children}
            </div>
        </div>
    </div>
);

const TopNavbar = ({ setCurrentPage }: any) => {
    return (
        <div className="flex justify-between p-2 bg-gray-600" >
            <Breadcrumb className="breadcrumb-white">
                <Breadcrumb.Item>
                    <a href="/dashboard" style={{ color: 'white' }}>
                        <HomeOutlined />
                        <span>首页</span>
                    </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/dataset/KDD" onClick={() => setCurrentPage('dataset')} style={{ color: 'white' }}>
                        数据集
                    </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/algorithm/KNN" onClick={() => setCurrentPage('algorithm')} style={{ color: 'white' }}>
                        检测算法
                    </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/comparison/different_algorithm" onClick={() => setCurrentPage('comparison')} style={{ color: 'white' }}>
                        评估对比
                    </a>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

const Comparison_Algo = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // 模拟数据加载过程
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // 假设数据加载需要1.5秒
        // 清理定时器
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Layout>
                    <div>
                        <TopNavbar />
                        <Comparison_algorithm />
                    </div>
                    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                        <Footer />
                    </div>
                </Layout>
            )}
        </>
    );
};

export default Comparison_Algo;