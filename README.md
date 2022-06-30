# app-react-bantu-dico
# clear watchman
 watchman watch-del-all
# nettoyage du gradle sur android 
 ./gradlew clean && ./gradlew assembleRelease

 # compilation des ressources js sur android
 npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

 # Avoiding React Native : Error: Duplicate resources - Android : bundle assets directly in build directory
 npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/build/intermediates/res/merged/release/
 # ==========USELESS COMMANDS FOR IOS =============

arch -x86_64 pod install --repo-update

pod install

npx react-native run-ios

watchman watch-del-all

sudo gem install cocoapods

-- use react native vector icon in project
https://medium.com/@vimniky/how-to-use-vector-icons-in-your-react-native-project-8212ac6a8f06