import { Paper, Typography, Button, Stack, Box } from "@mui/material";
import { BudgetGroup } from "../API";
import BudgetGroupItemRow from "./BudgetGroupItemRow";
import BudgetGroupItemService from "../utils/BudgetGroupItemService";
import { useAppDispatch } from "../app/hooks";
import { getCurrentBudget } from "../app/appSlice";
import moment from "moment";
import { subHeadingGray } from "../common/theme";

type IncomeBudgetGroupCardProps = {
  budgetGroup: BudgetGroup;
};

function IncomeBudgetGroupCard({ budgetGroup }: IncomeBudgetGroupCardProps) {
  const dispatch = useAppDispatch();

  const refresh = () => {
    dispatch(getCurrentBudget(moment().format("YYYY-MM")));
  };

  return (
    <>
      <Paper elevation={3} sx={{ paddingBottom: 2 }}>
        <Stack>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              paddingX: 2,
              paddingY: 2,
            }}
          >
            <Typography flex={6} color={subHeadingGray} fontWeight="bold">
              {budgetGroup.name}
            </Typography>

            <Typography
              flex={3}
              textAlign="right"
              color={subHeadingGray}
              variant="body2"
            >
              Planned
            </Typography>
            <Typography
              flex={3}
              textAlign="right"
              color={subHeadingGray}
              variant="body2"
            >
              Received
            </Typography>
          </Stack>

          {budgetGroup.budgetGroupItems?.items.map((budgetGroupItem) => (
            <BudgetGroupItemRow
              key={budgetGroupItem?.id}
              budgetGroupItem={budgetGroupItem!}
            />
          ))}

          <Box pt={2} pl={2}>
            <Button
              onClick={() => {
                BudgetGroupItemService.createBlankIncome(budgetGroup.id);
                refresh();
              }}
            >
              Add Income
            </Button>
          </Box>
        </Stack>
      </Paper>
    </>
  );
}

export default IncomeBudgetGroupCard;
