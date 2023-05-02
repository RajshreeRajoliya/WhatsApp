import logo from './logo.svg';
import './App.css';
import Messengers from './components/Messengers';

import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
const clientId = '208810823523-omfdi2vvj6lm0i42uu0ke5d4t8pgfr7t.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
     <Messengers/>
    </GoogleOAuthProvider>
  );
}

export default App;
