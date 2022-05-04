import React, { useState } from 'react';
import { Image } from 'react-native';
import images from '../images';

export const ProgressiveImage = ({ style, imageuri }) => {
    var [showDefault, setShowDefault] = useState(true)
    var [error, setError] = useState(false)
    var image = showDefault || error || (imageuri == "") ? images.emptyCart : { uri: imageuri };
    return (
        <Image style={style}
            source={image}
            onLoadEnd={() => { setShowDefault(false) }}
            onError={() => setError(true)}
        />
    )
}