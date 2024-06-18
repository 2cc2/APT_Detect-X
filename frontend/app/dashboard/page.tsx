import type { NextPage } from "next";
import { Content } from "@/components/dashboard/content";
import { Layout } from "../../components/layout/layout";
import { Providers } from "./providers";
const Home: NextPage = () => {
  return (
    <div>
      <Providers>
        <Content />;
      </Providers>
    </div>
  );
};

export default Home;
