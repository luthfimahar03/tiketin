import React from 'react'
import { Text, Header, Button, Icon, View, Content, Card, CardItem, Body } from 'native-base'
import { Dimensions, StyleSheet, Image } from "react-native"
import rk from '../../Assets/Images/rk.jpg'

export default ({ navigation }) => {
    const screenHeight = Math.round(Dimensions.get('window').height);
    const screenWidth = Math.round(Dimensions.get('window').width);

    return (
        <>
        <Content>
            <View style={{flex: 1, flexDirection: 'column', color: '#374259', backgroundColor: '#0065D1'}}>
                <View style={{flex: 1, flexWrap: 'wrap', padding: 12, backgroundColor: 'transparent', flexDirection: 'row'}}>
                    <View>
                        <Button transparent>
                            <Icon name="arrow-back" style={{color: 'white'}}/>
                        </Button>
                    </View>
                    <View style={{marginHorizontal: 30}}>
                        <Text style={{color: 'white'}}>
                            Jakarta, Indonesia
                        </Text>
                        <View style={{flex: 1, flexDirection: 'row', marginVertical: 10}}>
                            <Icon type='FontAwesome5' name='hotel' style={{fontSize: 15, color: 'white', marginHorizontal: 2}} /><Text style={{color: 'white', marginHorizontal: 2}}>1</Text>
                            <Icon name='md-person' style={{fontSize: 15, color: 'white', marginHorizontal: 2}} /><Text style={{color: 'white', marginHorizontal: 2}}>5</Text>
                            <Text style={{color: 'white', marginHorizontal: 2}}>| 28 Okt 19 - 31 Okt 19, 3 Malam</Text>
                        </View>
                    </View>
                    <View>
                        <Button transparent>
                            <Icon name="ios-search" style={{color: 'white'}}/>
                        </Button>
                    </View>
                </View>
                <View style={{flex: 5, borderTopRightRadius:20, borderTopLeftRadius:20, backgroundColor: 'white', flexDirection: 'column', flexWrap: 'wrap', width: screenWidth}}>
                    <View style={{flex: 0.3, flexDirection:'row', padding: 15}}>
                        <View style={{flex: 1, alignItems: 'flex-start'}}>
                            <Text style={{color: '#626262'}}>Menampilkan properti terbaik</Text>
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <Icon name='map' type='Entypo' style={{color: '#626262'}}></Icon>
                        </View>
                    </View>
                    <View style={{flex: 5, flexDirection:'row', flexWrap: 'wrap', padding: 5,  backgroundColor: '#F7F7FA', width: screenWidth}}>
                        <Card style={{width: '99%', elevation: 0, borderWidth: 0, shadowOpacity: 0}}>
                            <CardItem header button onPress={() => alert("This is Card Header")}>
                                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                    <View style={{flex: 0.6, flexWrap: 'wrap'}}>
                                        <Image source={rk} style={{width: 150, height: 150, borderRadius: 5}} />
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap'}}>
                                        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                                            <Text style={{fontSize: 20, color: '#626262'}}>Royal Kuningan Hotel</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Text style={{color: '#a2a2a2'}}>Setiabudi, Jakarta Selatan</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='FontAwesome' name='ticket' style={{fontSize:18, color: '#0065D1'}}/>
                                            <Text style={{marginHorizontal: 8, color: '#626262'}}>3 / 5</Text>
                                            <Icon type='FontAwesome' name='tripadvisor' style={{fontSize:18, color: '#c5c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Text style={{fontSize:12, color: '#a2a2a2'}}>( 270 Ulasan)</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 13, textDecorationLine: 'line-through', color: '#a2a2a2'}}>Rp. 1.200.000,-</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 19, color: '#0065D1'}}>IDR 1.000.000,- </Text><Text style={{fontSize: 12, color: '#a2a2a2'}}>/ kamar / malam</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{backgroundColor: '#E5EDF3', borderStyle: 'dashed', borderColor: '#0065D1', borderWidth: 1, padding: 2, flex: 0.8, flexDirection: 'row', justifyContent:'center', alignItems: 'center', borderRadius: 3, flexWrap: 'wrap'}}>
                                                <Text style={{fontSize: 15, alignSelf: 'center', color: '#0065D1'}}>Discount for 10%</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>

                        <Card style={{width: '99%', elevation: 0, borderWidth: 0, shadowOpacity: 0}}>
                            <CardItem header button onPress={() => alert("This is Card Header")}>
                                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                    <View style={{flex: 0.6, flexWrap: 'wrap'}}>
                                        <Image source={rk} style={{width: 150, height: 150, borderRadius: 5}} />
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap'}}>
                                        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                                            <Text style={{fontSize: 20, color: '#626262'}}>Royal Kuningan Hotel</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Text style={{color: '#a2a2a2'}}>Setiabudi, Jakarta Selatan</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='FontAwesome' name='ticket' style={{fontSize:18, color: '#0065D1'}}/>
                                            <Text style={{marginHorizontal: 8, color: '#626262'}}>3 / 5</Text>
                                            <Icon type='FontAwesome' name='tripadvisor' style={{fontSize:18, color: '#c5c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Text style={{fontSize:12, color: '#a2a2a2'}}>( 270 Ulasan)</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 13, textDecorationLine: 'line-through', color: '#a2a2a2'}}>Rp. 1.200.000,-</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 19, color: '#0065D1'}}>IDR 1.000.000,- </Text><Text style={{fontSize: 12, color: '#a2a2a2'}}>/ kamar / malam</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{backgroundColor: '#E5EDF3', borderStyle: 'dashed', borderColor: '#0065D1', borderWidth: 1, padding: 2, flex: 0.8, flexDirection: 'row', justifyContent:'center', alignItems: 'center', borderRadius: 3, flexWrap: 'wrap'}}>
                                                <Text style={{fontSize: 15, alignSelf: 'center', color: '#0065D1'}}>Discount for 10%</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>

                        <Card style={{width: '99%', elevation: 0, borderWidth: 0, shadowOpacity: 0}}>
                            <CardItem header button onPress={() => alert("This is Card Header")}>
                                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                    <View style={{flex: 0.6, flexWrap: 'wrap'}}>
                                        <Image source={rk} style={{width: 150, height: 150, borderRadius: 5}} />
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap'}}>
                                        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                                            <Text style={{fontSize: 20, color: '#626262'}}>Royal Kuningan Hotel</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Text style={{color: '#a2a2a2'}}>Setiabudi, Jakarta Selatan</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='FontAwesome' name='ticket' style={{fontSize:18, color: '#0065D1'}}/>
                                            <Text style={{marginHorizontal: 8, color: '#626262'}}>3 / 5</Text>
                                            <Icon type='FontAwesome' name='tripadvisor' style={{fontSize:18, color: '#c5c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Text style={{fontSize:12, color: '#a2a2a2'}}>( 270 Ulasan)</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 13, textDecorationLine: 'line-through', color: '#a2a2a2'}}>Rp. 1.200.000,-</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 19, color: '#0065D1'}}>IDR 1.000.000,- </Text><Text style={{fontSize: 12, color: '#a2a2a2'}}>/ kamar / malam</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{backgroundColor: '#E5EDF3', borderStyle: 'dashed', borderColor: '#0065D1', borderWidth: 1, padding: 2, flex: 0.8, flexDirection: 'row', justifyContent:'center', alignItems: 'center', borderRadius: 3, flexWrap: 'wrap'}}>
                                                <Text style={{fontSize: 15, alignSelf: 'center', color: '#0065D1'}}>Discount for 10%</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>

                        <Card style={{width: '99%', elevation: 0, borderWidth: 0, shadowOpacity: 0}}>
                            <CardItem header button onPress={() => alert("This is Card Header")}>
                                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                    <View style={{flex: 0.6, flexWrap: 'wrap'}}>
                                        <Image source={rk} style={{width: 150, height: 150, borderRadius: 5}} />
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap'}}>
                                        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                                            <Text style={{fontSize: 20, color: '#626262'}}>Royal Kuningan Hotel</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Text style={{color: '#a2a2a2'}}>Setiabudi, Jakarta Selatan</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='FontAwesome' name='ticket' style={{fontSize:18, color: '#0065D1'}}/>
                                            <Text style={{marginHorizontal: 8, color: '#626262'}}>3 / 5</Text>
                                            <Icon type='FontAwesome' name='tripadvisor' style={{fontSize:18, color: '#c5c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Text style={{fontSize:12, color: '#a2a2a2'}}>( 270 Ulasan)</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 13, textDecorationLine: 'line-through', color: '#a2a2a2'}}>Rp. 1.200.000,-</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 19, color: '#0065D1'}}>IDR 1.000.000,- </Text><Text style={{fontSize: 12, color: '#a2a2a2'}}>/ kamar / malam</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{backgroundColor: '#E5EDF3', borderStyle: 'dashed', borderColor: '#0065D1', borderWidth: 1, padding: 2, flex: 0.8, flexDirection: 'row', justifyContent:'center', alignItems: 'center', borderRadius: 3, flexWrap: 'wrap'}}>
                                                <Text style={{fontSize: 15, alignSelf: 'center', color: '#0065D1'}}>Discount for 10%</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>

                        <Card style={{width: '99%', elevation: 0, borderWidth: 0, shadowOpacity: 0}}>
                            <CardItem header button onPress={() => alert("This is Card Header")}>
                                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                    <View style={{flex: 0.6, flexWrap: 'wrap'}}>
                                        <Image source={rk} style={{width: 150, height: 150, borderRadius: 5}} />
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap'}}>
                                        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                                            <Text style={{fontSize: 20, color: '#626262'}}>Royal Kuningan Hotel</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Text style={{color: '#a2a2a2'}}>Setiabudi, Jakarta Selatan</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='FontAwesome' name='ticket' style={{fontSize:18, color: '#0065D1'}}/>
                                            <Text style={{marginHorizontal: 8, color: '#626262'}}>3 / 5</Text>
                                            <Icon type='FontAwesome' name='tripadvisor' style={{fontSize:18, color: '#c5c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Text style={{fontSize:12, color: '#a2a2a2'}}>( 270 Ulasan)</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 13, textDecorationLine: 'line-through', color: '#a2a2a2'}}>Rp. 1.200.000,-</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 19, color: '#0065D1'}}>IDR 1.000.000,- </Text><Text style={{fontSize: 12, color: '#a2a2a2'}}>/ kamar / malam</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{backgroundColor: '#E5EDF3', borderStyle: 'dashed', borderColor: '#0065D1', borderWidth: 1, padding: 2, flex: 0.8, flexDirection: 'row', justifyContent:'center', alignItems: 'center', borderRadius: 3, flexWrap: 'wrap'}}>
                                                <Text style={{fontSize: 15, alignSelf: 'center', color: '#0065D1'}}>Discount for 10%</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>

                        <Card style={{width: '99%', elevation: 0, borderWidth: 0, shadowOpacity: 0}}>
                            <CardItem header button onPress={() => alert("This is Card Header")}>
                                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                    <View style={{flex: 0.6, flexWrap: 'wrap'}}>
                                        <Image source={rk} style={{width: 150, height: 150, borderRadius: 5}} />
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap'}}>
                                        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                                            <Text style={{fontSize: 20, color: '#626262'}}>Royal Kuningan Hotel</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Text style={{color: '#a2a2a2'}}>Setiabudi, Jakarta Selatan</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='FontAwesome' name='ticket' style={{fontSize:18, color: '#0065D1'}}/>
                                            <Text style={{marginHorizontal: 8, color: '#626262'}}>3 / 5</Text>
                                            <Icon type='FontAwesome' name='tripadvisor' style={{fontSize:18, color: '#c5c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Text style={{fontSize:12, color: '#a2a2a2'}}>( 270 Ulasan)</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 13, textDecorationLine: 'line-through', color: '#a2a2a2'}}>Rp. 1.200.000,-</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 19, color: '#0065D1'}}>IDR 1.000.000,- </Text><Text style={{fontSize: 12, color: '#a2a2a2'}}>/ kamar / malam</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{backgroundColor: '#E5EDF3', borderStyle: 'dashed', borderColor: '#0065D1', borderWidth: 1, padding: 2, flex: 0.8, flexDirection: 'row', justifyContent:'center', alignItems: 'center', borderRadius: 3, flexWrap: 'wrap'}}>
                                                <Text style={{fontSize: 15, alignSelf: 'center', color: '#0065D1'}}>Discount for 10%</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>

                        <Card style={{width: '99%', elevation: 0, borderWidth: 0, shadowOpacity: 0}}>
                            <CardItem header button onPress={() => alert("This is Card Header")}>
                                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                    <View style={{flex: 0.6, flexWrap: 'wrap'}}>
                                        <Image source={rk} style={{width: 150, height: 150, borderRadius: 5}} />
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap'}}>
                                        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                                            <Text style={{fontSize: 20, color: '#626262'}}>Royal Kuningan Hotel</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Text style={{color: '#a2a2a2'}}>Setiabudi, Jakarta Selatan</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='FontAwesome' name='ticket' style={{fontSize:18, color: '#0065D1'}}/>
                                            <Text style={{marginHorizontal: 8, color: '#626262'}}>3 / 5</Text>
                                            <Icon type='FontAwesome' name='tripadvisor' style={{fontSize:18, color: '#c5c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Text style={{fontSize:12, color: '#a2a2a2'}}>( 270 Ulasan)</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 13, textDecorationLine: 'line-through', color: '#a2a2a2'}}>Rp. 1.200.000,-</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 19, color: '#0065D1'}}>IDR 1.000.000,- </Text><Text style={{fontSize: 12, color: '#a2a2a2'}}>/ kamar / malam</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{backgroundColor: '#E5EDF3', borderStyle: 'dashed', borderColor: '#0065D1', borderWidth: 1, padding: 2, flex: 0.8, flexDirection: 'row', justifyContent:'center', alignItems: 'center', borderRadius: 3, flexWrap: 'wrap'}}>
                                                <Text style={{fontSize: 15, alignSelf: 'center', color: '#0065D1'}}>Discount for 10%</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>

                        <Card style={{width: '99%', elevation: 0, borderWidth: 0, shadowOpacity: 0}}>
                            <CardItem header button onPress={() => alert("This is Card Header")}>
                                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                    <View style={{flex: 0.6, flexWrap: 'wrap'}}>
                                        <Image source={rk} style={{width: 150, height: 150, borderRadius: 5}} />
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap'}}>
                                        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                                            <Text style={{fontSize: 20, color: '#626262'}}>Royal Kuningan Hotel</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Text style={{color: '#a2a2a2'}}>Setiabudi, Jakarta Selatan</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='FontAwesome' name='ticket' style={{fontSize:18, color: '#0065D1'}}/>
                                            <Text style={{marginHorizontal: 8, color: '#626262'}}>3 / 5</Text>
                                            <Icon type='FontAwesome' name='tripadvisor' style={{fontSize:18, color: '#c5c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Text style={{fontSize:12, color: '#a2a2a2'}}>( 270 Ulasan)</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 13, textDecorationLine: 'line-through', color: '#a2a2a2'}}>Rp. 1.200.000,-</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 19, color: '#0065D1'}}>IDR 1.000.000,- </Text><Text style={{fontSize: 12, color: '#a2a2a2'}}>/ kamar / malam</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{backgroundColor: '#E5EDF3', borderStyle: 'dashed', borderColor: '#0065D1', borderWidth: 1, padding: 2, flex: 0.8, flexDirection: 'row', justifyContent:'center', alignItems: 'center', borderRadius: 3, flexWrap: 'wrap'}}>
                                                <Text style={{fontSize: 15, alignSelf: 'center', color: '#0065D1'}}>Discount for 10%</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>

                        <Card style={{width: '99%', elevation: 0, borderWidth: 0, shadowOpacity: 0}}>
                            <CardItem header button onPress={() => alert("This is Card Header")}>
                                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                    <View style={{flex: 0.6, flexWrap: 'wrap'}}>
                                        <Image source={rk} style={{width: 150, height: 150, borderRadius: 5}} />
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap'}}>
                                        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                                            <Text style={{fontSize: 20, color: '#626262'}}>Royal Kuningan Hotel</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Text style={{color: '#a2a2a2'}}>Setiabudi, Jakarta Selatan</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='FontAwesome' name='ticket' style={{fontSize:18, color: '#0065D1'}}/>
                                            <Text style={{marginHorizontal: 8, color: '#626262'}}>3 / 5</Text>
                                            <Icon type='FontAwesome' name='tripadvisor' style={{fontSize:18, color: '#c5c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Text style={{fontSize:12, color: '#a2a2a2'}}>( 270 Ulasan)</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 13, textDecorationLine: 'line-through', color: '#a2a2a2'}}>Rp. 1.200.000,-</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 19, color: '#0065D1'}}>IDR 1.000.000,- </Text><Text style={{fontSize: 12, color: '#a2a2a2'}}>/ kamar / malam</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{backgroundColor: '#E5EDF3', borderStyle: 'dashed', borderColor: '#0065D1', borderWidth: 1, padding: 2, flex: 0.8, flexDirection: 'row', justifyContent:'center', alignItems: 'center', borderRadius: 3, flexWrap: 'wrap'}}>
                                                <Text style={{fontSize: 15, alignSelf: 'center', color: '#0065D1'}}>Discount for 10%</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>

                        <Card style={{width: '99%', elevation: 0, borderWidth: 0, shadowOpacity: 0}}>
                            <CardItem header button onPress={() => alert("This is Card Header")}>
                                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                    <View style={{flex: 0.6, flexWrap: 'wrap'}}>
                                        <Image source={rk} style={{width: 150, height: 150, borderRadius: 5}} />
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap'}}>
                                        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                                            <Text style={{fontSize: 20, color: '#626262'}}>Royal Kuningan Hotel</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Icon type='AntDesign' name='star' style={{fontSize:15, color: '#f7fc3a'}} />
                                            <Text style={{color: '#a2a2a2'}}>Setiabudi, Jakarta Selatan</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Icon type='FontAwesome' name='ticket' style={{fontSize:18, color: '#0065D1'}}/>
                                            <Text style={{marginHorizontal: 8, color: '#626262'}}>3 / 5</Text>
                                            <Icon type='FontAwesome' name='tripadvisor' style={{fontSize:18, color: '#c5c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Icon type='FontAwesome' name='dot-circle-o' style={{fontSize:15, marginHorizontal: 2, color: '#44c91e'}}/>
                                            <Text style={{fontSize:12, color: '#a2a2a2'}}>( 270 Ulasan)</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 13, textDecorationLine: 'line-through', color: '#a2a2a2'}}>Rp. 1.200.000,-</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{fontSize: 19, color: '#0065D1'}}>IDR 1.000.000,- </Text><Text style={{fontSize: 12, color: '#a2a2a2'}}>/ kamar / malam</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{backgroundColor: '#E5EDF3', borderStyle: 'dashed', borderColor: '#0065D1', borderWidth: 1, padding: 2, flex: 0.8, flexDirection: 'row', justifyContent:'center', alignItems: 'center', borderRadius: 3, flexWrap: 'wrap'}}>
                                                <Text style={{fontSize: 15, alignSelf: 'center', color: '#0065D1'}}>Discount for 10%</Text>
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
