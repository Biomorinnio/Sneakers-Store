const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  


const wrapper = document.querySelector('.slidernav'), items = document.querySelectorAll('.menu')

let currTitle = document.querySelector('.prodTitle');
let currPrice = document.querySelector('.prodPrice');
let currImg = document.querySelectorAll('.prodImg')
let currCol1 = document.querySelector('.butCol1');
let currCol2 = document.querySelector('.butCol2');


let choosenProduct = products[0]


for(let i=0; i < items.length; i++){
    items[i].addEventListener('click', function(){
        wrapper.style.transform = `translateX(${-100*i}vw)`
        

        choosenProduct = products[i];   
        currTitle.textContent = choosenProduct.title;
        currPrice.textContent = `$${choosenProduct.price}`;
        currImg[0].src = choosenProduct.colors[0].img;
        currImg[1].src =  choosenProduct.colors[1].img;
        currCol1.style.backgroundColor = choosenProduct.colors[0].code
        currCol2.style.backgroundColor = choosenProduct.colors[1].code
    
    });
    
    
}



const butColor1 = document.querySelector('.butCol1');
const butColor2 = document.querySelector('.butCol2');
const imgs = document.querySelectorAll('.prodImg')


butColor2.addEventListener('click', function(){
    imgs[0].id = 'none';
    imgs[1].id = ''
})

butColor1.addEventListener('click', function(){
    imgs[1].id = 'none';
    imgs[0].id = ''
})

const butSizes = document.querySelectorAll('.butSize')

for(let i of butSizes){
  i.addEventListener('click', function(){
    for(let j of butSizes){
      j.style.backgroundColor = 'white'
      j.style.color = 'black'
    };
    i.style.backgroundColor = 'black'
    i.style.color = 'white'
  })
}

const butBuy = document.querySelector('.buy'), payment = document.querySelector('.payment')
const payExit = document.querySelector('.payExit');

butBuy.addEventListener('click', function(){
    payment.id = '';
    
})

payExit.addEventListener('click', function(){
  payment.id = 'none'
})





