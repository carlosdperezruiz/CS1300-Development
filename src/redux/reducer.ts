import { actions, actionIdentifier, changePagePath, changeActiveTags, changeSortBy } from './actions'
import { reduxState } from './types';

// Initial state of the app:
let SampleData_LoadedProgrammatically = (): reduxState => {
    return {
        pagePath: "/",
        activeTags: ['All'],
        sort: "title"
    }
}

// Initial state of the app:
const initialState: reduxState = SampleData_LoadedProgrammatically()

function reduxReducer(state: reduxState | undefined, action: actions): reduxState {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case actionIdentifier.changePagePath: {
            let changePageAction = action as changePagePath;

            let newState: reduxState = { ...state }; // this will copy the current state
            newState.pagePath = changePageAction.pagePath

            return newState;
        }
        case actionIdentifier.changeActiveTags: {
            let changeActiveTagsAction = action as changeActiveTags;

            let newState: reduxState = { ...state }; // this will copy the current state
            newState.activeTags = changeActiveTagsAction.activeTags

            return newState;
        }
        case actionIdentifier.changeSortBy: {
            let changeSortAction = action as changeSortBy;

            let newState: reduxState = { ...state }; // this will copy the current state
            newState.sort = changeSortAction.sort

            return newState;
        }
        default:
            return state;
    }

}

export default reduxReducer;
