import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet } from 'react-native'
import {
    Button,
    Icon,
    Content,
    Item,
    View,
    Input,
    Picker,
    Label,
    Text,
    Toast,
    Spinner
} from 'native-base'
import { register, login } from '../../Redux/Actions/Auth'
import Header from '../../Components/Base/Header'
import Color from '../../Assets/Color'
import Http from '../../Helpers/Http'

export default ({ navigation }) => {
    const dispatch = useDispatch()
    const isLoading = useSelector(({ auth }) => auth.isLoading)
    const [country, setCountry] = useState([])
    const [callingCode, setCallingCode] = useState('62')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        Http.get('https://country.sutanlab.id/country.json')
            .then(({ data }) => {
                setCountry(data.filter(item => item.calling_code.length > 0))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleRegister = () => {
        const data = {
            email,
            password,
            num_phone: `${callingCode}${phone}`,
            first_name: firstName,
            last_name: lastName
        }
        dispatch(register(data))
            .then(() => {
                Toast.show({
                    type: 'success',
                    position: 'bottom',
                    text: 'Berhasil register!'
                })
                return dispatch(login({ email, password }))
            })
            .then(({ value }) => {
                Toast.show({
                    type: 'success',
                    position: 'bottom',
                    text: 'Berhasil login!'
                })
                Http.defaults.headers.common.authorization = `Bearer ${value.data.token}`
                navigation.navigate('Home')
            })
            .catch(err => {
                Toast.show({
                    type: 'danger',
                    position: 'bottom',
                    text:
                        err.message === 'Network Error'
                            ? 'Tidak ada koneksi internet!'
                            : err.response.data.message
                })
            })
    }

    return (
        <>
            <Header
                title="Daftar"
                leftComponent={
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                }
            />
            <Content>
                <View style={{ padding: 15 }}>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input onChangeText={value => setEmail(value)} />
                    </Item>
                    <Item floatingLabel style={{ marginTop: 15 }}>
                        <Label>Nama Depan</Label>
                        <Input onChangeText={value => setFirstName(value)} />
                    </Item>
                    <Item floatingLabel style={{ marginTop: 15 }}>
                        <Label>Nama Belakang</Label>
                        <Input onChangeText={value => setLastName(value)} />
                    </Item>
                    <View style={styles.phoneContainer}>
                        <View style={{ flex: 4 }}>
                            <Item picker>
                                <Picker
                                    placeholder="Kode Negara"
                                    selectedValue={callingCode}
                                    onValueChange={value => {
                                        setCallingCode(value)
                                    }}
                                >
                                    {country.map(item => (
                                        <Picker.Item
                                            key={item.code}
                                            label={`${item.calling_code} | ${item.code}`}
                                            value={item.calling_code}
                                        />
                                    ))}
                                </Picker>
                            </Item>
                        </View>
                        <View style={{ flex: 6 }}>
                            <Item floatingLabel>
                                <Label>Nomor Ponsel</Label>
                                <Input
                                    onChangeText={value => setPhone(value)}
                                />
                            </Item>
                        </View>
                    </View>
                    <Item floatingLabel style={{ marginTop: 15 }}>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry
                            onChangeText={value => setPassword(value)}
                        />
                    </Item>
                    <Button
                        block
                        style={styles.btnSearch}
                        onPress={() => handleRegister()}
                    >
                        {
                            isLoading
                                ? <Spinner color={Color.Base} />
                                : <Text style={{ fontWeight: 'bold', color: Color.Base }}>Register</Text>
                        }
                    </Button>
                </View>
            </Content>
        </>
    )
}

const styles = StyleSheet.create({
    phoneContainer: {
        flexDirection: 'row',
        marginTop: 15,
        width: '100%'
    },
    btnSearch: {
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: Color.Primary
    }
})
