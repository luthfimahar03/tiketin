import React from 'react'
import { Root, Container } from 'native-base'
import Navigator from './Navigator'

export default () => {
    return (
        <Root>
            <Container>
                <Navigator />
            </Container>
        </Root>
    )
}