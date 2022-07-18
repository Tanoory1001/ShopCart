import React ,{ useReducer,createContext } from 'react';

const initialState={selectedItems:[],itemCounter:0,total:0,checkOut:false};

const sumItem=item=>{
    const itemCounter=item.reduce((total,product)=>total+product.quantity , 0);
    const total=item.reduce((total,product)=>total+ product.price * product.quantity , 0).toFixed(2)
    return({itemCounter,total})
}

const operation=(state,action)=>{
    console.log(state)
    
    switch(action.type){
        case "AddItem":
            if(!state.selectedItems.find(item=>item.id===action.payload.id)){
                state.selectedItems.push({...action.payload,quantity:1})}
            return{...state,selectedItems:[...state.selectedItems],...sumItem(state.selectedItems),checkOut:false};

        case"RemoveItem":
            const newselectedItems=state.selectedItems.filter(item=>item.id!==action.payload.id);
            return{...state,selectedItems:[...newselectedItems],...sumItem(newselectedItems)};

        case"Increase":
            const indexI=state.selectedItems.findIndex(item=>item.id===action.payload.id);
            state.selectedItems[indexI].quantity++
            return{...state,...sumItem(state.selectedItems)}

        case"Decreaase":
            const indexD=state.selectedItems.findIndex(item=>item.id===action.payload.id);
            state.selectedItems[indexD].quantity--
            return{...state,...sumItem(state.selectedItems)}

        case "CheckOut":return{selectedItems:[],itemCounter:0,total:0,checkOut:true}

        case "Clear":return{selectedItems:[],itemCounter:0,total:0,checkOut:false}
                
        default:return state;   
    }}

export const cartContext=createContext()

const CardProvider = ({children}) => {
    const [state,dispatch]=useReducer(operation,initialState)
    return (
        <cartContext.Provider value={{state,dispatch}}>
            {children}           
        </cartContext.Provider >
    );
};

export default CardProvider;