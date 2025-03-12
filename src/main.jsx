import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App/App.jsx";
import "modern-normalize";
import { store, persistor } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </StrictMode>
);
