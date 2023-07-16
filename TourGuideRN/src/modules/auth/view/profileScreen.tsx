import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../authProvider';

const ProfileScreen = () => {
  const {user, logout} = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.profileLabel}>Welcome {user.email}</Text>
      <View style={styles.logoutButton}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutLabel}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileLabel: {
    color: 'black',
    marginTop: 50,
    fontSize: 20,
  },
  logoutButton: {
    width: 150,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#012c7a',
  },
  logoutLabel: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    padding: 5,
  },
});

export default ProfileScreen;
