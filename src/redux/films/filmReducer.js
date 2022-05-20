const INITIAL_STATE = {
    films: []
}

function filmReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "LOADFILMS": {
            return {
                ...state,
                films: action.payload
            }
        }
    }

    return state;
}

export default filmReducer;

export const getFilms = () => dispatch => {
    fetch("http://localhost:2345")
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: 'LOADFILMS',
                payload: data
            })
    })
}