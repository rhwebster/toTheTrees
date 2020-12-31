import { fetch } from './csrf';

const GET_ALL = "reservations/get_all";

const getAll = (payload) => ({
    type: GET_ALL,
    payload
});

export const getReservations = (id,type) => async dispatch => {
    let url = `/api/listings/${id}/`
    const res = await fetch(url);
    if (res.ok) {
        dispatch(getAll(res.data));
    };
}

const startingState = [];

const ReservationsReducer = (state = startingState, action) => {
    switch(action.type) {
        case GET_ALL: {
            const newState = []
            action.payload.forEach(treehoouse => {
                newState.push({...exp});
            });
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default ReservationsReducer;