import { userReducer } from './userReducer'
import { SET_AUTHENTICATED_USER } from "../actionTypes";

describe('User state reducer in redux store', () => {

    it('Intializes with an empty user object', () => {
        const initialAction = { type: '@@INIT'}
        expect(userReducer(undefined, initialAction)).toEqual({})
    })
    it('Updates state with the new user object', () => {
        const newUserObject = { }
        const prevState = {}
        expect(userReducer())
    })
})