/*
    Author(): Victor Manuel Pedroza Holguin
    Date of the creation: 29/08/2024
    Last Modification: 1/09/2024 | 6:23pm
*/

function vector() {
    //alert("calcular");
    
    let ax = document.getElementById("Punto AX").value;
    let ay = document.getElementById("Punto AY").value;
    let az = document.getElementById("Punto AZ").value;
    
    let bx = document.getElementById("Punto BX").value;
    let by = document.getElementById("Punto BY").value;
    let bz = document.getElementById("Punto BZ").value;
    
    // alert("("+ax+","+ay+","+az+")");
    // alert("("+bx+","+by+","+bz+")");
    
    let vx = bx - ax;
        vy = by - ay;
        vz = bz - az;
    
    let vectorfinal = `(${vx},${vy},${vz})`;
       
    document.getElementById("result").innerHTML = vectorfinal;
    
       //alert(vx+","+ vy +" , "+vz); 
    
    
    
    }
    
    function sumvector(){
        let v1x = document.getElementById("Vector1X").value;
        let v1y = document.getElementById("Vector1Y").value;
        let v1z = document.getElementById("Vector1Z").value;
        
        let v2x = document.getElementById("Vector2X").value;
        let v2y = document.getElementById("Vector2Y").value;
        let v2z = document.getElementById("Vector2Z").value;
    
        let vtx = v1x - (-v2x);
            vty = v1y - (-v2y);
            vtz = v1z - (-v2z);
            
        let vtsum = `(${vtx},${vty},${vtz})`;  
        
        document.getElementById("resultasuma").innerHTML = vtsum;
    }
    
    function productovector(){
        let vp1x = document.getElementById("VectorP1X").value;
        let vp1y = document.getElementById("VectorP1Y").value;
        let vp1z = document.getElementById("VectorP1Z").value;
        
        let vp2x = document.getElementById("VectorP2X").value;
        let vp2y = document.getElementById("VectorP2Y").value;
        let vp2z = document.getElementById("VectorP2Z").value;
    
        let 
            vtpx = vp1x * vp2x;
            vtpy = vp1y * vp2y;
            vtpz = vp1z * vp2z;
            
        let productico = `(${vtpx + vtpy + vtpz})`;  
        
        document.getElementById("resultaproducto").innerHTML = productico;
    }
    
    function magnitudvector(){
    
        let vm1x = document.getElementById("VectorM1X").value;
        let vm1y = document.getElementById("VectorM1Y").value;
        let vm1z = document.getElementById("VectorM1Z").value;
    
    
        /*let vm2x = document.getElementById("VectorP2X").value;
        let vm2y = document.getElementById("VectorP2Y").value;
        let vm2z = document.getElementById("VectorP2Z").value;
        */   
    
        let 
            vtmx = Math.pow(vm1x,2);
            vtmy = Math.pow(vm1y,2);
            vtmz = Math.pow(vm1z,2);
       
        let magnitud = `(${Math.sqrt(vtmx + vtmy + vtmz)})`;  
    
         
        document.getElementById("resultamagnitud").innerHTML = magnitud;
    }