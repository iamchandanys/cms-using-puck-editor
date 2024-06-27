"use client";

import "@measured/puck/puck.css";
import { Puck } from "@measured/puck";
import config from "../../../puck.config";

export function Editor() {
  const initialData = {};
  const save = (data: any) => {};

  return <Puck config={config} data={initialData} onPublish={save} />;
}
