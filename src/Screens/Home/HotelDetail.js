import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native'
import { Icon, Badge, Button } from 'native-base'
import Carousel from '../../Components/Base/Carousel'

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default (props) => {
    let state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
    };

  const _renderScrollViewContent = () => {
    const data = Array.from({ length: 30 });
    return (
      <View style={styles.scrollViewContent}>
          <View style={{width: '100%', padding: 15, flexWrap: 'wrap', flexDirection: 'row', backgroundColor: '#ebebeb'}}>
              <Icon name='warning' type='FontAwesome' style={{fontSize: 15, color: '#ff1046', width: '10%', padding: 10}} />
              <Text style={{fontSize: 20, color: '#ff1046', width:'90%'}}>Sisa 1. Suka kamar ini? Cepat pesan</Text>
          </View>
          <View style={{width: '100%', marginTop: 20}}>
              <Text style={{fontSize: 25, width:'100%'}}>Cempaka 5 Villa Dago Private Pool</Text>
          </View>
          <View style={{width: '100%', flexDirection: 'row', marginVertical: 10}}>
              <Icon type='AntDesign' name='star' style={{fontSize:20, color: '#f7fc3a'}} />
              <Icon type='AntDesign' name='star' style={{fontSize:20, color: '#f7fc3a'}} />
              <Icon type='AntDesign' name='star' style={{fontSize:20, color: '#f7fc3a'}} />
              <Icon type='AntDesign' name='star' style={{fontSize:20, color: '#f7fc3a'}} />
              <Icon type='AntDesign' name='star' style={{fontSize:20, color: '#f7fc3a'}} />
              <Text style={{fontSize: 18}}>{'  '} Villa Cimenyan</Text>
          </View>
          <View style={{width: '100%', padding: 20}}>
              <View
                  style={{
                      alignSelf: 'stretch',
                      width: '100%',
                      borderBottomColor: '#9f9f9f',
                      borderBottomWidth: StyleSheet.hairlineWidth
                  }}
              />
          </View>
          <View style={{padding: 20, width: '100%'}}>
              <Text style={{fontSize: 20}}>
                  Fasilitas
              </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{width: '100%', padding: 20, flexDirection: 'row'}}>
              <TouchableOpacity
                  style={{
                      borderWidth:1,
                      borderColor:'rgba(0,0,0,0.2)',
                      alignItems:'center',
                      justifyContent:'center',
                      width:100,
                      marginHorizontal: 10,
                      height:100,
                      backgroundColor:'#fff',
                      borderRadius:50,
                  }}
                  >
                  <Icon name={"parking"} type="FontAwesome5"  size={30} color="#01a699" />
                  <Text>Tempat parkir</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={{
                      borderWidth:1,
                      borderColor:'rgba(0,0,0,0.2)',
                      alignItems:'center',
                      justifyContent:'center',
                      width:100,
                      marginHorizontal: 10,
                      height:100,
                      backgroundColor:'#fff',
                      borderRadius:50,
                  }}
                  >
                  <Icon name={"swimming-pool"} type="FontAwesome5" size={30} color="#01a699" />
                  <Text>Pool</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={{
                      borderWidth:1,
                      borderColor:'rgba(0,0,0,0.2)',
                      alignItems:'center',
                      justifyContent:'center',
                      width:100,
                      marginHorizontal: 10,
                      height:100,
                      backgroundColor:'#fff',
                      borderRadius:50,
                  }}
                  >
                  <Icon name={"wifi"} type="FontAwesome5" size={30} color="#01a699" />
                  <Text>Wifi</Text>
              </TouchableOpacity>
          </ScrollView>
          <View style={{width: '100%', padding: 20}}>
              <Text style={{fontSize: 15}}>Lihat Semua Fasilitas</Text>
          </View>
          <View style={{width: '100%', padding: 20}}>
              <Text style={{fontSize: 20}}>Tentang Hotel Ini</Text>
          </View>
          <View style={{width: '100%', padding: 20}}>
              <Text style={{fontSize: 18}}>lkajfdlkadsjf;lksajfd;ajfd;lkadsjf;lkajfd;lasjaslkdjaslkdjsalkdjsalkdjalksdlkasjdf;lkajfd;lkjas;lkfjasjsadf</Text>
          </View>
          <View style={{width: '100%', padding: 20}}>
              <Text style={{fontSize: 20}}>Harga</Text>
          </View>
          <View style={{width: '100%', paddingHorizontal: 20}}>
              <Text style={{fontSize: 20, color: '#0065D1'}}>Dari: {' '} IDR 624.000 /Kamar/Malam</Text>
          </View>
          <Button
              block
              style={styles.btnSearch}
              onPress={() => props.navigation.navigate('ListKamar')}
          >
              <Text style={{ fontWeight: 'bold', color: 'white' }}>
                  Pilih Kamar
              </Text>
          </Button>
      </View>
    );
  }

    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
      state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.9],
      extrapolate: 'clamp',
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.fill}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: state.scrollY } } }],
            { useNativeDriver: true },
          )}
          refreshControl={
            <RefreshControl
              refreshing={state.refreshing}
              onRefresh={() => {
                state.refreshing = true
                setTimeout(() => state.refreshing = false, 1000);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          {_renderScrollViewContent()}
        </Animated.ScrollView>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] },
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={require('../../Assets/Images/rk.jpg')}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.bar,
            {
              transform: [
                { scale: titleScale },
                { translateY: titleTranslate },
              ],
            },
          ]}
        >
        <View style={{flex: 1, width: '100%', paddingHorizontal: 20}}>
            <Button transparent>
                <Icon
                    onPress={() => props.navigation.goBack()}
                    name="arrow-back"
                    style={{ color: 'white' }}
                    />
            </Button>
        </View>
        </Animated.View>
      </View>
  )
}


const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  btnSearch: {
      margin: 20,
      borderRadius: 30,
      backgroundColor: '#FC7400'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
    padding: 10,
    marginTop: 20
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
