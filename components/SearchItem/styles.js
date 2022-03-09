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
  button: {
    flex: 1,
    justifyContent: 'center', //vertical align
    alignItems: 'center', // horizontal align
    alignSelf: 'stretch', //width 100%
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    paddingTop: 17,
    paddingBottom: 17,
  },
  definitionTitle: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontSize: 35,
    color: '#fff',
  },
  definitionType: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
});
