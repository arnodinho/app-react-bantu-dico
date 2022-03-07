import React from 'react';
import {TouchableOpacity, Text, View, TextInput, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';
import {ImagesUrl} from '../../config/ImagesUrl';
import styles from './styles';

export default function SearchAutocomplete(props) {
  const {onPress, name, style, loading, outline} = props;
  return (
    <View style={styles.searchModuleContainer}>
      <View style={styles.containerSearch}>
        {/* onSubmitEditing : validation text par le clavier*/}

        <View style={{flex: 4}}>
          <TextInput
            style={styles.textinput}
            placeholder="Barre de recherche"
            onChangeText={text => this._searchTextInputChanged(text)}
            autoFocus={true}
            onSubmitEditing={() => {
              onSubmit();
            }}
          />
          <View style={styles.searchSelect}>
            <View style={styles.searchItem}>
              <Picker selectedValue="sango" style={{height: 50, width: 125}}>
                <Picker.Item label="Français" value="french" />
                <Picker.Item label="Sango" value="sango" />
                <Picker.Item label="Lingala" value="lingala" />
              </Picker>
            </View>
            <View style={styles.searchArrow}>
              <View>
                <Image source={ImagesUrl.arrow} />
              </View>
            </View>
            <View style={styles.searchItem}>
              <Picker selectedValue="lingala" style={{height: 50, width: 135}}>
                <Picker.Item label="Français" value="french" />
                <Picker.Item label="Sango" value="sango" />
                <Picker.Item label="Lingala" value="lingala" />
              </Picker>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => {
            onSubmit();
          }}>
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.gradient}>
            <Text style={styles.buttonText}>Chercher</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
