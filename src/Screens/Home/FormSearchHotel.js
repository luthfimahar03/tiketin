import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Icon, Content, Text, View } from 'native-base'
import Header from '../../Components/Base/Header'
import Carousel from '../../Components/Base/Carousel'

export default ({ navigation }) => {
    return (
        <>
            <Header
                title="Hotel"
                leftComponent={
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                }
            />
            <Carousel height={80} />
            <Content style={{ marginTop: -80, padding: 10 }}>
                <View style={styles.cardForm}>

                </View>
            </Content>
        </>
    )
}

const styles = StyleSheet.create({
    cardForm: {
        borderRadius: 10,
        backgroundColor: '#fff',
        height: 500
    }
})
