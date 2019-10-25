import React, {useState, useEffect} from 'react'
import { StyleSheet } from 'react-native'
import {
    Button,
    Icon,
    Picker,
    DatePicker,
    Content,
    View,
    Item,
    Input,
    Label,
    Text
} from 'native-base'
import {API_BASEURL} from 'react-native-dotenv'
import http from  '../../Helpers/Http'
import Header from '../../Components/Base/Header'
import Carousel from '../../Components/Base/Carousel'
import Color from '../../Assets/Color'

export default ({ navigation }) => {
    const [Cities, setCities] = useState([])
    const [Lokasi, setLokasi] = useState('')
    const [CheckIn, setCheckIn] = useState('')
    const [CheckOut, setCheckOut] = useState('')
    const [Tamu, setTamu] = useState('')
    const [Filter, setFilter] = useState('')

    // const searchHotel = () => {
    //     h
    // }

    const getCities = () => {
        http.get(`${API_BASEURL}/city`)
        .then(res => {
            setCities(res.data.data)
        })
    }

    useEffect(() => {
      getCities()
    }, [])

    console.log(Lokasi)

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
                    <Item picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={Lokasi}
                            onValueChange={(value) => setLokasi(value)}
                            >
                            {
                                Cities.map(item => {
                                    return(
                                        <Picker.Item label={item.name} value={item.id} />
                                    )
                                })
                            }
                        </Picker>
                    </Item>
                    <View style={styles.checkInContainer}>
                        <View style={{ flex: 2 }}>
                            <DatePicker
                                defaultDate={new Date()}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={(value) => {setCheckIn(value)}}
                                disabled={false}
                                />
                        </View>
                        <View style={styles.countCheckInDay}>
                            <Text style={{ fontSize: 14 }}>3</Text>
                            <Text style={{ fontSize: 14 }}>Malam</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <DatePicker
                                defaultDate={new Date()}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={(value) => {setCheckOut(value)}}
                                disabled={false}
                                />
                        </View>
                    </View>
                    <Item floatingLabel style={{ marginTop: 10 }}>
                        <Label>Tamu</Label>
                        <Input onChangeText={(text) => setTamu(text)} value={Tamu} />
                    </Item>
                    <Item floatingLabel style={{ marginTop: 10 }}>
                        <Label>Filter</Label>
                        <Input onChangeText={(text) => setFilter(text)} value={Filter} />
                    </Item>
                    <Button
                        block
                        style={styles.btnSearch}
                        onPress={() => navigation.navigate('ListHotel', {
                            idCity: Lokasi,
                            checkIn: CheckIn,
                            checkOut: CheckOut,
                            Tamu: Tamu
                        })}
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
