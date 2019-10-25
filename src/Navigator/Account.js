import { createStackNavigator } from 'react-navigation-stack'

import Account from '../Screens/Account'
import Register from '../Screens/Account/Register'
import ForgotPassword from '../Screens/Account/ForgotPassword'

export default createStackNavigator(
    {
        Account,
        Register,
        ForgotPassword
    },
    {
        headerMode: 'none',
        initialRouteName: 'Account'
    }
)
