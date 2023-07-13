import React from 'react';

import Routes from './modules/navigation/routes';
import {AuthProvider} from './modules/auth/model/authProvider';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
