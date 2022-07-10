import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';

const ModStatusBar = (props) => {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar animated={true} {...props} /> : null;
}

export default ModStatusBar