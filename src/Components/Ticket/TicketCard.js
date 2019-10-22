import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View, Thumbnail } from 'native-base'

export default ({ text, source, onPress }) => (
    <View style={styles.ticketCol}>
        <TouchableOpacity onPress={event => (onPress ? onPress(event) : false)}>
            <View style={styles.ticketCard}>
                <Thumbnail
                    square
                    style={{ width: 50, height: 50 }}
                    source={source}
                />
                <Text style={{ fontSize: 12 }}>{text}</Text>
            </View>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    ticketCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 5,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ticketCol: {
        width: '33.3333333333%',
        paddingHorizontal: 5,
        paddingVertical: 10
    }
})
