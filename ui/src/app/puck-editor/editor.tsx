"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import "@measured/puck/puck.css";
import { Puck } from "@measured/puck";
// import { config } from "../components/puck-config";

import { setPuckInitialData } from "@/lib/slices/formSlice";
import { PuckConfig } from "puck-editor-components";

export const Editor = () => {
  const initialData = {};

  const dispatch = useAppDispatch();

  const save = (data: any) => {
    dispatch(setPuckInitialData(data));
  };

  const onChange = (data: any) => {
    dispatch(setPuckInitialData(data));
  };

  const _puckInitialData = useAppSelector(
    (state) => state.formReducer.puckInitialData
  );

  const handleViewPage = () => {
    if (
      _puckInitialData !== null &&
      typeof _puckInitialData === "object" &&
      Object.keys(_puckInitialData).length > 0
    ) {
      window.open("/cms-using-puck-editor/view-page", "_blank");
    } else {
      window.alert("Publish before viewing page.");
    }
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
    <>
      <Puck
        config={PuckConfig as any}
        data={initialData}
        onPublish={save}
        overrides={overrides}
        onChange={(data: any) => {
          onChange(data);
        }}
      ></Puck>
    </>
  );
};
