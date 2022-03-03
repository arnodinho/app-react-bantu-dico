import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  containerMain: {
    flex: 9,
    backgroundColor: '#eee',
  },
  containerHome: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchModuleContainer: {
    // container parent du containerSearch
    flex: 3,
    marginTop: 15,
    backgroundColor: '#eee',
  },

  resultsModuleContainer: {
    flex: 7,
    backgroundColor: '#eee',
  },
  containerSearch: {
    //container du bloc recherche et bouton
    flex: 5,
    flexDirection: 'row',
    marginRight: 5,
    backgroundColor: '#eee',
  },

  containerTitle: {
    marginTop: 10,
    height: 85,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoTitle: {
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    color: '#061646',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 17,
    color: '#061646',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  infoTextResult: {
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 17,
    color: '#061646',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  searchSelect: {
    backgroundColor: '#eee',
    flexDirection: 'row',
  },
  searchButton: {
    flex: 1,
    height: 65,
  },
  searchItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4,
  },
  searchArrow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#214c98',
    borderWidth: 2,
    paddingLeft: 5,
    color: 'white',
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 20,
  },

  buttonInput: {
    backgroundColor: '#ee315d',
    width: 100,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
  },
  item_text: {
    textAlign: 'center',
    justifyContent: 'center',
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
  containerHeaderLogo: {
    backgroundColor: '#eee',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {height: -3},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  wrapperContainer: {
    flex: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
