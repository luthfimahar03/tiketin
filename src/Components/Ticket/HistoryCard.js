import React from 'react'
import { Card, CardItem, Text, Body, Icon, View } from 'native-base'

export default ({ type, icon, content, onHeaderPress, onBodyPress }) => {
    return (
        <Card>
            <CardItem
                header
                button
                style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
                onPress={() => {
                    onHeaderPress ? onHeaderPress() : false
                }}
            >
                <Icon type="FontAwesome" name={icon} />
                <Text>{type}</Text>
            </CardItem>
            <CardItem
                button
                onPress={() => {
                    onBodyPress ? onBodyPress() : false
                }}
            >
                <Body>{content}</Body>
            </CardItem>
        </Card>
    )
}