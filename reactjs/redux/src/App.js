import Counter from './redux/count'
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import Login from './redux/login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path:"/home",
      element: <Counter />
    }
  ]);

  return (
    <Provider store={store}>
    <div className="App">
      {/* <Counter /> */}
      {/* <Login /> */}
      <RouterProvider router={router} />
    </div>
    </Provider>
  );
}

export default App;
