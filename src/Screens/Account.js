import React from 'react'
import { Button, Icon, Title, Text } from 'native-base'

export default ({ navigation }) => {
    return (
        <>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Masuk</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={{padding: 20}}>
            <Text>Log in untuk memesan lebih cepat, dan mendapat promo eksklusif lainnya</Text>
          </View>
        </Content>
        </>
    )
}
