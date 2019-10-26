import React, {useState, useEffect} from 'react'
import { Text, Button, Icon, View, Content, Card, CardItem, Thumbnail } from 'native-base'
import { Dimensions, StyleSheet } from 'react-native'
import Header from '../../Components/Base/Header'
import { API_BASEURL } from 'react-native-dotenv'
import { Facebook } from 'react-content-loader/native'
import http from '../../Helpers/Http'

export default props => {
    const screenHeight = Math.round(Dimensions.get('window').height)
    const screenWidth = Math.round(Dimensions.get('window').width)
    const city = props.navigation.getParam('city')

    const [Cities, setCities] = useState([])
    const [loading, showLoading] = useState(true)

    useEffect(() => {
        const idCity = props.navigation.getParam('idCity')
        const checkIn = props.navigation.getParam('checkIn').toISOString().split('T')[0]
        const checkOut = props.navigation.getParam('checkOut').toISOString().split('T')[0]
        
        http.get(`${API_BASEURL}/hotel?id_city=${idCity}&from_date=${checkIn}&to_date=${checkOut}`)
        .then(res => {
            setCities(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => showLoading(false))
    }, [])

    return (
        <>
            <Content>
                <View style={styles.wrapper}>
                    <Header
                        detail
                        leftComponent={
                            <Button
                                transparent
                                onPress={() => props.navigation.goBack()}
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
                                    {city}, Indonesia
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
                                        28 Jan 2019
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
                            {
                                loading
                                    ? (
                                        <View style={{ padding: 10 }}>
                                            <Facebook width={200} />
                                            <Facebook width={200} />
                                            <Facebook width={200} />
                                            <Facebook width={200} />
                                            <Facebook width={200} />
                                        </View>
                                    ) : (
                                        Cities.map(item => {
                                            return (
                                                <Card style={styles.cardList}>
                                                    <CardItem header button onPress={() => props.navigation.navigate('HotelDetail')}>
                                                        <View
                                                            style={{ flex: 0.8, flexWrap: 'wrap' }}
                                                        >
                                                            <Thumbnail
                                                                square
                                                                source={{uri: `${API_BASEURL}/${String(item.image_url).replace(':/', '')}`  }}
                                                                style={styles.image}
                                                            />
                                                        </View>
                                                        <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', padding: 7 }}>
                                                        <View style={{width: '100%', }}>
                                                            <Text style={{fontSize: 20, color: '#626262'}}>{item.name}</Text>
                                                        </View>
                                                        <View style={{width: '100%', }}>
                                                            <Text>
                                                                <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                                                <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                                                <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                                                <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                                                <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />{'  '}
                                                                <Text style={{color: '#a2a2a2', fontSize: 12}}>Setiabudi, Jakarta Selatan</Text>
                                                            </Text>
                                                        </View>
                                                        <View style={{width: '100%', }}>
                                                            <Text>
                                                                <Icon type='FontAwesome' name='ticket' style={{fontSize:18, color: '#0065D1'}}/>
                                                                <Text style={{marginHorizontal: 8, color: '#626262'}}>3 / 5</Text>{'  '}
                                                                <Icon type='FontAwesome' name='tripadvisor' style={{fontSize:18, color: '#c5c91e'}}/>{'  '}
                                                                <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                                                <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                                                <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                                                <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                                                <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>{'  '}
                                                                <Text style={{fontSize:10, color: '#a2a2a2'}}>( 270 Ulasan)</Text>
                                                            </Text>
                                                        </View>
                                                        <View style={{width: '100%', }}>
                                                            <Text style={{fontSize: 13, textDecorationLine: 'line-through', color: '#a2a2a2'}}>Rp. 1.200.000,-</Text>
                                                        </View>
                                                        <View style={{width: '100%', }}>
                                                            <Text style={{fontSize: 19, color: '#0065D1', marginVertical: 10}}>IDR 1.000.000,- </Text><Text style={{fontSize: 12, color: '#a2a2a2'}}>/ kamar / malam</Text>
                                                        </View>
                                                        <View style={{width: '100%', paddingHorizontal: 10, marginVertical: 15}}>
                                                            <View style={{backgroundColor: '#E5EDF3', borderStyle: 'dashed', borderColor: '#0065D1', borderWidth: 1, padding: 2, flex: 0.8, flexDirection: 'row', justifyContent:'center', alignItems: 'center', borderRadius: 3, flexWrap: 'wrap'}}>
                                                                <Text style={{fontSize: 15, color: '#0065D1'}}>Discount for 10%</Text>
                                                            </View>
                                                        </View>
                                                        {/*<Text>as</Text>*/}
                                                    </View>
                                                    </CardItem>
                                                </Card>
                                            )
                                        })
                                    )
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
        height: 150,
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
