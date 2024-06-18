import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Tag } from "antd";
import React from "react";

export const CardBalance2 = () => {
  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardHeader className="flex gap-3">
        <div className="p-3 flex flex-col font-extrabold">
          <span className="block text-indigo-600 xl:inline">
            CIA（APT-C-39）{" "}
          </span>
        </div>
      </CardHeader>
      <CardBody className="py-1 overflow-auto" style={{ maxHeight: '130px' }}>
        <p>
          APT-C-39是一个来自美国，
          与NSA存在联系，系属于CIA的高规格，高水平的APT组织。
          对中国关键领域进行了长达十一年的网络渗透攻击。
          中国航空航天、科研机构、石油行业、大型互联网公司以及政府机构等多个单位
          均遭到不同程度的攻击
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <Tag color="green" >美国</Tag>
          <Tag color="red" >无文件攻击</Tag>
          <Tag color="red" >漏洞利用</Tag>
        </div>
      </CardFooter>
    </Card>
  );
};
