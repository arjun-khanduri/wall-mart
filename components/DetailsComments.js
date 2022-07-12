import { View, Text, Image } from 'react-native'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailComments = ({ user }) => {
  return (
    <View style={{
      margin: SIZES.small + 2
    }}>
      <Image
        source={user.image}
        resizeMode='contain'
        style={{
          width: 48,
          height: 48,
        }} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary
          }}>
            {user.name}
          </Text>
          <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3
          }}>
            {user.date}
          </Text>
        </View>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small + 2,
          color: COLORS.primary,
          fontStyle: 'italic',
          maxWidth: 170
        }}>
          "{user.comment}"
        </Text>
      </View>
    </View>
  )
}

export default DetailComments