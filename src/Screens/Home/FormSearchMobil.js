import React, {useState, useEffect} from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import {
    Button,
    Icon,
    DatePicker,
    Content,
    View,
    Item,
    Input,
    Label,
    Picker,
    Card,
    CardItem,
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
    const [Durasi, setDurasi] = useState('')

    const getCities = () => {
        http.get(`${API_BASEURL}/city`)
        .then(res => {
            setCities(res.data.data)
        })
    }

    useEffect(() => {
      getCities()
    }, [])

    return (
        <>
            <Header
                title="Car"
                leftComponent={
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                }
            />
            <Content style={{padding: 10 }}>
                <View style={styles.cardForm}>
                    <View style={{width: '100%', flexWrap: 'wrap', flexDirection: 'row', marginVertical: 10}}>
<<<<<<< HEAD
                        <Icon name='enviromento' type='AntDesign' style={{margin: 10, fontSize: 40, color: '#4a4a4a'}}></Icon>
                        {/*<Item floatingLabel style={{width: '80%', alignSelf: 'flex-end', marginLeft: 5}}>
=======
                        <Icon name='enviromento' type='AntDesign' style={{margin: 5, fontSize: 30, color: '#4a4a4a'}}></Icon>
                        <Item floatingLabel style={{width: '80%', alignSelf: 'flex-end', marginLeft: 5}}>
>>>>>>> development
                            <Label>Lokasi Penjemputan</Label>
                            <Input />
                        </Item>*/}
                        <Item picker style={{width: '80%', alignSelf: 'flex-end', marginLeft: 5}}>
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
                    </View>
                    <View style={{width: '100%', flexWrap: 'wrap', flexDirection: 'row', marginVertical: 10}}>
<<<<<<< HEAD
                        <Icon name='calendar' type='AntDesign' style={{margin: 10, fontSize: 40, color: '#4a4a4a'}}></Icon>
                        <Item style={{width: '80%', alignSelf: 'flex-end', marginLeft: 5}}>
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
                                onDateChange={(value) => {setDurasi(value)}}
                                disabled={false}
                                />
=======
                        <Icon name='calendar' type='AntDesign' style={{margin: 5, fontSize: 30, color: '#4a4a4a'}}></Icon>
                        <Item floatingLabel style={{width: '80%', alignSelf: 'flex-end', marginLeft: 5}}>
                            <Label>Tanggal Penjemputan</Label>
                            <Input />
>>>>>>> development
                        </Item>
                    </View>
                    <View style={{width: '100%', flexWrap: 'wrap', flexDirection: 'row', marginVertical: 10}}>
                        <Icon name='clockcircleo' type='AntDesign' style={{margin: 5, fontSize: 30, color: '#4a4a4a'}}></Icon>
                        <Item floatingLabel style={{width: '80%', alignSelf: 'flex-end', marginLeft: 5}}>
                            <Label>Durasi</Label>
                            <Input />
                        </Item>
                    </View>
                    <View style={{width: '100%', flexWrap: 'wrap', flexDirection: 'row', marginVertical: 10}}>
                        <Icon name='car' type='AntDesign' style={{margin: 5, fontSize: 30, color: '#4a4a4a'}}></Icon>
                        <Item floatingLabel style={{width: '80%', alignSelf: 'flex-end', marginLeft: 5}}>
                            <Label>Jumlah Mobil</Label>
                            <Input />
                        </Item>
                    </View>
                    <Button
                        block
                        style={styles.btnSearch}
                        onPress={() => navigation.navigate('ListMobil', {
                            idCity : Lokasi
                        })}
                    >
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>
                            Cari Mobil
                        </Text>
                    </Button>
                    <View style={{width: '100%', marginTop: 30, marginBottom: 15}}>
                        <View
                            style={{
                                alignSelf: 'stretch',
                                width: '100%',
                                borderBottomColor: '#9f9f9f',
                                borderBottomWidth:
                                    StyleSheet.hairlineWidth
                            }}
                        />
                    </View>
                    <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
                        <View style={{width: '50%'}}>
                            <Text style={{fontSize: 18, color: '#4a4a4a'}}>
                                Pencarian Terakhir
                            </Text>
                        </View>
                        {/*{'      '}*/}
                        <View style={{width: '50%'}}>
                            <Text style={{fontSize: 18, alignSelf: 'flex-end', color: '#FC7400'}}>
                                Hapus
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{padding: 30, marginTop: -40}}>
                        <Card>
                            <CardItem>
                                <View style={{flex: 1, flexWrap: 'wrap', width: 200}}>
                                    <View style={{width: '100%', marginVertical: 10}}>
                                        <Text>
                                            Surabaya
                                        </Text>
                                    </View>
                                    <View style={{width: '100%', marginTop: 20}}>
                                        <Text>
                                            25 Okt 19
                                        </Text>
                                    </View>
                                    <View style={{width: '100%'}}>
                                        <Text>
                                            1 Hari, 1 Mobil
                                        </Text>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <View style={{flex: 1, flexWrap: 'wrap', width: 200}}>
                                    <View style={{width: '100%', marginVertical: 10}}>
                                        <Text>
                                            Surabaya
                                        </Text>
                                    </View>
                                    <View style={{width: '100%', marginTop: 20}}>
                                        <Text>
                                            25 Okt 19
                                        </Text>
                                    </View>
                                    <View style={{width: '100%'}}>
                                        <Text>
                                            1 Hari, 1 Mobil
                                        </Text>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <View style={{flex: 1, flexWrap: 'wrap', width: 200}}>
                                    <View style={{width: '100%', marginVertical: 10}}>
                                        <Text>
                                            Surabaya
                                        </Text>
                                    </View>
                                    <View style={{width: '100%', marginTop: 20}}>
                                        <Text>
                                            25 Okt 19
                                        </Text>
                                    </View>
                                    <View style={{width: '100%'}}>
                                        <Text>
                                            1 Hari, 1 Mobil
                                        </Text>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>
                    </ScrollView>
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
        backgroundColor: '#FC7400'
    },
    countCheckInDay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
