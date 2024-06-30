"use client";

import { Provider } from "react-redux";
import "./globals.css";
import { Editor } from "./puck-editor/editor";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/lib/store";

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Editor></Editor>
        </div>
      </PersistGate>
    </Provider>
  );
}
