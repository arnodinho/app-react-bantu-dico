import React from 'react';
import {TouchableOpacity, Platform, Share} from 'react-native';
import styles from './styles';
import {Parameter} from '../../config/Parameter';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ShareButton(props) {
  const {size, name, style, color} = props;
  const linked = Platform.OS === 'android' ? Parameter.android : Parameter.ios;

  return (
    <TouchableOpacity
      style={[styles.share_touchable_floatingactionbutton, style]}
      onPress={() =>
        Share.share({
          title: 'Bantu-dico',
          message:
            'Hello !  Je te recommande cette application : Le dictionnaire pratique Français - Lingala - Sango ' +
            linked,
        })
      }>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}
