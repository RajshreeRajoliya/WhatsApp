import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from './context/AccountProvider';
function App() {
  const clientId =
    "208810823523-omfdi2vvj6lm0i42uu0ke5d4t8pgfr7t.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
