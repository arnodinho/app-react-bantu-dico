import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function Button(props) {
  const {onPress, name, style, loading, outline} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[style, styles.default]}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{name}</Text>
        {loading ? (
          <ActivityIndicator
            size="small"
            color={outline ? '#5DADE2' : '#FFFFFF'}
            style={styles.loadingContent}
          />
        ) : null}
      </LinearGradient>
    </TouchableOpacity>
  );
}
