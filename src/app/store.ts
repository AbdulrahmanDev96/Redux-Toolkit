// hndh 3la el function el bt3mel create le al middleware
// const logger = reduxLogger.createLogger()
import { configureStore } from "@reduxjs/toolkit"
// ana el b3mel el asm dah
import cakeReducers from "../features/cake/cakeSlice"
import iceCreamReducers from "../features/iceCream/IceCreamSlice"
import userReducer from "../features/user/userSlice"

const store = configureStore({
  // el reducer function bdef akter men reducer fe el application bta3e
  // 3andy hana two functions cake and iceCream
  reducer: {
    cake: cakeReducers,
    iceCream: iceCreamReducers,
    user: userReducer
  },
  // hana ana 3malt concat aw deft logger middleware 
  // demn el defaultMiddleware bt3et el redux
  // middleware: (getDefaultMiddle)=> getDefaultMiddle().concat(logger)
})


// RootState: asm el state bt3na aw el type bt3 el state
// el kema bt3to 3bara 3an ReturnType
// ReturnType: btabel mene no3 el type
// we btrg3 lya type we t3mel store el hyrg3 fe type bta3 el state
// getState: el function el btrg3 el (store) bdefha gowa generic type
export type RootState = ReturnType<typeof store.getState>
// typeof: trg3 le no3 el data
// RootState hyt3ref 3an treko el useSelector we adef el type bte el useSelector
// 3l4an geb el state bdelo el getState 3l4an a5od kemet el state
// el hyrg3 el type pta3 el state
export type AppDispatch = typeof store.dispatch;
// AppDispatch : bdelol el dispatch method 3l4an ynfez el action
// el fe store 
// y3ny 3andy el type pta3 el dispatch el hyrg3

// RootState: hyt3ref 3an treko el useSelector we adef el type bte el useSelector
// AppDispatch : hyt3ref 3an treko el useDispatch

// m7tag adef el types 3ala el useSelector we el useDispatch
export default store