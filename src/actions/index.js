import axios from 'axios'

export const FETCHING_START = 'FETCHING_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'
export const SET_ERROR = 'SET_ERROR'
export const ADD_SMURF = 'ADD_SMURF'

export const fetchSmurfs = () => (dispatch) => {
    dispatch({
        type: FETCHING_START
    })
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            console.log('successfully got smurf')
            dispatch({
                type: FETCH_SUCCESS,
                payload: {
                    
                }
            })
        })
        .catch(err => {
            console.error('error caught: ', err.message)
            dispatch({
                type: FETCH_FAIL,
                payload: err.message
            })
        })
}

export const addSmurf = ( newSmurf ) => {
    return (dispatch) => {
        dispatch({
            type: ADD_SMURF,
            payload: newSmurf
        })
    }
}

export const setError = ( error ) => {
    return(dispatch) => {
        dispatch({
            type: SET_ERROR,
            payload: error.message
        })
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state. 