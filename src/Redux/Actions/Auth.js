import Http from '../../Helpers/Http'

export const login = data => ({
    type: 'LOGIN_USER',
    payload: new Promise((resolve, reject) => {
        Http.post('/auth/login', data)
            .then(({ data: result }) => resolve(result))
            .catch(err => reject(err))
    })
})

export const logout = () => ({
    type: 'LOGOUT_USER',
    payload: null
})