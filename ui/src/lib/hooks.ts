import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

/**
 * Custom hook that provides a typed version of the useDispatch function from react-redux.
 * @returns The dispatch function with the correct type.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Custom hook that provides a typed version of the useSelector function from react-redux.
 * @template T - The type of the state being selected.
 * @param selector - A function that selects the desired state from the Redux store.
 * @returns The selected state.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
