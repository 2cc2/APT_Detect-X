import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Tag } from "antd";
import React from "react";

export const CardBalance11 = () => {
    return (
        <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
            <CardHeader className="flex gap-3">
                <div className="p-3 flex flex-col font-extrabold">
                    <span className="block text-indigo-600 xl:inline">
                        奇幻熊（APT-C-20）{" "}
                    </span>
                </div>
            </CardHeader>
            <CardBody className="py-1 overflow-auto" style={{ maxHeight: '150px' }}>
                <p>
                    APT28(APT-C-20)，又称Pawn Storm、Sofacy、Sednit、Fancy Bear和Strontium。APT28组织被怀疑幕后和俄罗斯政府有关，该组织相关攻击时间最早可以追溯到2004年。其主要目标包括国防工业、军队、政府组织和媒体。期间使用了大量0day漏洞，相关恶意代码除了针对windows、Linux等PC操作系统，还会针对苹果IOS等移动设备操作系统。早前也曾被怀疑与北大西洋公约组织网络攻击事件有关。APT28组织在2015年第一季度有大量的活动，用于攻击NATO成员国和欧洲、亚洲、中东政府。目前有许多安全厂商怀疑其与俄罗斯政府有关，而早前也曾被怀疑秘密调查MH17事件。从2016年开始该组织最新的目标瞄准了土耳其高级官员。
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <Tag color="green" >俄罗斯</Tag>
                    <Tag color="red" >鱼叉钓鱼攻击</Tag>
                    <Tag color="red" >无文件攻击</Tag>
                </div>
            </CardFooter>
        </Card>
    );
};
