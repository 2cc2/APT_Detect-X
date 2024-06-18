import React from 'react';
import EChartComponent from '../echart/MyEchart';

const PieChart = () => {
    const option = {
        title: {
            text: '2023年高级威胁时间涉及境内行业分布占比',
            left: 'center',
            top: '94%',
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '0%',
            left: 'center'
        },
        series: [
            {
                //name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 35,
                        fontWeight: 'bold',
                        formatter: '{b}: {d}%'
                    }
                },
                labelLine: {
                    show: false
                },
                //
                data: [
                    { value: 20.4, name: '政府机构' },
                    { value: 18.4, name: '科研教育' },
                    { value: 17.3, name: '信息技术' },
                    { value: 12.2, name: '金融' },
                    { value: 10.2, name: '能源' },
                    { value: 3.1, name: '国防军事' },
                    { value: 3.1, name: '新闻媒体' },
                    { value: 3.1, name: '医疗卫生' },
                    { value: 12.2, name: '其他' }
                ]
            }
        ]
    };

    return <EChartComponent option={option} />;
};

export default PieChart;
