import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Tag } from "antd";
import React from "react";

export const CardBalance5 = () => {
    return (
        <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
            <CardHeader className="flex gap-3">
                <div className="p-3 flex flex-col font-extrabold">
                    <span className="block text-indigo-600 xl:inline">
                        Lazarus（APT-C-26）{" "}
                    </span>
                </div>
            </CardHeader>
            <CardBody className="py-1" style={{ maxHeight: '150px' }}>
                <p>
                    Lazarus组织是疑似来自朝鲜的APT组织，该组织长期对韩国、美国进行渗透攻击，此外还对全球的金融机构进行攻击，堪称全球金融机构的最大威胁。该组织最早的攻击活动可以追溯到2007年。据国外安全公司的调查显示，Lazarus组织与2014 年索尼影业遭黑客攻击事件，2016 年孟加拉国银行数据泄露事件，2017年美国国防承包商、美国能源部门及英国、韩国等比特币交易所被攻击等事件有关。而2017年席卷全球的最臭名昭著的安全事件“Wannacry”勒索病毒也被怀疑是该组织所为。
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <Tag color="green" >朝鲜半岛</Tag>
                    <Tag color="red" >水坑攻击</Tag>
                    <Tag color="red" >利用社交媒体传播</Tag>
                </div>
            </CardFooter>
        </Card>
    );
};
