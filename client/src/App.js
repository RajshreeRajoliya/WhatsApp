import logo from './logo.svg';
import './App.css';
import Messengers from './components/Messengers';
import AccountProvider from './context/AccountProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
const clientId = '208810823523-omfdi2vvj6lm0i42uu0ke5d4t8pgfr7t.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
     <AccountProvider>
     <Messengers/>
     </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
