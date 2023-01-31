let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
})

const allProducts =  'https://fakestoreapi.com/products';
const categories = 'https://fakestoreapi.com/products/categories';
const oneProduct = 'https://fakestoreapi.com/products/1'

let getList = async()=>{
    const products = await fetch(allProducts);
    const data = await products.json();
    return data;
}

getList().then( (data)=>{
    console.log(data);
})