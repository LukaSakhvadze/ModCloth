document.querySelector(".card-number-input").oninput=()=>{
    document.querySelector(".card-number-box").innerText=document.querySelector(".card-number-input").value
} 

document.querySelector(".card-holder-input").oninput=()=>{
    document.querySelector(".card-holder-name").innerText=document.querySelector(".card-holder-input").value
}


document.querySelector(".month-input").oninput=()=>{
    document.querySelector(".exp-month").innerText=document.querySelector(".month-input").value
}
document.querySelector(".year-input").oninput=()=>{
    document.querySelector(".exp-year").innerText=document.querySelector(".year-input").value
}

document.querySelector(".cvv-input").onmouseenter=()=>{
    document.querySelector(".front").style.transform=`perspective(1000px) rotateY(-180deg)`
    document.querySelector(".backSide").style.transform=`perspective(1000px) rotateY(0deg)`
    
}
document.querySelector(".cvv-input").onmouseleave=()=>{
    document.querySelector(".front").style.transform=`perspective(1000px) rotateY(0deg)`
    document.querySelector(".backSide").style.transform=`perspective(1000px) rotateY(180deg)`
}
document.querySelector(".cvv-input").oninput=()=>{
    document.querySelector(".cvvInfoBox").innerText=document.querySelector(".cvv-input").value
    console.log(document.querySelector(".cvv-input").value)
}


document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault()
})

document.querySelector(".submit-btn").addEventListener("click",()=>{
    document.location.href="Purchase.html"
})
