import React, {useEffect, useState} from 'react'
import { Text, Button, Icon, View, Content, Card, CardItem, Thumbnail } from 'native-base'
import { Dimensions, StyleSheet } from 'react-native'
import Header from '../../Components/Base/Header'
import rk from '../../Assets/Images/rk.jpg'
import {API_BASEURL} from 'react-native-dotenv'
import http from  '../../Helpers/Http'

export default ({ navigation }) => {
    const screenHeight = Math.round(Dimensions.get('window').height)
    const screenWidth = Math.round(Dimensions.get('window').width)
    const [Cars, setCars] = useState([])

    const getMobil = (id) => {
        http.get(`${API_BASEURL}/car-rentals?id_city=${id}`)
        .then(res => {
            setCars(res.data.data)
        })
    }

    useEffect(() => {
        const idCity = navigation.getParam('idCity')
        getMobil(idCity)
    }, [])

    return (
        <>
            <Content>
                <View style={styles.wrapper}>
                    <Header
                        detail
                        height={60}
                        leftComponent={
                            <Button
                                transparent
                                onPress={() => navigation.goBack()}
                            >
                                <Icon
                                    name="arrow-back"
                                    style={{ color: 'white' }}
                                />
                            </Button>
                        }
                        centerComponent={
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ color: 'white' }}>
                                    Aceh
                                </Text>
                                <View style={{flexDirection: "row"}} >
                                    <Text style={styles.headerSub}>25 Oktober 2019</Text>
                                    <Text style={styles.headerSub}>-</Text>
                                    <Text style={styles.headerSub}>25 Oktober 2019</Text>
                                </View>
                            </View>
                        }
                    />
                    <View style={styles.cardContainer}>
                        <View style={{ flexDirection: 'row', padding: 15 }}>
                            <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                <Text style={{ color: '#626262' }}>
                                    8 mobil Sewa
                                </Text>
                            </View>
                        </View>
                        <View style={styles.listContainer}>
                            {
                                Cars.map(item => {
                                    return(
                                        <Card style={styles.cardList}>
                                            <CardItem header button onPress={() => alert('This is Card Header')}>
                                                <View style={{ flexDirection: "row" }}>
                                                    <View
                                                        style={{ flex: 0.4 }}
                                                        >
                                                        <Thumbnail
                                                            square
                                                            source={{uri: item.image}}
                                                            style={styles.image}
                                                            />
                                                    </View>
                                                    <View style={{ flex: 1, marginLeft: 10 }}>
                                                        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                                                        <View style={{ flexDirection: "row" }}>
                                                            <Card style={{ width: 50, borderRadius: 5 }}>
                                                                <View style={{ flexDirection: "row", padding: 5 }}>
                                                                    <View >
                                                                        <Icon
                                                                            name="user"
                                                                            type="FontAwesome"
                                                                            style={{ fontSize: 15, marginTop: 3 }}>
                                                                        </Icon>
                                                                    </View>
                                                                    <View style={{ marginLeft: 15 }}>
                                                                        <Text>
                                                                            6
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </Card>
                                                            <Card style={{ width: 50, marginLeft: 10, borderRadius: 5 }}>
                                                                <View style={{ flexDirection: "row", padding: 5 }}>
                                                                    <View >
                                                                        <Icon
                                                                            name="shopping-bag"
                                                                            type="Foundation"
                                                                            style={{ fontSize: 15, marginTop: 2 }}>
                                                                        </Icon>
                                                                    </View>
                                                                    <View style={{ marginLeft: 15 }}>
                                                                        <Text>
                                                                            6
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </Card>
                                                        </View>
                                                        <View style={{ flexDirection: "row" }}>
                                                            <Icon
                                                                name="check-circle"
                                                                type="MaterialCommunityIcons"
                                                                style={{ color: "orange" }}
                                                                >
                                                            </Icon>
                                                            <Text style={{ marginTop: 5, color: "#626262" }}> Termasuk Sopir</Text>
                                                        </View>
                                                        <View style={{ flexDirection: "row" }}>
                                                            <Icon
                                                                name="check-circle"
                                                                type="MaterialCommunityIcons"
                                                                style={{ color: "orange" }}
                                                                >
                                                            </Icon>
                                                            <Text style={{ marginTop: 5, color: "#626262" }}> Gratis Air Mineral</Text>
                                                        </View>
                                                        <Text style={{ fontWeight: "bold", color: "orange", marginLeft: 2, marginTop: 5 }}>IDR {item.price}/12 Jam</Text>
                                                    </View>
                                                </View>
                                            </CardItem>
                                        </Card>
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>
            </Content>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 125,
        borderRadius: 5,
        marginTop: 10
    },
    cardList: {
        width: '100%',
        elevation: 0,
        borderWidth: 0,
        shadowOpacity: 0,
        marginBottom: -5
    },
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        backgroundColor: '#F7F7FA'
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        color: '#374259',
        backgroundColor: '#0065D1'
    },
    headerSub: {
        color: 'white',
        fontSize: 11,
        marginHorizontal: 0,
        marginTop: 5

    },
    cardContainer: {
        backgroundColor: 'white',
        flexDirection: 'column'
    }
})
