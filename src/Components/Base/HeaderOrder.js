import React from 'react'
import { Button, Icon } from 'native-base'
import Header from './Header'

export default props => (
    <>
        <Header
            title="My Order"
            rightComponent={
                <>
                    <Button
                        transparent
                        onPress={() =>
                            props.onPressHistory
                                ? props.onPressHistory()
                                : false
                        }
                    >
                        <Icon name="arrow-back" />
                    </Button>
                </>
            }
        />
    </>
)
