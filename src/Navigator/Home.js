import { createStackNavigator } from 'react-navigation-stack'

import Home from '../Screens/Home'
import FormSearchHotel from '../Screens/Home/FormSearchHotel'
import ListHotel from '../Screens/Home/ListHotel'

import ListKamar from '../Screens/Home/ListKamar'
import ListMobil from '../Screens/Home/ListMobil'

import FormSearchMobil from '../Screens/Home/FormSearchMobil'
import ListOrderHotel from '../Screens/Home/ListOrderHotel'

export default createStackNavigator(
    {
        Home,
        FormSearchHotel,
        ListHotel,
        ListKamar,
        ListMobil,


        FormSearchMobil,
        ListOrderHotel

    },
    {
        headerMode: 'none',
        initialRouteName: 'ListOrderHotel',

        FormSearchMobil
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'

    }
)
