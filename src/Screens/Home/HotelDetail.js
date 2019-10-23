import React from "react";
import {Animated, Dimensions, Platform, Text, TouchableOpacity, View} from "react-native";
import {Body, Header, List, Icon, ListItem as Item, ScrollableTab, Tab, TabHeading, Tabs, Title} from "native-base"
import Carousel from '../../Components/Base/Carousel'

const {width: SCREEN_WIDTH} = Dimensions.get("window");
const IMAGE_HEIGHT = 250;
const HEADER_HEIGHT = Platform.OS === "ios" ? 64 : 50;
const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT;
const THEME_COLOR = "rgba(85,186,255, 1)";
const FADED_THEME_COLOR = "rgba(85,186,255, 0.8)";

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
    {/*<View onLayout={({nativeEvent: {layout: {height}}}) => {
            heights[i] = height;
            if (state.activeTab === i) state.height = height
        }}>*/}
        {/*{new Array(x).fill(null).map((_, i) => <Item key={i}><Text>Item {i}</Text></Item>)}*/}
        <Text>
            Hello
        </Text>
    {/*</View>*/}

        </View>;
    heights = [500, 500];
    state = {
        activeTab: 0,
        height: 1000
    };

    nScroll.addListener(Animated.event([{value: scroll}], {useNativeDriver: false}));

    return (
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
                    {tabContent(30, 0)}
                </Tab>
                <Tab heading="Detail Harga">
                    {tabContent(15, 1)}
                </Tab>
            </Tabs>
        </Animated.ScrollView>
    </View>
)
}
