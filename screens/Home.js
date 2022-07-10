import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';

import { COLOR, COLORS, Data } from '../constants';
import { Card, HomeHeader, ModStatusBar } from '../components';

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 2 }}>
            <ModStatusBar background={COLORS.primary} />
        </SafeAreaView>
    )
}

export default Home