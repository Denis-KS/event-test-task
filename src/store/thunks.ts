import { fetchActivities, fetchCoordinators } from "../api/fetches";
import { Dispatch, setActivitiesListAction, setCoordinatorsListAction } from "./actions";


export const getCoordinatorsThunk = () => (dispatch: Dispatch) => {
    fetchCoordinators().then((result) => dispatch(setCoordinatorsListAction(result)));
}

export const getActivitiesThunk = () => (dispatch: Dispatch) => {
    fetchActivities().then((result) => dispatch(setActivitiesListAction(result)));
}
