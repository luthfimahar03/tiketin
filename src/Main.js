import React, { useEffect } from 'react'
import { Root, Container } from 'native-base'
import OneSignal from 'react-native-onesignal'
import SplashScreen from 'react-native-splash-screen'
import { ONESIGNAL_APP_ID } from 'react-native-dotenv'
import Navigator from './Navigator'

const onOpened = result => {
    console.log('Message: ', result.notification.payload.body)
    console.log('Data: ', result.notification.payload.additionalData)
    console.log('isActive: ', result.notification.isAppInFocus)
    console.log('openResult: ', result)
}

const onIds = device => {
    console.log('Device info: ', device)
}

const onReceived = notification => {
    console.log('Notification received:', notification)
}

export default () => {
    OneSignal.init(ONESIGNAL_APP_ID)
    OneSignal.addEventListener('received', onReceived)
    OneSignal.addEventListener('opened', onOpened)
    OneSignal.addEventListener('ids', onIds)

    useEffect(() => {
        SplashScreen.hide()
        return () => {
            OneSignal.removeEventListener('received', onReceived)
            OneSignal.removeEventListener('opened', onOpened)
            OneSignal.removeEventListener('ids', onIds)
        }
    }, [])

    return (
        <Root>
            <Container>
                <Navigator />
            </Container>
        </Root>
    )
}
