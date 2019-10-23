import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'native-base'

import Home from '../Screens/Home'
import MyOrder from '../Screens/MyOrder'
import Account from '../Screens/Account'
import Login from '../Screens/Account/Login'
import Register from '../Screens/Account/Register'
import ListHotel from '../Screens/Home/ListHotel'
import FormSearchHotel from '../Screens/Home/FormSearchHotel'
import HotelDetail from '../Screens/Home/HotelDetail'

const Navigator = createBottomTabNavigator(
    {
        Home: {
            screen: createStackNavigator(
                {
                    Home,
                    FormSearchHotel,
                    ListHotel,
                    HotelDetail
                },
                {
                    headerMode: 'none',
                    initialRouteName: 'Home'
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
            screen: createStackNavigator(
                {
                    Account,
                    Login,
                    Register
                },
                {
                    headerMode: 'none',
                    initialRouteName: 'Login'
                }
            ),
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
