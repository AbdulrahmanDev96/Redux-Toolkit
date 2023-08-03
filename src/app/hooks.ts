import {useSelector, TypedUseSelectorHook, useDispatch} from "react-redux";
// TypedUseSelectorHook:
// de el btsm7le any adef el types 3la el useSelector
import type {RootState, AppDispatch} from "./store";

// two custom hooks : btmkne any aswel le state el any a3mel dispatch action
// m7tag teref el useSelector an type bt3ha RootState 3l4an hya btabel mene state
// lama b3ref el use selector btabel mene state fe callback nfs el klam hana
// bb3t no3 el type bta3 el useAppSelector le al variable
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch<AppDispatch>