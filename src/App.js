import { Provider } from "react-redux";
import store from '../src/components/utils/store'
import Body from "./components/Body";
import Head from "./components/Head";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Head/>
        <Body/>
      </div>
    </Provider>
  );
}

export default App;
