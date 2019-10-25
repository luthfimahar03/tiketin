import React, { Component } from 'react'
import OneSignal from 'react-native-onesignal'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ONESIGNAL_APP_ID } from 'react-native-dotenv'
import redux from './Redux'
import Main from './Main'

const { store, persistor } = redux()

export default class extends Component {
    constructor(props) {
        super(props)
        OneSignal.init(ONESIGNAL_APP_ID)
        OneSignal.addEventListener('received', this.onReceived)
        OneSignal.addEventListener('opened', this.onOpened)
        OneSignal.addEventListener('ids', this.onIds)
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived)
        OneSignal.removeEventListener('opened', this.onOpened)
        OneSignal.removeEventListener('ids', this.onIds)
    }

    onReceived(notification) {
        console.log('Notification received:', notification)
    }

    onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body)
        console.log('Data: ', openResult.notification.payload.additionalData)
        console.log('isActive: ', openResult.notification.isAppInFocus)
        console.log('openResult: ', openResult)
    }

    onIds(device) {
        console.log('Device info: ', device)
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Main />
                </PersistGate>
            </Provider>
        )
    }
}