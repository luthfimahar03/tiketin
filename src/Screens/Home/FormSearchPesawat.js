import React from 'react'
import { Text, Button, Icon, View, Content, Card, CardItem, Thumbnail, Right, Row } from 'native-base'
import { Dimensions, StyleSheet } from 'react-native'
import Header from '../../Components/Base/Header'
import citilink from '../../Assets/Images/citilink.png'


export default ({ navigation }) => {
    const screenHeight = Math.round(Dimensions.get('window').height)
    const screenWidth = Math.round(Dimensions.get('window').width)

    return (
        <>
            <Content>
                <View style={styles.wrapper}>
                    <Header
                        detail
                        height={70}
                        leftComponent={
                            <Button
                                transparent
                                onPress={() => navigation.goBack()
                                }
                                style={{ marginTop: -10 }}
                            >
                                <Icon
                                    name="arrow-back"
                                    style={{ color: 'white' }}
                                />
                            </Button>
                        }

                        centerComponent={
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: 'white', marginTop: 1, marginBottom: 4 }}>Jakarta </Text>
                                    <Icon
                                        name="arrowright"
                                        type="AntDesign"
                                        style={{ color: "white", fontSize: 20, marginTop: 2 }}
                                    />
                                    <Text style={{ color: 'white', marginTop: 1, marginBottom: 4 }}> Denpasar</Text>
                                </View>

                                <View style={{ flexDirection: 'row', padding: 5 ,marginTop: -2 , marginLeft: -10 }}>
                                    <Text style={styles.headerSub}>JKTC</Text>
                                    <Icon
                                        name="arrowright"
                                        type="AntDesign"
                                        style={styles.headerSub}
                                    />
                                    <Text style={styles.headerSub}>DPS</Text>
                                    <Text style={styles.headerSub}>|</Text>
                                    <Text style={styles.headerSub}>26 Okt</Text>
                                    <Text style={styles.headerSub}>|</Text>
                                    <Icon
                                        type="FontAwesome5"
                                        name="user"
                                        style={styles.headerSub}
                                    />
                                    <Text style={styles.headerSub}>2</Text>
                                </View>
                            </View>
                        }
                    />
                    <View style={styles.cardContainer}>
                        <View style={styles.listContainer}>
                            <Card style={styles.cardList}>
                                <CardItem header button onPress={() => navigation.navigate('RoomDetail')} >
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Thumbnail
                                                square
                                                source={citilink}
                                                style={styles.image}
                                            />
                                            <Text style={{ color: "grey", marginTop: 7, marginLeft: 5, fontSize: 15 }}>Citilink Indonesia</Text>
                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                            <View style={{ flex: 0.1 }}>
                                                <Icon
                                                name="long-arrow-down"
                                                type="FontAwesome"
                                                style={{fontSize: 45, marginTop: 30, color: "grey"}} 
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ fontWeight: "bold", marginTop: 10 }}>06.00 CGK</Text>
                                                <Text style={{ color: "grey", marginTop: 10 }}>1j 50m (langsung)</Text>
                                                <View style={{ flex: 1, flexDirection: "row", marginTop: 10,  }}>
                                                    <Text style={{ fontWeight: "bold" }}>08.50 DPS</Text>
                                                    <View style={{ flexDirection: "row", marginLeft: 60, marginTop: -5  }}>
                                                        <Text style={{ fontSize: 20, color: "#0064D3", fontWeight: "bold" }}>IDR 982.800</Text>
                                                        <Text style={{ color: "grey", marginTop: 3 }}>/pax</Text>
                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>
                            <Card style={styles.cardList}>
                                <CardItem header button onPress={() => navigation.navigate('RoomDetail')} >
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Thumbnail
                                                square
                                                source={citilink}
                                                style={styles.image}
                                            />
                                            <Text style={{ color: "grey", marginTop: 7, marginLeft: 5, fontSize: 15 }}>Citilink Indonesia</Text>
                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                            <View style={{ flex: 0.1 }}>
                                                <Icon
                                                name="long-arrow-down"
                                                type="FontAwesome"
                                                style={{fontSize: 45, marginTop: 30, color: "grey"}} 
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ fontWeight: "bold", marginTop: 10 }}>07.00 CGK</Text>
                                                <Text style={{ color: "grey", marginTop: 10 }}>1j 50m (langsung)</Text>
                                                <View style={{ flex: 1, flexDirection: "row", marginTop: 10,  }}>
                                                    <Text style={{ fontWeight: "bold" }}>09.50 DPS</Text>
                                                    <View style={{ flexDirection: "row", marginLeft: 60, marginTop: -5  }}>
                                                        <Text style={{ fontSize: 20, color: "#0064D3", fontWeight: "bold" }}>IDR 800.800</Text>
                                                        <Text style={{ color: "grey", marginTop: 3 }}>/pax</Text>
                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>
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
        height: '100%',
        height: 15,
        width: 40,
        marginTop: 10
    },
    cardList: {
        width: '100%',
        elevation: 0,
        borderWidth: 0,
        shadowOpacity: 0
    },
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        marginTop: -10,
        backgroundColor: '#F7F7FA',

    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        color: '#374259',
        backgroundColor: '#0065D1',

    },
    headerSub: {
        color: 'white',
        fontSize: 11,
        marginHorizontal: 5
    },
    headerSubText: {
        color: '#0064D3',
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 11
    },
    cardContainer: {
        backgroundColor: '#F6F6F8',
        flexDirection: 'column',
        borderRadius: 20
    }
})