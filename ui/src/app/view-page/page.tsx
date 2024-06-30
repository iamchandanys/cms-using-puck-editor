"use client";

import { useAppSelector } from "@/lib/hooks";
import React from "react";
import { Render } from "@measured/puck";
import { config } from "../../../puck-config";

const ViewPage = () => {
  const _puckInitialData = useAppSelector(
    (state) => state.formReducer.puckInitialData
  );

  return <Render config={config} data={_puckInitialData} />;
};

export default ViewPage;
