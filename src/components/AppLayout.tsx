import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import {
  AppBar,
  Box,
  Button,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import moment from "moment";
import { useEffect } from "react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import {
  fetchBankAccounts,
  fetchTransactions,
  getCurrentBudget,
} from "../app/appSlice";
import { useAppDispatch } from "../app/hooks";

function AppLayout() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user) return;

    dispatch(fetchTransactions());
    dispatch(fetchBankAccounts());
    dispatch(getCurrentBudget(moment().format("YYYY-MM")));
  }, [user]);

  return (
    <>
      <Box sx={{ flexGrow: 1, pb: 3 }}>
        <AppBar position="static">
          <Toolbar>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Link
                component={RouterLink}
                to="/"
                variant="h5"
                color="inherit"
                underline="none"
              >
                Budgeting
              </Link>
              <Link
                component={RouterLink}
                to="/transactions"
                color="inherit"
                underline="none"
              >
                Transactions
              </Link>
              <Link
                component={RouterLink}
                to="/accounts"
                color="inherit"
                underline="none"
              >
                Accounts
              </Link>
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            <Typography>{user.attributes?.email}</Typography>
            <Button color="secondary" onClick={signOut}>
              Sign Out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />

      <a
        href="https://www.flaticon.com/free-icons/business-and-finance"
        title="business-and-finance icons"
        style={{ display: "none" }}
      >
        Business-and-finance icons created by Freepik - Flaticon
      </a>
    </>
  );
}

export default withAuthenticator(AppLayout);
