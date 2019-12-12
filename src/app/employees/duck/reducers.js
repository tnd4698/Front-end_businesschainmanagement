import types from "./types";

const INITIAL_STATE = {
    listRole: [],
    listEmployee: []
}

const employeeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GETLISTROLE: {
            return {
                ...state,
                listRole: action.value
            }
        }

        case types.GETLISTEMPLOYEE: {
            return {
                ...state,
                listEmployee: action.value
            }
        }
        default: return state;
    }
}


export default employeeReducer;