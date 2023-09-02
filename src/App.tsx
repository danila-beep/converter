import React from "react";
import "./App.css";
import { BgPatternWrapper } from "customStyles/bgPattern";
import Header from "components/Header";
import HomePage from "pages/HomePage/HomePage";


function App() {
  // const dispatch = useAppDispatch();
  // const isAppInitialized = useAppSelector(
  //   (state) => state.app.isAppInitialized
  // );

  console.log("App rerender");

  // useEffect(() => {
  //   dispatch(getCurrenciesTC());
  // }, [dispatch]);

  // const renderApp = () => {
  //   if (isAppInitialized) {
  //     return (
  //       <React.Fragment>
  //         <Converter />
  //       </React.Fragment>
  //     );
  //   } else {
  //     return (
  //       <React.Fragment>
  //         <Preloader />
  //       </React.Fragment>
  //     );
  //   }
  // };

  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
