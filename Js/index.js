let h1=document.querySelector("h1")
h1.addEventListener("click",()=>{
    location.reload()
})

let header__search=document.querySelector(".header__search")
let header__input=document.querySelector(".header__SearchDiv")

header__search.addEventListener("click",(event)=>{
    header__input.classList.toggle("searchOff")
    header__input.classList.toggle("searchOn")
    event.stopPropagation()
})
header__input.addEventListener("click",(event)=>{
    header__input.classList.add("searchOn")
    event.stopPropagation()
})

let search=function(){
   let searchBox=document.querySelector("#searchItem").value.trim().toUpperCase()
   let product=document.querySelectorAll(".product")
   let pName=document.querySelectorAll(".productDetails .pName")

   for (var i=0; i<pName.length;i++){
      let match=product[i].querySelectorAll(".productDetails .pName")[0]
      let textValue=match.textContent||match.innerHTML

         if(textValue.toUpperCase().indexOf(searchBox) >-1){
            product[i].style.display=""
            
         }else{
            product[i].style.display="none"
         }
      
      
   }
   
}

let NEWARRIVALS=document.querySelector(".NEWARRIVALS")
let FORMEN=document.querySelector(".FORMEN")
let FORWOMEN=document.querySelector(".FORWOMEN")
let TROUSERS=document.querySelector(".TROUSERS")
let SHOES=document.querySelector(".SHOES")
let HATSCAPS=document.querySelector(".HATSCAPS")
let FIFTYSALE=document.querySelector(".FIFTYSALE")
let Introduction2Imgs=document.querySelectorAll(".IntroductionFigure2 img")
let Introduction3Imgs=document.querySelectorAll(".IntroductionFigure3 img")
let IntroductionImg1=document.querySelector(".IntroductionImg1")

let IntroductionFigures=document.querySelector(".IntroductionFigures")
let icons=document.querySelector(".icons")
let CopyFooter=document.querySelector(".CopyFooter")

let NewArrivalsContainer=document.querySelector(".NewArrivalsContainer")
let ForMenContainer=document.querySelector(".ForMenContainer")
let ForWomenContainer=document.querySelector(".ForWomenContainer")
let TrousersContainer=document.querySelector(".TrousersContainer")
let ShoesContainer=document.querySelector(".ShoesContainer")
let HatsCapsContainer=document.querySelector(".HatsCapsContainer")
let FiftySaleContainer=document.querySelector(".FiftySaleContainer")
let Introduction2Container=document.querySelector(".Introduction2Container")
let Introduction3Container=document.querySelector(".Introduction3Container")
let lastContainer=document.querySelector(".lastContainer")

