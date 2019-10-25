import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Button, Icon, Item, Input, Spinner, Toast } from 'native-base'
import Header from '../../Components/Base/Header'
import Color from '../../Assets/Color'
import Http from '../../Helpers/Http'

export default ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState()
    const [loading, showLoading] = useState(false)

    const resetPassword = () => {
        showLoading(true)
        Http.post('/users/reset-password', { email })
            .then(({ data }) => {
                setSuccess(`Sukses Mereset password, silahkan cek email anda di ${email.toLowerCase()}!`)
            })
            .catch(err => {
                Toast.show({
                    position: 'bottom',
                    type: 'danger',
                    text:
                        err.message === 'Network Error'
                            ? 'Tidak dapat menjangkau koneksi internet!'
                            : err.response.data.message
                })
            })
            .finally(() => showLoading(false))
    }

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
                    <Input
                        placeholder="Email yang terdaftar"
                        onChangeText={value => setEmail(value)}
                    />
                </Item>
                <Button block style={styles.btnReset} onPress={resetPassword}>
                    {
                        loading
                            ? <Spinner color={Color.Base} />
                            : <Text style={{ color: Color.Base }}>Reset Password</Text>
                    }
                </Button>
                <Text style={styles.success}>{success}</Text>
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
    },
    success: {
        color: 'blue',
        textAlign: 'center',
        marginTop: 10
    }
})
