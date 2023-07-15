import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const DirectoryVenueCard = ({
  venueName,
  floorName,
  imageURL,
  venueDesc,
}: any) => {
  return (
    <View style={styles.venueCardContainer}>
      <View style={styles.venueTitleContainer}>
        <Text style={styles.venueName}>{venueName}</Text>
        <Text style={styles.floorName}>{floorName}</Text>
      </View>
      <Image
        style={styles.imageStyle}
        source={{
          uri: imageURL,
        }}
      />
      <View style={styles.venueDescContainer}>
        <Text style={styles.venueDescLabel}>{venueDesc}</Text>
      </View>
    </View>
  );
};

export default DirectoryVenueCard;

const styles = StyleSheet.create({
  venueCardContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#d7d9d7',
    backgroundColor: 'white',
  },
  imageStyle: {
    width: 400,
    height: 300,
    marginTop: 5,
  },
  venueDescContainer: {
    margin: 10,
  },
  venueDescLabel: {
    textAlign: 'left',
    color: 'black',
  },
  venueTitleContainer: {
    marginLeft: 15,
  },
  venueName: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  floorName: {
    color: 'black',
    fontSize: 15,
  },
});
