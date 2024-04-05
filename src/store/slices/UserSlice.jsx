import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
            console.log(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload,1);
        },
        clearAllUsers(state, action) {
        //    return [];

         },
    },
    // extraReducers(builder){
    //     builder.addCase(userSlice.actions.clearAllUsers,()=>{
    //         return [];
    //     })
    // }
});

// if action is supposed to be handled by one reducer , use reducers.
// if action is supposed to be handled by multiple reducer use extraReducers.

console.log(userSlice.actions)
export default userSlice.reducer;  
export const {addUser , removeUser , clearAllUsers} = userSlice.actions;