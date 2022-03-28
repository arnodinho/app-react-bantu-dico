# app-react-bantu-dico
# clear watchman
 watchman watch-del-all
# nettoyage du gradle sur android 
 ./gradlew clean && ./gradlew assembleRelease

 # compilation des ressources js sur android
 npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

 # Avoiding React Native : Error: Duplicate resources - Android : bundle assets directly in build directory
 npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/build/intermediates/res/merged/release/