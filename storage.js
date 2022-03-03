const displayCard=()=>{
    const cart = getCard();
    for(const name in cart){
        displayData(name);
    }
}

const addbtn = () => {
  const productInput = document.getElementById("product-name");
  const productValue = productInput.value;
  if(!productValue){
      return ;
  }
  //display ul
  displayData(productValue);

  //storage
  addProduct(productValue);
  productInput.value = "";
};

const displayData = (name) => {
  const ul = document.getElementById("producet");
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};

const getCard = () => {
  const cart = localStorage.getItem("cart");
  let carObj;
  if (cart) {
    carObj = JSON.parse(cart);
  } else {
    carObj = {};
  }
  return carObj;
};

const addProduct = (name) => {
  const cart = getCard();
  if(cart[name]){
      cart[name]=cart[name]+1;

  }else{
    cart[name]=1;
  }
  const addCart=JSON.stringify(cart);
  localStorage.setItem('cart',addCart)
  console.log(cart);
};
const storagebtn=()=>{
    document.getElementById('producet').textContent='';
    localStorage.removeItem('cart');
}
displayCard();