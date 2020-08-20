export type storeType = {
    usersReducer: {
        users: [Object]
        loading: boolean,
        error: string,
    }
}

export type routeHistory = {
    push: Function
}

export type ITEM = {
    id: number,
    location: string,
    name: string,
    type: string,
    category: string,
    scheduleOf: string,
    detail: string,
}

export type filterType = {
    additionalOptions: Object,
    type: string,
    location: string,
}