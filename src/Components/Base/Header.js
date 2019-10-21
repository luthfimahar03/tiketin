import React from 'react'
import { StyleSheet } from 'react-native'
import { Header, Body, Right, Left, Title } from 'native-base'
import { Primary } from '../../Assets/Color'

export default props => (
    <Header style={{ color: props.color || Primary }}>
        <Left style={styles.headerContent}>
            {props.leftComponent || <Title>{props.title}</Title>}
        </Left>
        <Body style={{ ...styles.headerContent, alignItems: 'center' }}>
            {props.centerComponent || false}
        </Body>
        <Right style={styles.headerContent}>
            {props.rightComponent || false}
        </Right>
    </Header>
)

const styles = StyleSheet.create({
    headerContent: {
        flex: 1,
        paddingHorizontal: 5
    }
})
