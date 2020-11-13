export enum actionIdentifier {
    changePagePath, 
    changeActiveTags
}

export interface changePagePath {
    type: actionIdentifier;  
    pagePath: string;
}

export interface changeActiveTags {
    type: actionIdentifier;  
    activeTags: string[];
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

export type actions = changePagePath | changeActiveTags