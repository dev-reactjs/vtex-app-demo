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