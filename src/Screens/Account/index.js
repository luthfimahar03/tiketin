import React from 'react'
import { Text, View, Button } from 'native-base'
import Header from '../../Components/Base/Header'

export default ({ navigation }) => {
    return (
        <>
            <Header
                title="Akun"
                rightComponent={
                    <Button transparent>
                        <Text>Logout</Text>
                    </Button>
                }
            />
            <Text>Tampilan Account</Text>
        </>
    )
}
