import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Button, Icon, Item, Input } from 'native-base'
import Header from '../../Components/Base/Header'
import Color from '../../Assets/Color'

export default ({ navigation }) => {
    return (
        <>
            <Header
                title="Lupa Kata Sandi"
                leftComponent={
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                }
            />
            <View style={styles.containerForm}>
                <Text style={{ fontWeight: 'bold' }}>Lupa kata sandi?</Text>
                <Text style={{ marginVertical: 10 }}>
                    Jangan khawatir, Tuliskan email atau nomor ponsel untuk
                    mereset kata sandi baru.
                </Text>
                <Item regular style={styles.emailInput}>
                    <Input placeholder="Email yang terdaftar" />
                </Item>
                <Button block style={styles.btnReset}>
                    <Text style={{ color: Color.Base }}>Reset Password</Text>
                </Button>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    containerForm: {
        padding: 15
    },
    emailInput: {
        borderRadius: 10,
        marginTop: 10
    },
    btnReset: {
        marginVertical: 15,
        borderRadius: 20,
        backgroundColor: Color.Primary
    }
})
