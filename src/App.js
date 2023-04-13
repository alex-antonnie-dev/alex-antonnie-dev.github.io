import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import { Provider } from 'react-redux';
import store from './store';
import { Suspense } from 'react';
import Loader from './components/Loader';
import MoviesRoute from './routes/MoviesRoute';

function App() {
  return (
    <Provider store={store}>
      <Container>
      <Suspense fallback={<Loader/>}>
        <MoviesRoute />
      </Suspense>
      </Container>
    </Provider>
  );
}

export default App;
