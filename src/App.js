import './App.css';
import Posts from "./components/Posts"
import Postform from "./components/Postform"
import { Provider } from "react-redux";
import store from "./store"


//  I have installed npm i redux react-redux redux-thunk
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Postform />
      <hr />
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
