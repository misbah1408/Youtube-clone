import { Provider } from "react-redux";
import store from "../src/components/utils/store";
import Body from "./components/Body";
import Head from "./components/Head";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import LiveContainer from "./components/LiveContainer";
import SearchContainer from "./components/SearchContainer";

function App() {
  const [progress, setProgress] = useState(0);

  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Body/>}>
        <Route path="/" element={ <MainContainer />}/>
        <Route path="watch" element={ <WatchPage setProgress={setProgress}  />}/>
        <Route path="live" element={ <LiveContainer setProgress={setProgress} />}/>
        <Route path="search" element={ <SearchContainer />}/>
      </Route>
    )
  );
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



// [
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       {
//         path: "/",
//         element: <MainContainer />,
//       },
//       {
//         path: "watch",
//         element: <WatchPage setProgress={setProgress} />,
//       },
//       {
//         path: "live",
//         element: <LiveContainer setProgress={setProgress} />,
//       },
//       {
//         path: "/serach",
//         element: <SearchContainer />,
//       },
//     ],
//   },
// ]