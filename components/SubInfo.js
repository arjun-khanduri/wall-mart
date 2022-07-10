import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const Title = ({ title, subTitle, titleSize, subTitleSize }) => {
    return (
        <View>
            <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: titleSize,
                color: COLORS.primary
            }}>
                {title}
            </Text>
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: subTitleSize,
                color: COLORS.primary
            }}>
                {subTitle}
            </Text>
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

export const SubInfo = ({ price }) => {
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
            <Price price={price} />
        </View>
    )
}

export const Price = ({ price }) => {
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
                ₹ {price}
            </Text>
        </View>
    )
}