'use client';
import React, { useEffect, useState } from 'react'
import EChartComponent from '@/components/echart/MyEchart';
import { Breadcrumb, Button, message, Select, Upload } from 'antd';
import { HorizontalNav } from '@/components/footer&hernav/hernav';
import { SidebarWrapper } from '@/components/sidebar/sidebar';
import { HomeOutlined, UploadOutlined } from '@ant-design/icons';
import { Footer } from '@/components/footer&hernav/Footer';
import Loading from '@/components/loading/loading';
import axios from 'axios';

const { Option } = Select;

interface Data {
    cross_val_scores: number[];
    stratified_kfold_scores: number[];
}

const Comparison_same = () => {

    const [selectedOption, setSelectedOption] = useState<string>();
    const [data, setData] = useState<Data | null>(null);
    const [results, setResults] = useState<string[]>([]);
    const [option, setOption] = useState({});

    useEffect(() => {
        fetch('http://localhost:5001/kdd/models')
            .then(res => res.json())
            .then(results => setResults(results.map((result: string) => result.replace('.pkl', ''))));
    }, []);

    useEffect(() => {
        if (selectedOption) {
            fetch(`http://localhost:5001/kdd/evaluate/${selectedOption}`)
                .then(res => res.json())
                .then(response => {
                    const newData: Data = {
                        cross_val_scores: response.cross_val_score.scores,
                        stratified_kfold_scores: response.stratified_kfold.scores
                    };
                    setData(newData);
                });
        }
    }, [selectedOption]);

    useEffect(() => {
        if (data) {
            const seriesData = {
                name: selectedOption || 'Option',
                data: [data.cross_val_scores, data.stratified_kfold_scores],
                type: 'boxplot'
            };

            const option = {
                title: {
                    text: 'Algorithm Comparison',
                    left: 'center'
                },
                legend: {
                    data: [seriesData.name],
                    orient: 'horizontal',
                    left: 'center',
                    bottom: 0
                },
                tooltip: {
                    trigger: 'item',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '10%',
                    right: '10%',
                    bottom: '15%'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    nameGap: 30,
                    splitArea: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    min: 0.98,
                    max: 1,
                    splitArea: {
                        show: true
                    }
                },
                series: [seriesData]
            };

            setOption(option);
        }
    }, [data, selectedOption]);

    const handleUpload = async (file: any) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:5001/kdd/uploads', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const uploadedData = response.data;
            const modelName = file.name.replace('.pkl', '');
            setData({
                cross_val_scores: uploadedData.cross_val_score.scores,
                stratified_kfold_scores: uploadedData.stratified_kfold.scores
            });
            setSelectedOption(modelName);
            setResults(prevResults => [...prevResults, modelName]);
            message.success('模型上传并评估成功');
        } catch (error) {
            message.error('模型上传或评估失败');
        }
    };

    return (
        <div>
            <Select
                placeholder="Select algorithm to compare"
                style={{ width: '100%', marginBottom: '10px' }}
                onChange={(value: string) => setSelectedOption(value)}>
                {results.map((result: string) => <Option key={result} value={result}>{result}</Option>)}
            </Select>
            <Upload
                customRequest={({ file }) => handleUpload(file)}
                showUploadList={false}
            >
                <Button icon={<UploadOutlined />}>上传模型</Button>
            </Upload>
            <div style={{ marginTop: '80px' }}>
                {option && <EChartComponent option={option} />}
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

const Comparison_sa = () => {
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
                        <Comparison_same />
                    </div>
                    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                        <Footer />
                    </div>
                </Layout>
            )}
        </>
    );
};

export default Comparison_sa;