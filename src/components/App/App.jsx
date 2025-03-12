import css from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import { fetchContacts } from "../../redux/contacts/operations";

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatcher = useDispatch();
  const isLogged = useSelector(selectIsLoggedIn);
  useEffect(() => {
    dispatcher(refreshUser());
    isLogged && dispatcher(fetchContacts());
  }, [dispatcher, isLogged]);
  return isRefreshing ? null : (
    <div className={css.page}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}
