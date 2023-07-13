import React, {useContext, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthContext} from '../../auth/model/authProvider';

const SignupScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {register} = useContext(AuthContext);

  const handleSignup = () => {
    register(email, password);
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/images/SunwayARMapLogo.png')} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={x => setEmail(x)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={x => setPassword(x)}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.loginLabel}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signInContainer}>
        <Text style={styles.signInLabel}>Already have an account?</Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={[styles.signInLabel, {color: 'orange'}]}> Sign In.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: 80,
  },
  formContainer: {
    display: 'flex',
    marginTop: 30,
  },
  textInput: {
    marginBottom: 10,
    width: 300,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  loginLabel: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    padding: 5,
  },
  loginButton: {
    width: 150,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#012c7a',
  },
  signInContainer: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  signInLabel: {
    fontSize: 20,
  },
});

export default SignupScreen;
