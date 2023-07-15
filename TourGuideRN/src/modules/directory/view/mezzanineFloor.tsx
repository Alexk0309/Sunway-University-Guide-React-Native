import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import DirectoryVenueCard from '../components/directoryVenueCard';
import firestore from '@react-native-firebase/firestore';

const MezzanineFloorScreen = () => {
  const [venueCards, setVenueCards] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchVenues = async () => {
      try {
        const list: any = [];
        await firestore()
          .collection('mezzanineFloor')
          .get()
          .then(querySnapshot => {
            // console.log('Total posts: ' + querySnapshot.size);
            querySnapshot.forEach(doc => {
              const {venueName, floorName, imageURL, venueDesc} = doc.data();
              list.push({
                id: doc.id,
                venueName: venueName,
                floorName: floorName,
                venueDesc: venueDesc,
                imageURL: imageURL,
              });
            });
          });

        if (isMounted) {
          setVenueCards(list);
        }

        if (loading) {
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchVenues();
    return () => {
      isMounted = false; // Cleanup function to cancel any active subscriptions or asynchronous tasks
    };
  });
  return (
    <View>
      <FlatList
        data={venueCards}
        renderItem={({item}: any) => (
          <DirectoryVenueCard
            venueName={item.venueName}
            floorName={item.floorName}
            imageURL={item.imageURL}
            venueDesc={item.venueDesc}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MezzanineFloorScreen;
