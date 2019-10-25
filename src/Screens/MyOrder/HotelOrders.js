import React from 'react'
import { useSelector } from 'react-redux'
import { Content } from 'native-base'
import Auth from '../../Components/Base/Auth'
import HistoryCard from '../../Components/Ticket/HistoryCard'

export default ({ navigation }) => {
    const isLoggedIn = useSelector(({ auth }) => auth.loggedIn)

    if (!isLoggedIn) {
        return (
            <>
                <Content>
                    <Auth
                        navigate={navigation.navigate}
                        navigationKey="FormSearchHotel"
                    />
                </Content>
            </>
        )
    }

    return (
        <>
            <Content padder>
                <HistoryCard icon="plane" type="Fligts" />
            </Content>
        </>
    )
}
