import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { AppBar, Box, Link, Stack, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { fetchBankAccounts, fetchTransactions } from "../app/appSlice";
import { useAppDispatch } from "../app/hooks";

function AppLayout() {
  const { user } = useAuthenticator((context) => [context.user]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user) return;

    dispatch(fetchTransactions());
    dispatch(fetchBankAccounts());
  }, [dispatch, user]);

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
              <Link
                component={RouterLink}
                to="/categories"
                color="inherit"
                underline="none"
              >
                Categories
              </Link>
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            <Typography>{user.attributes?.email}</Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
    </>
  );
}

export default withAuthenticator(AppLayout);
