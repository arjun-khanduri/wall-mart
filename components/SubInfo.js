import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const Title = () => {
    return (
        <View>
            <Text>SubInfo</Text>
        </View>
    )
}

export const People = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {
                [assets.person02, assets.person03, assets.person04].map((src, index) => (
                    <ImageComponent src={src} index={index} key={`People-${index}`} />
                ))}
        </View>
    )
}

export const ImageComponent = ({ src, index }) => {
    return (
        <Image
            source={src}
            resizeMode='contain'
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -SIZES.font
            }}
        />
    )
}

export const SubInfo = () => {
    return (
        <View style={{
            width: '100%',
            paddingHorizontal: SIZES.font,
            marginTop: -SIZES.extraLarge,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}
        >
            <People />
            <Price />
        </View>
    )
}

export const Price = () => {
    return (
        <View style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 1,
            maxWidth: '50%',
            ...SHADOWS.light
        }}>
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.small,
                color: COLORS.primary,
                fontWeight: 'bold'
            }}>Price:</Text>
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.small,
                color: COLORS.primary
            }}>
                ₹ 1000
            </Text>
        </View>
    )
}