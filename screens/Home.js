import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';

import { COLORS, Data } from '../constants';
import { Card, HomeHeader, ModStatusBar } from '../components';

const Home = () => {
    const [data, setData] = useState(Data);
    const handleSearch = (value) => {
        if (!value.length)
            setData(Data)
        const filteredData = Data.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase()));
        setData(filteredData);
    }
    return (
        <SafeAreaView style={{ flex: 2 }}>
            <ModStatusBar background={COLORS.primary} />
            <View style={{ flex: 2 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <Card data={item} />}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                    />
                </View>

                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: -1,
                }}>
                    <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home