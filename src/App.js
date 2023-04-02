import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ImageGrid />
      </div>
    </Provider>
  );
}

export default App;
