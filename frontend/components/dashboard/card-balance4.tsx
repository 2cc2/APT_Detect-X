import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Tag } from "antd";
import React from "react";

export const CardBalance4 = () => {
    return (
        <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
            <CardHeader className="flex gap-3">
                <div className="p-3 flex flex-col font-extrabold">
                    <span className="block text-indigo-600 xl:inline">
                        黄金鼠（APT-C-27）{" "}
                    </span>
                </div>
            </CardHeader>
            <CardBody className="py-1 overflow-auto" style={{ maxHeight: '120px' }}>
                <p>
                    从2014年11月起至今，黄金鼠组织（APT-C-27）对叙利亚地区展开了有组织、有计划、有针对性的长时间不间断攻击。攻击平台从开始的Windows平台逐渐扩展至Android平台，截至目前我们一共捕获了Android平台攻击样本29个，Windows平台攻击样本55个，涉及的C&C域名9个。将APT-C-27组织命名为黄金鼠，主要是考虑了以下几方面的因素：一是该组织在攻击过程中使用了大量的资源，说明该攻击组织资源丰富，而黄金鼠有长期在野外囤积粮食的习惯，字面上也有丰富的含义；二、该攻击组织通常是间隔一段时间出来攻击一次，这跟鼠有相通的地方；三是黄金仓鼠是叙利亚地区一种比较有代表性的动物。
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <Tag color="green" >中东地区</Tag>
                    <Tag color="red" >水坑攻击</Tag>
                    <Tag color="red" >鱼叉攻击</Tag>
                </div>
            </CardFooter>
        </Card>
    );
};
