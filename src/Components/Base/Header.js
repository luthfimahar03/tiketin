import React from 'react'
import { StyleSheet } from 'react-native'
import { Header, Body, Right, Left, Title } from 'native-base'
import { Base } from '../../Assets/Color'

export default props => (
    <Header style={{ backgroundColor: props.color || Base }}>
        <Left style={styles.headerContent}>{props.leftComponent || false}</Left>
        <Body style={{ ...styles.headerContent, alignItems: 'center' }}>
            {props.centerComponent || <Title>{props.title}</Title>}
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
