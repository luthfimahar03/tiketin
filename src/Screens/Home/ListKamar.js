import React from 'react'
import { Text, Button, Icon, View, Content, Card, CardItem, Thumbnail, Right, Row } from 'native-base'
import { Dimensions, StyleSheet } from 'react-native'
import Header from '../../Components/Base/Header'
import rk from '../../Assets/Images/rk.jpg'

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
                                style={{ marginTop: -30 }}
                            >
                                <Icon
                                    name="arrow-back"
                                    style={{ color: 'white' }}
                                />
                            </Button>
                        }

                        centerComponent={
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ color: 'white', marginTop: 1, marginBottom: 4 }}>
                                    Pilih Kamar
                                </Text>
                                <View style={{ flexDirection: 'row', backgroundColor: '#1876DA', padding: 5, marginLeft: -45 }}>
                                    <Icon
                                        type="FontAwesome5"
                                        name="hotel"
                                        style={styles.headerSub}
                                    />
                                    <Text style={styles.headerSub}>1</Text>
                                    <Icon
                                        type="FontAwesome5"
                                        name="user"
                                        style={styles.headerSub}
                                    />
                                    <Text style={styles.headerSub}>2</Text>
                                    <Text style={styles.headerSub}>|</Text>
                                    <Text style={styles.headerSub}>
                                        28 Okt 19 - 31 Okt 19, 3 Malam
                                    </Text>
                                </View>
                            </View>
                        }
                    />
                    <View style={styles.cardContainer}>
                        <View style={{ flexDirection: 'row', padding: 15 }}>
                            <View style={{ alignItems: 'flex-start', paddingHorizontal: 5 }}>
                                <Card>
                                    <Text style={styles.headerSubText}>
                                        Wifi
                                    </Text>
                                </Card>

                            </View>
                            <View style={{ paddingHorizontal: 5 }}>
                                <Card>
                                    <Text style={styles.headerSubText}>
                                        Sarapan Gratis
                                    </Text>
                                </Card>
                            </View>
                            <View style={{ paddingHorizontal: 5 }}>
                                <Card>
                                    <Text style={styles.headerSubText}>
                                        Pembatalan Gratis
                                    </Text>
                                </Card>
                            </View>

                        </View>
                        <View style={styles.listContainer}>
                            <Card style={styles.cardList}>
                                <CardItem header button onPress={() => navigation.navigate('RoomDetail')} >
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ fontWeight: "bold" }}>
                                                    DELUXE DOUBLE ROOM ONLY
                                                </Text>
                                            </View>
                                            <View style={{ flex: 0.3 }}>
                                                <Button transparent style={{ width: 100, marginTop: -10 }} onPress={() => alert("ini detail card")}>
                                                    <Text style={{ fontSize: 10, color: "#0064D3", fontWeight: "bold" }}>
                                                        Lihat Detail
                                                </Text>
                                                </Button>

                                            </View>
                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                            <View style={{ flex: 0.5 }}>
                                                <Thumbnail
                                                    square
                                                    source={rk}
                                                    style={styles.image}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <View style={{ flexDirection: "row" }}>
                                                    <Text style={{ fontSize: 14, paddingHorizontal: 15, paddingTop: 10, paddingBottom: 5 }}>
                                                        Maks 2 Tamu
                                                    </Text>
                                                </View>

                                                <View style={{ flexDirection: "row", paddingHorizontal: 15, paddingVertical: 5 }}>
                                                    <Icon
                                                        name="wifi"
                                                        type="AntDesign"
                                                        style={{ fontSize: 20 }}
                                                    />
                                                    <Text style={{ fontSize: 14 }}> Wifi</Text>
                                                </View>
                                                <View style={{ flexDirection: "row", paddingHorizontal: 15, paddingVertical: 5 }}>
                                                    <Icon
                                                        name="food-off"
                                                        type="MaterialCommunityIcons"
                                                        style={{ fontSize: 20, color: "grey" }}
                                                    />
                                                    <Text style={{ fontSize: 14, color: "grey" }}> Makan Pagi</Text>
                                                </View>

                                            </View>
                                        </View>
                                        <View style={{ marginVertical: 10 }}>
                                            <Card style={{ width: 150, alignItems: "center", borderWidth: 5, borderStyle: "dotted", backgroundColor: "#F6F7FC" }} >
                                                <Text style={{ paddingVertical: 10, color: "#0064D3", fontWeight: "bold" }}>
                                                    Member Deals 10%
                                                </Text>
                                            </Card>
                                            <Text style={{ textDecorationLine: "line-through", color: "grey", marginVertical: 5 }}>IDR 815.000</Text>
                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={{ fontSize: 20, color: "#0064D3", fontWeight: "bold" }}>
                                                    IDR 638.145
                                                </Text>
                                                <Text style={{ color: "grey", fontSize: 14, marginTop: 5 }}>
                                                    /kamar/malam
                                                </Text>
                                            </View>

                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                            <View style={{ flex: 1, marginTop: 5 }}>
                                                <Text style={{ color: "grey" }}>95.721 TIX Point</Text>
                                            </View>
                                            <View style={{ flex: 0.4 }}>
                                                <Button block onPress={() => alert("ini yang dipilih")} style={{ borderRadius: 30, backgroundColor: "#FFD910" }}>
                                                    <Text style={{ color: "#0064D3", fontWeight: "bold" }}>
                                                        Pilih
                                                    </Text>
                                                </Button>
                                            </View>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>
                            <Card style={styles.cardList}>
                                <CardItem header button >
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ fontWeight: "bold" }}>
                                                    DELUXE DOUBLE ROOM ONLY
                                                </Text>
                                            </View>
                                            <View style={{ flex: 0.3 }}>
                                                <Button transparent style={{ width: 100, marginTop: -10 }} onPress={() => alert("ini detail card")}>
                                                    <Text style={{ fontSize: 10, color: "#0064D3", fontWeight: "bold" }}>
                                                        Lihat Detail
                                                </Text>
                                                </Button>

                                            </View>
                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                            <View style={{ flex: 0.5 }}>
                                                <Thumbnail
                                                    square
                                                    source={rk}
                                                    style={styles.image}
                                                />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <View style={{ flexDirection: "row" }}>
                                                    <Text style={{ fontSize: 14, paddingHorizontal: 15, paddingTop: 10, paddingBottom: 5 }}>
                                                        Maks 2 Tamu
                                                    </Text>
                                                </View>

                                                <View style={{ flexDirection: "row", paddingHorizontal: 15, paddingVertical: 5 }}>
                                                    <Icon
                                                        name="wifi"
                                                        type="AntDesign"
                                                        style={{ fontSize: 20 }}
                                                    />
                                                    <Text style={{ fontSize: 14 }}> Wifi</Text>
                                                </View>
                                                <View style={{ flexDirection: "row", paddingHorizontal: 15, paddingVertical: 5 }}>
                                                    <Icon
                                                        name="food-off"
                                                        type="MaterialCommunityIcons"
                                                        style={{ fontSize: 20, color: "grey" }}
                                                    />
                                                    <Text style={{ fontSize: 14, color: "grey" }}> Makan Pagi</Text>
                                                </View>

                                            </View>
                                        </View>
                                        <View style={{ marginVertical: 10 }}>
                                            <Card style={{ width: 150, alignItems: "center", borderWidth: 5, borderStyle: "dotted", backgroundColor: "#F6F7FC" }} >
                                                <Text style={{ paddingVertical: 10, color: "#0064D3", fontWeight: "bold" }}>
                                                    Member Deals 10%
                                                </Text>
                                            </Card>
                                            <Text style={{ textDecorationLine: "line-through", color: "grey", marginVertical: 5 }}>IDR 815.000</Text>
                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={{ fontSize: 20, color: "#0064D3", fontWeight: "bold" }}>
                                                    IDR 638.145
                                                </Text>
                                                <Text style={{ color: "grey", fontSize: 14, marginTop: 5 }}>
                                                    /kamar/malam
                                                </Text>
                                            </View>

                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                            <View style={{ flex: 1, marginTop: 5 }}>
                                                <Text style={{ color: "grey" }}>95.721 TIX Point</Text>
                                            </View>
                                            <View style={{ flex: 0.4 }}>
                                                <Button block onPress={() => alert("ini yang dipilih")} style={{ borderRadius: 30, backgroundColor: "#FFD910" }}>
                                                    <Text style={{ color: "#0064D3", fontWeight: "bold" }}>
                                                        Pilih
                                                    </Text>
                                                </Button>
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
        height: 100,
        borderRadius: 5.,
        width: 100,
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
        backgroundColor: '#F7F7FA'
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
        flexDirection: 'column'
    }
})