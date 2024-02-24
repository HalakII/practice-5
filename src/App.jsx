import { Header } from "components";
import Home from "pages/Home";
import Rates from "pages/Rates";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  Route,
  Routes,
} from "react-router-dom/dist/umd/react-router-dom.development";

import { useDispatch } from "react-redux";
import { fetchBaseCurrency } from "reduxState/operations";
import { setBaseCurrency } from "reduxState/currencySlice";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      dispatch(fetchBaseCurrency(pos.coords));
    }

    function error() {
      dispatch(setBaseCurrency(USD));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/rates" element={<Rates />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
