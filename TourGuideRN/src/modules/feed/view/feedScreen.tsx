import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
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
              const {user, title, type, desc, imageURL, link} = doc.data();
              list.push({
                id: doc.id,
                user: user,
                title: title,
                type: type,
                desc: desc,
                imageURL: imageURL,
                link: link,
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
            link={item.link}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FeedScreen;
