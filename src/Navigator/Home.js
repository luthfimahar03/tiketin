import { createStackNavigator } from 'react-navigation-stack'

import Home from '../Screens/Home'
import FormSearchHotel from '../Screens/Home/FormSearchHotel'
import ListHotel from '../Screens/Home/ListHotel'

import ListKamar from '../Screens/Home/ListKamar'
import ListMobil from '../Screens/Home/ListMobil'

import FormSearchMobil from '../Screens/Home/FormSearchMobil'


export default createStackNavigator(
    {
        Home,
        FormSearchHotel,
        ListHotel,

        ListKamar,
        ListMobil,

        FormSearchMobil

    },
    {
        headerMode: 'none',
        initialRouteName: 'ListMobil'
    }
)