Introduction2Imgs.forEach((one)=>{
   one.addEventListener("click",()=>{
      IntroductionFigures.classList.add("Off")
      icons.classList.add("Off")
      CopyFooter.classList.add("Off")
      Introduction2Container.classList.remove("Off")
})})
Introduction3Imgs.forEach((one)=>{
   one.addEventListener("click",()=>{
      IntroductionFigures.classList.add("Off")
      icons.classList.add("Off")
      CopyFooter.classList.add("Off")
      Introduction3Container.classList.remove("Off")
})})
IntroductionImg1.addEventListener("click",()=>{
   IntroductionFigures.classList.add("Off")
   icons.classList.add("Off")
   CopyFooter.classList.add("Off")
   NewArrivalsContainer.classList.remove("Off")
})

 NEWARRIVALS.addEventListener("click",()=>{
    IntroductionFigures.classList.add("Off")
    icons.classList.add("Off")
    CopyFooter.classList.add("Off")
    ForMenContainer.classList.add("Off")
    ForWomenContainer.classList.add("Off")
    TrousersContainer.classList.add("Off")
    ShoesContainer.classList.add("Off")
    HatsCapsContainer.classList.add("Off")
    FiftySaleContainer.classList.add("Off")
    Introduction2Container.classList.add("Off")
    Introduction3Container.classList.add("Off")
    lastContainer.classList.add("Off")
    NewArrivalsContainer.classList.remove("Off")
 })

 FORMEN.addEventListener("click",()=>{
    IntroductionFigures.classList.add("Off")
    icons.classList.add("Off")
    CopyFooter.classList.add("Off")
    NewArrivalsContainer.classList.add("Off")
    ForWomenContainer.classList.add("Off")
    TrousersContainer.classList.add("Off")
    ShoesContainer.classList.add("Off")
    HatsCapsContainer.classList.add("Off")
    FiftySaleContainer.classList.add("Off")
    Introduction2Container.classList.add("Off")
    Introduction3Container.classList.add("Off")
    lastContainer.classList.add("Off")
    ForMenContainer.classList.remove("Off")
 })

 FORWOMEN.addEventListener("click",()=>{
    IntroductionFigures.classList.add("Off")
    icons.classList.add("Off")
    CopyFooter.classList.add("Off")
    NewArrivalsContainer.classList.add("Off")
    ForMenContainer.classList.add("Off")
    TrousersContainer.classList.add("Off")
    ShoesContainer.classList.add("Off")
    HatsCapsContainer.classList.add("Off")
    FiftySaleContainer.classList.add("Off")
    Introduction2Container.classList.add("Off")
    Introduction3Container.classList.add("Off")
    lastContainer.classList.add("Off")
    ForWomenContainer.classList.remove("Off")
 })

 TROUSERS.addEventListener("click",()=>{
    IntroductionFigures.classList.add("Off")
    icons.classList.add("Off")
    CopyFooter.classList.add("Off")
    NewArrivalsContainer.classList.add("Off")
    ForWomenContainer.classList.add("Off")
    ForMenContainer.classList.add("Off")
    ShoesContainer.classList.add("Off")
    HatsCapsContainer.classList.add("Off")
    FiftySaleContainer.classList.add("Off")
    Introduction2Container.classList.add("Off")
    Introduction3Container.classList.add("Off")
    lastContainer.classList.add("Off")
    TrousersContainer.classList.remove("Off")
 })

 SHOES.addEventListener("click",()=>{
    IntroductionFigures.classList.add("Off")
    icons.classList.add("Off")
    CopyFooter.classList.add("Off")
    NewArrivalsContainer.classList.add("Off")
    ForWomenContainer.classList.add("Off")
    ForMenContainer.classList.add("Off")
    TrousersContainer.classList.add("Off")
    HatsCapsContainer.classList.add("Off")
    FiftySaleContainer.classList.add("Off")
    Introduction2Container.classList.add("Off")
    Introduction3Container.classList.add("Off")
    lastContainer.classList.add("Off")
    ShoesContainer.classList.remove("Off")
 })

 HATSCAPS.addEventListener("click",()=>{
    IntroductionFigures.classList.add("Off")
    icons.classList.add("Off")
    CopyFooter.classList.add("Off")
    NewArrivalsContainer.classList.add("Off")
    ForWomenContainer.classList.add("Off")
    ForMenContainer.classList.add("Off")
    TrousersContainer.classList.add("Off")
    ShoesContainer.classList.add("Off")
    FiftySaleContainer.classList.add("Off")
    Introduction2Container.classList.add("Off")
    Introduction3Container.classList.add("Off")
    lastContainer.classList.add("Off")
    HatsCapsContainer.classList.remove("Off")
 })

 FIFTYSALE.addEventListener("click",()=>{
    IntroductionFigures.classList.add("Off")
    icons.classList.add("Off")
    CopyFooter.classList.add("Off")
    NewArrivalsContainer.classList.add("Off")
    ForWomenContainer.classList.add("Off")
    ForMenContainer.classList.add("Off")
    TrousersContainer.classList.add("Off")
    ShoesContainer.classList.add("Off")
    HatsCapsContainer.classList.add("Off")
    Introduction2Container.classList.add("Off")
    Introduction3Container.classList.add("Off")
    lastContainer.classList.add("Off")
    FiftySaleContainer.classList.remove("Off")
 })

let IntroductionImg3=document.querySelector(".IntroductionImg3")
let IntroductionImg3_2=document.querySelector(".IntroductionImg3_2")
let increment=0

