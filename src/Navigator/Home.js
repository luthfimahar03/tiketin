import { createStackNavigator } from 'react-navigation-stack'

import Home from '../Screens/Home'
import FormSearchHotel from '../Screens/Home/FormSearchHotel'
import ListHotel from '../Screens/Home/ListHotel'

import ListKamar from '../Screens/Home/ListKamar'
import ListMobil from '../Screens/Home/ListMobil'
import ListOrderHotel from '../Screens/Home/ListOrderHotel'

import FormSearchMobil from '../Screens/Home/FormSearchMobil'

import ListOrderHotel from '../Screens/Home/ListOrderHotel'

import HotelDetail from '../Screens/Home/HotelDetail'
import RoomDetail from '../Screens/Home/RoomDetail'


export default createStackNavigator(
    {
        Home,
        FormSearchHotel,
        ListHotel,
        FormSearchMobil,
        HotelDetail,
        RoomDetail,
        ListKamar,
        ListMobil,
        ListOrderHotel

    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'

    }
)
