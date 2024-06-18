import React, { useEffect, useState } from 'react'
import EChartComponent from '@/components/echart/MyEchart';
import { Select } from 'antd';

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
        fetch('http://localhost:5001/data/results')
            .then(res => res.json())
            .then(results => setResults(results.map((result: string) => result.replace('.json', ''))));
    }, []);

    useEffect(() => {
        if (selectedOptions.length > 0) {
            Promise.all(
                selectedOptions.map(option =>
                    fetch(`http://localhost:5001/data/results/${option}`)
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

    return (
        <div>
            <Select
                mode="multiple"
                placeholder="Select algorithm to compare"
                style={{ width: '100%', marginBottom: '10px' }} 
                onChange={(value: string[]) => setSelectedOptions(value.map((v: string) => v + '.json'))}>
                {results.map((result: string) => <Option key={result} value={result}>{result}</Option>)}
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

export default Comparison_algorithm;