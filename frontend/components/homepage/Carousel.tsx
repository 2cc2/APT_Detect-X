import React from 'react';
import { Carousel } from 'antd';
import PieChart from './echart';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {

    lineHeight: '160px',
    // textAlign: 'center',
    background: '#e0e7ff',
    // marginTop: '15px', // 上留白
    // marginBottom: '5px', // 下留白
    marginLeft: '50px',
    // marginRight: 'auto',
    // Add padding around the content if needed
    // padding: '20px', // Adjust the padding as needed
    border: '4px solid #4338ca',
    // boxSizing: 'border-box', // Add this line to include padding in the width calculation
};

const imgStyle: React.CSSProperties = {
    width: '750px', // Adjust width to account for padding
    height: 'auto',
    padding: '10px', // Add padding around the image
    boxSizing: 'border-box', // Ensure padding is included in the width calculation
    marginLeft: '70px',
    border: '1px solid rgba(0, 0, 0, 0.5)',
};

const Product: React.FC = () => (
    <div className="sm:text-center lg:text-center">
        {/* <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"> */}
        <h1 className=" mt-5 font-extrabold text-gray-900 sm:text-5xl md:text-6xl" style={{ fontSize: '25px', lineHeight: '1.3' }}>
            <span className="block xl:inline" >
                <br />
                Motivation for{" "}
                <span className="block text-indigo-600 xl:inline">
                    APT DetectX{" "}
                </span>
                {" "}
                research
            </span>

        </h1>
        <p className=" mt-3 max-w-2xl text-xl text-gray-500 lg:mx-auto" >
            研究动机
        </p>
        <div className="lg:text-center py-10" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '50%' }}>
                <Carousel autoplay effect="fade" autoplaySpeed={3000} speed={100}>
                    <div >
                        <Image src="/image/1.png" alt="1" width={750} height={650} style={imgStyle} />
                    </div>
                    <div>
                        <Image src="/image/2.png" alt="1" width={750} height={650} style={imgStyle} />
                    </div>
                    <div>
                        <Image src="/image/3.png" alt="1" width={750} height={650} style={imgStyle} />
                    </div>
                    <div>
                        <Image src="/image/4.png" alt="2" width={750} height={650} style={imgStyle} />
                    </div>
                    <div>
                        <Image src="/image/5.png" alt="3" width={750} height={650} style={imgStyle} />
                    </div>
                    <div>
                        <Image src="/image/6.png" alt="4" width={750} height={650} style={imgStyle} />
                    </div>
                    <div>
                        <Image src="/image/7.png" alt="5" width={750} height={650} style={imgStyle} />
                    </div>
                    <div>
                        <Image src="/image/7.png" alt="5" width={750} height={650} style={imgStyle} />
                    </div>
                    <div>
                        <Image src="/image/8.png" alt="5" width={750} height={650} style={imgStyle} />
                    </div>
                </Carousel>
            </div>
            <div style={{ width: '50%' }}>
                <PieChart />
            </div>
        </div>
    </div>
);

export default Product;
