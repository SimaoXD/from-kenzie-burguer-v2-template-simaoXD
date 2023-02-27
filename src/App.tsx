import { UserProvider } from './providers/useContext/useContext';
import Router from './routes/routes';
import { GlobalStyles } from './styles/global';

const App = () => (
  <>
    <GlobalStyles />
    <UserProvider>
      <Router />
    </UserProvider>
  </>
);

export default App;
