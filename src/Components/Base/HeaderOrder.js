import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Icon, Header, Text, Tabs, ScrollableTab, Tab, TabHeading, View } from 'native-base'
import BaseHeader from './Header'
import Color from '../../Assets/Color'

const TabComponent = ({ text, icon }) => (
    <View style={styles.cardTab}>
        <Icon type="FontAwesome" name={icon} style={{ fontSize: 14 }} />
        <Text style={{ fontSize: 14 }}>{text}</Text>
    </View>
)

export default ({ navigation }) => (
    <>
        <BaseHeader
            title="My Order"
            rightComponent={
                <>
                    <Button
                        transparent
                        onPress={() => false}
                    >
                        <Icon type="Ionicons" name="ios-paper" />
                    </Button>
                </>
            }
        />
        <Header hasTabs style={{ backgroundColor: Color.Base, height: 80 }}>
            <Tabs
                renderTabBar={() => (
                    <ScrollableTab style={{ backgroundColor: Color.Base, height: 80 }} />
                )}
            >
                <Tab
                    heading={
                        <TabHeading style={{ backgroundColor: Color.Base }}>
                            <TabComponent text="Hotel" icon="hotel" />
                        </TabHeading>
                    }
                />
            </Tabs>
        </Header>
    </>
)

const styles = StyleSheet.create({
    cardTab: {
        width: 100,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, .75)'
    }
})