import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AppLayout from "./components/AppLayout";
import Accounts from "./components/Accounts";
import Transactions from "./components/Transactions";

import "@aws-amplify/ui-react/styles.css";
import Categories from "./components/Categories";
import Budget from "./components/Budget";
const theme = createTheme({
  palette: {
    mode: "light",
    // divider: "#e8eced",
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#e8eced",
        },
      },
    },
  },
});

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Budget />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/categories" element={<Categories />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </DndProvider>
    </>
  );
}

export default App;
