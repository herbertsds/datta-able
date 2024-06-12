import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// auth provider
import { JWTProvider as AuthProvider } from './contexts/JWTContext';
// import { FirebaseProvider as AuthProvider } from './contexts/FirebaseContext';
// import { Auth0Provider as AuthProvider } from './contexts/Auth0Context';

import routes, { renderRoutes } from './routes';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
        <AuthProvider>{renderRoutes(routes)}</AuthProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
