"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React from "react";
import { Render } from "@measured/puck";
import config from "../../../puck-config";

const ViewPage = () => {
  const puckInitialData = useAppSelector(
    (state) => state.formReducer.puckInitialData
  );

  return <Render config={config} data={puckInitialData} />;
};

export default ViewPage;
