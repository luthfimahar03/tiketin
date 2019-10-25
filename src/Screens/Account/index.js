/* eslint-disable no-alert */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View, Button } from 'native-base'
import { ConfirmDialog } from 'react-native-simple-dialogs'
import { logout } from '../../Redux/Actions/Auth'
import Header from '../../Components/Base/Header'
import Login from '../../Components/Screens/Login'

export default ({ navigation }) => {
    const isLoggedIn = useSelector(({ auth }) => auth.loggedIn)
    const dispatch = useDispatch()
    const [modal, showModal] = useState(false)

    if (!isLoggedIn) {
        return <Login navigation={navigation} />
    }

    return (
        <>
            <ConfirmDialog
                title="Logout"
                message="Are you sure want to logout?"
                visible={modal}
                onTouchOutside={() => showModal(false)}
                positiveButton={{
                    title: 'Logout',
                    onPress: () => dispatch(logout())
                }}
                negativeButton={{
                    title: 'Cancel',
                    onPress: () => showModal(false)
                }}
            />

            <Header
                title="Akun"
                rightComponent={
                    <Button transparent onPress={() => showModal(true)}>
                        <Text>Logout</Text>
                    </Button>
                }
            />
        </>
    )
}
