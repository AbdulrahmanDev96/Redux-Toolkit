// hana b3mel change le asm el action be asm tany msalan cakeOrdered
// 3l4an my7sal4 conflict m3a el slice el tany
import {ordered as cakeOrdered} from "../cake/cakeSlice"
import {createSlice, PayloadAction} from "@reduxjs/toolkit"


// ExtraReducer :
// 3l4an tnefz action creator fe reducer function mo5tlef
// low bemel add Cake we 3yez ydef iceCream free low7do mslan

// initialState types
type initialStateTypes = {
  numberOfIceCream: number
}


const initialState: initialStateTypes = {
  numberOfIceCream : 20
}

// createSlice A function that accepts an initial state, 
// an object full of reducer functions, and a "slice name",
// and automatically generates action creators and action types that correspond to the reducers and state.

// createSlice bt5od mene Object 
// awel 7aga fe hya el name el howa asm el slice
// we b3d keda el initialState
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: initialState,
  // el reducer 3bara 3an object fe el actions btow3e
  // we bdef el functions el bthandel el action de
  reducers: {
    // da 3bara 3an action creator we fe nfs el waket reducer function
    // el action creator 3bara 3an el orderd 
    //we el reducer function 3bara 3an el function
    // el action creator dol tb3 el slice el ana feha
    ordered : (state) => {
      state.numberOfIceCream --;
    },
    reStocked: (state, action:PayloadAction<number>) => {
      // el payload low ana b3et 5 maslan btb3et el value fe el state
      state.numberOfIceCream += action.payload
    },
  },
  // hy5od object 3bara 3an key and value
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numberOfIceCream--;
  //   }
  // }
  // ht5od mene function 3bara 3an action creator el hya el builder
  // el builder dah m2n 5lalow tader bydef action creator le al slice el anta mogod fe
  extraReducers: (builder) => {
    // 3l4an adef 7alah bst3mel builder
    // addCase bt2bel mene el action creator
    builder.addCase(cakeOrdered, (state) => {
      state.numberOfIceCream--;
    })
  }
})

//bemel export el el reducer function 3l4an awsel leha fe al store
export default iceCreamSlice.reducer

export const {ordered, reStocked} = iceCreamSlice.actions