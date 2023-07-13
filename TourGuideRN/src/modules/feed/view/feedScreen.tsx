import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FeedScreen = () => {
  return (
    <View style={styles.imgContainer}>
      <Text>Welcome to Sunway ARMap</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: 350,
  },
  buttonContainer: {
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: 'gray',
    width: 200,
    height: 100,
  },
  buttonText: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
});

export default FeedScreen;
