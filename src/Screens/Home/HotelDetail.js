import React from 'react'
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { H2, Content, View, Text, Button, Icon, Footer } from 'native-base'
import Header from '../../Components/Base/Header'
import Stars from '../../Components/Base/Stars'
import Carousel from '../../Components/Base/Carousel'
import Color from '../../Assets/Color'
import { API_BASEURL } from 'react-native-dotenv'


export default ({ navigation }) => {
    const data = navigation.getParam('hotel')
    return (
        <>
            <Header
                title={data.name}
                leftComponent={
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" style={{ color: 'white' }} />
                    </Button>
                }
            />
            <Content>
                <Carousel
                    images={[
                        `${API_BASEURL}/${String(data.image_url || '').replace(':/', '')}`,
                        `${API_BASEURL}/${String(data.image_url || '').replace(':/', '')}`,
                        `${API_BASEURL}/${String(data.image_url || '').replace(':/', '')}`
                    ]}
                />
                <View style={styles.content}>
                    <View style={styles.brand}>
                        <H2 style={{ fontWeight: 'bold' }}>{data.name}</H2>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Stars count={data.star} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 14, marginVertical: 10 }}>
                                Hotel | {data.address}
                            </Text>
                        </View>
                    </View>
                    <View style={{padding: 20, width: '100%'}}>
                        <Text style={{fontSize: 22}}>Tentang Hotel Ini</Text>
                    </View>
                    <View style={{paddingHorizontal: 20, paddingVertical: 5, width: '100%'}}>
                        <Text style={{fontSize: 18}}>This luxe hotel in a downtown high-rise is 4.2 km from Gelora Bung Karno Stadium, 4.5 km from Tebet train station and 9 km from the Istiqial Mosque</Text>
                    </View>
                </View>
            </Content>
            <Footer style={styles.footer} >
                <Text style={{ color: Color.Base, fontWeight: 'bold' }} onPress={() => navigation.navigate('ListKamar', {
                        idHotel: data.id,
                        checkIn: navigation.getParam('checkIn'),
                        checkOut: navigation.getParam('checkOut')
                    })}>
                    PILIH KAMAR
                </Text>
            </Footer>
        </>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 20
    },
    footer: {
        backgroundColor: Color.Primary,
        alignItems: 'center'
    },
    brand: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        paddingBottom: 20,
        marginBottom: 20
    },
    btnSearch: {
        margin: 20,
        borderRadius: 30,
        backgroundColor: '#FC7400'
    }
})
