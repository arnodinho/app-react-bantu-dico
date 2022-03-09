import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

export default function LoadingScreen(props) {
  const {style} = props;
  return (
    <View style={[styles.loading_container, style]}>
      <ActivityIndicator size="large" />
    </View>
  );
}
