import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton } from './Button';
import { SubInfo, Price, Title } from './SubInfo';

const Card = ({ data }) => {
    const navigation = useNavigation();
    return (
        <View style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark
        }}>
            <View style={{ width: '100%', height: 250 }}>
                <Image
                    source={data.image}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font
                    }}
                />
                <CircleButton src={assets.heart} right={10} top={10} />
            </View>
            <SubInfo price={data.price}/>
            <View style={{
                width: '100%',
                padding: SIZES.font
            }}>
                <Title
                    title={data.name}
                    subTitle={data.artist}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.small}
                />
            </View>
        </View>
    )
}

export default Card