import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Feedcard from '../components/feedCard';
import firestore from '@react-native-firebase/firestore';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    user: 'Sunway University',
    title: 'First Item',
    type: 'Event',
    desc: 'Loremefekfefefkefkfekfekfeek femkfmek fmekfmek fmekf mekfm kfjddjwndjwndw wdwjndwjdn wdjnjn',
    imageURL:
      'https://sunwayuniversity.edu.my/sites/default/files/styles/events_image/public/eventimages/2023-07/pexels-alex-green-5699466.jpg.webp?itok=XBHTztmR',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    user: 'Sunway Tech Club',
    title: 'Second Item',
    type: 'Workshop',
    desc: 'Lorem',
    imageURL:
      'https://sunwayuniversity.edu.my/sites/default/files/styles/events_image/public/eventimages/2023-07/pexels-alex-green-5699466.jpg.webp?itok=XBHTztmR',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    user: 'Sunway Analytics Society',
    title: 'Third Item',
    type: 'News',
    desc: 'Lorem',
    imageURL:
      'https://sunwayuniversity.edu.my/sites/default/files/styles/events_image/public/eventimages/2023-07/pexels-alex-green-5699466.jpg.webp?itok=XBHTztmR',
  },
];

const FeedScreen = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const list: any = [];
        await firestore()
          .collection('posts')
          .get()
          .then(querySnapshot => {
            // console.log('Total posts: ' + querySnapshot.size);
            querySnapshot.forEach(doc => {
              const {user, title, type, desc, imageURL} = doc.data();
              list.push({
                id: doc.id,
                user: user,
                title: title,
                type: type,
                desc: desc,
                imageURL: imageURL,
              });
            });
          });

        setPosts(list);

        if (loading) {
          setLoading(false);
        }

        console.log('posts: ' + list);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  });

  return (
    <View style={styles.imgContainer}>
      <View>
        <FlatList
          data={posts}
          renderItem={({item}: any) => (
            <Feedcard
              title={item.title}
              imageURL={item.imageURL}
              type={item.type}
              user={item.user}
              desc={item.desc}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
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
