import { createSlice } from "@reduxjs/toolkit";




const cartSlice = createSlice({ //we need 3 things to build a store

    name:"cart", //firstthing
    initialState:{ //secondthing
        items:[]
    },
    reducers:{ //thirdthing
        //state is the initial state and action is data which is comming in....
        addItem: (state,action) => {
            state.items.push(action.payload); 
        },
        removeItem: (state,action)=>{
            state.items.pop()
        },
        clearCart:(state) =>{
          state.items = [];
        } 
    }
})

export  const { addItem,removeItem,clearCart } = cartSlice.actions; //This is how we export actions to other components.
export default cartSlice.reducer; //This is how we export reducer to other components  