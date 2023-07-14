import React from 'react';
import {Button, Text, View} from 'react-native';

const DirectoryScreen = ({navigation}: any) => {
  const navigateToGround = () => {
    navigation.navigate('GroundFloor');
  };
  const navigateToMezzanine = () => {
    navigation.navigate('MezzanineFloor');
  };
  return (
    <View>
      <Text>Directory</Text>
      <Button title="Ground Floor" onPress={navigateToGround} />
      <Button title="Mezzanine" onPress={navigateToMezzanine} />
    </View>
  );
};

export default DirectoryScreen;
