import React, {useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
  Alert,
} from 'react-native';

const Feedcard = ({title, imageURL, type, user, desc, link}: any) => {

  const handleURL = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = true;

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(link);
    } else {
      Alert.alert(`Don't know how to open this URL: ${link}`);
    }
  }, [link]);

  return (
    <View style={styles.feedcardContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleLabel}>{title}</Text>
        <Text style={styles.typeLabel}>{type}</Text>
      </View>
      <Image
        style={styles.imageStyle}
        source={{
          uri: imageURL,
        }}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.userLabel}>{user}</Text>
        <Text style={styles.descriptionLabel}>{desc}</Text>
        <View style={styles.descriptionButton}>
          <TouchableOpacity onPress={handleURL}>
            <Text style={styles.knowMoreLabel}>Tap to know more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Feedcard;

const styles = StyleSheet.create({
  feedcardContainer: {
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
  descriptionContainer: {
    marginLeft: 15,
    marginTop: 10,
  },
  userLabel: {
    fontWeight: 'bold',
    color: 'black',
  },
  descriptionLabel: {
    textAlign: 'left',
    color: 'black',
  },
  descriptionButton: {
    marginTop: 5,
  },
  titleContainer: {
    marginLeft: 15,
  },
  titleLabel: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  typeLabel: {
    color: 'black',
    fontSize: 15,
  },
  knowMoreLabel: {
    color: '#858585',
  },
});
