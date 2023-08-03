import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/iceCream/IceCreamView";
import UserList from "./features/user/UserList";
import "./App.css";

function App() {
  return (
    <div>
      <CakeView/>
      <IceCreamView />
      <UserList />
    </div>
  );
}

export default App;
