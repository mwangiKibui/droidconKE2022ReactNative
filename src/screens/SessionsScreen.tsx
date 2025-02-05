import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Text } from "react-native";
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';

const SessionsScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.SESSIONS, undefined>) => {
    return (
        <>
            <Text>Sessions screen</Text>
        </>
    )
};

export default SessionsScreen;