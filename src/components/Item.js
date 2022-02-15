import { useEffect, useState } from "react";
// import '../styles/I.css'

const Item = ({ item, id, addToCart, cartItems, findCartItemById, updateCount }) =>{
    // const [currItem, setCurrItem] = useState(item);
    const [currName, setCurrName] = useState(item.name);
    const [currItemId, setCurrItemId] = useState(item.itemId);
    const [currItemCount, setCurrItemCount] = useState(findCartItemById(currItemId)?findCartItemById(currItemId).count:1);
    const [currItemCost, setCurrItemCost] = useState(item.itemCost);
    const [currImgLocation, setCurrImgLocation] = useState(item.imageLocation);
    
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
            await addToCart({name:currName,id:currItemId, count:currItemCount, cartItemCost: currItemCost, cartItemImageLocation: currImgLocation})
        }
    }
    return(
        <div className="item" id={item.itemId}>
            <img src={`/shopping-cart/${item.imageLocation}`} alt={`${item.name}`}/>
            <div className="item-info">
                <span>{item.name}</span>
                <span>${item.itemCost}</span>
            </div>
            <div onClick={()=>onClickFunctions()} className="add-to-cart">Add to cart</div>
            {/* <p>{item.name},{item.itemCost}</p> */}
            
            {/* {console.log(findCartItemById(currItemId)?findCartItemById(currItemId).count:'')} */}
            {/* {console.log(currItem)} */}
            {/* {console.log("Item.js")}
            {console.log(item)} */}
        </div>
    );
};

export default Item;