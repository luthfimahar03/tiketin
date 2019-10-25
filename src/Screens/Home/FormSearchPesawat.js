import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import {
    Button,
    Icon,
    Content,
    View,
    Item,
    Input,
    Label,
    Text,
    Picker,
    DatePicker
} from 'native-base'
import Header from '../../Components/Base/Header'
import Carousel from '../../Components/Base/Carousel'
import Color from '../../Assets/Color'

export default ({ navigation }) => {
    const [From, setFrom] = useState('')
    const [Arrival, setArrival] = useState('')
    const [Person, setPerson] = useState('')
    const [ClassFlight, setClassFlight] = useState('')
    const [CheckIn, setCheckIn] = useState('')

    return (
        <>
            <Header
                title="Pesawat"
                leftComponent={
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                }
            />
            <Carousel height={80} />
            <Content style={{ marginTop: -80, padding: 10 }}>
                <View style={styles.cardForm}>
                    <Text style={{ color: "grey", marginLeft: 5 }}>Dari</Text>
                    <View style={{ width: '100%', flexWrap: 'wrap', flexDirection: 'row', marginVertical: 0 }}>
                        <Icon name='plane-departure' type='FontAwesome5' style={{ margin: 5, marginTop: 20, fontSize: 25, color: '#0065D1' }}></Icon>
                        <Item picker style={{ width: '80%', alignSelf: 'flex-end', marginLeft: 5 }}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={From}
                                onValueChange={(value) => setFrom(value)}
                            >
                                <Picker.Item label="Jakarta" value="key0" />
                                <Picker.Item label="Bali" value="key1" />

                            </Picker>
                        </Item>
                    </View>
                    <Text style={{ color: "grey", marginLeft: 5, marginTop: 10 }}>Ke</Text>
                    <View style={{ width: '100%', flexWrap: 'wrap', flexDirection: 'row', marginVertical: 0 }}>
                        <Icon name='plane-arrival' type='FontAwesome5' style={{ margin: 5, marginTop: 20, fontSize: 25, color: '#0065D1' }}></Icon>
                        <Item picker style={{ width: '80%', alignSelf: 'flex-end', marginLeft: 5 }}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={Arrival}
                                onValueChange={(value) => setArrival(value)}
                            >
                                <Picker.Item label="Jakarta" value="key0" />
                                <Picker.Item label="Bali" value="key1" />

                            </Picker>
                        </Item>
                    </View>
                    <Text style={{ color: "grey", marginLeft: 5, marginTop: 10 }}>Pergi</Text>
                    <View style={{ width: '100%', flexWrap: 'wrap', flexDirection: 'row', marginVertical: 0 }}>
                        <Icon name='date-range' type='MaterialIcons' style={{ margin: 5, marginTop: 20, fontSize: 25, color: '#0065D1' }}></Icon>
                        <DatePicker
                            defaultDate={new Date()}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "black" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={(value) => {setCheckIn(value)}}
                            disabled={false}
                        />
                    </View>
                    <Text style={{ color: "grey", marginLeft: 5, marginTop: 10 }}>Penumpang</Text>
                    <View style={{ width: '100%', flexWrap: 'wrap', flexDirection: 'row', marginVertical: 0 }}>
                        <Icon name='user' type='Feather' style={{ margin: 5, marginTop: 20, fontSize: 25, color: '#0065D1' }}></Icon>
                        <Item picker style={{ width: '80%', alignSelf: 'flex-end', marginLeft: 5 }}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={Person}
                                onValueChange={(value) => setPerson(value)}
                            >
                                <Picker.Item label="1" value="key0" />
                                <Picker.Item label="2" value="key1" />

                            </Picker>
                        </Item>
                    </View>
                    <Text style={{ color: "grey", marginLeft: 5, marginTop: 10 }}>Kelas Kabin</Text>
                    <View style={{ width: '100%', flexWrap: 'wrap', flexDirection: 'row', marginVertical: 0 }}>
                        <Icon name='plane-arrival' type='FontAwesome5' style={{ margin: 5, marginTop: 20, fontSize: 25, color: '#0065D1' }}></Icon>
                        <Item picker style={{ width: '80%', alignSelf: 'flex-end', marginLeft: 5 }}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={ClassFlight}
                                onValueChange={(value) => setClassFlight(value)}
                            >
                                <Picker.Item label="Ekonomi" value="key0" />
                                <Picker.Item label="Bisnis" value="key1" />

                            </Picker>
                        </Item>
                    </View>
                    <Button
                        block
                        style={styles.btnSearch}
                        onPress={() => navigation.navigate('ListPesawat')}
                    >
                        <Text style={{ fontWeight: 'bold', color: Color.Base }}>
                            Cari Penerbangan
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
    },
    subTop: {
        color: "grey"
    },
    icon: {
        color: "blue",
        marginTop: 30
    }
})
