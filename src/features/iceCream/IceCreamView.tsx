// me4 m7tag t3mel import el react how byt3rf 3leha low7do
import { ordered, reStocked } from "./IceCreamSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const IceCreamView = () => {
  const numberOfIceCream = useAppSelector((state) => state.iceCream.numberOfIceCream)
  const dispatch =  useAppDispatch()
  return <div>
    <h1>Number Of IceCream- {numberOfIceCream}</h1>
    <button onClick={() => dispatch(ordered())}>Order IceCream</button>
    <button onClick={() => dispatch(reStocked(20))}>Restock IceCream</button>
  </div>;
};

export default IceCreamView;
