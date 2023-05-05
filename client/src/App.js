import { lazy, Suspense } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';

import Loader from './components/loader/Loader';

const Messenger = lazy(() => import('./components/Messenger'));

function App() {
  const clientId =
    "1006693224560-n7g1mrseqjiu4hvgru9f0skqpqj92njp.apps.googleusercontent.com";
    return (
      <GoogleOAuthProvider clientId={clientId}>
        <UserProvider>
          <AccountProvider>
            <Suspense fallback={<Loader />}>
              <Messenger/>
            </Suspense>
          </AccountProvider>
        </UserProvider>
      </GoogleOAuthProvider>
    );
  }
  
  export default App;
  