'use client';
import type { NextPage } from "next";
import { Content } from "@/components/dashboard/content";
import { Layout } from "../../components/layout/layout";
import { Providers } from "./providers";
import { Footer } from "@/components/footer&hernav/Footer";
import WorldMap from "./worldmap";
import { useEffect, useState } from "react";
import Loading from "@/components/loading/loading";
import { Divider } from "antd";

const Home: NextPage = () => {
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
        <Providers>
          {loading ? (
            <Loading />
          ) : (
                <div >
                  <div>
                    <h1 className="text-xl font-semibold p-2" style={{ marginLeft: '55px' }}>APT活动</h1>
                    <WorldMap />
                  </div>

              <Content />;
              <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                <Footer />
              </div>
            </div>
          )}
        </Providers>
      )};
    </>
  );
};

export default Home;
