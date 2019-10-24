import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import MyOrder from '../Screens/MyOrder'
import CarOrders from '../Screens/MyOrder/CarOrders'
import HotelOrders from '../Screens/MyOrder/HotelOrders'

export default createMaterialTopTabNavigator(
    {
        MyOrder: {
            screen: MyOrder
        },
        CarOrders: {
            screen: CarOrders
        },
        HotelOrders: {
            screen: HotelOrders
        }
    },
    {
        initialRouteName: 'MyOrder'
    }
)
