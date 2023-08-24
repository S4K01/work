//wait let me explain this I want hide the pseudo element so I decide to make a two verison of the element who that have pseudo element 
//special one it was like card magic I learned it so I tried and I did it but u know I  need to make it disapper so make anyone of element
//and make it without a effect so i make display none (which is without effect) to replace with the other(that which with effect) so js
//help me at this then have a problem with <p> margin so make other one of him the <p> is really okay we will notsee that a bad bc it was
//not big deal it just margin and it was actually good but I love my work be perfect so sorry for take a minute of Waste of your time 
// of u life ..S4K.. :)  
function myFunction() {
    var x = document.getElementById("hide")  
    var o = document.getElementById("hide1") 
    var w = document.getElementById("hide2")
    var l = document.getElementById("hide3")
    var y = document.getElementById("replace")  
    var z = document.getElementById("replace1")
    var a = document.getElementById("replace2")
    var c = document.getElementById("replace3");
    if (x.style.display === "none" 
    ,o.style.display === "none"
    ,w.style.display === "none"
    ,l.style.display === "none"
    ,y.style.display === "block" 
    ,z.style.display === "block"
    ,a.style.display === "block"   
    ,c.style.display === "block") 
    
    {

      x.style.display = "block";
      o.style.display = "block";
      w.style.display = "block";
      l.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      a.style.display = "none";
      c.style.display = "none";
    } else {
      x.style.display = "none";
      o.style.display = "none";
      w.style.display = "none";
      l.style.display = "none";
      y.style.display = "block";
      z.style.display = "block";
      a.style.display = "block";
      c.style.display = "block";
    }
}