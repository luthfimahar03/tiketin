import React from 'react'
import { useSelector } from 'react-redux'
import { Text, Icon, Button, Content } from 'native-base'
import Auth from '../../Components/Base/Auth'

export default ({ navigation }) => {
    const isLoggedIn = useSelector(({ auth }) => auth.loggedIn)

    if (!isLoggedIn) {
        return (
            <>
                <Content>
                    <Auth navigate={navigation.navigate} navigationKey="Home" />
                </Content>
            </>
        )
    }

    return (
        <>
            <Text>Hello World</Text>
        </>
    )
}
