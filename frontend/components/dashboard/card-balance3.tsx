import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Tag } from "antd";
import React from "react";

export const CardBalance3 = () => {
  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardHeader className="flex gap-3">
        <div className="p-3 flex flex-col font-extrabold">
          <span className="block text-indigo-600 xl:inline">
            摩诃草（APT-C-09）{" "}
          </span>
        </div>
      </CardHeader>
      <CardBody className="py-1 overflow-auto" style={{ maxHeight: '150px' }}>
        <p>
          摩诃草组织(APT-C-09)，
          又称HangOver、VICEROY TIGER、The Dropping Elephant、Patchwork，
          是一个来自南亚地区的境外APT组织，该组织已持续活跃了12年。
          摩诃草组织最早由Norman安全公司于2013年曝光，
          随后又有其他安全厂商持续追踪并披露该组织的最新活动，
          但该组织并未由于相关攻击行动曝光而停止对相关目标的攻击，
          相反从2015年开始更加活跃。
          摩诃草组织主要针对中国、巴基斯坦等亚洲地区国家进行网络间谍活动，
          其中以窃取敏感信息为主。
          相关攻击活动最早可以追溯到2009年11月，
          至今还非常活跃。在针对中国地区的攻击中，
          该组织主要针对政府机构、科研教育领域进行攻击，其中以科研教育领域为主。
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <Tag color="green" >印度</Tag>
          <Tag color="red" >鱼叉攻击</Tag>
          <Tag color="red" >无文件攻击</Tag>
        </div>
      </CardFooter>
    </Card>
  );
};
