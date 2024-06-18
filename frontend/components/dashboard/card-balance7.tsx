import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Tag } from "antd";
import React from "react";

export const CardBalance7 = () => {
    return (
        <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
            <CardHeader className="flex gap-3">
                <div className="p-3 flex flex-col font-extrabold">
                    <span className="block text-indigo-600 xl:inline">
                        盲眼鹰（APT-C-36）{" "}
                    </span>
                </div>
            </CardHeader>
            <CardBody className="py-1 overflow-auto" style={{ maxHeight: '150px' }}>
                <p>
                    从2018年4月起至今，一个疑似来自南美洲的APT组织盲眼鹰（APT-C-36）针对哥伦比亚政府机构和大型公司（金融、石油、制造等行业）等重要领域展开了有组织、有计划、针对性的长期不间断攻击。其攻击平台主要为Windows，攻击目标锁定为哥伦比亚政企机构。由于该组织攻击的目标中有一个特色目标是哥伦比亚盲人研究所，而哥伦比亚在足球领域又被称为南美雄鹰，结合该组织的一些其它特点以及360威胁情报中心对 APT 组织的命名规则，我们将该组织命名为盲眼鹰（APT-C-36）。
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <Tag color="green" >南美地区</Tag>
                    <Tag color="red" >鱼叉攻击</Tag>
                </div>
            </CardFooter>
        </Card>
    );
};
