import React from 'react'
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { H2, Content, View, Text, Button, Icon, Footer } from 'native-base'
import Header from '../../Components/Base/Header'
import Carousel from '../../Components/Base/Carousel'
import Color from '../../Assets/Color'

export default ({ navigation }) => {
    return (
        <>
            <Header
                title={navigation.getParam('title')}
                leftComponent={
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" style={{ color: 'white' }} />
                    </Button>
                }
            />
            <Content>
                <Carousel
                    images={[
                        'https://static.tiket.photos/image/upload/v1545896251/hotel/images-web/2018/12/27/35e02f6c-0ade-4fb3-a31c-44ed26d01c854edecac4806e0f9fc5863ee776837418.jpg',
                        'https://static.tiket.photos/image/upload/v1545896251/hotel/images-web/2018/12/27/35e02f6c-0ade-4fb3-a31c-44ed26d01c854edecac4806e0f9fc5863ee776837418.jpg',
                        'https://static.tiket.photos/image/upload/v1545896251/hotel/images-web/2018/12/27/35e02f6c-0ade-4fb3-a31c-44ed26d01c854edecac4806e0f9fc5863ee776837418.jpg'
                    ]}
                />
                <View style={styles.content}>
                    <View style={styles.brand}>
                        <H2 style={{ fontWeight: 'bold' }}>{navigation.getParam('title')}</H2>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Icon
                                type="AntDesign"
                                name="star"
                                style={{ fontSize: 20, color: '#FFDF00' }}
                            />
                            <Icon
                                type="AntDesign"
                                name="star"
                                style={{ fontSize: 20, color: '#FFDF00' }}
                            />
                            <Icon
                                type="AntDesign"
                                name="star"
                                style={{ fontSize: 20, color: '#FFDF00' }}
                            />
                            <Text style={{ marginHorizontal: 25 }}>
                                Hotel | Alamat
                            </Text>
                        </View>
                    </View>
                    <View style={{padding: 20, width: '100%'}}>
                        <Text style={{fontSize: 22}}>Fasilitas</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{padding: 10}} >
                        <TouchableOpacity
                            style={{
                                borderWidth:1,
                                borderColor:'rgba(0,0,0,0.2)',
                                alignItems:'center',
                                justifyContent:'center',
                                width:100,
                                margin:10,
                                height:100,
                                backgroundColor:'#fff',
                                borderRadius:50,
                            }}
                            >
                            <Icon name={"wifi"} type="FontAwesome" size={30} color="#01a699" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                borderWidth:1,
                                borderColor:'rgba(0,0,0,0.2)',
                                alignItems:'center',
                                justifyContent:'center',
                                width:100,
                                margin: 10,
                                height:100,
                                backgroundColor:'#fff',
                                borderRadius:50,
                            }}
                            >
                            <Icon name={"pool"} type="FontAwesome" size={30} color="#01a699" />
                        </TouchableOpacity>
                    </ScrollView>
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
                        idHotel: navigation.getParam('id'),
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
    fill: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    btnSearch: {
        margin: 20,
        borderRadius: 30,
        backgroundColor: '#FC7400'
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#03A9F4',
        overflow: 'hidden',
        // height: HEADER_MAX_HEIGHT,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        // height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    bar: {
        backgroundColor: 'transparent',
        marginTop: Platform.OS === 'ios' ? 28 : 38,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    title: {
        color: 'white',
        fontSize: 18,
    },
    scrollViewContent: {
        // iOS uses content inset, which acts like padding.
        // paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
        padding: 10,
        marginTop: 20
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
