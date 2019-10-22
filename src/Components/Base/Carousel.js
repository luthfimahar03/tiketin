import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'native-base'
import { SliderBox } from 'react-native-image-slider-box'
import Color from '../../Assets/Color'

export default ({ images = [], height = 250 }) => (
    <>
        <View style={styles.carouselWrapper}>
            <SliderBox circleLoop sliderBoxHeight={height} images={images} />
        </View>
    </>
)

const styles = StyleSheet.create({
    carouselWrapper: {
        backgroundColor: Color.Base,
        height: 250
    }
})
