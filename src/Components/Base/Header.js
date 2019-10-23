import React from 'react'
import { StyleSheet } from 'react-native'
import { Header, Body, Right, Left, Title } from 'native-base'
import { Base } from '../../Assets/Color'

export default props => (
    <Header style={{ backgroundColor: props.color || Base }}>
        <Left style={{ flex: 1 }}>{props.leftComponent || false}</Left>
        <Body style={{ ...styles.headerContent }}>
            {props.centerComponent || <Title>{props.title}</Title>}
        </Body>
        <Right style={{ flex: 1 }}>{props.rightComponent || false}</Right>
    </Header>
)

const styles = StyleSheet.create({
    headerContent: {
        flex: 5,
        paddingHorizontal: 5
    }
})
