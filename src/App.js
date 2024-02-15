import { Provider } from "react-redux";
import store from '../src/components/utils/store'
import Body from "./components/Body";
import Head from "./components/Head";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([{
    path:"/",
    element: <Body/>,
    children: [
      {
      path: "/",
      element : <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    }]
  }])
  return (
    <Provider store={store}>
      <div className="">
        <Head/>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
