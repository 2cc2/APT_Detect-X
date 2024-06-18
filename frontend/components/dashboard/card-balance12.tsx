import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Tag } from "antd";
import React from "react";

export const CardBalance12 = () => {
    return (
        <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
            <CardHeader className="flex gap-3">
                <div className="p-3 flex flex-col font-extrabold">
                    <span className="block text-indigo-600 xl:inline">
                        蓝宝菇（APT-C-12）{" "}
                    </span>
                </div>
            </CardHeader>
            <CardBody className="py-1">
                <p>
                    从2011年开始持续至今，高级攻击组织蓝宝菇（APT-C-12）对我国政府、军工、科研、金融等重点单位和部门进行了持续的网络间谍活动。该组织主要关注核工业和科研等相关信息。被攻击目标主要集中在中国大陆境内。
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <Tag color="green" >中国台湾</Tag>
                    <Tag color="red" >鱼叉攻击</Tag>
                </div>
            </CardFooter>
        </Card>
    );
};
