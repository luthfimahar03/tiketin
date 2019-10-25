import { createStackNavigator } from 'react-navigation-stack'

import Home from '../Screens/Home'
import FormSearchHotel from '../Screens/Home/FormSearchHotel'
import ListHotel from '../Screens/Home/ListHotel'
import FormSearchMobil from '../Screens/Home/FormSearchMobil'
import HotelDetail from '../Screens/Home/HotelDetail'
import RoomDetail from '../Screens/Home/RoomDetail'

export default createStackNavigator(
    {
        Home,
        FormSearchHotel,
        ListHotel,
        FormSearchMobil,
        HotelDetail,
        RoomDetail
    },
    {
        headerMode: 'none',
        initialRouteName: 'HotelDetail'
    }
)
