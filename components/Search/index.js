import React from 'react';
import {TouchableOpacity, Text, View, TextInput, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ImagesUrl} from '../../config/ImagesUrl';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Search(props) {
  const {navigation, source, target, route} = props;

  return (
    <View style={styles.searchModuleContainer}>
      <View style={styles.containerTitle}>
        <Text style={styles.infoText}>Le Dictionnaire pratique</Text>
        <Text style={styles.infoTitle}>Français - Lingala - Sango</Text>
      </View>
      <TouchableOpacity
        style={styles.containerSearch}
        onPress={() => {
          console.log(
            navigation.navigate('Autocomplete', {
              source: source,
              target: target,
            }),
          );
        }}>
        {/* onSubmitEditing : validation text par le clavier*/}

        <View style={{flex: 4}}>
          <Text
            style={[
              styles.textinput,
              route.params ? styles.textinputSetted : null,
            ]}>
            {route.params ? route.params.definition : 'Barre de recherche'}
          </Text>
          <View style={styles.searchSelect}>
            <View style={styles.searchItem}>
              <Text style={styles.translationText}>
                {source === 'french' ? 'Français' : source}
              </Text>
              <Icon name="caret-down" size={25} color={'#061646'} />
            </View>
            <View style={styles.searchArrow}>
              <View>
                <Image source={ImagesUrl.arrow} />
              </View>
            </View>
            <View style={styles.searchItem}>
              <Text style={styles.translationText}>
                {target === 'french' ? 'Français' : target}
              </Text>
              <Icon name="caret-down" size={25} color={'#061646'} />
            </View>
          </View>
        </View>
        <View>
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.gradient}>
            <Text style={styles.buttonText}>Chercher</Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    </View>
  );
}
