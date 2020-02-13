import { userReducer } from './userReducer'
import { SET_AUTHENTICATED_USER } from "../actionTypes";

describe('User state reducer in redux store', () => {

    it('Intializes with an empty user object', () => {
        const initialAction = { type: '@@INIT'}
        expect(userReducer(undefined, initialAction)).toEqual({})
    })
    it('Updates state with the new user object', () => {
        const authenticatedUserObject = {
          username: "test",
          firstname: "Jane",
          pic:
            "https://images.unsplash.com/photo-1504352244848-d22c20c5a602?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=44c1e98af80c1d2625cc66c7f42f0fc6&auto=format&fit=crop&w=500&q=60"
        };
        const authenticatedUserAction = {
            type: SET_AUTHENTICATED_USER,
            user: authenticatedUserObject
        }
        const prevState = {}
        expect(userReducer(prevState, authenticatedUserAction)).toEqual(authenticatedUserObject)
    })
})