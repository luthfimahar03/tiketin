import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import HeaderOrder from '../Components/Base/HeaderOrder'
import MyOrder from '../Screens/MyOrder'
import CarOrders from '../Screens/MyOrder/CarOrders'
import HotelOrders from '../Screens/MyOrder/HotelOrders'

export default createMaterialTopTabNavigator(
    {
        MyOrder: {
            screen: MyOrder
        },
        HotelOrders: {
            screen: HotelOrders
        },
        CarOrders: {
            screen: CarOrders
        }
    },
    {
        initialRouteName: 'MyOrder',
        tabBarComponent: props => <HeaderOrder {...props} />
    }
)
