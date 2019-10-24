import React from 'react'
import { Text, Button, Icon, View, Content, Card, CardItem, Thumbnail } from 'native-base'
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
                        rightComponent={
                            <Button transparent>
                                <Icon
                                    name="ios-search"
                                    style={{ color: 'white' }}
                                />
                            </Button>
                        }
                        centerComponent={
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ color: 'white' }}>
                                    afkaknfknfk
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon
                                        type="FontAwesome5"
                                        name="hotel"
                                        style={styles.headerSub}
                                    />
                                    <Text style={styles.headerSub}>2</Text>
                                    <Icon
                                        type="FontAwesome5"
                                        name="user"
                                        style={styles.headerSub}
                                    />
                                    <Text style={styles.headerSub}>1</Text>
                                    <Text style={styles.headerSub}>|</Text>
                                    <Text style={styles.headerSub}>
                                        Lorem ipsum dolor sit amet
                                    </Text>
                                </View>
                            </View>
                        }
                    />
                    <View style={styles.cardContainer}>
                        <View style={{ flexDirection: 'row', padding: 15 }}>
                            <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                <Text style={{ color: '#626262' }}>
                                    Menampilkan properti terbaik
                                </Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Icon
                                    name="map"
                                    type="Entypo"
                                    style={{ color: '#626262' }}
                                />
                            </View>
                        </View>
                        <View style={styles.listContainer}>
                            <Card style={styles.cardList}>
                                <CardItem header button onPress={() => alert('This is Card Header')}>
                                    <View
                                        style={{ flex: 0.8, flexWrap: 'wrap' }}
                                    >
                                        <Thumbnail
                                            square
                                            source={rk}
                                            style={styles.image}
                                        />
                                    </View>
                                    <View style={{ flex: 1, flexWrap: 'wrap' }}>
                                        <Text>Hello World</Text>
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
        height: 125,
        borderRadius: 5
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
        marginHorizontal: 5
    },
    cardContainer: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'column'
    }
})
