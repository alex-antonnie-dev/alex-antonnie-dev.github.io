import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import { Provider } from 'react-redux';
import store from './store';
import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <ImageGrid />
      </Container>
    </Provider>
  );
}

export default App;
