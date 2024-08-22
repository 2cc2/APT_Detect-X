import React, { useEffect, useState } from "react";
import Chart, { Props } from "react-apexcharts";

export const Steam = () => {
  const [series, setSeries] = useState<Props["series"]>([]);
  const [options, setOptions] = useState<Props["options"]>({});

  useEffect(() => {
    fetch('http://localhost:5001/data/test')  // 使用你的 Flask 应用的 URL 和新的 API 接口
      .then(response => response.json())
      .then(data => setSeries(data));

    fetch('http://localhost:5001/data/options')  // 获取配置选项
      .then(response => response.json())
      .then(data => setOptions(data));
  }, []);

  return (
    <div className="w-full z-20">
      <div id="chart">
        <Chart options={options} series={series} type="area" height={425} />
      </div>
    </div>
  );
};