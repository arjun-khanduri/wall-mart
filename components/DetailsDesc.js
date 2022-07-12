import { View, Text } from 'react-native'
import { useState } from 'react'

import { Title } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({ data }) => {
  const [descText, setDescText] = useState(data.description.length > 100 ? data.description.slice(0, 100) + '...' : data.description);
  const [showMore, setShowMore] = useState(false);

  const handlePressDescription = () => {
    setShowMore(!showMore);
    setDescText(showMore ? data.description.slice(0, 100) + '...' : data.description);
  }

  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Title
          title={data.name}
          subTitle={data.artist}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
      </View>
      <View style={{
        marginVertical: SIZES.extraLarge * 1.5
      }}>
        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary
        }}>Description</Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>
            {descText}
            {descText.length > 100 && (
              <Text style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
                lineHeight: SIZES.large
              }}
                onPress={handlePressDescription}
              >
                {showMore ? ' Show Less' : 'Show More'}
              </Text>
            )}
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc