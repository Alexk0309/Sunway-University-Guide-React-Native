import React, {useContext, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthContext} from '../../auth/authProvider';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login(email, password);
  };

  const navigateToSignUp = () => {
    navigation.navigate('Signup');
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
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginLabel}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpLabel}>Don't have an account?</Text>
        <TouchableOpacity onPress={navigateToSignUp}>
          <Text style={FSignupLabel}> Sign up.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  logoContainer: {
    marginTop: 80,
  },
  formContainer: {
    display: 'flex',
    marginTop: 30,
  },
  textInput: {
    color: 'black',
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
  signUpContainer: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  signUpLabel: {
    color: 'black',
    fontSize: 20,
  },
});

const FSignupLabel = StyleSheet.flatten([
  styles.signUpLabel,
  {color: 'orange'},
]);

export default LoginScreen;
