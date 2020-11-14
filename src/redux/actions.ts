export enum actionIdentifier {
    changePagePath, 
    changeActiveTags,
    changeSortBy,
}

export interface changePagePath {
    type: actionIdentifier;  
    pagePath: string;
}

export interface changeActiveTags {
    type: actionIdentifier;  
    activeTags: string[];
}

export interface changeSortBy {
    type: actionIdentifier;  
    sort: string;
}

export function changePagePathAction(pPagePath:string): changePagePath {
    return {
        type: actionIdentifier.changePagePath,
        pagePath: pPagePath
    };
};

export function changeActiveTagsAction(pActiveTags:string[]): changeActiveTags {
    return {
        type: actionIdentifier.changeActiveTags,
        activeTags: pActiveTags
    };
};

export function changeSortByAction(pSort:string): changeSortBy {
    return {
        type: actionIdentifier.changeSortBy,
        sort: pSort
    };
};

export type actions = changePagePath | changeActiveTags | changeSortBy