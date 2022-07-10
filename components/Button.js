import { TouchableOpacity, View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES, FONTS } from '../constants'

export const CircleButton = ({ handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: 'absolute',
                borderRadius: SIZES.extraLarge,
                alignItems: 'center',
                justifyContent: 'center',
                ...props,
                ...SHADOWS.light,

            }}
            onPress={handlePress}
        >
            <Image
                source={props.src}
                resizeMode='contain'
                style={{ width: 24, height: 24 }}
            />
        </TouchableOpacity>
    )
}

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.extraLarge,
                width: minWidth,
                padding: SIZES.small,
                ...props,
            }}
            onPress={handlePress}
        >
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: fontSize,
                color: COLORS.white,
                textAlign: 'center'
            }}>
                View Details
            </Text>
        </TouchableOpacity>
    )
}