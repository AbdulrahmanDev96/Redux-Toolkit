import {createSlice, PayloadAction} from "@reduxjs/toolkit"

// Create Slice :
// 3bara 3an Goza 5as be feature mo3yan maslan tb3 el cake
// tader tdef akter men slice 3andk fe el application
// ay feature 3andk fe el application btdefha fe soret slice

// initialState types
type initialStateType = {
  numberOfCake: number
}

// el afdel ank tdef el initialState bra hana
const initialState:initialStateType = {
  numberOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  // initialState lw el asm how how el value mmoken t4el el value
  initialState: initialState,
  // awel 7age bdef name el action gow el reducers
  reducers: {
    // de el function bt3et el reducer function el bthndel el action
    // ordered asm el action gowha el function el bthndel el action
    ordered: (state = initialState) => {
      state.numberOfCake--;
    },
    // pdef el action type 3an treak PayloadAction Generic type
    reStocked: (state ,action:PayloadAction<number>) => {
      // el payload by7ded 3ayz adef kam fe el state
      state.numberOfCake += action.payload
    }
  },
});

export default cakeSlice.reducer;

// h3mel destructure le al actions el homa
export const {ordered, reStocked} = cakeSlice.actions
