import { Provider } from 'react-redux';
import {store} from './redux/store';
import PostList from "./components/PostList.tsx";

function App() {

  return (
      <Provider store={store}>
          <div className="App">
              <PostList />
          </div>
      </Provider>
  )
}

export default App
