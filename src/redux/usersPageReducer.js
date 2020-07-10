const SET_USERS = 'SET-USERS'
const SELECT_PAGE = 'SELECT-PAGE'
const SEARCH_USERS = 'SEARCH-USERS'
const UPDATE_SEARCH_TEXT = 'UPDATE-SEARCH-TEXT'
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'


const initialState = {
    items: [],
    currentPage: 1,
    totalCount: 0,
    pageSize: 10,
    searchString: "",
    isFetching: false
}

export const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                items: action.users,
                currentPage: action.currentPage,
                totalCount: action.totalCount,
                pageSize: state.pageSize,
                searchString: state.searchString,
                isFetching: state.isFetching
            }
        }
        case SELECT_PAGE: {
            return {
                ...state,
                currentPage: action.page,
                pageSize: state.pageSize,
                totalCount: state.totalCount,
                searchString: state.searchString,
                isFetching: state.isFetching

            }
        }
        case UPDATE_SEARCH_TEXT: {
            return {
                ...state,
                searchString: action.text
            }
        }
        case SEARCH_USERS: {
            return {
                ...state,
            }
        }
        case TOGGLE_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}

export const setUsers = (users, totalCount, currentPage) => ({type: SET_USERS, users, totalCount, currentPage})
export const selectPage = (page) => ({type: SELECT_PAGE, page})
export const updateSearchText = (text) => ({type: UPDATE_SEARCH_TEXT, text})
export const searchUsers = () => ({type: SEARCH_USERS})
export const toggleFetching = (isFetching)=>({type: TOGGLE_FETCHING, isFetching})
