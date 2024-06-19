'use client';
import React, { useEffect } from "react";
import * as echarts from "echarts";
import "echarts/map/js/world";
// import { Divider } from "antd";

const WorldMap: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById("main") as HTMLDivElement;
    const chart = echarts.init(chartDom);

    // 使用 ECharts 加载地图数据
    echarts.registerMap("world", require("echarts/map/json/world.json"));

    // 示例APT攻击数据
    const data = [
      { name: "Afghanistan", value: 60 },
      { name: "Albania", value: 50 },
      { name: "Algeria", value: 40 },
      { name: "Angola", value: 30 },
      { name: "Argentina", value: 50 },
      { name: "Armenia", value: 60 },
      { name: "Australia", value: 70 },
      { name: "Austria", value: 40 },
      { name: "Azerbaijan", value: 50 },
      { name: "Bahamas", value: 30 },
      { name: "Bahrain", value: 40 },
      { name: "Bangladesh", value: 80 },
      { name: "Belarus", value: 70 },
      { name: "Belgium", value: 50 },
      { name: "Belize", value: 30 },
      { name: "Benin", value: 40 },
      { name: "Bhutan", value: 50 },
      { name: "Bolivia", value: 40 },
      { name: "Bosnia and Herz.", value: 50 },
      { name: "Botswana", value: 30 },
      { name: "Brazil", value: 80 },
      { name: "British Virgin Islands", value: 20 },
      { name: "Brunei", value: 30 },
      { name: "Bulgaria", value: 50 },
      { name: "Burkina Faso", value: 40 },
      { name: "Burundi", value: 30 },
      { name: "Cambodia", value: 60 },
      { name: "Cameroon", value: 50 },
      { name: "Canada", value: 70 },
      { name: "Cape Verde", value: 30 },
      { name: "Cayman Islands", value: 20 },
      { name: "Central African Rep.", value: 40 },
      { name: "Chad", value: 30 },
      { name: "Chile", value: 50 },
      { name: "China", value: 180 },
      { name: "Colombia", value: 60 },
      { name: "Comoros", value: 30 },
      { name: "Congo", value: 40 },
      { name: "Costa Rica", value: 30 },
      { name: "Côte d'Ivoire", value: 40 },
      { name: "Croatia", value: 50 },
      { name: "Cuba", value: 60 },
      { name: "Cyprus", value: 30 },
      { name: "Czech Rep.", value: 40 },
      { name: "Dem. Rep. Congo", value: 50 },
      { name: "Dem. Rep. Korea", value: 160 },
      { name: "Denmark", value: 40 },
      { name: "Djibouti", value: 30 },
      { name: "Dominican Rep.", value: 50 },
      { name: "Ecuador", value: 40 },
      { name: "Egypt", value: 70 },
      { name: "El Salvador", value: 30 },
      { name: "Equatorial Guinea", value: 40 },
      { name: "Eritrea", value: 50 },
      { name: "Estonia", value: 30 },
      { name: "Ethiopia", value: 60 },
      { name: "Falkland Is.", value: 10 },
      { name: "Fiji", value: 20 },
      { name: "Finland", value: 40 },
      { name: "Fr. S. Antarctic Lands", value: 10 },
      { name: "France", value: 50 },
      { name: "Gabon", value: 30 },
      { name: "Gambia", value: 40 },
      { name: "Georgia", value: 50 },
      { name: "Germany", value: 70 },
      { name: "Ghana", value: 30 },
      { name: "Greece", value: 40 },
      { name: "Greenland", value: 10 },
      { name: "Guatemala", value: 30 },
      { name: "Guinea", value: 40 },
      { name: "Guinea-Bissau", value: 30 },
      { name: "Guyana", value: 20 },
      { name: "Haiti", value: 30 },
      { name: "Honduras", value: 40 },
      { name: "Hungary", value: 50 },
      { name: "Iceland", value: 20 },
      { name: "India", value: 160 },
      { name: "Indonesia", value: 150 },
      { name: "Iran", value: 170 },
      { name: "Iraq", value: 155 },
      { name: "Ireland", value: 30 },
      { name: "Isle of Man", value: 10 },
      { name: "Israel", value: 60 },
      { name: "Italy", value: 50 },
      { name: "Jamaica", value: 30 },
      { name: "Japan", value: 150 },
      { name: "Jordan", value: 40 },
      { name: "Kazakhstan", value: 50 },
      { name: "Kenya", value: 60 },
      { name: "Korea", value: 180 },
      { name: "Kuwait", value: 30 },
      { name: "Kyrgyzstan", value: 40 },
      { name: "Lao PDR", value: 30 },
      { name: "Latvia", value: 30 },
      { name: "Lebanon", value: 40 },
      { name: "Lesotho", value: 30 },
      { name: "Liberia", value: 40 },
      { name: "Libya", value: 50 },
      { name: "Lithuania", value: 30 },
      { name: "Luxembourg", value: 20 },
      { name: "Macedonia", value: 30 },
      { name: "Madagascar", value: 40 },
      { name: "Malawi", value: 30 },
      { name: "Malaysia", value: 50 },
      { name: "Maldives", value: 30 },
      { name: "Mali", value: 40 },
      { name: "Malta", value: 30 },
      { name: "Mauritania", value: 40 },
      { name: "Mauritius", value: 30 },
      { name: "Mexico", value: 50 },
      { name: "Moldova", value: 30 },
      { name: "Monaco", value: 20 },
      { name: "Mongolia", value: 30 },
      { name: "Montenegro", value: 20 },
      { name: "Morocco", value: 30 },
      { name: "Mozambique", value: 40 },
      { name: "Myanmar", value: 50 },
      { name: "Namibia", value: 30 },
      { name: "Nepal", value: 40 },
      { name: "Netherlands", value: 50 },
      { name: "New Caledonia", value: 20 },
      { name: "New Zealand", value: 30 },
      { name: "Nicaragua", value: 20 },
      { name: "Niger", value: 30 },
      { name: "Nigeria", value: 50 },
      { name: "Norway", value: 40 },
      { name: "Oman", value: 30 },
      { name: "Pakistan", value: 50 },
      { name: "Panama", value: 30 },
      { name: "Papua New Guinea", value: 20 },
      { name: "Paraguay", value: 30 },
      { name: "Peru", value: 40 },
      { name: "Philippines", value: 50 },
      { name: "Poland", value: 60 },
      { name: "Portugal", value: 50 },
      { name: "Puerto Rico", value: 20 },
      { name: "Qatar", value: 30 },
      { name: "Reunion", value: 10 },
      { name: "Romania", value: 40 },
      { name: "Russia", value: 175 },
      { name: "Rwanda", value: 30 },
      { name: "S. Geo. and S. Sandw. Is.", value: 10 },
      { name: "S. Sudan", value: 30 },
      { name: "San Marino", value: 10 },
      { name: "Saudi Arabia", value: 50 },
      { name: "Senegal", value: 30 },
      { name: "Serbia", value: 40 },
      { name: "Sierra Leone", value: 30 },
      { name: "Singapore", value: 50 },
      { name: "Slovakia", value: 30 },
      { name: "Slovenia", value: 20 },
      { name: "Solomon Is.", value: 10 },
      { name: "Somalia", value: 10 },
      { name: "South Africa", value: 50 },
      { name: "Spain", value: 60 },
      { name: "Sri Lanka", value: 40 },
      { name: "Sudan", value: 30 },
      { name: "Suriname", value: 20 },
      { name: "Swaziland", value: 10 },
      { name: "Sweden", value: 50 },
      { name: "Switzerland", value: 40 },
      { name: "Syria", value: 30 },
      { name: "Tajikistan", value: 20 },
      { name: "Tanzania", value: 30 },
      { name: "Thailand", value: 40 },
      { name: "Togo", value: 30 },
      { name: "Tonga", value: 20 },
      { name: "Trinidad and Tobago", value: 30 },
      { name: "Tunisia", value: 40 },
      { name: "Turkey", value: 50 },
      { name: "Turkmenistan", value: 30 },
      { name: "U.A.E.", value: 50 },
      { name: "Uganda", value: 40 },
      { name: "Ukraine", value: 180 },
      { name: "United Kingdom", value: 70 },
      { name: "United States", value: 150 },
      { name: "Uruguay", value: 30 },
      { name: "Uzbekistan", value: 40 },
      { name: "Vanuatu", value: 20 },
      { name: "Venezuela", value: 30 },
      { name: "Vietnam", value: 40 },
      { name: "W. Sahara", value: 10 },
      { name: "Yemen", value: 30 },
      { name: "Zambia", value: 20 },
      { name: "Zimbabwe", value: 30 },
    ];

    const option = {
      visualMap: {
        pieces: [
          { min: 170, color: '#b71540' },  
          { min: 140, max: 170, color: '#eb2f06' },  
          { min: 110, max: 140, color: '#e55039' },  
          { min: 90, max: 110, color: '#e58e26' },  
          { min: 75, max: 90, color: '#fa983a' },  
          { min: 60, max: 75, color: '#f6b93b' },  
          { min: 45, max: 60, color: '#079992' },  
          { min: 30, max: 45, color: '#38ada9' },  
          { min: 15, max: 30, color: '#78e08f' },  
          { min: 0, max: 15, color: '#b8e994' }  
        ],
        calculable: true
      },
      series: [
        {
          type: "map",
          map: "world",
          roam: true,
          // label: {
          //     show: true
          // },
          emphasis: {
            label: {
              show: true,
            },
            data: data,
          },
          itemStyle: {
            normal: {
              areaColor: "#ffffff",
              borderColor: "#111",
            },
            emphasis: {
              areaColor: "#2a333d",
            },
          },
          data: data.map((item) => ({
            name: item.name,
            value: item.value,
            itemStyle: {
              color: getColor(item.value),
            },
          })),
          tooltip: {
            trigger: "item",
            formatter: function (params: any) {
              return params.name + ": " + params.value;
            },
          },
        },
      ],
    };

    // 色彩映射
    function getColor(value: number) {
      if (value > 170) return "#b71540"; 
      if (value > 140) return "#eb2f06"; 
      if (value > 110) return "#e55039"; 
      if (value > 90) return "#e58e26"; 
      if (value > 75) return "#fa983a"; 
      if (value > 60) return "#f6b93b"; 
      if (value > 45) return "#079992"; 
      if (value > 30) return "#38ada9"; 
      if (value > 15) return "#78e08f"; 
      return "#b8e994"; 
    }

    chart.setOption(option);
  }, []);

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100vh', // 使其占满整个视口高度
        backgroundColor: '#e0e0e0',
        borderRight: '24px solid #ffffff',
        borderLeft: "24px solid #ffffff",
        borderBottom: "12px solid #ffffff",
        borderTop: "12px solid #ffffff",
        borderRadius: '60px',
      }}>
        <div id="main"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: "90%", height: "500px",
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            marginTop: "24px",
            marginBottom: "24px"
          }}>
        </div>
      </div>
      {/* <Divider style={{ margin: 0, borderWidth: 1, borderColor: "#909090", marginTop: "0px" }} /> */}
    </>
  );
};

export default WorldMap;

