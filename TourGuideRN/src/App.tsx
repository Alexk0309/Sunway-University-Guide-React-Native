import React from 'react';

import Routes from './modules/navigation/routes';
import {AuthProvider} from './modules/auth/authProvider';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
