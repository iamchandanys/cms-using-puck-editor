"use client";

import { useAppDispatch } from "@/lib/hooks";
import "@measured/puck/puck.css";
import { Puck } from "@measured/puck";

import { setPuckInitialData } from "@/lib/slices/formSlice";
import React from "react";
import config from "../../../puck-config";

export const Editor = () => {
  const initialData = {};
  const dispatch = useAppDispatch();

  const save = (data: any) => {
    console.log(data);
    dispatch(setPuckInitialData(data));
  };

  const handleViewPage = () => {
    window.open("/view-page", "_blank");
  };

  const overrides = {
    headerActions: ({ children }: any) => (
      <>
        {children}
        <button
          type="button"
          className="px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleViewPage}
        >
          View Page
        </button>
      </>
    ),
  };

  return (
    <div>
      <Puck
        config={config}
        data={initialData}
        onPublish={save}
        overrides={overrides}
      ></Puck>
    </div>
  );
};
