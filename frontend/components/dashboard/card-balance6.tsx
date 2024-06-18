import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Tag } from "antd";
import React from "react";

export const CardBalance6 = () => {
    return (
        <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
            <CardHeader className="flex gap-3">
                <div className="p-3 flex flex-col font-extrabold">
                    <span className="block text-indigo-600 xl:inline">
                        黄金雕（APT-C-34）{" "}
                    </span>
                </div>
            </CardHeader>
            <CardBody className="py-1">
                <p>
                    黄金雕组织的活动主要影响中亚地区，大部分集中在哈萨克斯坦国境内，攻击目标涉及教育行业、政府机关人员、科研人员、媒体工作人员、部分商务工业、军方人员、宗教人员、政府异见人士和外交人员等。该组织使用社会工程学、物理接触、无线电监听等方式进行网络攻击，同时也采购了HackingTeam、NSO Group等网络军火商的武器，具备0day漏洞的高级入侵能力。360参照中亚地区擅长驯养猎鹰进行狩猎的习俗特性，将该组织命名为黄金雕（APT-C-34）。
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <Tag color="green" >哈萨克斯坦</Tag>
                    <Tag color="red" >鱼叉攻击</Tag>
                    <Tag color="red" >移动介质传播</Tag>
                </div>
            </CardFooter>
        </Card>
    );
};
