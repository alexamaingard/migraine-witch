export const LOCAL = {
    HOMEPAGE: '/',
    SIGN_IN: '/signIn',
    SIGN_UP: '/signUp',
    PROFILE: '/profile',
    LOGS: '/logs',
    RECORD_ATTACK: '/recordAttack'
}

const URL = process.env.REACT_APP_API_URL || '/';

export const DATABASE = {
    ATTACK: `${URL}attack/`,
    USER: {
        LOGIN: `${URL}user/login`,
        REGISTER: `${URL}user/register`,
    } 
}