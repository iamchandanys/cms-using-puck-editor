"use client";

import { useAppSelector } from "@/lib/hooks";
import React from "react";
import { Render } from "@measured/puck";
// import { config } from "../components/puck-config";
import { PuckConfig } from "puck-editor-components";

const ViewPage = () => {
  const _puckInitialData = useAppSelector(
    (state) => state.formReducer.puckInitialData
  );

  return <Render config={PuckConfig} data={_puckInitialData} />;
};

export default ViewPage;
