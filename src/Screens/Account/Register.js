import React from 'react'
import { StyleSheet } from 'react-native'
import {
    Button,
    Icon,
    Content,
    Item,
    View,
    Input,
    Label,
    Text
} from 'native-base'
import Header from '../../Components/Base/Header'
import Color from '../../Assets/Color'

export default ({ navigation }) => {
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
                            <Item floatingLabel>
                                <Label>Kode Negara</Label>
                                <Input />
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
