import React from 'react'
import { Image, Dimensions, StyleSheet } from 'react-native'
import { View, Text, Button } from 'native-base'
import Color from '../../Assets/Color'

export default ({ navigate, navigationKey }) => {
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={require('../../Assets/Images/login.jpeg')}
                    style={styles.image}
                />
                <Text style={styles.textTitle}>
                    Log in untuk atur pesanan dengan mudah
                </Text>
                <Text style={{ textAlign: 'center', marginTop: 5 }}>
                    Setelah log in, kamu akan melihat semua pesanan dan
                    E-tiketmu disini
                </Text>
                <Button
                    block
                    style={styles.btnLogin}
                    onPress={() => navigate('Account')}
                >
                    <Text style={{ color: Color.Base }}>LOG IN</Text>
                </Button>
                <Button
                    transparent
                    style={{ marginTop: 15 }}
                    onPress={() => navigate(navigationKey)}
                >
                    <Text style={{ color: Color.Base }}>PESAN PERJALANAN</Text>
                </Button>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    image: {
        width: '100%',
        height: Math.round(Dimensions.get('screen').height * 0.4)
    },
    textTitle: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnLogin: {
        marginTop: 20,
        backgroundColor: Color.Primary,
        borderRadius: 15
    }
})
