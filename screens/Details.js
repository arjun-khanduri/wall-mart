import {
    View,
    Text,
    SafeAreaView,
    Image,
    StatusBar,
    FlatList
} from 'react-native';

import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import {
    CircleButton,
    RectButton,
    SubInfo,
    ModStatusBar,
    DetailsDesc,
    DetailsComments
} from '../components';
import React from 'react';

const DetailsHeader = ({ data, navigation }) => (
    <View style={{ width: '100%', height: 373 }}>
        <Image
            source={data.image}
            resizeMode="cover"
            style={{ width: '100%', height: '100%' }}
        />
        <CircleButton
            src={assets.heart}
            right={15}
            top={15} />
    </View>
)


const Details = ({ route, navigation }) => {
    const { data } = route.params
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ModStatusBar
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent={true}
            />
            <View style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                paddingVertical: SIZES.font,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(255,255,255,0.5)',
                flexDirection: 'row',
                zIndex: 1
            }}>
                <RectButton
                    minWidth={150}
                    fontSize={SIZES.large}
                    {...SHADOWS.dark}
                    text={'Comment'} />
                <RectButton
                    minWidth={150}
                    fontSize={SIZES.large}
                    {...SHADOWS.dark}
                    text={'Buy Picture'} />
            </View>
            <FlatList
                data={data.comments}
                renderItem={({ item }) => (<DetailsComments comment={item} />)}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
                ListHeaderComponent={() => (
                    <React.Fragment>
                        <DetailsHeader data={data} navigation={navigation} />
                        <SubInfo price={data.price} />
                        <View style={{
                            padding: SIZES.font
                        }}>
                            <DetailsDesc data={data} />
                        </View>
                    </React.Fragment>
                )}
            />
        </SafeAreaView>
    )
}

export default Details