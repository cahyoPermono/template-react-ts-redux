import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

/**
 * custom hooks for give type to useSelector in react-redux
 * change useSelector for get state from redux store with this hooks
 * @author Cahyo Adi Permono
 */
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
