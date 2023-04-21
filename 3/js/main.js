const item = document.getElementById("js--item");
const itemgrabbed = document.getElementById("js--item--grabbed");

const pickaxe = document.getElementById("js--pickaxe");
const pickaxegrabbed =  document.getElementById("js--pickaxe--grabbed");

const trees = document.getElementsByClassName("js--tree");

itemgrabbed.setAttribute("visible", false);


item.onmouseenter = function(){
    if(item.getAttribute("visible") === true){
        item.setAttribute("visible", false);
        itemgrabbed.setAttribute("visible", true);
        grabbed = true;
        pickaxegrabbed.setAttribute("visible", false);
        pickaxe.setAttribute("visible", true);
        canibreakstone = false;
        canichopwood = false;
    }
}

const yellowspheres = document.getElementsByClassName("js--spheres");
const invisiblebox = document.getElementById("js--invisible--box");



for(let i = 0; i < yellowspheres.length; i++){
    yellowspheres[i].onmouseenter = function(){
        if(yellowspheres[i].getAttribute("visible") === false || grabbed === false)

        {
            return;
        }

        let position =  yellowspheres[i].getAttribute("position");
        position.y = position.y + 1;
        yellowspheres[i].setAttribute("visible", false);
        invisiblebox.setAttribute("position", position);
        invisiblebox.setAttribute("visible", true);
        itemgrabbed.setAttribute("visible", false);
        grabbed = false;

    }


}

let wood = 0;

pickaxegrabbed.setAttribute("visible", false);
let canichopwood = false;
let canibreakstone = false;

pickaxe.onmouseenter = function(){
    if(pickaxe.getAttribute("visible") === true){
        pickaxe.setAttribute("visible", false);
        pickaxegrabbed.setAttribute("visible", true);
        itemgrabbed.setAttribute("visible", false);
        item.setAttribute("visible", true);
        canibreakstone = true;
        canichopwood = true;
        grabbed = false;
    }
    
}


for(let i = 0; i < trees.length; i++ ){
    trees[i].onmouseenter = function(){
        if(trees[i].getAttribute("visible") === true && canichopwood === true){
            trees[i].setAttribute("visible",false);
            wood = wood + 1;
            document.getElementById("js--wood").innerText = wood;


        }

    }
}

const castle = document.getElementsByClassName("js--castle");
let stone = 0;


for(let i = 0; i < castle.length; i++){
    castle[i].onmouseenter = function(){
        if(castle[i].getAttribute("visible") === true && canibreakstone === true){
            castle[i].setAttribute("visible", false);
            stone = stone + 1;
            document.getElementById("js--stone").innerText = stone;
        }
   }
}


