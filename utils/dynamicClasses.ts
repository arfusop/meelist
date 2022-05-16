export const isActiveNavIcon = (route: string, page: string) => {
    if (route.includes(page)) {
        return 'active'
    }

    return 'inactive'
}
