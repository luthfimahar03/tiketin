import React from 'react'
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Button, Icon, Header, Text, Tabs, ScrollableTab, Tab, TabHeading, View } from 'native-base'
import BaseHeader from './Header'
import Color from '../../Assets/Color'

const TabComponent = ({ text, icon, active, onPress }) => (
    <TouchableOpacity
        style={styles.cardTab}
        onPress={() => (onPress ? onPress() : false)}
    >
        <Icon type="FontAwesome" name={icon} style={{ fontSize: 14, color: active ? Color.Primary : Color.Base }} />
        <Text style={{ fontSize: 14, marginTop: 5, color: Color.Base }}>{text}</Text>
    </TouchableOpacity>
)

export default ({ navigation }) => {
    const nav = navigation.state.index
    const routes = [
        { text: 'Semua', icon: 'certificate', key: 'MyOrder' },
        { text: 'Hotel', icon: 'hotel', key: 'HotelOrders' },
        { text: 'Mobil', icon: 'car', key: 'CarOrders' }
    ]
    return (
        <>
            <BaseHeader
                title="My Order"
                rightComponent={
                    <>
                        <Button transparent onPress={() => false}>
                            <Icon type="Ionicons" name="ios-paper" />
                        </Button>
                    </>
                }
            />
            <View style={{ paddingHorizontal: 10, backgroundColor: Color.Base }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingVertical: 20 }}
                >
                    {routes.map((item, i) => (
                        <TabComponent
                            key={i}
                            text={item.text}
                            icon={item.icon}
                            active={nav === i}
                            onPress={() => navigation.navigate(item.key)}
                        />
                    ))}
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardTab: {
        width: 95,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 8,
        backgroundColor: 'rgba(255, 255, 255, .75)'
    }
})
