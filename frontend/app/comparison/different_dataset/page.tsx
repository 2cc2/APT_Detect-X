'use client';
import React, { useEffect, useState } from 'react'
import EChartComponent from '@/components/echart/MyEchart';
import { Breadcrumb, Select } from 'antd';
import { HorizontalNav } from '@/components/footer&hernav/hernav';
import { SidebarWrapper } from '@/components/sidebar/sidebar';
import { HomeOutlined } from '@ant-design/icons';
import { Footer } from '@/components/footer&hernav/Footer';
import Loading from '@/components/loading/loading';

const { Option } = Select;

const Comparison_dataset = () => {
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

    const [selectedOption, setSelectedOption] = useState<string>('');
    const [data, setData] = useState<Data[]>([]);
    const [options, setOptions] = useState<string[]>([]);

    const [option, setOption] = useState({});
    const [barOption, setBarOption] = useState<any>(null);

    useEffect(() => {
        fetch('http://localhost:5001/log/model')
            .then(res => res.json())
            .then(options => setOptions(options.map((option: string) => option.replace('.pkl', ''))));
    }, []);

    useEffect(() => {
        if (selectedOption) {
            Promise.all([
                fetch(`http://localhost:5001/kdd/evaluate/${selectedOption}`).then(res => res.json()),
                fetch(`http://localhost:5001/log/evaluates/${selectedOption}`).then(res => res.json())
            ]).then(([data1, data2]) => {
                // 检查data1和data2是否是可迭代的
                if (data1 && typeof data1[Symbol.iterator] !== 'function') {
                    data1 = [data1];
                }
                if (data2 && typeof data2[Symbol.iterator] !== 'function') {
                    data2 = [data2];
                }

                // 处理数据，为每个部分添加标签
                const processedData1 = data1.map((d: any) => ({
                    ...d,
                    label: 'KDD'
                }));
                const processedData2 = data2.map((d: any) => ({
                    ...d,
                    label: 'LOG'
                }));

                setData([...processedData1, ...processedData2]);
            });
        }
    }, [selectedOption]);

    useEffect(() => {
        if (data.length > 0) {
            const macroAvgSeriesData = data.map((d, i) => {
                const label = i < data.length / 2 ? 'KDD - Macro Avg' : 'LOG - Macro Avg';
                return {
                    value: [
                        d['Classification Report']?.['macro avg']?.['precision'],
                        d['Classification Report']?.['macro avg']?.['recall'],
                        d['Classification Report']?.['macro avg']?.['f1-score']
                    ],
                    name: label
                };
            });

            const weightedAvgSeriesData = data.map((d, i) => {
                const label = i < data.length / 2 ? 'KDD - Weighted Avg' : 'LOG - Weighted Avg';
                return {
                    value: [
                        d['Classification Report']?.['weighted avg']?.['precision'],
                        d['Classification Report']?.['weighted avg']?.['recall'],
                        d['Classification Report']?.['weighted avg']?.['f1-score']
                    ],
                    name: label
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
                    data: [...macroAvgSeriesData.map(d => d.name), ...weightedAvgSeriesData.map(d => d.name)],
                    orient: 'horizontal',
                    left: 'center',
                    bottom: 0,
                    top: '80%'
                },
                radar: [
                    {
                        indicator: [
                            { name: 'Precision', max: 1, min: 0.4 },
                            { name: 'Recall', max: 1, min: 0.4 },
                            { name: 'F1-score', max: 1, min: 0.4 }
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
                        radarIndex: 0, // 指定数据对应的雷达图
                        data: macroAvgSeriesData
                    },
                    {
                        name: 'Algorithm Comparison - WeightedAvg',
                        type: 'radar',
                        radarIndex: 1, // 指定数据对应的雷达图
                        data: weightedAvgSeriesData
                    }
                ]
            };

            setOption(option);
        }
    }, [data, selectedOption]);

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
                    data: ['KDD', 'LOG'],
                    orient: 'horizontal',
                    left: 'center',
                    bottom: 0
                },
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: ['Precision', 'Recall', 'F1-score']
                },
                series: [
                    {
                        name: 'KDD',
                        type: 'bar',
                        data: [
                            data[0]['Classification Report']?.['weighted avg']?.['precision'],
                            data[0]['Classification Report']?.['weighted avg']?.['recall'],
                            data[0]['Classification Report']?.['weighted avg']?.['f1-score']
                        ]
                    },
                    {
                        name: 'LOG',
                        type: 'bar',
                        data: [
                            data[1]['Classification Report']?.['weighted avg']?.['precision'],
                            data[1]['Classification Report']?.['weighted avg']?.['recall'],
                            data[1]['Classification Report']?.['weighted avg']?.['f1-score']
                        ]
                    }
                ]
            };
            setBarOption(barOption);
        }
    }, [data, selectedOption]);

    return (
        <div>
            <Select
                placeholder="Select algorithm to compare"
                style={{ width: '100%', marginBottom: '10px' }}
                onChange={(value: string) => setSelectedOption(value + '.json')}>
                {options.map((option: string) => <Option key={option} value={option}>{option}</Option>)}
            </Select>
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

const Comparison_Data = () => {
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
                        <Comparison_dataset />
                    </div>
                    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                        <Footer />
                    </div>
                </Layout>
            )}
        </>
    );
};

export default Comparison_Data;