import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'native-base'

import Home from '../Screens/Home'
import MyOrder from '../Screens/MyOrder'
import Account from '../Screens/Account'
import ListHotel from '../Screens/Home/ListHotel'
import FormSearchHotel from '../Screens/Home/FormSearchHotel'

const Navigator = createBottomTabNavigator(
    {
        Home: {
            screen: createStackNavigator(
                {
                    Home,
                    FormSearchHotel
                },
                {
                    headerMode: 'none',
                    initialRouteName: 'FormSearchHotel'
                }
            ),
            navigationOptions: {
                tabBarIcon: props => (
                    <Icon
                        style={iconStyles(props)}
                        type="FontAwesome"
                        name="home"
                    />
                )
            }
        },
        MyOrder: {
            screen: MyOrder,
            navigationOptions: {
                title: 'My Order',
                tabBarIcon: props => (
                    <Icon
                        style={iconStyles(props)}
                        type="FontAwesome"
                        name="wpforms"
                    />
                )
            }
        },
        Account: {
            screen: Account,
            navigationOptions: {
                tabBarIcon: props => (
                    <Icon
                        style={iconStyles(props)}
                        type="FontAwesome"
                        name="user-circle-o"
                    />
                )
            }
        }
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#0064d2',
            inactiveTintColor: '#999'
        }
    }
)

const iconStyles = ({ tintColor, focused }) => ({
    color: tintColor,
    fontSize: focused ? 24 : 20
})

export default createAppContainer(Navigator)
