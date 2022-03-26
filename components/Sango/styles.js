import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
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
  expressionsContainer: {
    paddingBottom: 15,
    flex: 1,
    marginBottom: 15,
  },
  tabBarInfoText: {
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 17,
    color: '#061646',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionSection: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#EDEDED',
    paddingBottom: 2,
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
  },
  optionText: {
    margin: 2,
    fontSize: 15,
    marginTop: 1,
    textAlign: 'center',
    color: '#061646',
  },
  optionTextSection: {
    margin: 2,
    marginTop: 1,
    marginBottom: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#061646',
  },
  resulLangage: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
});
