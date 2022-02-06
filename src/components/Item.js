import { useEffect, useState } from "react/cjs/react.development";

const Item = ({ item, id, addToCart, cartItems, findCartItemById, updateCount }) =>{
    // const [currItem, setCurrItem] = useState(item);
    const [currName, setCurrName] = useState(item.name);
    const [currItemId, setCurrItemId] = useState(item.itemId);
    const [currItemCount, setCurrItemCount] = useState(findCartItemById(currItemId)?findCartItemById(currItemId).count:1);

    
    useEffect(()=>{
        console.log("Current item count:",currItemCount)
        console.log(cartItems)
        const getCurrItemCount = async () =>{
            setCurrItemCount(findCartItemById(currItemId)?findCartItemById(currItemId).count:1)
        }
        getCurrItemCount();
    },[currItemCount, cartItems, currItemId, findCartItemById])
    // setCurrItemCount(()=>(
    //     findCartItemById(currItemId)?findCartItemById(currItemId).count:1
    // ))

    const onClickFunctions = async () =>{
        console.log("cart item")
        // let currItem = findCartItemById(currItemId);
        // console.log(currItem?currItem.count:"No count")
        setCurrItemId(id);
        console.log("Item: ")
        console.log("On click fucntion cart items");
        console.log(cartItems)
        console.log(findCartItemById(currItemId));
        if(findCartItemById(currItemId)){
            setCurrItemCount(currItemCount+1)
            await updateCount(currItemId, currItemCount+1);
        }else{
            await addToCart({name:currName,id:currItemId, count:currItemCount})
        }
    }
    return(
        <div className="item" onClick={()=>onClickFunctions()} id={item.itemId}>
            <p>{item.name}</p>
            {/* {console.log(findCartItemById(currItemId)?findCartItemById(currItemId).count:'')} */}
            {/* {console.log(currItem)} */}
        </div>
    );
};

export default Item;