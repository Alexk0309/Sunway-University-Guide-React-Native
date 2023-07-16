import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ARInstructions = ({navigation}: any) => {
  const handleStart = () => {
        navigation.navigate('ARNavigation');
    }

  return (
    <View style={styles.CardContainer}>
      <Image source={require('../../../assets/images/SunwayARMapLogo.png')} />
      <View style={styles.DescContainer}>
        <Text style={styles.DescLabel}>1. Scan QR Code</Text>
        <Text style={styles.DescLabel}>2. Select venue</Text>
        <Text style={styles.DescLabel}>3. Happy navigating!</Text>
      </View>
      <View style={styles.Button}>
        <TouchableOpacity onPress={handleStart}>
          <Text style={styles.Label}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ARInstructions;

const styles = StyleSheet.create({
  CardContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#d7d9d7',
    backgroundColor: 'white',
    height: '100%',
  },
  imageStyle: {
    width: 400,
    height: 300,
    marginTop: 5,
  },
  DescContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
    margin: 10,
  },
  DescLabel: {
    textAlign: 'left',
    color: 'black',
    fontSize: 20,
  },
  Name: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Label: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    padding: 5,
  },
  Button: {
    width: 150,
    marginTop: 50,
    marginLeft: 115,
    borderRadius: 10,
    backgroundColor: '#012c7a',
  },
});
