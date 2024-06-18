"use client";
import React from "react";
import dynamic from "next/dynamic";
import { CardAgents } from "./card-agents";
import { CardTransactions } from "./card-transactions";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import { TableWrapper } from "../table/table";
import { CardBalance1 } from "./card-balance1";
import { CardBalance2 } from "./card-balance2";
import { CardBalance3 } from "./card-balance3";
import { CardBalance4 } from "./card-balance4";
import { CardBalance5 } from "./card-balance5";
import { CardBalance6 } from "./card-balance6";
import { CardBalance7 } from "./card-balance7";
import { CardBalance8 } from "./card-balance8";
import { CardBalance9 } from "./card-balance9";
import { CardBalance10 } from "./card-balance10";

// const Chart = dynamic(
//   () => import("../charts/steam").then((mod) => mod.Steam),
//   {
//     ssr: false,
//   }
// );

export const Content = () => (
  <div className="h-full lg:px-6">
    <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
      <div className="mt-6 gap-6 flex flex-col w-full">
        <h3 className="text-xl font-semibold">发现APT组织</h3>
        {/* Card Section Top */}
        <div className="flex flex-col gap-2">
          <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-5  w-full">
            <CardBalance1 />
            <CardBalance2 />
            <CardBalance3 />
            
            <CardBalance7 />
            <CardBalance8 />
            <CardBalance9 />
            <CardBalance10 />
          </div>
        </div>

        {/* Chart */}
        {/* <div className="h-full flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Statistics</h3>
          <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 ">
            <Chart />
          </div>
        </div> */}
      </div>

      {/* Left Section */}
      <div className="mt-4 gap-2 flex flex-col xl:max-w-md w-full">
        {/* <h3 className="text-xl font-semibold">Section</h3> */}
        <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
          <CardBalance4 />
          <CardBalance5 />
          <CardBalance6 />
        </div>
      </div>
    </div>

    {/* Table Latest Users */}
    {/* <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0  max-w-[90rem] mx-auto gap-3">
      <div className="flex  flex-wrap justify-between">
        <h3 className="text-center text-xl font-semibold">Latest Users</h3>
        <Link
          href="/accounts"
          as={NextLink}
          color="primary"
          className="cursor-pointer"
        >
          View All
        </Link>
      </div>
      <TableWrapper />
    </div> */}
  </div>
);
