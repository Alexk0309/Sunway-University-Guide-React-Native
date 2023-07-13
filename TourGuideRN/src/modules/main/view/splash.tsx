import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Splash = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/SunwayARMapLogo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: 350,
    marginBottom: 200,
  },
});

export default Splash;
