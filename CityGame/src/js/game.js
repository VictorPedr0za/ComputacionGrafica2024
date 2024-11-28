var actualModel = null; 

function createUI(){
    var gui = new dat.GUI();

    var param = {
        a: "Rigby",
        b: "#FF00FF",
        c:1

    };

    var g = gui.addFolder('Geometria');
    var player = g.add(param, 'a', ["Mujer","Hombre","Luigi","Mario","Rigby"]).name("Modelos 3D");

    player.onChange(function(myPlayer){
        console.log(myPlayer);
        loadObjMtl(myPlayer);
    });

    var l = gui.addFolder('Luces');
    var colorLight =l.addColor(param, 'b').name("Color de Luz");
    var intensityLight = l.add(param, 'c').min(0).max(1).step(0.1).name("Intensidad")

    colorLight.onChange(function(colorGet) {
        console.log(colorGet);
        mylight.color.setHex(Number(colorGet.toString().replace('#','0x')));
    });

    intensityLight.onChange(function(intensityGet) {
        colorLight.intensity = intensityGet;
    });
}


function loadObjMtl(myPlayer){
    //general path, nameObj, nameMTL



    var generalPath = "./src/modelos/obj/" + myPlayer + "/";
    var fileObj = myPlayer + ".obj";
    var fileMtl = myPlayer + ".mtl";

    /*
    alert(generalPath);
    alert(fileObj);
    alert(fileMtl);
    */
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath(generalPath);
    mtlLoader.setPath(generalPath);
    mtlLoader.load(fileMtl, function(materials) {
        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(generalPath);
        objLoader.load(fileObj, function(object) {

            

            if(actualModel){
                scene.remove(actualModel);
            }

          
            actualModel = object;
            scene.add(actualModel);


            if(myPlayer == "Hombre" || myPlayer == "Mujer" || myPlayer == "Mario" || myPlayer == "Luigi"){

                object.scale.set(0.2,0.2,0.2);

            }

            if(myPLayer == "Rigby"){

                object.scale.set(2,2,2);

            }

            object.position.set( 0, 0, 0);

        });
    });
}