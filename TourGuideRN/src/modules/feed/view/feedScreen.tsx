import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Feedcard from '../components/feedCard';
import firestore from '@react-native-firebase/firestore';

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
