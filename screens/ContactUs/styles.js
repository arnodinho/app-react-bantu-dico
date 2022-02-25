import React from 'react';
import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),

    backgroundColor: '#d0d6d2',
    borderColor: '#214c98',
    borderWidth: 7,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 15,
    marginBottom: 15,
  },
  traduction: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  infoText: {
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: '#061646',
    textAlign: 'center',
  },
  infoText2: {
    marginTop: 3,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: '#061646',
    textAlign: 'center',
    marginBottom: 9,
  },
  infoTraduction: {
    fontSize: 16,
    color: '#061646',
    fontWeight: 'bold',
    marginLeft: 6,
  },
  tabBarInfo: {
    marginTop: 1,
    fontSize: 14,
    color: '#061646',
  },
  tabBarInfoTitle: {
    marginTop: 5,
    marginBottom: 9,
    fontSize: 20,
    color: '#061646',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  main: {
    marginRight: 5,
    marginLeft: 5,
    flex: 2,
  },
  containerTradution: {
    flex: 6,
    marginTop: 25,
    marginRight: 5,
    marginLeft: 5,
  },

  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 40,
    borderColor: '#214c98',
    borderWidth: 2,
    paddingLeft: 5,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    color: '#061646',
    fontSize: 15,
  },
  textinputMessage: {
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#214c98',
    borderWidth: 2,
    paddingLeft: 5,
    marginTop: 10,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 5,
    color: '#061646',
    fontSize: 15,
  },

  loading_container: {
    position: 'absolute', // La définition de la position  absolute  va nous permettre de faire passer le chargement par-dessus notre FlatList.
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contain: {
    padding: 20,
  },
  textInput: {
    height: 46,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    marginTop: 15,
  },
  tabBarInfoText: {
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: '#061646',
    textAlign: 'center',
    marginBottom: 10,
  },
});
