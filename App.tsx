import { MainScreen } from './src/App/screens/MainScreen/MainScreen';
import { Provider } from 'react-redux';
import { store } from './src/App/redux/store';
import { PaperProvider } from 'react-native-paper';

function App() {

  return (
     <Provider store={store}>
        <PaperProvider>
            <MainScreen />
        </PaperProvider>
    </Provider>
  );
}

export default App;
