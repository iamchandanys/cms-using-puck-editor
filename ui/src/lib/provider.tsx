"use client";

import { store } from "./store";
import { Provider } from "react-redux";

/**
 * Renders the Providers component.
 *
 * @param children - The children components to be wrapped by the Providers component.
 * @returns The rendered Providers component.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}