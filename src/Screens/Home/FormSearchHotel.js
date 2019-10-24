import React from 'react'
import { StyleSheet } from 'react-native'
import {
    Button,
    Icon,
    Content,
    View,
    Item,
    Input,
    Label,
    Text
} from 'native-base'
import Header from '../../Components/Base/Header'
import Carousel from '../../Components/Base/Carousel'
import Color from '../../Assets/Color'

export default ({ navigation }) => {
    return (
        <>
            <Header
                title="Hotel"
                leftComponent={
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                }
            />
            <Carousel height={80} />
            <Content style={{ marginTop: -80, padding: 10 }}>
                <View style={styles.cardForm}>
                    <Item floatingLabel>
                        <Label>Nginep ke mana?</Label>
                        <Input />
                    </Item>
                    <View style={styles.checkInContainer}>
                        <View style={{ flex: 2 }}>
                            <Item floatingLabel>
                                <Label>Check-in</Label>
                                <Input />
                            </Item>
                        </View>
                        <View style={styles.countCheckInDay}>
                            <Text style={{ fontSize: 14 }}>3</Text>
                            <Text style={{ fontSize: 14 }}>Malam</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Item floatingLabel>
                                <Label>Check-out</Label>
                                <Input />
                            </Item>
                        </View>
                    </View>
                    <Item floatingLabel style={{ marginTop: 10 }}>
                        <Label>Kamar & Tamu</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={{ marginTop: 10 }}>
                        <Label>Filter</Label>
                        <Input />
                    </Item>
                    <Button
                        block
                        style={styles.btnSearch}
                        onPress={() => navigation.navigate('ListHotel')}
                    >
                        <Text style={{ fontWeight: 'bold', color: Color.Base }}>
                            Cari Hotel
                        </Text>
                    </Button>
                </View>
            </Content>
        </>
    )
}

const styles = StyleSheet.create({
    cardForm: {
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 15,
        height: 500
    },
    checkInContainer: {
        flexDirection: 'row',
        marginTop: 10,
        width: '100%'
    },
    btnSearch: {
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: Color.Primary
    },
    countCheckInDay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
