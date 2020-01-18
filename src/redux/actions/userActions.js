import { SET_AUTHENTICATED_USER } from '../actionTypes'

export function setAuthenticatedUser(user) {
    return { user, type: SET_AUTHENTICATED_USER }
}