import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from '../Screens/Home'
import Account from '../Screens/Account'

const RootNavigation = {
    Home: {
        screen: Home
    },
    Account: {
        screen: Account
    }
}

const Navigator = createBottomTabNavigator(RootNavigation, {
    initialRouteName: 'Home'
})

export default createAppContainer(Navigator)
