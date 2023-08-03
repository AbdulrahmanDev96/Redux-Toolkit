// me4 m7tag t3mel import el react how byt3rf 3leha low7do
import { ordered, reStocked } from "./cakeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

// useSelector:
// bt3mel select le el store we tbtde twfroh le el component el ana fe
// btabel mene el callback function aw function zay el useEffect

// useDispatch:
// bt3mel modifier le al actions el 3andy fe slice

const CakeView = () => {
  // use useSelector b5zen el state 
  // 3l4an a3mel menha mrge3 wakder arg3lha
  const numberOfCake = useAppSelector((state) => state.cake.numberOfCake)
  const dispatch = useAppDispatch();
  return <div>
    <h1>Number Of cakes- {numberOfCake}</h1>
    <button onClick={() => dispatch(ordered())}>Order Cake</button>
    {/* hena fe reStocked montzer mene payload el haya 10 */}
    <button onClick={() => dispatch(reStocked(10))}>Restock Cake</button>
  </div>;
};

export default CakeView;
