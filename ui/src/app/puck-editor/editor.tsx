"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import "@measured/puck/puck.css";
import { Puck } from "@measured/puck";
import config from "./config";
import { useRouter } from "next/router";
import { setPuckInitialData } from "@/lib/slices/formSlice";
import React from "react";

export const Editor = () => {
  const initialData = {};
  // const router = useRouter();
  const dispatch = useAppDispatch();

  const save = (data: any) => {
    console.log(data);
    dispatch(setPuckInitialData(data));
  };

  const handleClick = () => {
    // router.push("/view-page");
  };

  return (
    <div>
      <Puck config={config} data={initialData} onPublish={save}></Puck>
      {/* <button onClick={handleClick}>Go to New View</button> */}
    </div>
  );
};
