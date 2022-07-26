import {
  Paper,
  Typography,
  Button,
  Stack,
  TextField,
  Box,
} from "@mui/material";
import { BudgetGroup } from "../API";
import BudgetGroupItemRow from "./BudgetGroupItemRow";
import BudgetGroupItemService from "../utils/BudgetGroupItemService";
import { useAppDispatch } from "../app/hooks";
import { getCurrentBudget } from "../app/appSlice";
import moment from "moment";
import BudgetGroupService from "../utils/BudgetGroupService";
import { useState } from "react";
import { debounceAsync } from "../utils/utils";
import { LoadingButton } from "@mui/lab";

type BudgetGroupCardProps = {
  budgetGroup: BudgetGroup;
};

function BudgetGroupCard({ budgetGroup }: BudgetGroupCardProps) {
  const dispatch = useAppDispatch();
  const [name, setName] = useState(budgetGroup.name);
  const [shouldShowEditRow, setShouldShowEditRow] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const refresh = () => {
    dispatch(getCurrentBudget(moment().format("YYYY-MM")));
  };

  const isIncome = budgetGroup.type === "income";

  const handleNameOnBlur = debounceAsync(async () => {
    if (name === budgetGroup.name) {
      console.log("Name is the same. Not updating.");
      setShouldShowEditRow(false);
      return;
    }

    await BudgetGroupService.update({ id: budgetGroup.id, name: name });
    setShouldShowEditRow(false);
    refresh();
  }, 500);

  const handleDeleteGroup = async () => {
    setIsDeleting(true);

    await BudgetGroupService.delete(budgetGroup.id);

    setIsDeleting(false);
    refresh();
  };

  if (!budgetGroup) {
    return (
      <>
        <Paper elevation={3} sx={{ paddingBottom: 2 }}>
          <Typography>Error With This Budget Group</Typography>
        </Paper>
      </>
    );
  }

  const viewRow = () => (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        paddingX: 2,
        paddingY: 2,
      }}
    >
      <Typography
        flex={8}
        onClick={() => {
          setShouldShowEditRow(true);
        }}
        sx={{ cursor: isIncome ? "auto" : "pointer" }}
      >
        {budgetGroup.name}
      </Typography>

      <Typography flex={4} textAlign="right">
        Planned
      </Typography>
    </Stack>
  );

  const editRow = () => (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: 2,
        paddingY: 2,
      }}
    >
      <TextField
        autoFocus
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={handleNameOnBlur}
        size="small"
        disabled={isIncome}
        variant="filled"
      />

      <Box>
        <LoadingButton
          color="error"
          onClick={handleDeleteGroup}
          loading={isDeleting}
        >
          Delete Group
        </LoadingButton>
      </Box>
    </Stack>
  );

  const showEditRow = !isIncome && (shouldShowEditRow || isDeleting);

  return (
    <>
      <Paper elevation={3} sx={{ paddingBottom: 2 }}>
        <Stack>
          {showEditRow ? editRow() : viewRow()}

          {budgetGroup.budgetGroupItems?.items.map((budgetGroupItem) => (
            <BudgetGroupItemRow budgetGroupItem={budgetGroupItem!} />
          ))}

          <Button
            onClick={() => {
              BudgetGroupItemService.createBlankIncome(budgetGroup.id);
              refresh();
            }}
          >
            Add Item
          </Button>
        </Stack>
      </Paper>
    </>
  );
}

export default BudgetGroupCard;
