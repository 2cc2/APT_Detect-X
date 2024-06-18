import React, { useEffect, useState } from 'react'
import EChartComponent from '@/components/echart/MyEchart';
import { Select } from 'antd';

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

export default Comparison_same;