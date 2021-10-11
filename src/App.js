import { Fragment } from "react";
import Login from "./components/Login";
// import { useSelector } from "react-redux";

function App() {
  // const isValid = useSelector((state) => state.login);

  return (
    <Fragment>
      <Login />
    </Fragment>
  );
}

export default App;
