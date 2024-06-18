import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Tag } from "antd";
import React from "react";

export const CardBalance10 = () => {
    return (
        <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
            <CardHeader className="flex gap-3">
                <div className="p-3 flex flex-col font-extrabold">
                    <span className="block text-indigo-600 xl:inline">
                        ArmaRat（APT-C-33）{" "}
                    </span>
                </div>
            </CardHeader>
            <CardBody className="py-1 overflow-auto" style={{ maxHeight: '100px' }}>
                <p>
                    2016年7月，360发现一起针对伊朗Android手机用户长达两年之久的APT攻击活动。攻击者借助社交软件Telegram分享经过伪装的ArmaRat木马，入侵成功后攻击者可以完全控制用户手机，并对用户手机进行实时监控。由于该木马演变过程中C&C及代码结构均出现“arma”关键字，所以我们将该组织命名为“ArmaRat”。
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <Tag color="green" >中东地区</Tag>
                    <Tag color="red" >利用社交媒体传播</Tag>
                </div>
            </CardFooter>
        </Card>
    );
};
