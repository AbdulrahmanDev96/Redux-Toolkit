import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";

// de el kema el btrg3 men el endpoint
// y3ne el data el rg3a me4 user wa7ed dah array of users
type User = {
  id: number,
  name: string,
}


// initialState types
type initialStateTypes = {
  loading: boolean,
  data: User[],
  error: string
}

// dkder ageb no3 el type men initialState nfsha hover 3leha\
// const initialState: {
//   loading: boolean;
//   user: never[] hana how me4 mt3ref yleha aza kanet array of users fe by3mlha never;
//   error: string;
// }
const initialState:initialStateTypes = {
  loading: false,
  data: [],
  error: "",
};

// async function
// asm el action creator

// createAsyncThunk:
// btabel mene asm el async action user/fetchUsers
// tany 7aga el callback function
// b3d keda by3ref 3 action creator
//           request, success,   failure

// howa by3mel Generated lehom byDefault
// Generated pending, fulfilled, rejected action types
// b3mel define le createAsyncThunk 
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    // res.data btmsel 3andy array of users
    .then((res) => res.data);
});

// name bt3 el slice
// tany 7aga el initialState
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    // hb3t el async action.pending
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      // kemt el state = action.payload
      state.data = action.payload;
      state.error = ""
    });
    builder.addCase(fetchUsers.rejected , (state, action) => {
      state.loading = false;
      state.data = [] ;
      // message el error de el rag3a men el endpoint
      state.error = action.error.message || "Something Went Wrong";
    })
  }
});


export default  userSlice.reducer;
