import logo from './logo.svg';
import './App.css';
import Messengers from './components/Messengers';

import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {

  return (
    <GoogleOAuthProvider>
     <Messengers/>
    </GoogleOAuthProvider>
  );
}

export default App;
