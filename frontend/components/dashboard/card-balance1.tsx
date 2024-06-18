import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Tag } from "antd";
import React from "react";


export const CardBalance1 = () => {
  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardHeader className="flex gap-3">
        <div className="p-3 flex flex-col font-extrabold">
          <span className="block text-indigo-600 xl:inline">
            海莲花（APT-C-00）{" "}
          </span>
        </div>
      </CardHeader>
      <CardBody className="py-1 overflow-auto" style={{ maxHeight: '130px' }}>
        <p>
          海莲花（OceanLotus）APT团伙
          是一个高度组织化的、专业化的境外国家级黑客组织，
          其最早由360发现并披露。该组织至少自2012年4月起便针对
          中国政府、科研院所、海事机构、海域建设、航运企业等相关重要领域
          展开了有组织、有计划、有针对性的长时间不间断攻击。
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <Tag color="green" >越南</Tag>
          <Tag color="red" >鱼叉攻击</Tag>
          <Tag color="red" >水坑攻击</Tag>
        </div>
      </CardFooter>
    </Card>
  );
};
