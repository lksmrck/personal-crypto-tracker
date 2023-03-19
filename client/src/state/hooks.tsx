//File needed for Redux + Thunk actions typeing - based on official Redux + TS docs.
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../index";

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
