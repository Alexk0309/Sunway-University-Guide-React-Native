# Real Life Guide of Sunway University

A mobile-based AR indoor navigation specifically designed for use on Sunway University campus. The application is intended to identify users' locations and guide them to their desired destinations by overlaying AR directions onto the real-world camera view. 

**NOTE**
<br/>This module is available only on Android devices. 

# Installation
## Unity
1. Export Unity app to `[project_root]/unity/builds/android`
2. Add the following lines to `android/settings.gradle`:
   ```gradle
   include ':unityLibrary'
   project(':unityLibrary').projectDir=new File('..\\unity\\builds\\android\\unityLibrary')
   ```
3. Add into `android/build.gradle`
    ```gradle
    allprojects {
      repositories {
        // this
        flatDir {
            dirs "${project(':unityLibrary').projectDir}/libs"
        }
    // ...
    ```
4. Add into `android/gradle.properties`
    ```gradle
    unityStreamingAssets=.unity3d
    ```
5. Add strings to ``android/app/src/main/res/values/strings.xml``

    ```javascript
    <string name="game_view_content_description">Game view</string>
    ```
6. Remove `<intent-filter>...</intent-filter>` from ``<project_name>/unity/builds/android/unityLibrary/src/main/AndroidManifest.xml`` at unit

## RN

**NOTE**
<br/>Ensure all gradle files are sync, you can do this in Android Studio.

```sh
yarn
cd android && ./gradlew clean
cd ..
yarn run android
```
 
