import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Tag } from "antd";
import React from "react";

export const CardBalance8 = () => {
    return (
        <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
            <CardHeader className="flex gap-3">
                <div className="p-3 flex flex-col font-extrabold">
                    <span className="block text-indigo-600 xl:inline">
                        毒针（APT-C-31）{" "}
                    </span>
                </div>
            </CardHeader>
            <CardBody className="py-1 overflow-auto" style={{ maxHeight: '120px' }}>
                <p>
                    2018年11月25日，360高级威胁应对团队就在全球范围内第一时间发现了一起针对俄罗斯的APT攻击行动，攻击目标则指向俄罗斯总统办公室所属的医疗机构，此次攻击行动使用了Flash 0day漏洞CVE-2018-15982和Hacking Team的RCS后门程序，结合被攻击目标医疗机构的职能特色，360将此次APT攻击命名为“毒针”行动。
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <Tag color="green" >哈萨克斯坦</Tag>
                    <Tag color="red" >鱼叉攻击</Tag>
                    <Tag color="red" >无文件攻击</Tag>
                </div>
            </CardFooter>
        </Card>
    );
};
