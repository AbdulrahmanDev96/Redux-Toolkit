import {useEffect} from "react";
import {fetchUsers} from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const UserList = () => {
  // el data el rg3a a5at menha reference we smeto data
  // el object el asmo data gowah loading we error we data el hya el users
  const data = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  // hst3mel useEffect 3l4an hyrg3le kema bt3et el users
  // we anfez el render el by7sel fe el sf7a
  // el useEffect tnfez el action creator we el request
  // we b3d keda y3mel rerender le al component be el kema el gdeda
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>List of Users: </h2>
      {data.loading && <div>Loading...</div>}
      {/* hana ana bowlow an low el data.loading kemtha be false we fe error 
      fana 3ayzk trg3le message el error low mafe4 error rg3le mtzher4 7aga null */}
      {!data.loading && data.error ? <div>Error : {data.error}</div> : null}
      {/* hena el data el rg3a me el endpoint feha array of users y3ne el data feha
      object asmow data gowha game3 el users */}
      {/* low el loading be false we array of users length bt3ha kan mogod felan 
        lw ger keda a3red leya null */}
      {!data.loading && data.data.length ? <ul>
        {data.data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> : null}
    </div>
  );
};

export default UserList;
