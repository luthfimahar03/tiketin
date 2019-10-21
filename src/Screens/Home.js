import React from 'react'
import { StyleSheet } from 'react-native'
import { H3, Text, Button, Content, Container, View } from 'native-base'
import Header from '../Components/Base/Header'
import Carousel from '../Components/Base/Carousel'
import TicketCard from '../Components/Ticket/TicketCard'
import Color from '../Assets/Color'

export default ({ navigation }) => {
    return (
        <>
            <Header
                title="Tiketin"
                rightComponent={
                    <Button transparent>
                        <Text>Masuk</Text>
                    </Button>
                }
            />
            <Content>
                <Carousel />
                <Container style={styles.contentWrapper}>
                    <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                        <H3 style={styles.welcomeText}>
                            Hey kamu, mau kemana ?
                        </H3>
                    </View>
                    <View style={styles.ticketCardWrapper}>
                        <TicketCard
                            text="Pesawat"
                            source={require('../Assets/Images/Icons/pesawat.png')}
                        />
                        <TicketCard
                            text="Hotel"
                            source={require('../Assets/Images/Icons/hotel.png')}
                        />
                        <TicketCard
                            text="Kereta Api"
                            source={require('../Assets/Images/Icons/kereta-api.png')}
                        />
                        <TicketCard
                            text="Sewa Mobil"
                            source={require('../Assets/Images/Icons/mobil.png')}
                        />
                        <TicketCard
                            text="Event"
                            source={require('../Assets/Images/Icons/event.png')}
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
