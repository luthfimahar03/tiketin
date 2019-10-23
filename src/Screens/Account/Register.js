import React, { useState, useEffect } from 'react'
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
    Text
} from 'native-base'
import Header from '../../Components/Base/Header'
import Color from '../../Assets/Color'
import Http from '../../Helpers/Http'

export default ({ navigation }) => {
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
                        <Input />
                    </Item>
                    <Item floatingLabel style={{ marginTop: 15 }}>
                        <Label>Nama Depan</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={{ marginTop: 15 }}>
                        <Label>Nama Belakang</Label>
                        <Input />
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
                                <Input />
                            </Item>
                        </View>
                    </View>
                    <Button block style={styles.btnSearch}>
                        <Text style={{ fontWeight: 'bold', color: Color.Base }}>
                            Register
                        </Text>
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
