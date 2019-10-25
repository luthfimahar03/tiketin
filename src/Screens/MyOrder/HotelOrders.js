import React from 'react'
import { useSelector } from 'react-redux'
import Auth from '../../Components/Base/Auth'
import { Text, Button, Icon, View, Content, Card, CardItem, Thumbnail, Right, Row } from 'native-base'
import { Dimensions, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default ({ navigation }) => {
    const isLoggedIn = useSelector(({ auth }) => auth.loggedIn)

    if (!isLoggedIn) {
        return (
            <>
                <Content>
                    <Auth
                        navigate={navigation.navigate}
                        navigationKey="FormSearchHotel"
                    />
                </Content>
            </>
        )
    }

    return (
        <>
            <ScrollView>
                <View style={styles.cardContainer}>
                    <View style={{ padding: 15 }}>
                        <View style={{ paddingHorizontal: 5 }}>
                            <Card style={{ width: 300, alignItems: "center" }}>
                                <Text style={styles.headerSubText}>
                                    ! Displaying your order history within the last 90 days
                            </Text>
                            </Card>
                        </View>
                    </View>
                    <Card style={styles.cardList}>
                        <CardItem header button >
                            <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row" }} >
                                            <Icon
                                                name="plane"
                                                type="FontAwesome"
                                                style={{ fontSize: 25, marginTop: -5 }}
                                            />
                                            <Text>  Flight</Text>
                                        </View>
                                        <View
                                            style={{
                                                borderBottomColor: 'black',
                                                borderBottomWidth: StyleSheet.hairlineWidth,
                                                marginTop: 10,
                                                width: 320
                                            }}
                                        />
                                    </View>
                                    <View style={{ flex: 0.3, marginRight: -40 }}>
                                        <Button transparent block style={{ marginTop: -15, width: 50 }} onPress={() => alert("ini detail card")}>
                                            <Icon
                                                name="more-vertical"
                                                type="Feather"
                                            />
                                        </Button>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flex: 1, marginLeft: -15 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ fontSize: 14, paddingHorizontal: 15, paddingTop: 10, paddingBottom: 5 }}>
                                                Order ID: 132546
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: "row", paddingHorizontal: 15, paddingVertical: 5 }}>
                                            <Text style={{ fontSize: 14 }}>Bali  </Text>
                                            <Icon
                                                name="long-arrow-right"
                                                type="FontAwesome"
                                                style={{ fontSize: 20 }}
                                            />
                                            <Text style={{ fontSize: 14 }}>  Jakarta</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", paddingHorizontal: 15, paddingVertical: 5 }}>
                                            <Text style={{ fontSize: 14, color: "grey" }}>One way    </Text>
                                            <Text style={{ fontSize: 14, color: "grey" }}>{`\u2022 1 adult`}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", paddingHorizontal: 15, paddingVertical: 5 }}>
                                            <Icon
                                                name="plane"
                                                type="SimpleLineIcons"
                                                style={{ fontSize: 20 }}
                                            />
                                            <Text style={{ fontSize: 14, color: "grey" }}>  Friday, 20 Sep 2019    </Text>
                                            <Text style={{ fontSize: 14, color: "grey" }}>{`\u2022 09.30`}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ marginVertical: 5 }}>
                                    <Card style={{ width: 150, alignItems: "center", borderWidth: 5, borderStyle: "dotted", backgroundColor: "#F6F7FC" }} >
                                        <Button block style={{ width: 150, backgroundColor: "#F6F7FC" }} onPress={() => alert("ini e-ticketing")}>
                                            <Text style={{ color: "#2ecc71", fontWeight: "bold" }}>
                                                E-Ticketing
                                        </Text>
                                        </Button>
                                    </Card>
                                </View>
                            </View>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardList}>
                        <CardItem header button >
                            <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row" }} >
                                            <Icon
                                                name="plane"
                                                type="FontAwesome"
                                                style={{ fontSize: 25, marginTop: -5 }}
                                            />
                                            <Text>  Flight</Text>
                                        </View>
                                        <View
                                            style={{
                                                borderBottomColor: 'black',
                                                borderBottomWidth: StyleSheet.hairlineWidth,
                                                marginTop: 10,
                                                width: 320
                                            }}
                                        />
                                    </View>
                                    <View style={{ flex: 0.3, marginRight: -40 }}>
                                        <Button transparent block style={{ marginTop: -15, width: 50 }} onPress={() => alert("ini detail card")}>
                                            <Icon
                                                name="more-vertical"
                                                type="Feather"
                                            />
                                        </Button>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flex: 1, marginLeft: -15 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ fontSize: 14, paddingHorizontal: 15, paddingTop: 10, paddingBottom: 5 }}>
                                                Order ID: 132546
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: "row", paddingHorizontal: 15, paddingVertical: 5 }}>
                                            <Text style={{ fontSize: 14 }}>Bali  </Text>
                                            <Icon
                                                name="long-arrow-right"
                                                type="FontAwesome"
                                                style={{ fontSize: 20 }}
                                            />
                                            <Text style={{ fontSize: 14 }}>  Jakarta</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", paddingHorizontal: 15, paddingVertical: 5 }}>
                                            <Text style={{ fontSize: 14, color: "grey" }}>One way    </Text>
                                            <Text style={{ fontSize: 14, color: "grey" }}>{`\u2022 1 adult`}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", paddingHorizontal: 15, paddingVertical: 5 }}>
                                            <Icon
                                                name="plane"
                                                type="SimpleLineIcons"
                                                style={{ fontSize: 20 }}
                                            />
                                            <Text style={{ fontSize: 14, color: "grey" }}>  Friday, 20 Sep 2019    </Text>
                                            <Text style={{ fontSize: 14, color: "grey" }}>{`\u2022 09.30`}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ marginVertical: 5 }}>
                                    <Card style={{ width: 150, alignItems: "center", borderWidth: 5, borderStyle: "dotted", backgroundColor: "#F6F7FC" }} >
                                        <Button block style={{ width: 150, backgroundColor: "#F6F7FC" }} onPress={() => alert("ini e-ticketing")}>
                                            <Text style={{ color: "#2ecc71", fontWeight: "bold" }}>
                                                E-Ticketing
                                            </Text>
                                        </Button>
                                    </Card>
                                </View>
                            </View>
                        </CardItem>
                    </Card>
                </View>
            </ScrollView>
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
        paddingVertical: 10,
        fontSize: 11
    },
    cardContainer: {
        backgroundColor: '#F6F6F8',
        flexDirection: 'column'
    },
    separator: {
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})
