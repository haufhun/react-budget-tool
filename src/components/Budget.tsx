import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

function Budget() {
  const categories = useAppSelector(
    (state: RootState) => state.app.categories.items
  );

  return <div>Hello Budget</div>;
}

export default Budget;
