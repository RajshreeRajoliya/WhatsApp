import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from './context/AccountProvider';
function App() {
  const clientId =
    "1006693224560-n7g1mrseqjiu4hvgru9f0skqpqj92njp.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
