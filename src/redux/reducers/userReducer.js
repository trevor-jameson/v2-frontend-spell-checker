import { SET_AUTHENTICATED_USER } from '../actionTypes'

export const userReducer = (prevState = {}, action) => {
    switch (action.type){
        case SET_AUTHENTICATED_USER:
            return action.user
        default:
            return prevState 

    }
}