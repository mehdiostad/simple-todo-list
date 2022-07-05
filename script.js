let $ = document;
let list = $.querySelector("#to-do-list")
let addInput = $.querySelector("#add-form input")
let addBtn = $.querySelector("#add-form button")
let deleteBtn = $.getElementsByClassName("delete-btn")
let searchInput = $.querySelector("#search-form input")

list.addEventListener("click", (e)=>{

    if(e.target.nodeName == "SPAN"){
        e.target.parentNode.remove();
    }
    if(list.children.length == 0){
        listEmpetyMsg = $.createElement("div");
        listEmpetyMsg.style.textAlign = "center"
        listEmpetyMsg.color = "#333"
        listEmpetyMsg.innerText ="your list is empety"
        listEmpetyMsg.id = "emptyMsg"
        list.appendChild(listEmpetyMsg)
    }
})
addBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(addInput.value == "") { 
        
        alert("هیچ تسکی وارد نشده است!!")
        return false;
    
    
    }
        
    
    if($.querySelector("#emptyMsg")){
        $.querySelector("#emptyMsg").remove()
    }
    list.appendChild(createListItem(addInput.value))
    addInput.value = ""
})

let createListItem =(itemValue)=>{
    let item = $.createElement("li");
    let title = $.createElement("span")
    let btn = $.createElement("span")

    item.className = "to-do-item"

    title.className = "title"
    title.innerText = itemValue

    btn.className = "delete-btn"
    btn.innerText = "delete"

    item.appendChild(title)
    item.appendChild(btn)

    return item

}
searchInput.addEventListener("input" , (e)=>{

    Array.from(list.children).forEach(element=>{

    if($.querySelector("#emptyMsg")){
        alert("هیچ تسکی وجود نداره!")
        searchInput.value = ""
        return;
    }
    if(!element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
        element.style.display ="none"
    }else{
        element.style.display ="flex"
    }
})


})


