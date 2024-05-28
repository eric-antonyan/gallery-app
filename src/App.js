import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import Create from "./screens/Create";
import { AnimatePresence } from "framer-motion";

function App() {
  const primaryColor = "white";
  const textColor = "#fff";
  const secondaryTextColor = "slate-500";
  const backgroundColor = "white";
  return (
    <AnimatePresence>
      <NextUIProvider>
        <Router>
          <Routes>
            <Route
              path="/create"
              element={
                <Create
                  backgroundColor={backgroundColor}
                  primaryColor={primaryColor}
                  textColor={textColor}
                  secondaryTextColor={secondaryTextColor}
                />
              }
            />
            <Route
              path="/auth"
              element={
                <Create
                  backgroundColor={backgroundColor}
                  primaryColor={primaryColor}
                  textColor={textColor}
                  secondaryTextColor={secondaryTextColor}
                />
              }
            />
            <Route
              path="/support"
              element={
                <Create
                  backgroundColor={backgroundColor}
                  primaryColor={primaryColor}
                  textColor={textColor}
                  secondaryTextColor={secondaryTextColor}
                />
              }
            />
            <Route
              path="/services"
              element={
                <Create
                  backgroundColor={backgroundColor}
                  primaryColor={primaryColor}
                  textColor={textColor}
                  secondaryTextColor={secondaryTextColor}
                />
              }
            />
          </Routes>
        </Router>
      </NextUIProvider>
    </AnimatePresence>
  );
}

export default App;
