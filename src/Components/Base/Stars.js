import React from 'react'
import { Icon } from 'native-base'

export default ({ count }) => {
    const stars = []
    for (let i = 0; i < count; i++) stars.push(count)
    return stars.map((item, idx) => (
        <Icon
            type="AntDesign"
            name="star"
            style={{ fontSize: 20, color: '#FFDF00' }}
        />
    ))
}
