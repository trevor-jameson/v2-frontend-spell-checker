import { SET_AUTHENTICATED_USER, FETCHED_SPELLS, SEARCH_SPELLS } from './actionTypes'

export function setAuthenticatedUser(user) {
    return { user, type: SET_AUTHENTICATED_USER }
}

export function fetchedSpells(spells) {
    return { spells, type: FETCHED_SPELLS }
}

export function searchSpells(spellQuery) {
    return { spellQuery, type: SEARCH_SPELLS}
}