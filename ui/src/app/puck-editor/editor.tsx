"use client";

import "@measured/puck/puck.css";
import { Puck } from "@measured/puck";
import config from "../../../puck.config";

export function Editor() {
  const initialData = {};

  const save = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Puck config={config} data={initialData} onPublish={save} />
    </div>
  );
}
