import React from "react";
import {Animated, Dimensions, Platform, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {Body, Header, List, Content, Icon, ListItem as Item, ScrollableTab, Tab, TabHeading, Tabs, Title, Footer} from "native-base"
import Carousel from '../../Components/Base/Carousel'

const {width: SCREEN_WIDTH} = Dimensions.get("window");
const IMAGE_HEIGHT = 250;
const HEADER_HEIGHT = Platform.OS === "ios" ? 64 : 50;
const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT;
const THEME_COLOR = '#0065D1';
const FADED_THEME_COLOR = '#0065D0';

export default props => {
    const nScroll = new Animated.Value(0);
    const scroll = new Animated.Value(0);
    const textColor = scroll.interpolate({
        inputRange: [0, SCROLL_HEIGHT / 5, SCROLL_HEIGHT],
        outputRange: [THEME_COLOR, FADED_THEME_COLOR, "white"],
        extrapolate: "clamp"
    });
    const tabBg = scroll.interpolate({
        inputRange: [0, SCROLL_HEIGHT],
        outputRange: ["white", THEME_COLOR],
        extrapolate: "clamp"
    });
    const tabY = nScroll.interpolate({
        inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
        outputRange: [0, 0, 1]
    });
    const headerBg = scroll.interpolate({
        inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
        outputRange: ["transparent", "transparent", THEME_COLOR],
        extrapolate: "clamp"
    });
    const imgScale = nScroll.interpolate({
        inputRange: [-25, 0],
        outputRange: [1.1, 1],
        extrapolateRight: "clamp"
    });
    const imgOpacity = nScroll.interpolate({
        inputRange: [0, SCROLL_HEIGHT],
        outputRange: [1, 0],
    });
    const tabContent = (x, i) => <View style={{height: state.height}}>
    <View style={{flex: 1, padding: 20}} onLayout={({nativeEvent: {layout: {height}}}) => {
            heights[i] = height;
            if (state.activeTab === i) state.height = height
        }}>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            <View style={{width: '100%'}}>
                <Text style={{fontSize: 25}}>
                    Detail Biaya dan Pajak
                </Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={{fontSize: 20, marginVertical: 10, color: '#4a4a4a'}}>
                    Deluxe Double Room Only
                </Text>
            </View>
            {/*{'      '}*/}
            <View style={{width: '50%'}}>
                <Text style={{fontSize: 20, marginVertical: 10, color: '#4a4a4a'}}>
                    {'      '}IDR 2.000.000
                </Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={{fontSize: 20, color: '#4a4a4a'}}>
                    {`\u2022 Malam 1 x 1 Kamar`}
                </Text>
            </View>
            {/*{'      '}*/}
            <View style={{width: '50%'}}>
                <Text style={{fontSize: 20, color: '#4a4a4a'}}>
                    {'      '}IDR 200.000
                </Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={{fontSize: 20, color: '#4a4a4a'}}>
                    {`\u2022 Malam 2 x 1 Kamar`}
                </Text>
            </View>
            {/*{'      '}*/}
            <View style={{width: '50%'}}>
                <Text style={{fontSize: 20, color: '#4a4a4a'}}>
                    {'      '}IDR 200.000
                </Text>
            </View>
            <View style={{width: '50%'}}>
                <Text style={{fontSize: 20, color: '#4a4a4a'}}>
                    {`\u2022 Malam 3 x 1 Kamar`}
                </Text>
            </View>
            {/*{'      '}*/}
            <View style={{width: '50%', color: '#4a4a4a'}}>
                <Text style={{fontSize: 20, color: '#4a4a4a'}}>
                    {'      '}IDR 200.000
                </Text>
            </View>
            <View style={{width: '100%', padding: 20}}>
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
            <View style={{width: '50%'}}>
                <Text style={{fontSize: 20, color: '#4a4a4a'}}>
                    Total
                </Text>
            </View>
            {/*{'      '}*/}
            <View style={{width: '50%'}}>
                <Text style={{fontSize: 20, color: '#0065D1'}}>
                    {'      '}IDR 200.000
                </Text>
            </View>
        </View>
        {/*{new Array(x).fill(null).map((_, i) => <Item key={i}><Text>Item {i}</Text></Item>)}*/}
    </View></View>;
    heights = [500, 500];
    state = {
        activeTab: 0,
        height: 800
    };

    nScroll.addListener(Animated.event([{value: scroll}], {useNativeDriver: false}));

    return (
        <>
        {/*<Content>*/}
        <View>
            <Animated.View style={{position: "absolute", width: "100%", backgroundColor: headerBg, zIndex: 1}}>
                <Header style={{backgroundColor: "transparent"}} hasTabs>
                    <Body>
                        <Title>
                            <Animated.Text style={{color: 'white', fontWeight: "bold"}}>
                                <Icon name="arrow-back" style={{color: 'white'}}/>
                            </Animated.Text>
                        </Title>
                    </Body>
                </Header>
            </Animated.View>
            <Animated.ScrollView
                scrollEventThrottle={5}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {y: nScroll}}}], {useNativeDriver: true})}
                style={{zIndex: 0}}>
                <Animated.View style={{
                        transform: [{translateY: Animated.multiply(nScroll, 0.65)}, {scale: imgScale}],
                        backgroundColor: THEME_COLOR
                    }}>
                    {/*<Animated.Image
                        source={{uri: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg"}}
                        style={{height: IMAGE_HEIGHT, width: "100%", opacity: imgOpacity}}>
                    </Animated.Image>*/}
                    <Carousel
                        images={[
                            'https://static.tiket.photos/image/upload/v1570181383/banner/2019/10/04/1ede4be1-ed2a-4a4e-8b88-84b4845eb9e3-1570181381721-a75a418a7997d652296aa3664eb92a7f.jpg',
                            'https://static.tiket.photos/image/upload/v1571403137/banner/2019/10/18/01406fa9-b85f-4c52-b14e-5e8dc9d52680-1571403135512-77cf86feb0758d587a48e4f0db1060d5.jpg',
                            'https://static.tiket.photos/image/upload/v1571581302/banner/2019/10/20/0c570ca1-b4af-485e-9517-0dd3c44b91f6-1571581300799-b6031394e677271c67fe17d6c82fba3c.jpg'
                        ]}
                    />
                </Animated.View>
                <Tabs
                    prerenderingSiblingsNumber={3}
                    onChangeTab={({i}) => {
                        state.height = heights[i]
                        state.activeTab = i
                    }}
                    renderTabBar={(props) => <Animated.View
                        style={{transform: [{translateY: tabY}], zIndex: 1, width: "100%", backgroundColor: "white"}}>
                        <ScrollableTab {...props}
                            renderTab={(name, page, active, onPress, onLayout) => (
                                <TouchableOpacity key={page}
                                    onPress={() => onPress(page)}
                                    onLayout={onLayout}
                                    activeOpacity={0.4}>
                                    <Animated.View
                                        style={{
                                            flex: 1,
                                            height: 100,
                                            backgroundColor: tabBg
                                        }}>
                                        <TabHeading scrollable
                                            style={{
                                                backgroundColor: "transparent",
                                                width: SCREEN_WIDTH / 2
                                            }}
                                            active={active}>
                                            <Animated.Text style={{
                                                    fontWeight: active ? "bold" : "normal",
                                                    color: textColor,
                                                    fontSize: 14
                                                }}>
                                                {name}
                                            </Animated.Text>
                                        </TabHeading>
                                    </Animated.View>
                                </TouchableOpacity>
                            )}
                            underlineStyle={{backgroundColor: textColor}}/>
                    </Animated.View>
                }>
                <Tab heading="Detail Kamar">
                    {/*{tabContent(30, 0)}*/}
                    <View style={{flex: 1,  padding: 10}}>
                        <View style={{width: '100%'}}>
                            <Text style={{fontSize: 25}}>
                                Deluxe Double Room Only
                            </Text>
                        </View>
                        <View style={{width: '100%'}}>
                            <Text style={{fontSize: 15, color: '#4a4a4a'}}>
                                Pembatalan Gratis
                            </Text>
                        </View>
                        <View style={{width: '100%'}}>
                            <Text >
                                <Icon name='wifi' style={{fontSize: 19, color: '#4a4a4a'}} type='Feather' /> {' '}
                                <Text style={{color: '#4a4a4a'}}>Wi-Fi</Text>{'        '}
                                <Icon name='ios-restaurant' style={{fontSize: 19, color: '#4a4a4a'}} />{' '}
                                <Text style={{color: '#4a4a4a'}}>Makan Pagi</Text>
                            </Text>
                        </View>
                        <View style={{width: '100%', padding: 20}}>
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
                        <View style={{width: '100%'}}>
                            <Text style={{fontSize: 18, color: '#4a4a4a', fontWeight: 'bold'}}>
                                Penawaran Terbatas
                            </Text>
                            <View style={{backgroundColor: '#E5EDF3', width: '50%', borderStyle: 'dashed', borderColor: '#0065D1', borderWidth: 1, padding: 2, flex: 0.8, flexDirection: 'row', marginHorizontal: 20, marginVertical: 20, justifyContent:'center', alignItems: 'center', borderRadius: 3, flexWrap: 'wrap'}}>
                                <Text style={{fontSize: 15, color: '#0065D1'}}>Discount for 10%</Text>
                            </View>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#4a4a4a'}}>
                                Sekilas tentang kamar
                            </Text>
                        </View>
                        <View style={{width: '100%'}}>
                            <Text style={{fontSize: 15, color: '#4a4a4a'}}>
                                asdasdasdddddddddddddddddddddasdasdckqicmosdmcaoidcmaoidsmcoaidsmcoisamcosaimcoiasdmcoaimcaoisdmcoisamcaoisdmcoisamcoimdscoaimdcoiasdmcoisadmciasdmc
                            </Text>
                        </View>
                        <View style={{width: '100%'}}>
                            <Text style={{fontSize: 15, color: '#0065D1'}}>
                                Selengkapnya
                            </Text>
                        </View>
                        <View style={{width: '100%', marginTop: 20}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#4a4a4a'}}>
                                Fasilitas Kamar
                            </Text>
                        </View>
                        <View style={{width: '100%', color: '#4a4a4a'}}>
                            <Text>{`\u2022 AC`}</Text>
                        </View>
                        <View style={{width: '100%'}}>
                            <Text style={{fontSize: 15, color: '#0065D1'}}>
                                Selengkapnya
                            </Text>
                        </View>
                    </View>
                </Tab>
                <Tab heading="Detail Harga">
                    {tabContent(15, 1)}
                </Tab>
            </Tabs>
        </Animated.ScrollView>
    </View>
{/*</Content>*/}
    {/*<Content><Text>asd</Text></Content>
    <Footer style={{height: 200}}>
        <Text>
            Hello
        </Text>
    </Footer>*/}
    </>
)
}
