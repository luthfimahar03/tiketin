import React from 'react'
import { StyleSheet } from 'react-native'
import { Header, Body, Right, Left, Title } from 'native-base'
import { Base } from '../../Assets/Color'

const HeaderContent = props => {
    if (props.detail) {
        return (
            <>
                <Left style={{ flex: 1 }}>{props.leftComponent || false}</Left>
                <Body style={{ ...styles.headerContent }}>
                    {props.centerComponent || <Title>{props.title}</Title>}
                </Body>
                <Right style={{ flex: 1 }}>
                    {props.rightComponent || false}
                </Right>
            </>
        )
    }
    return (
        <>
            <Left style={styles.headerContent}>
                {props.leftComponent || false}
            </Left>
            <Body style={{ ...styles.headerContent, alignItems: 'center' }}>
                {props.centerComponent || <Title>{props.title}</Title>}
            </Body>
            <Right style={styles.headerContent}>
                {props.rightComponent || false}
            </Right>
        </>
    )
}

export default props => (
    <Header style={{ height: props.height || 50, backgroundColor: props.color || Base }}>
        <HeaderContent {...props} />
    </Header>
)

const styles = StyleSheet.create({
    headerContent: {
        flex: 5,
        paddingHorizontal: 5
    }
})
