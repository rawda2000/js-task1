var allproducts= document.querySelectorAll(".list li")
var products= document.querySelector("#products")
var btn= document.querySelector("#btn")
var totalprice=0
var cost= document.getElementById("cost")
var div= document.querySelector(".div3")

allproducts.forEach(function (item){
    item.onclick= function(){
        totalprice += +(item.getAttribute("price"))
        products.innerHTML  += item.textContent +"   /"

        if (products.innerHTML != "" ){
            btn.style.display = "block"
        }
    }
})
btn.onclick = function (){
    if (products.innerHTML != "" ){
        cost.style.display = "block"
        div.style.border = "2px solid rgb(123, 109, 109)"
    }
    cost.innerHTML = (totalprice) +" EGP"
}