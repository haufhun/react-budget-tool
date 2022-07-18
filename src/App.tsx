import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Accounts from "./components/Accounts";

import "@aws-amplify/ui-react/styles.css";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<div>Hello World</div>} />
            <Route path="/accounts" element={<Accounts />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
