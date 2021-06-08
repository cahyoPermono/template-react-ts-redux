import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

/**
 * custom hooks for bind all action-creators that listed in folder action-creators
 * @returns all action creator ready to use
 * @author Cahyo Adi Permono
 */
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
