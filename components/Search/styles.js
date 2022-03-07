import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  searchModuleContainer: {
    // container parent du containerSearch
    flex: 2,
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
    marginTop: 12,
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
    flexDirection: 'row',
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
    paddingLeft: 10,
    paddingTop: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 20,
    color: '#c5c2c2',
    textTransform: 'capitalize',
  },

  textinputSetted: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#214c98',
    borderWidth: 2,
    paddingLeft: 10,
    paddingTop: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 20,
    color: '#061646',
    textTransform: 'capitalize',
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
  button: {
    flex: 1,
    paddingLeft: 1,
    paddingRight: 1,
  },
  buttonText: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  gradient: {
    paddingTop: 35,
    paddingBottom: 35,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  translationText: {
    fontSize: 13,
    color: '#061646',
    width: 75,
    fontWeight: 'bold',
  },
});
