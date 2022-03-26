import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';
import {ImagesUrl} from '../../config/ImagesUrl';

export default function ProfileDescription(props) {
  const {style, image, styleThumb, onPress, name, subName} = props;
  return (
    <TouchableOpacity
      style={[styles.contain, style]}
      onPress={onPress}
      activeOpacity={0.9}>
      <Image style={[styles.thumb, styleThumb]} source={image} />
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={{color: '#013640'}}>{subName}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumb: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  name: {
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    color: '#061646',
    textAlign: 'center',
    marginBottom: 1,
  },
});

ProfileDescription.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  image: PropTypes.node.isRequired,
  name: PropTypes.string,
  subName: PropTypes.string,
  description: PropTypes.string,
  styleThumb: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,
};

ProfileDescription.defaultProps = {
  image: '',
  name: '',
  subName: '',
  description: '',
  styleThumb: {},
  onPress: () => {},
  style: {},
};
