import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, Image } from 'react-native'
import { H3, Text, Button, Content, Container, View, Thumbnail } from 'native-base'
import SplashScreen from 'react-native-splash-screen'
import Header from '../../Components/Base/Header'
import Carousel from '../../Components/Base/Carousel'
import TicketCard from '../../Components/Ticket/TicketCard'
import Color from '../../Assets/Color'

export default ({ navigation }) => {
    const auth = useSelector(({ auth }) => auth)

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <>
            <Header
                centerComponent={
                    <Image
                        source={require('../../Assets/Images/logo.png')}
                        style={{ width: '100%', height: 25 }}
                    />
                }
                rightComponent={
                    !auth.loggedIn ? (
                        <Button
                            transparent
                            onPress={() => {
                                navigation.navigate('Account')
                            }}
                        >
                            <Text>Masuk</Text>
                        </Button>
                    ) : (
                        false
                    )
                }
            />
            <Content>
                <Carousel
                    images={[
                        'https://static.tiket.photos/image/upload/v1570181383/banner/2019/10/04/1ede4be1-ed2a-4a4e-8b88-84b4845eb9e3-1570181381721-a75a418a7997d652296aa3664eb92a7f.jpg',
                        'https://static.tiket.photos/image/upload/v1571403137/banner/2019/10/18/01406fa9-b85f-4c52-b14e-5e8dc9d52680-1571403135512-77cf86feb0758d587a48e4f0db1060d5.jpg',
                        'https://static.tiket.photos/image/upload/v1571581302/banner/2019/10/20/0c570ca1-b4af-485e-9517-0dd3c44b91f6-1571581300799-b6031394e677271c67fe17d6c82fba3c.jpg'
                    ]}
                />
                <Container style={styles.contentWrapper}>
                    <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                        <H3 style={styles.welcomeText}>
                            Hey kamu, mau kemana ?
                        </H3>
                    </View>
                    <View style={styles.ticketCardWrapper}>
                        <TicketCard
                            text="Pesawat"
                            source={require('../../Assets/Images/Icons/pesawat.png')}
                        />
                        <TicketCard
                            text="Hotel"
                            source={require('../../Assets/Images/Icons/hotel.png')}
                            onPress={() => {
                                navigation.navigate('FormSearchHotel')
                            }}
                        />
                        <TicketCard
                            text="Kereta Api"
                            source={require('../../Assets/Images/Icons/kereta-api.png')}
                        />
                        <TicketCard
                            text="Sewa Mobil"
                            source={require('../../Assets/Images/Icons/mobil.png')}
                        />
                        <TicketCard
                            text="Event"
                            source={require('../../Assets/Images/Icons/event.png')}
                        />
                    </View>
                </Container>
            </Content>
        </>
    )
}

const styles = StyleSheet.create({
    contentWrapper: {
        marginTop: 10
    },
    welcomeText: {
        fontWeight: 'bold',
        color: Color.Text
    },
    ticketCardWrapper: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 10
    }
})
