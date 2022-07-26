import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { BudgetGroup, UpdateBudgetGroupInput } from "../API";
import BudgetGroupService from "../utils/BudgetGroupService";

type UpdateBudgetGroupDialogProps = {
  budgetGroup: BudgetGroup;
  isOpen: boolean;
  handleClose: () => void;
};

function UpdateBudgetGroupDialog({
  budgetGroup,
  isOpen,
  handleClose,
}: UpdateBudgetGroupDialogProps) {
  const [isUpdateLoading, setIsUpdateLoading] = useState(false);
  const [name, setName] = useState(budgetGroup.name);
  const [sortId, setSortId] = useState(budgetGroup.sortId);

  const closeDialog = () => {
    clearForm();
    handleClose();
  };

  const clearForm = () => {
    setName("");
    setSortId("");
  };

  const handleUpdate = async () => {
    setIsUpdateLoading(true);
    const toUpdateParams: UpdateBudgetGroupInput = {
      id: budgetGroup.id,
    };

    if (name !== budgetGroup.name) toUpdateParams.name = name;
    if (sortId !== budgetGroup.sortId) toUpdateParams.sortId = sortId;

    await BudgetGroupService.update(toUpdateParams);

    setIsUpdateLoading(false);
    handleClose();
  };

  return (
    <>
      <Dialog disableEscapeKeyDown open={isOpen} onClose={closeDialog}>
        <DialogTitle sx={{ paddingBottom: 2 }}>Update Transaction</DialogTitle>
        <DialogContent sx={{ paddingY: 3 }}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            fullWidth
            label="Sort ID"
            value={sortId}
            onChange={(e) => setSortId(e.target.value)}
          />

          <DialogActions>
            <Button onClick={() => handleClose()} color="secondary">
              Cancel
            </Button>
            <LoadingButton onClick={handleUpdate} loading={isUpdateLoading}>
              Update
            </LoadingButton>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UpdateBudgetGroupDialog;
