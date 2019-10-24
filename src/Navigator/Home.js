import { createStackNavigator } from 'react-navigation-stack'

import Home from '../Screens/Home'
import FormSearchHotel from '../Screens/Home/FormSearchHotel'
import ListHotel from '../Screens/Home/ListHotel'

export default createStackNavigator(
    {
        Home,
        FormSearchHotel,
        ListHotel
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
)
