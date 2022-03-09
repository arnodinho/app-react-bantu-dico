import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d6d2',
    borderColor: '#214c98',
    borderWidth: 7,
    marginLeft: 5,
    marginRight: 5,

    marginBottom: 15,
  },
  searchModuleContainer: {
    // container parent du containerSearch
    flex: 3,
    backgroundColor: '#c9c7a9',
  },
  resultModuleContainer: {
    marginTop: 5,
    flex: 1,
    backgroundColor: '#eee',
  },
  resultsModuleContainer: {
    flex: 5,
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
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
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
    flex: 2,
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
    backgroundColor: 'white',
    borderRadius: 5,
    color: '#061646',
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
  optionsTitleText: {
    fontSize: 26,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionSection: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#EDEDED',
    paddingBottom: 2,
    backgroundColor: '#EDEDED',
    fontSize: 30,
    fontWeight: 'bold',
  },
  optionIconContainer: {
    marginRight: 9,
  },
  optionTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#EDEDED',
    paddingBottom: 2,
    height: 60,
  },
  optionText: {
    margin: 2,
    marginTop: 1,
    textAlign: 'left',
    fontSize: 20,
  },
  optionTextSection: {
    margin: 2,
    marginTop: 1,
    marginBottom: 1,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