setInterval(()=>{
   increment=increment+1
       
       if(increment===1){
         IntroductionImg3.classList.toggle("fadeOff")
         IntroductionImg3.classList.toggle("fadeOn")
         IntroductionImg3_2.classList.toggle("fadeOn") 
         IntroductionImg3_2.classList.toggle("fadeOff") 

       }
       if(increment===2){
         IntroductionImg3.classList.toggle("fadeOff")
         IntroductionImg3.classList.toggle("fadeOn")
         IntroductionImg3_2.classList.toggle("fadeOn") 
         IntroductionImg3_2.classList.toggle("fadeOff") 
         increment=0;
       }
       
},3000)

let IntroductionFigure2__button1=document.querySelector(".IntroductionFigure2__button1")
let IntroductionFigure2__button2=document.querySelector(".IntroductionFigure2__button2")
let IntroductionImg2=document.querySelector(".IntroductionImg2")
let IntroductionImg2_2=document.querySelector(".IntroductionImg2_2")

IntroductionFigure2__button1.addEventListener("click",(event)=>{
   IntroductionFigure2__button1.style.backgroundColor="red"
   IntroductionFigure2__button2.style.backgroundColor="transparent"
   IntroductionImg2.classList.remove("Off")
   IntroductionImg2_2.classList.add("Off")
   event.stopPropagation()
})
IntroductionFigure2__button2.addEventListener("click",(event)=>{
   IntroductionFigure2__button1.style.backgroundColor="transparent"
   IntroductionFigure2__button2.style.backgroundColor="red"
   IntroductionImg2.classList.add("Off")
   IntroductionImg2_2.classList.remove("Off")
   event.stopPropagation()
})

let Introduction2Box1Img=document.querySelector(".Introduction2Box1 img")
let Introduction2Box2Img=document.querySelector(".Introduction2Box2 img")
let Introduction2Box3Img=document.querySelector(".Introduction2Box3 img")

Introduction2Box1Img.addEventListener("mouseover",()=>{
   Introduction2Box1Img.src="../Images/Introduction2_1_1.png"
})
Introduction2Box1Img.addEventListener("mouseout",()=>{
   Introduction2Box1Img.src="../Images/Introduction2_1.png"
})
Introduction2Box2Img.addEventListener("mouseover",()=>{
   Introduction2Box2Img.src="../Images/Introduction2_2_1.png"
})
Introduction2Box2Img.addEventListener("mouseout",()=>{
   Introduction2Box2Img.src="../Images/Introduction2_2.png"
})
Introduction2Box3Img.addEventListener("mouseover",()=>{
   Introduction2Box3Img.src="../Images/Introduction2_3_1.png"
})
Introduction2Box3Img.addEventListener("mouseout",()=>{
   Introduction2Box3Img.src="../Images/Introduction2_3.png"
})

let Introduction3Box1Img=document.querySelector(".Introduction3Box1 img")
let Introduction3Box2Img=document.querySelector(".Introduction3Box2 img")
let Introduction3Box3Img=document.querySelector(".Introduction3Box3 img")

Introduction3Box1Img.addEventListener("mouseover",()=>{
   Introduction3Box1Img.src="../Images/Introduction3_1_1.png"
})
Introduction3Box1Img.addEventListener("mouseout",()=>{
   Introduction3Box1Img.src="../Images/Introduction3_1.png"
})
Introduction3Box2Img.addEventListener("mouseover",()=>{
   Introduction3Box2Img.src="../Images/Introduction3_2_1.png"
})
Introduction3Box2Img.addEventListener("mouseout",()=>{
   Introduction3Box2Img.src="../Images/Introduction3_2.png"
})
Introduction3Box3Img.addEventListener("mouseover",()=>{
   Introduction3Box3Img.src="../Images/Introduction3_3_1.png"
})
Introduction3Box3Img.addEventListener("mouseout",()=>{
   Introduction3Box3Img.src="../Images/Introduction3_3.png"
})

