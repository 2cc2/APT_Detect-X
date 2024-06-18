import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Tag } from "antd";
import React from "react";

export const CardBalance9 = () => {
    return (
        <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
            <CardHeader className="flex gap-3">
                <div className="p-3 flex flex-col font-extrabold">
                    <span className="block text-indigo-600 xl:inline">
                        军刀狮（APT-C-38）{" "}
                    </span>
                </div>
            </CardHeader>
            <CardBody className="py-1 overflow-auto" style={{ maxHeight: '120px' }}>
                <p>
                    从2015年7月起至今，军刀狮组织（APT-C-38）在中东地区展开了有组织、有计划、针对性的不间断攻击，其攻击平台为Windows和Android。由于军刀狮组织的攻击目标有一个主要的特色目标是西亚中东某国的库尔德人，另Windows端RAT包含的PDB路径下出现多次的“Saber”，而亚洲狮为该中东国家的代表动物，结合该组织的一些其它特点以及360对 APT 组织的命名规则，我们将该组织命名为军刀狮（APT-C-38）。
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <Tag color="green" >中东地区</Tag>
                    <Tag color="red" >水坑攻击</Tag>
                    <Tag color="red" >利用社交媒体传播</Tag>
                </div>
            </CardFooter>
        </Card>
    );
};
