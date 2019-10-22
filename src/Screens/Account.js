import React, { useState, useEffect } from 'react'
import {StyleSheet, Image} from 'react-native'
import { Container, View, Header, Card, CardItem, Form, Item, Input, Label, Left, Content, Body, Right, Button, Icon, Title, Text } from 'native-base'
import facebook from '../Assets/Images/facebook.png'
import google from '../Assets/Images/google.png'

export default ({ navigation }) => {
  const [SecureText, setSecureText] = useState(true)
  const [IconName, setIcon] = useState('eye')

  const hideUnhide = () => {
    setSecureText(!SecureText)
    if (IconName === 'eye') {
      setIcon('eye-off')
    } else {
      setIcon('eye')
    }
  }

  return (
    <>
    <Header style={{backgroundColor: '#0164D3'}}>
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
      <View style={{paddingVertical: 15, paddingHorizontal: 30}}>
        <Text style={styles.titleStyle}>Log in untuk memesan lebih cepat, dan mendapat promo eksklusif lainnya</Text>
        <Form>
          <Item rounded style={styles.inputStyle}>
            <Input placeholder='example@example.com' />
          </Item>
          <Item rounded style={styles.inputStyle}>
            <Input placeholder='********' secureTextEntry={SecureText}/>
            <Button transparent onPress={() => hideUnhide()}>
              <Icon type='Feather' name={IconName} style={{color:'#a9a9a9'}}/>
            </Button>
          </Item>
        </Form>
        <View style={{flex: 1, flexWrap: 'wrap', paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <View>
            <Text style={{fontSize: 14, color: "#0653ff"}}>Lupa kata sandi?</Text>
          </View>
        </View>
        <View>
          <Button rounded style={{justifyContent: 'center', elevation: 0, backgroundColor: '#FBDE06', marginVertical: 25, padding: 10}}>
            <Text style={{fontSize: 18, color: '#0164D3'}}>Login</Text>
          </Button>
        </View>
        <View style={{flex:1, flexWrap:'wrap', marginVertical: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
          <View>
            <Text style={{color: 'grey'}}>
              atau dengan
            </Text>
          </View>
        </View>
        <View style={{flex:1, flexWrap:'wrap', marginVertical: 30, flexDirection: 'row', justifyContent: 'center'}}>
          <Card style={{width: '95%'}}>
            <CardItem>
              {/*<Icon active name="logo-google" />*/}
              <Image source={google} style={{width: 20, height: 20, marginRight: 10}} />
              <Text>Google</Text>
            </CardItem>
            <CardItem>
              <View
                style={{
                  alignSelf: 'stretch',
                  width: '100%',
                  borderBottomColor: '#9f9f9f',
                  backgroundColor: 'red',
                  borderBottomWidth: StyleSheet.hairlineWidth
                }}
                />
            </CardItem>
            <CardItem>
              {/*<Icon active name="logo-facebook" />*/}
              <Image source={facebook} style={{width: 20, height: 20, marginRight: 10}} />
              <Text>Facebook</Text>
            </CardItem>
          </Card>
        </View>
        <View style={{flex:1, flexWrap:'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
          <View>
            <Text>
              Belum punya akun? <Text style={{color:'#0164D3'}}>DAFTAR</Text>
          </Text>
        </View>
      </View>
    </View>
  </Content>
  </>
)
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal: 5,
    // backgroundColor: 'green'
  },
  inputStyle: {
    marginVertical: 15,
    // marginHorizontal: 20,
    // backgroundColor: 'red',
    paddingHorizontal: 10,
  }
})
