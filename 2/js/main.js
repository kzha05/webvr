const cursor = document.getElementById("js--cursor");


//spheres
const sphere = document.getElementsByClassName("js--spheres");

//boxes

const boxes = document.getElementsByClassName("js--box");
// laat de variabele i bij 0 beginnen, 
for(let i = 0; i < boxes.length; i++){
    boxes[i].onmouseenter = function(){
        boxes[i].setAttribute("color",cursor.getAttribute("color"));

    }

}

// laat de variabele i bij 0 beginnen, 

for(let i = 0; i < sphere.length; i++){
    sphere[0].setAttribute("color","#b2ed82");
    sphere[1].setAttribute("color","#a290d1");
    sphere[2].setAttribute("color","#de6fa6");
    sphere[3].setAttribute("color","#a0b58f");
    sphere[4].setAttribute("color","#6fdecd");
    sphere[5].setAttribute("color","#e38578");
    sphere[6].setAttribute("color","#d3e320");
    sphere[7].setAttribute("color","#8db3ad");
    sphere[i].onmouseenter = function(){
        cursor.setAttribute("color",sphere[i].getAttribute("color"));
    }

}

