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

const Comparison_same = () => {
    interface Data {
        'Cross-validation scores': number[];
        'StratifiedKFold cross-validation scores': number[];
    }

    const [selectedOption, setSelectedOption] = useState<string | undefined>();
    const [data, setData] = useState<Data | null>(null);
    const [results, setResults] = useState<string[]>([]);

    const [option, setOption] = useState({});

    useEffect(() => {
        fetch('http://localhost:5001/data/results')
            .then(res => res.json())
            .then(results => setResults(results.map((result: string) => result.replace('.json', ''))));
    }, []);

    useEffect(() => {
        if (selectedOption) {
            fetch(`http://localhost:5001/data/results/${selectedOption}.json`)
                .then(res => res.json())
                .then(setData);
        }
    }, [selectedOption]);

    useEffect(() => {
        if (data) {
            const seriesData = {
                name: selectedOption || 'Option',
                data: [data['Cross-validation scores'], data['StratifiedKFold cross-validation scores']],
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
                    min: 0.5,
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

    return (
        <div>
            <Select
                placeholder="Select algorithm to compare"
                style={{ width: '100%', marginBottom: '10px' }}
                onChange={(value: string) => setSelectedOption(value)}>
                {results.map((result: string) => <Option key={result} value={result}>{result}</Option>)}
            </Select>
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