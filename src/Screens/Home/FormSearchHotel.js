import React from 'react'
import { Button, Icon } from 'native-base'
import Header from '../../Components/Base/Header'
import Carousel from '../../Components/Base/Carousel'

export default ({ navigation }) => {
    return (
        <>
            <Header
                title="Hotel"
                leftComponent={
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                }
            />
        </>
    )
}
