"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import "./globals.css";
import { Editor } from "./puck-editor/editor";
import { setHost } from "@/lib/slices/formSlice";
import { useGetChannelSettingsQuery } from "@/lib/services/formApi";

export default function Home() {
  const dispatch = useAppDispatch();
  const myHost = useAppSelector((state) => state.formReducer.myHost);

  const { isLoading, isFetching, data, error } =
    useGetChannelSettingsQuery(null);

  return (
    <div>
      <Editor></Editor>
      {/* <input name="host" onChange={(e) => dispatch(setHost(e.target.value))} value={myHost} /> */}
    </div>
  );
}
