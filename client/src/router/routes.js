import LandingPage from '@/views/LandingPage.vue';

const landingRoute = {
    path: '/home',
    name: 'Landing',
    component: LandingPage
}

import ErrorPage from '@/views/ErrorPage.vue';

const fourOhFour = {
    parth: '/:catchAll(.*)',
    name: 'NotFound',
    component: ErrorPage
}

export default [
    landingRoute,
    fourOhFour
]