function imageListener(imageSource,containerName,productName,quantity,price,backGroundclr){
   document.querySelector(`.${containerName}`).classList.add("Off")
   IntroductionFigures.classList.add("Off")
   icons.classList.add("Off")
   CopyFooter.classList.add("Off")
   NewArrivalsContainer.classList.add("Off")
   ForWomenContainer.classList.add("Off")
   ForMenContainer.classList.add("Off")
   TrousersContainer.classList.add("Off")
   ShoesContainer.classList.add("Off")
   HatsCapsContainer.classList.add("Off")
   Introduction2Container.classList.add("Off")
   Introduction3Container.classList.add("Off")
   lastContainer.classList.add("Off")
   FiftySaleContainer.classList.add("Off")
   document.querySelector(".lastContainer").classList.remove("Off")
   document.querySelector(".LastImg").src=imageSource
   document.querySelector(".LastImg").style.backgroundImage=backGroundclr
   document.querySelector(".lastBox2 .productName").innerHTML=productName
   document.querySelector(".lastBox2 .quantity").innerHTML=`Quantity:`
   document.querySelector(".lastBox2 .price").innerHTML=`Price:`
   document.querySelector(".lastBox2 .quantitySpan").innerHTML=`${quantity}`
   console.log(document.querySelector(".lastBox2 .priceSpan").innerHTML=`${price}`)
   let sizes=document.querySelectorAll(".size div")
   sizes.forEach((size)=>{
      size.classList.add("redSizeButton")
      size.classList.remove("orangeSizeButton")
      
   })
   totalpriceValue.innerHTML="$ "+quantity*price+"USD"
   quantityIncrement=1
}


let sizes=document.querySelectorAll(".size div")

sizes.forEach((size)=>{
   size.addEventListener("click",(event)=>{
      event.target.classList.toggle("redSizeButton")
      event.target.classList.toggle("orangeSizeButton")
      if(size===sizes[0]){
         for (let i=1;i<=9;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         }
      }
      if(size===sizes[1]){
         for (let i=2;i<=9;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
            sizes[0].classList.add("redSizeButton")
            sizes[0].classList.remove("orangeSizeButton")
         }
      }
      if(size===sizes[2]){
         for (let i=3;i<=9;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         for (let i=0;i<=1;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         }
         }
      }
      if(size===sizes[3]){
         for (let i=4;i<=9;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         for (let i=0;i<=2;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         }
         }
      }
      if(size===sizes[4]){
         for (let i=5;i<=9;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         for (let i=0;i<=3;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         }
         }
      }
      if(size===sizes[5]){
         for (let i=6;i<=9;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         for (let i=0;i<=4;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         }
         }
      }
      if(size===sizes[6]){
         for (let i=7;i<=9;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         for (let i=0;i<=5;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         }
         }
      }
      if(size===sizes[7]){
         for (let i=8;i<=9;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         for (let i=0;i<=6;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         }
         }
      }
      if(size===sizes[8]){
         for (let i=9;i<=9;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         for (let i=0;i<=7;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         }
         }
      }
      if(size===sizes[9]){
         for (let i=0;i<=8;i++){
            sizes[i].classList.add("redSizeButton")
            sizes[i].classList.remove("orangeSizeButton")
         }
      }
   })
})

let quantityIncreaseBtn=document.querySelector(".quantityDiv .quantityIncreaseBtn")
let quantityDecreaseBtn=document.querySelector(".quantityDiv .quantityDecreaseBtn")
let quantityIncrement=1
let totalpriceValue=document.querySelector(".lastBox2 .totalpriceSpan")


quantityIncreaseBtn.addEventListener("click",()=>{
   quantityIncrement=quantityIncrement+1
   document.querySelector(".lastBox2 .quantitySpan").innerHTML=`${quantityIncrement}`
   totalpriceValue.innerHTML="$ "+quantityIncrement*parseFloat(document.querySelector(".lastBox2 .priceSpan").innerHTML)+" USD"
   
})

quantityDecreaseBtn.addEventListener("click",()=>{
   if(quantityIncrement>1){
      quantityIncrement=quantityIncrement-1
      document.querySelector(".lastBox2 .quantitySpan").innerHTML=`${quantityIncrement}`
      totalpriceValue.innerHTML="$ "+quantityIncrement*parseFloat(document.querySelector(".lastBox2 .priceSpan").innerHTML)+" USD"
   }
})


