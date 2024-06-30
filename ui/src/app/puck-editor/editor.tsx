"use client";

import "@measured/puck/puck.css";
import { Puck } from "@measured/puck";
import config from "./config";
import { useRouter } from "next/router";
import React from "react";

export const Editor = () => {
  const initialData = {};
  // const router = useRouter();

  const save = (data: any) => {
    console.log(data);
  };

  const handleClick = () => {
    // router.push("/view-page");
  };

  return (
    <div>
      {/* <Puck config={config} data={initialData} onPublish={save}></Puck> */}
      <button onClick={handleClick}>Go to New View</button>
    </div>
  );
};
