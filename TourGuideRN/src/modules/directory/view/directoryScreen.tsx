import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const DirectoryScreen = ({navigation}: any) => {
  const navigateToGround = () => {
    navigation.navigate('GroundFloor');
  };
  const navigateToMezzanine = () => {
    navigation.navigate('MezzanineFloor');
  };
  return (
    <View style={styles.directoryContainer}>
      <Text style={styles.directoryTitle}>Welcome to Sunway University</Text>
      <Image
        style={styles.sunwayImage}
        source={require('../../../assets/images/SunwayUniversity.jpeg')}
      />
      <Text style={styles.directoryDescription}>
        Sunway University is a private university in Bandar Sunway, Petaling
        Jaya, Selangor, Malaysia. It has a 10 hectare campus comprising academic
        and residential blocks adjacent to the Sunway Lagoon theme park. It
        offers undergraduate and postgraduate programmes taught in English.
      </Text>
      <View style={styles.directoryExplore}>
        <Text style={styles.directoryExploreTitle}>Explore Campus</Text>
        <View style={styles.directoryExploreButton}>
          <View style={styles.floorButton}>
            <TouchableOpacity onPress={navigateToGround}>
              <Text style={styles.floorButtonText}>G</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.floorButton}>
            <TouchableOpacity onPress={navigateToMezzanine}>
              <Text style={styles.floorButtonText}>M</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DirectoryScreen;

const styles = StyleSheet.create({
  directoryContainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  directoryTitle: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    margin: 10,
  },
  directoryDescription: {
    color: 'black',
    margin: 10,
    textAlign: 'left',
    fontSize: 15,
  },
  sunwayImage: {
    width: '100%',
    height: '40%',
  },
  directoryExplore: {marginTop: 30},
  directoryExploreTitle: {fontSize: 25, textAlign: 'center', color: 'black'},
  directoryExploreButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  floorButton: {backgroundColor: '#012c7a', width: 60, borderRadius: 100},
  floorButtonText: {color: 'white', fontSize: 40, textAlign: 'center'},
});
