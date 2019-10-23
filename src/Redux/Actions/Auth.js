import Http from '../../Helpers/Http'

export const login = data => ({
    type: 'LOGIN_USER',
    payload: new Promise((resolve, reject) => {
        Http.post('/users/login', data)
            .then(({ data: result }) => resolve(result))
            .catch(err => reject(err))
    })
})

export const register = data => ({
    type: 'REGISTER_USER',
    payload: new Promise((resolve, reject) => {
        Http.post('/users/registration', data)
            .then(({ data: result }) => resolve(result))
            .catch(err => reject(err))
    })
})

export const logout = () => ({
    type: 'LOGOUT_USER',
    payload: null
})
