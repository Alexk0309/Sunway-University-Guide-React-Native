import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext({
  user: '',
  setUser: (newUser: string) => {},
  login: async (email: any, password: any) => {},
  register: async (email: any, password: any) => {},
  logout: async () => {},
});

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState('');

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser: (newUser: string) => {
          setUser(newUser);
        },
        login: async (email: any, password: any) => {
          try {
            auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email: any, password: any) => {
          try {
            auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
