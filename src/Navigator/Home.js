import { createStackNavigator } from 'react-navigation-stack'

import Home from '../Screens/Home'
import FormSearchHotel from '../Screens/Home/FormSearchHotel'
import ListHotel from '../Screens/Home/ListHotel'
import FormSearchMobil from '../Screens/Home/FormSearchMobil'

export default createStackNavigator(
    {
        Home,
        FormSearchHotel,
        ListHotel,
        FormSearchMobil
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
)
