import { Paper, Typography, Button, Stack } from "@mui/material";
import { BudgetGroup } from "../API";
import BudgetGroupItemRow from "./BudgetGroupItemRow";
import BudgetGroupItemService from "../utils/BudgetGroupItemService";
import { useAppDispatch } from "../app/hooks";
import { getCurrentBudget } from "../app/appSlice";
import moment from "moment";
import BudgetGroupService from "../utils/BudgetGroupService";

type BudgetGroupCardProps = {
  budgetGroup: BudgetGroup;
};

function BudgetGroupCard({ budgetGroup }: BudgetGroupCardProps) {
  const dispatch = useAppDispatch();

  const refresh = () => {
    dispatch(getCurrentBudget(moment().format("YYYY-MM")));
  };

  return (
    <>
      <Paper elevation={3} sx={{ paddingBottom: 2 }}>
        {!budgetGroup && <Typography>Error With This Budget Group</Typography>}

        {!!budgetGroup && (
          <Stack>
            <Stack
              direction="row"
              sx={{
                paddingX: 2,
                paddingY: 2,
              }}
            >
              <Typography flex={7} textAlign="left">
                {budgetGroup.name}
              </Typography>
              <Typography flex={2} textAlign="right">
                Planned
              </Typography>
            </Stack>

            {budgetGroup?.budgetGroupItems?.items.map((budgetGroupItem) => (
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
            <Button
              onClick={async () => {
                await BudgetGroupService.delete(budgetGroup.id);
                refresh();
              }}
            >
              Delete
            </Button>
          </Stack>
        )}
      </Paper>
    </>
  );
}

export default BudgetGroupCard;
