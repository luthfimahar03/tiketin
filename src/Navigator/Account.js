import { createStackNavigator } from 'react-navigation-stack'

import Account from '../Screens/Account'
import Register from '../Screens/Account/Register'

export default createStackNavigator(
    {
        Account,
        Register
    },
    {
        headerMode: 'none',
        initialRouteName: 'Account'
    }
)
