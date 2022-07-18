const shorten=(cell)=>{
    const cellSplit=cell.split(" ")
    const titleReplace=` ${cellSplit[0]} ${cellSplit[1]}`
    return titleReplace;
}

const inCart=(state,id)=>{
    const result=!!state.selectedItems.find(item=>item.id===id)
    return result;
}

const quatitiyCount=(state,id)=>{
    const quantity=state.selectedItems.findIndex(item=>item.id===id);
    if (quantity===-1){
        return false
    } else {
        return state.selectedItems[quantity].quantity
    }
    
}
export {shorten,inCart,quatitiyCount}