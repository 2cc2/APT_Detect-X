import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const EChartComponent = ({ option }: any) => {
    const chartRef = useRef(null);
    useEffect(() => {
        if ((chartRef.current)) {
            const chart = echarts.init(chartRef.current);
            chart.setOption(option);

            return () => {
                chart.dispose();
            };
        }
    }, [option]);

    return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default EChartComponent;
