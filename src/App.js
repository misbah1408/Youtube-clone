import { Provider } from "react-redux";
import store from '../src/components/utils/store'
import Body from "./components/Body";
import Head from "./components/Head";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0)

  const appRouter = createBrowserRouter([{
    path:"/",
    element: <Body />,
    children: [
      {
      path: "/",
      element : <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage setProgress={setProgress}/>
    }]
  }])
  return (
    <Provider store={store}>
      <div className="">
      <LoadingBar
        color='rgb(255, 0, 53)'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Head setProgress ={setProgress}/>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
