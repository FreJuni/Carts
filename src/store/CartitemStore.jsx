import React, { useContext, useReducer } from 'react'


const AppProvider = React.createContext();

const AppContent = ({children}) => {


    const addItemHandler = (item) => {
        dispatchItem({type : "ADD_ITEM", item})
    }
    
    const removeItemHandler = (id) => {
        dispatchItem({type : "REMOVE_ITEM", payload : id})
    }
    

    const ItemContainer = {
        items : [],
        totalAmount : 0,
    }
    
    const itemReducer = (state,action) => {
        if(action.type === "ADD_ITEM") {
            const updatedTotalAmount = state.totalAmount + action.item.Price * action.item.currentAmountNumber;
            const existedItemID = state.items.findIndex((item) => item.ID === action.item.ID);
            const existedItem = state.items[existedItemID];
            let updateItems;
            if(existedItem) {
                const updateItem = {
                    ...existedItem,
                    currentAmountNumber : existedItem.currentAmountNumber + action.item.currentAmountNumber,
                }
                updateItems = [...state.items];
                updateItems[existedItemID] = updateItem;

            } else {
                updateItems = state.items.concat(action.item); // concat is same with push//
            }
            // console.log(updateItems);
            return {
                ...state,
                items : updateItems,
                totalAmount : updatedTotalAmount,
            }
        }
        if(action.type === "REMOVE_ITEM") {
            const existedID = state.items.findIndex((item) => item.ID === action.payload);
            const existedItem = state.items[existedID];
            const updatedTotalAmount = state.totalAmount - existedItem.Price;
            let updateItem;

            if(existedItem.currentAmountNumber === 1) {
                updateItem = state.items.filter((item) => item.ID !== action.payload);
            } else {
                const updatedItems = {...existedItem, currentAmountNumber : existedItem.currentAmountNumber - 1 };
                updateItem = [...state.items];
                updateItem[existedID] = updatedItems;
            }
            return {
                ...state,
                items : updateItem,
                totalAmount : updatedTotalAmount
            }
        }
        return state;
    }
    
  

    const [itemState,dispatchItem] = useReducer(itemReducer,ItemContainer);
    
    return <AppProvider.Provider value={{...itemState,addItemHandler,removeItemHandler}}>{children}</AppProvider.Provider>
}

export const GlobalContent = () => {
    return useContext(AppProvider);
}

export default AppContent;