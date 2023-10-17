export default defineNuxtRouteMiddleware((to, from) => {
    const cookie = useCookie<any>('auth_cookie')

    const isAuthenticated = cookie.value.isLoggedIn

    if (to.path === '/auth/sign-out') {
        if (!isAuthenticated) {
            return navigateTo('/auth/sign-in')
        }
    } else if (to.path === '/auth/sign-in' && isAuthenticated) {
        return navigateTo(from.path === '/auth/sign-in' ? '/' : from)
    } else if (!isAuthenticated && to.path !== '/auth/sign-in') {
        return navigateTo('/auth/sign-in')
    }
})
