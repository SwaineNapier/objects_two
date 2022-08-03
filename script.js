let mainContainer= document.getElementById("strangerThingsContainer")

let Eleven = {
    name: "Jane/Eleven/EL",
    img:"images/el.jpg",
    power: 100,
    iq: 90,
    eq: 100,
    ability:function(){
        document.body.style.backgroudColor="yellow"
    }
}

let Mike={
    name: "Mike",
    img: "images/Mike.png",
    Power: 2,
    iq:110,
    eq: 120,
    ability: function(){
        document.body.style.backgroundColor="blue"
            }
}
let Lucas={
    name: "Lucas",
    img:"images/Lucas.avif",
    Power:5,
    iq:120,
    eq: 170,
    ability:function(){
        document.body.style.background= "lightBlue"
    }
}
let Will={
    name: "Will",
    img:"images/Will.webp",
    Power:2,
    iq:130,
    eq:100,
    ability:function(){
        document.body.style.background="red"
    }
}
let Dustin= {
    name:"Dustin",
    img: "images/Dustin.jpg",
    Power:2,
    iq:140,
    eq:90,
    ability:function(){
        document.body.style.background="green"
    }
}
let Steven={
    name:"Steven",
    img:"images/Steve.jpg",
    Power: 20,
    iq:100,
    eq:150,
    ability:function(){
        document.body.style.background="cyan"
    }
}

let castArry=[Eleven,Mike,Lucas,Will,Dustin,Steven]

for(let i=0;i<castArry.length;i++){
let newDiv = document.createElement("div")
newDiv.className="custum"

let newHeader=document.createElement("h1")
newHeader.innerHTML=castArry[i].name

let newPic=document.createElement("img")
newPic.src=castArry[i].img

let newPower=document.createElement("p")
newPower.innerHTML=castArry[i].power+" out of 100"

let newIq= document.createElement("h2")
newIq.innerHTML=castArry[i].iq+"iq"

let newEq= document.createElement("h2")
newEq.innerHTML=castArry[i].eq+"eq"

let newButton = document.createElement("button")
newButton.onclick=castArry[i].ability

newDiv.appendChild(newHeader)
newDiv.appendChild(newPic)
newDiv.appendChild(newPower)
newDiv.appendChild(newIq)
newDiv.appendChild(newEq)
newDiv.appendChild(newButton)

mainContainer.appendChild(newDiv)
}