import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ShoppingCart from './components/ShoppingCart';
import NavBar from './components/NavBar';
import Cart from './components/Cart';

const ItemsHolder = [
  {
      name:'Naruto',
      itemId: 1,
      itemCost: 19.99,
      imageLocation: 'images/naruto.jpeg'
  },
  {
      name:'Death Note',
      itemId: 2,
      itemCost: 15.49,
      imageLocation: 'images/death-note.jpeg'
  },
  {
    name:'Genos',
    itemId: 3,
    itemCost: 9.99,
    imageLocation: 'images/genos.jpeg'
  },
  {
      name:'Itachi Uchiha',
      itemId: 4,
      itemCost: 10.49,
      imageLocation: 'images/itachi.jpeg'
  },
  {
    name:'Jiraya',
    itemId: 5,
    itemCost: 15.99,
    imageLocation: 'images/jiraya.jpeg'
  },
  {
      name:'Kakashi',
      itemId: 6,
      itemCost: 10.99,
      imageLocation: './images/kakashi.jpeg'
  },
  {
    name:'Minato',
    itemId: 7,
    itemCost: 9.99,
    imageLocation: './images/minato.jpeg'
  },
  {
      name:'Saitama',
      itemId: 8,
      itemCost: 9.99,
      imageLocation: './images/one-punch-man-suit.jpeg'
  },
  {
    name:'One Punch Man',
    itemId: 9,
    itemCost: 15.99,
    imageLocation: './images/one-punch-man.jpeg'
  },
  {
    name:'Pain',
    itemId: 10,
    itemCost: 9.99,
    imageLocation: './images/pain.jpeg'
  },
  {
    name:'Rock Lee',
    itemId: 11,
    itemCost: 15.99,
    imageLocation: './images/rock-lee.jpeg'
  },
  {
    name:'Ryuk',
    itemId: 12,
    itemCost: 10.99,
    imageLocation: './images/ryuk.jpeg'
  },
  {
    name:'Yagami Light',
    itemId: 13,
    itemCost: 13.99,
    imageLocation: './images/yagami-light.jpeg'
  }
];

// const cartItemsHolder = [];

function App() {

  const [items, setItems] = useState(ItemsHolder);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  async function addToCart(item){
    // let cartItemsList = [...cartItems];
    // let flag=0;
    // let counter=0;
    setCartItems(()=>{
      // cartItems.forEach((cartItem, index)=>{
      //   // if(cartItem.itemId)
      //   if(cartItem.id===item.id){
      //     counter++;
      //     console.log(counter);
      //     console.log("They match");
      //     console.log("Before: ")
      //     console.log(cartItems[index]);
      //     cartItems[index].count+=item.count;
      //     console.log("After: ");
      //     console.log(cartItems[index]);
      //     console.log(cartItems);
      //     flag=1;
      //     // return(
      //     //   [...cartItems,{}]
      //     // )
      //   }
      //   console.log("Cart Item id:"+cartItem.id)
      // })
      // if(!flag){
      //   return(
      //     [...cartItems, item]
      //   )
      // }
      // for(let i=0;i<cartItems.length;i++){
      //   if(cartItems[i].id===item.id){
          // item.count=cartItems[i].count+1;
          // cartItems[i].count=item.count;
          // console.log("Item.count="+item.count);
          // return(
          //   cartItems
          // )
      //   }
      // }
      console.log("Enters this place")
      // item.count+=1;
      return(
        [...cartItems,item]
      )

    });
    // console.log(item);
    console.log("Items in cart (addToCart Function):");
    console.log(cartItems);
  }

  const updateCount = async (id,plusOrMinusNum) =>{
    console.log("Enters update count method");
    console.log("Cart items from update count method")
    console.log(cartItems);
    console.log("Parameters for update count:","id:",id,"plusOrMinusNum:",plusOrMinusNum);
    // cartItems.map(cartItem=>(
        // console.log(cartItem)
        // console.log(cartItem.id===id)
        // console.log({name:cartItem.name, id: cartItem.id, plusOrMinusNum: plusOrMinusNum})
        // return cartItem
        setCartItems(
          cartItems.map(cartItem=>
            (plusOrMinusNum>0 || cartItem.count>1)?((cartItem.id===id)?{name:cartItem.name, id: cartItem.id, count: plusOrMinusNum, cartItemCost: cartItem.cartItemCost, cartItemImageLocation: cartItem.cartItemImageLocation}: cartItem):cartItem
          )
        )
    // ))
    // setCartItems(()=>{
    //   cartItems.map(cartItem=>(
    //     cartItem.id===id?{...cartItem, count:count} : cartItem
    //   ))
    // })
  }

  const deleteCartItem = async (cartItemId) =>{
    
    setCartItems(
      cartItems.filter(cartItem=>cartItem.id!==cartItemId)
    )
    console.log("After deletion:")
    console.log(cartItems);
  }

  const emptyCart = async() =>{
    setCartItems([])
  }

  useEffect(()=>{
    console.log("Items in cart(App.js useEfffect): ")
    console.log(cartItems);
    setCartItems(cartItems);
    // setTotalAmount(
    //   totalAmount
    // )
    let totalAmount = 0;
    cartItems.map(cartItem=>(
      totalAmount+=cartItem.count * cartItem.cartItemCost
    ))
    setTotalAmount(
      totalAmount
    )
    console.log("Total amount from use effect: ", totalAmount)
  },[cartItems])

  const findCartItemById =(itemId)=>{
    // let flag=0;
    // let itemInCart;
    // cartItems.forEach((cartItem)=>{
    //   if(cartItem.id===itemId){
    //     flag=1;
    //     itemInCart = cartItem;
    //     return cartItem
    //   }
    // })
    // if(flag){
    //     return itemInCart
    // }
    // return false
    // setCartItems(cartItems)
    for(let i=0; i<cartItems.length; i++){
      console.log("Cart length find cart item method",cartItems.length)
      console.log(cartItems[i])
      console.log("FindCartItemById:","i: ",i,"Cart Item id: ",cartItems[i].id,"Id: ",itemId);
      if(cartItems[i].id===itemId){
        return cartItems[i]
      }
    }
    return false
  }

  return (
    <div className="App">
      <Router>
        <NavBar cartItemCount={cartItems.length}/>  
        <Routes>
          <Route path="/shopping-cart/" element={<Home cartItems={cartItems} updateCount={updateCount} deleteCartItem={deleteCartItem} emptyCart={emptyCart}/>} />
          <Route path="/shopping-cart/shop" element={<Shop items={items} addToCart={addToCart} cartItems={cartItems} findCartItemById={findCartItemById} updateCount={updateCount} deleteCartItem={deleteCartItem} emptyCart={emptyCart}  totalAmount={totalAmount}/>}/>
          <Route path="/shopping-cart/cart" element={<Cart cartItems={cartItems} updateCount={updateCount} deleteCartItem={deleteCartItem} emptyCart={emptyCart} totalAmount={totalAmount}/>}/>
        </Routes>
      </Router>
      {console.log("Items in cart(App.js return method): ")}
      {console.log(cartItems)}
      {console.log("Total cost", totalAmount)}
    </div>
  );
}

export default App;
