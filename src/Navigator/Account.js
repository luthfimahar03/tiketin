import { createStackNavigator } from 'react-navigation-stack'

import Account from '../Screens/Account'
import Login from '../Screens/Account/Login'
import Register from '../Screens/Account/Register'

export default createStackNavigator(
    {
        Account,
        Login,
        Register
    },
    {
        headerMode: 'none',
        initialRouteName: 'Account'
    }
)
