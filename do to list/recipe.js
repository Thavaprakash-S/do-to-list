let inputFood=document.getElementById("input-food");
let inputBtn=document.getElementById("input-btn");
let foodContainer=document.getElementById("food-container");
inputBtn.addEventListener("click",()=>{
    if(inputFood.value){
    let newFoodElement=document.createElement("li");
    const divItem=document.createElement("div");
    const divRemoveBtn=document.createElement("div");
    newFoodElement.append(divItem,divRemoveBtn);
    divRemoveBtn.parentElement.setAttribute("onclick","removeItem(event)");
    divRemoveBtn.innerHTML=`<i class="fa-solid fa-xmark"></i>`;
    divItem.textContent=inputFood.value;
    newFoodElement.className="food-item";
    foodContainer.append(newFoodElement);
    inputFood.value="";
}
})
  //  const removeElAnimi=document.getElementById("food-item");
        
 // Remove item
 function removeItem(event){
    // console.log("lppooo");
     let existingList=event.target.parentNode.parentNode;
     existingList.remove();
     inputFood.value="";
 };
