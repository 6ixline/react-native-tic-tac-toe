import {
    createSlice
} from '@reduxjs/toolkit'
  
export const playerSlice = createSlice({
    name: 'user',
    initialState: ["o", "x"],
    reducers: {
        setPlayer(state, action){
        if(action.payload == "o"){
            state[0] = "o";
            state[1] = "x";
        }else{
            state[0] = "x";
            state[1] = "o";
        }
        }
    },

})

export const {setPlayer} = playerSlice.actions;
  
export default playerSlice.reducer
  