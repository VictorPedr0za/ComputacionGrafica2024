var scene = null,
    camera = null,
    renderer = null,
    controls = null,
    mylight = null;
  
   

 
const size = 20,
    division = 20;
 
function startScene() {
    // Scene, Camera, Renderer
    scene  = new THREE.Scene();
    scene.background = new THREE.TextureLoader().load('./src/img/fondo.jpeg');
    camera = new THREE.PerspectiveCamera( 75,  // Angulo de Vision (Abajo o Arriba)
                                        window.innerWidth / window.innerHeight, // RelaciÃ³n Aspecto (16:9)
                                        0.1, // Mas Cerca (no renderiza)
                                        1000); // Mas lejos
    renderer = new THREE.WebGLRenderer({canvas: document.getElementById("app")});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
 
    //orbit controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 30, 30 );
    controls.update();

    /*
    //orbit helper
    const gridHelper = new THREE.GridHelper( size, division );
    scene.add( gridHelper );
    */
    camera.position.z = 30;
    

    //gestiona la creacion del tipo de luz
    createlight('ambient');
    createlight('directionalLight');

    figures();
    loadObjMtl();
    createUI();
    animate();

}


function createlight(typeLight){

  //var e = document.getElementById("theLight");
  //var typeLight = e.value;
  //var text = e.options[e.selectedIndex].text;

  switch(typeLight) {
      
    case 'ambient':
    
      mylight = new THREE.AmbientLight( 0xFFFFFF, 1); // soft white light
      scene.add( mylight );
    break;

    case 'directionalLight':
      mylight = new THREE.DirectionalLight( 0xffffff, 0.5 );
      scene.add( mylight );
    break;

    case 'pointLight':
      mylight= new THREE.PointLight( 0xffffff, 10, 100);
      mylight.position.set( 0, 5, 6 );
      scene.add( mylight );

      const sphereSize = 2;
      const pointLightHelper = new THREE.PointLightHelper( mylight, sphereSize );
      scene.add( pointLightHelper );
    break;

    case 'spot':
      mylight = new THREE.Spotmylight( 0xffffff );
      mylight.position.set( 10, 10, 10 );

      scene.add( mylight );
    break;
  }
}

function animate() {
    requestAnimationFrame(animate);

    controls.update
    renderer.render( scene, camera );
}

// Resize by Screen Size
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function figures(){


    const mesita = new THREE.BoxGeometry( 7, 2, 7 ); 
    var materialBox2 = [new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/.jpg'), side: THREE.DoubleSide },),
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/.jpg'), side: THREE.DoubleSide} ),
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite mesita.jpg'), side: THREE.DoubleSide} ), //techo
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/'), side: THREE.DoubleSide} ), //piso
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/.jpg'), side: THREE.DoubleSide} ),
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/.jpg'), side: THREE.DoubleSide} ),
];
    mesa = new THREE.Mesh( mesita, materialBox2) 


    mesa.position.x = -40;
    mesa.position.y = 5.5;
    mesa.position.z = -45;
    scene.add( mesa );

    
    //mesa juegos

    var mesa2

    const figurame2 = new THREE.BoxGeometry( 15, 2, 8 ); 
    const materialmesa2 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    mesa2 = new THREE.Mesh( figurame2, materialmesa2); 

    mesa2.position.x = -40;
    mesa2.position.y = 4.5;
    mesa2.position.z = -45;
    scene.add( mesa2 );

    var patas1

    const figurapa = new THREE.BoxGeometry( 2, 3.5, 8 ); 
    const materialpatas1 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    patas1 = new THREE.Mesh( figurapa, materialpatas1); 

    patas1.position.x = -45;
    patas1.position.y = 1.8;
    patas1.position.z = -45;
    scene.add( patas1 );

    var patas2

    const figurapa2 = new THREE.BoxGeometry( 2, 3.5, 8 ); 
    const materialpatas2 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    patas2 = new THREE.Mesh( figurapa2, materialpatas2); 

    patas2.position.x = -35;
    patas2.position.y = 1.8;
    patas2.position.z = -45;
    scene.add( patas2 );


    //terreno  todo el mapa

    const geometry = new THREE.PlaneGeometry( 100, 100 );

    const texturePlano = new THREE.TextureLoader().load('./src/img/sprite suelo.jpg');

    const material = new THREE.MeshBasicMaterial( { 
                                                    side: THREE.DoubleSide,
                                                    map: texturePlano, 
                                                    color: 0x7d7f7d, // White color, ensuring no color multiplication
                                                    transparent: false} );

    const plane = new THREE.Mesh( geometry, material );
    plane.rotateX(90*(Math.PI)/180);
    scene.add( plane );

    //mesa juegos

    var mesa1

    const figuraco = new THREE.BoxGeometry( 15, 2, 8 ); 
    const materialmesa1 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    mesa1 = new THREE.Mesh( figuraco, materialmesa1); 

    mesa1.position.x = -40;
    mesa1.position.y = 4.5;
    mesa1.position.z = 45;
    scene.add( mesa1 );

    var pata1

    const figurap = new THREE.BoxGeometry( 2, 3.5, 8 ); 
    const materialpata1 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    pata1 = new THREE.Mesh( figurap, materialpata1); 

    pata1.position.x = -45;
    pata1.position.y = 1.8;
    pata1.position.z = 45;
    scene.add( pata1 );

    var pata2

    const figurap2 = new THREE.BoxGeometry( 2, 3.5, 8 ); 
    const materialpata2 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    pata2 = new THREE.Mesh( figurap2, materialpata2); 

    pata2.position.x = -35;
    pata2.position.y = 1.8;
    pata2.position.z = 45;
    scene.add( pata2 );

    
    //rompecabezas

    const figurar = new THREE.BoxGeometry( 6, 0.1, 6 ); 
    const materialrompe = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/rompecabezas.jpg'), side: THREE.DoubleSide },);
    rompe = new THREE.Mesh( figurar, materialrompe); 

    rompe.position.x = -40;
    rompe.position.y = 5.5;
    rompe.position.z = 45;
    scene.add( rompe );

    //varanda 1

    var varanda1

    const figurapalar = new THREE.BoxGeometry( 2, 1, 35 ); 
    const materialvaranda1 = new THREE.MeshStandardMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    varanda1 = new THREE.Mesh( figurapalar, materialvaranda1); 

    varanda1.position.x = -18;
    varanda1.position.y = 4;
    varanda1.position.z = -25;
    scene.add( varanda1 );

    var palo1

    const figurapal = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo1 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo1 = new THREE.Mesh( figurapal, materialpalo1); 

    palo1.position.x = -18;
    palo1.position.y = 1.8;
    palo1.position.z = -10;
    scene.add( palo1 );

    var palo2

    const figurapal2 = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo2 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo2 = new THREE.Mesh( figurapal2, materialpalo2); 

    palo2.position.x = -18;
    palo2.position.y = 1.8;
    palo2.position.z = -14;
    scene.add( palo2 );

    var palo3

    const figurapal3 = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo3 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo3 = new THREE.Mesh( figurapal3, materialpalo3); 

    palo3.position.x = -18;
    palo3.position.y = 1.8;
    palo3.position.z = -18;
    scene.add( palo3 );

    var palo4

    const figurapal4 = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo4 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo4 = new THREE.Mesh( figurapal4, materialpalo4); 

    palo4.position.x = -18;
    palo4.position.y = 1.8;
    palo4.position.z = -22;
    scene.add( palo4 );

      //Varanda 2

    var varanda2

    const figurapalar2 = new THREE.BoxGeometry( 2, 1, 35 ); 
    const materialvaranda2 = new THREE.MeshStandardMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    varanda2 = new THREE.Mesh( figurapalar2, materialvaranda2); 

    varanda2.position.x = -18;
    varanda2.position.y = 4;
    varanda2.position.z = 25;
    scene.add( varanda2 );

    var palo5

    const figurapal5 = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo5 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo5 = new THREE.Mesh( figurapal5, materialpalo5); 

    palo5.position.x = -18;
    palo5.position.y = 1.8;
    palo5.position.z = -26;
    scene.add( palo5 );

    var palo6

    const figurapal6 = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo6 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo6 = new THREE.Mesh( figurapal6, materialpalo6); 

    palo6.position.x = -18;
    palo6.position.y = 1.8;
    palo6.position.z = -30;
    scene.add( palo6 );

    var palo7

    const figurapal7 = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo7 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo7 = new THREE.Mesh( figurapal7, materialpalo7); 

    palo7.position.x = -18;
    palo7.position.y = 1.8;
    palo7.position.z = -34;
    scene.add( palo7 );

    var palo8

    const figurapal8 = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo8 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo8 = new THREE.Mesh( figurapal8, materialpalo8); 

    palo8.position.x = -18;
    palo8.position.y = 1.8;
    palo8.position.z = -38;
    scene.add( palo8 );

    var palo9

    const figurapal9 = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo9 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo9 = new THREE.Mesh( figurapal9, materialpalo9); 

    palo9.position.x = -18;
    palo9.position.y = 1.8;
    palo9.position.z = 38;
    scene.add( palo9 );
    
    var palo10

    const figurapal10 = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo10 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo10 = new THREE.Mesh( figurapal10, materialpalo10); 

    palo10.position.x = -18;
    palo10.position.y = 1.8;
    palo10.position.z = 34;
    scene.add( palo10 );

    var palo11

    const figurapal11 = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo11 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo11 = new THREE.Mesh( figurapal11, materialpalo11); 

    palo11.position.x = -18;
    palo11.position.y = 1.8;
    palo11.position.z = 30;
    scene.add( palo11 );

    var palo12

    const figurapal12 = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo12 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo12 = new THREE.Mesh( figurapal12, materialpalo12); 

    palo12.position.x = -18;
    palo12.position.y = 1.8;
    palo12.position.z = 26;
    scene.add( palo12 );

    var palo13

    const figurapal13 = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo13 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo13 = new THREE.Mesh( figurapal13, materialpalo13); 

    palo13.position.x = -18;
    palo13.position.y = 1.8;
    palo13.position.z = 22;
    scene.add( palo13 );

    var palo14

    const figurapal14 = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo14 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo14 = new THREE.Mesh( figurapal14, materialpalo14); 

    palo14.position.x = -18;
    palo14.position.y = 1.8;
    palo14.position.z = 18;
    scene.add( palo14 );

    var palo15

    const figurapal15 = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo15 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo15 = new THREE.Mesh( figurapal15, materialpalo15); 

    palo15.position.x = -18;
    palo15.position.y = 1.8;
    palo15.position.z = 14;
    scene.add( palo15 );

    var palo16

    const figurapal16 = new THREE.BoxGeometry( 2, 3.5, 1 ); 
    const materialpalo16 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide },);
    palo16 = new THREE.Mesh( figurapal16, materialpalo16); 

    palo16.position.x = -18;
    palo16.position.y = 1.8;
    palo16.position.z = 10;
    scene.add( palo16 );



    //balon

    const figurabal = new THREE.SphereGeometry( 3.5, 32, 20); 
    const materialbal = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/bola8.jpg')}); 
    bal = new THREE.Mesh( figurabal, materialbal); 

    bal.position.x = -30;
    bal.position.y = 3.5;
    bal.position.z = 38;
    scene.add( bal );

    // craft 
    var craft

    const figuraco2 = new THREE.BoxGeometry( 6, 6, 6 ); 
    const materialcraft = [new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/maincra ladito1.jpg'), side: THREE.DoubleSide },),
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/maincra ladito1.jpg'), side: THREE.DoubleSide} ),
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite craftingar.png'), side: THREE.DoubleSide} ), //techo
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sprite alacena.jpg'), side: THREE.DoubleSide} ), //piso
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/maincra lado 2.jpg'), side: THREE.DoubleSide} ),
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/maincra lado 2.jpg'), side: THREE.DoubleSide} )
];
    craft = new THREE.Mesh( figuraco2, materialcraft); 

    craft.position.x = -45;
    craft.position.y = 3.01;
    craft.position.z = 25;
    scene.add( craft );

var dado

    const figuraco3 = new THREE.BoxGeometry( 6, 6, 6 ); 
    const materialdado = [new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/dado1.png'), side: THREE.DoubleSide },), //frente
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/dado5.png'), side: THREE.DoubleSide} ), //atras
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/dado3.png'), side: THREE.DoubleSide} ), //techo
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/dado6.png'), side: THREE.DoubleSide} ), //piso
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/dado4.png'), side: THREE.DoubleSide} ), //izquierda
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/dado2.png'), side: THREE.DoubleSide} )  //derecha
];
    dado = new THREE.Mesh( figuraco3, materialdado); 

    dado.position.x = -27;
    dado.position.y = 3.02;
    dado.position.z = -45;
    scene.add( dado );

    var luna

    const figuralun = new THREE.SphereGeometry( 6, 32, 20 ); 
    const materialluna = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/luna.jpg')});
    luna = new THREE.Mesh( figuralun, materialluna); 

    luna.position.x = -45;
    luna.position.y = -40;
    luna.position.z = 30;
    scene.add( luna );

    var sol

    const figurasol = new THREE.SphereGeometry( 6, 32, 20 ); 
    const materialsol = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/sol.jpg')});
    sol = new THREE.Mesh( figurasol, materialsol); 

    sol.position.x = 45;
    sol.position.y = 60;
    sol.position.z = -30;
    scene.add( sol );

    var cesp

    const figuraces = new THREE.BoxGeometry( 32.5, 0.1, 100 ); 
    const materialcesp = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/cesped.jpg'), side: THREE.DoubleSide },);
    cesp = new THREE.Mesh( figuraces, materialcesp); 

    cesp.position.x = -33.8;
    cesp.position.y = 0.07;
    cesp.position.z = 0;
    scene.add( cesp );

    var cesp2

    const figuraces2 = new THREE.BoxGeometry( 32.5, 0.1, 100 ); 
    const materialcesp2 = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/cesped.jpg'), side: THREE.DoubleSide },);
    cesp2 = new THREE.Mesh( figuraces2, materialcesp2); 

    cesp2.position.x = 33.8;
    cesp2.position.y = 0.07;
    cesp2.position.z = 0;
    scene.add( cesp2 );

    var carre

    const figuracar = new THREE.BoxGeometry( 35, 0.1, 100 ); 
    const materialcarre = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/carretera.jpg'), side: THREE.DoubleSide },);
    carre = new THREE.Mesh( figuracar, materialcarre); 

    carre.position.x = 0;
    carre.position.y = 0.07;
    carre.position.z = 0;
    scene.add( carre );

    var horno

    const figurahorn = new THREE.BoxGeometry( 6, 6, 6 ); 
    const materialhorno = [new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/horno2.jpg'), side: THREE.DoubleSide },),
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/horno3.jpg'), side: THREE.DoubleSide} ),
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/horno4.jpg'), side: THREE.DoubleSide} ), //techo
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/horno4.jpg'), side: THREE.DoubleSide} ), //piso
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/horno3.jpg'), side: THREE.DoubleSide} ),
      new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/horno3.jpg'), side: THREE.DoubleSide} )
];

    horno = new THREE.Mesh( figurahorn, materialhorno); 

    horno.position.x = -45;
    horno.position.y = 3.01;
    horno.position.z = 19;
    scene.add( horno );

    // Materiales
const materialBase = new THREE.MeshStandardMaterial({ color: 0x333333 });
const materialLampara = new THREE.MeshStandardMaterial({ color: 0xffffe0, emissive: 0xffff99 });

// Creación de la base del farol
const baseGeometry = new THREE.CylinderGeometry(1, 1.5, 2, 32);
const baseFarol = new THREE.Mesh(baseGeometry, materialBase);
baseFarol.position.set(20, 1, 20);

// Poste del farol
const posteGeometry = new THREE.CylinderGeometry(0.2, 0.2, 8, 32);
const posteFarol = new THREE.Mesh(posteGeometry, materialBase);
posteFarol.position.set(20, 5, 20);

// Lámpara del farol
const lamparaGeometry = new THREE.SphereGeometry(1, 16, 16);
const lamparaFarol = new THREE.Mesh(lamparaGeometry, materialLampara);
lamparaFarol.position.set(20, 9, 20);

// Soporte superior del farol
const soporteGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.5, 32);
const soporteFarol = new THREE.Mesh(soporteGeometry, materialBase);
soporteFarol.position.set(20, 8.75, 20);

// Crear un grupo para el farol
const farol = new THREE.Group();
farol.add(baseFarol);
farol.add(posteFarol);
farol.add(soporteFarol);
farol.add(lamparaFarol);

// Añadir el farol a la escena
scene.add(farol);

    // Materiales
    const materialBase2 = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const materialLampara2 = new THREE.MeshStandardMaterial({ color: 0xffffe0, emissive: 0xffff99 });
    
    // Creación de la base del farol
    const baseGeometry2 = new THREE.CylinderGeometry(1, 1.5, 2, 32);
    const baseFarol2 = new THREE.Mesh(baseGeometry2, materialBase2);
    baseFarol2.position.set(20, 1, -20);
    
    // Poste del farol
    const posteGeometry2 = new THREE.CylinderGeometry(0.2, 0.2, 8, 32);
    const posteFarol2 = new THREE.Mesh(posteGeometry2, materialBase2);
    posteFarol2.position.set(20, 5, -20);
    
    // Lámpara del farol
    const lamparaGeometry2 = new THREE.SphereGeometry(1, 16, 16);
    const lamparaFarol2 = new THREE.Mesh(lamparaGeometry2, materialLampara2);
    lamparaFarol2.position.set(20, 9, -20);
    
    // Soporte superior del farol
    const soporteGeometry2 = new THREE.CylinderGeometry(0.5, 0.5, 0.5, 32);
    const soporteFarol2 = new THREE.Mesh(soporteGeometry2, materialBase2);
    soporteFarol2.position.set(20, 8.75, -20);
    
    // Crear un grupo para el farol
    const farol2 = new THREE.Group();
    farol2.add(baseFarol2);
    farol2.add(posteFarol2);
    farol2.add(soporteFarol2);
    farol2.add(lamparaFarol2);
    
    // Añadir el farol a la escena
    scene.add(farol2);

  //edificio

  var materialedificio1 = [new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/edificio.jpeg'), side: THREE.DoubleSide },),
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/edificio.jpeg'), side: THREE.DoubleSide} ),
    new THREE.MeshStandardMaterial( {map: new THREE.TextureLoader().load('./src/img/techo.jpeg'), side: THREE.DoubleSide} ), //techo
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/techo.jpeg'), side: THREE.DoubleSide} ), //piso
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/edificio.jpeg'), side: THREE.DoubleSide} ),
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/edificio.jpeg'), side: THREE.DoubleSide} ),
];

  const edf = new THREE.BoxGeometry( 15, 30, 20 ); 
  edificio1 = new THREE.Mesh( edf, materialedificio1 );

  edificio1.position.x = 35;
  edificio1.position.y = 15.2;
  edificio1.position.z = 35;
  scene.add( edificio1 );

  var materialedificio2 = [new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/edificio2.jpeg'), side: THREE.DoubleSide },),
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/edificio2.jpeg'), side: THREE.DoubleSide} ),
    new THREE.MeshStandardMaterial( {map: new THREE.TextureLoader().load('./src/img/techo2.jpeg'), side: THREE.DoubleSide} ), //techo
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/techo2.jpeg'), side: THREE.DoubleSide} ), //piso
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/edificio2.jpeg'), side: THREE.DoubleSide} ),
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/edificio2.jpeg'), side: THREE.DoubleSide} ),
];

  const edf2 = new THREE.BoxGeometry( 20, 50, 20 ); 
  edificio2 = new THREE.Mesh( edf2, materialedificio2 );

  edificio2.position.x = 35;
  edificio2.position.y = 25.2;
  edificio2.position.z = -1;
  scene.add( edificio2 );

  var materialedificio3 = [new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/edificio3.jpeg'), side: THREE.DoubleSide },),
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/edificio3.jpeg'), side: THREE.DoubleSide} ),
    new THREE.MeshStandardMaterial( {map: new THREE.TextureLoader().load('./src/img/techo3.jpeg'), side: THREE.DoubleSide} ), //techo
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/techo3.jpeg'), side: THREE.DoubleSide} ), //piso
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/edificio3.jpeg'), side: THREE.DoubleSide} ),
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/edificio3.jpeg'), side: THREE.DoubleSide} ),
];

  const edf3 = new THREE.BoxGeometry( 25, 40, 20 ); 
  edificio3 = new THREE.Mesh( edf3, materialedificio3 );

  edificio3.position.x = -35;
  edificio3.position.y = 20.2;
  edificio3.position.z = 0;
  scene.add( edificio3 );

  var materialsupermer = [new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/techo4.jpeg'), side: THREE.DoubleSide },),
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/supermer.jpeg'), side: THREE.DoubleSide} ),
    new THREE.MeshStandardMaterial( {map: new THREE.TextureLoader().load('./src/img/techo4.jpeg'), side: THREE.DoubleSide} ), //techo
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/techo4.jpeg'), side: THREE.DoubleSide} ), //piso
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/techo4.jpeg'), side: THREE.DoubleSide} ),
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./src/img/techo4.jpeg'), side: THREE.DoubleSide} ),
];

  const sup = new THREE.BoxGeometry( 25, 20, 25 ); 
  supermer = new THREE.Mesh( sup, materialsupermer );

  supermer.position.x = 35;
  supermer.position.y = 10.2;
  supermer.position.z = -35;
  scene.add( supermer );

  //arbol
  var arbol

  const geoarbol = new THREE.ConeGeometry(8, 12, 60); 
  const materialarbol = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./src/img/hojas.jpg')}); 
  arbol = new THREE.Mesh( geoarbol, materialarbol); 

  arbol.position.x = -20;
  arbol.position.y = 12;
  arbol.position.z = -47;
  scene.add( arbol );

  var tronco

  const geotronco = new THREE.BoxGeometry( 4, 6, 4 ); 
  const materialtronco = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./src/img/tronco.jpg')}); 
  tronco= new THREE.Mesh( geotronco, materialtronco); 

  tronco.position.x = -20;
  tronco.position.y = 3.1;
  tronco.position.z = -47;
  scene.add( tronco );

  var arbol2

  const geoarbol2 = new THREE.ConeGeometry(8, 12, 60); 
  const materialarbol2 = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./src/img/hojas.jpg')}); 
  arbol2 = new THREE.Mesh( geoarbol2, materialarbol2); 

  arbol2.position.x = -40;
  arbol2.position.y = 12;
  arbol2.position.z = -25;
  scene.add( arbol2 );

  var tronco2

  const geotronco2 = new THREE.BoxGeometry( 4, 6, 4 ); 
  const materialtronco2 = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./src/img/tronco.jpg')}); 
  tronco2= new THREE.Mesh( geotronco2, materialtronco2); 

  tronco2.position.x = -40;
  tronco2.position.y = 3.1;
  tronco2.position.z = -25;
  scene.add( tronco2 );

  var arbol3

  const geoarbol3 = new THREE.ConeGeometry(8, 12, 60); 
  const materialarbol3 = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./src/img/hojas.jpg')}); 
  arbol3 = new THREE.Mesh( geoarbol3, materialarbol3); 

  arbol3.position.x = -30;
  arbol3.position.y = 12;
  arbol3.position.z = 25;
  scene.add( arbol3 );

  var tronco3

  const geotronco3 = new THREE.BoxGeometry( 4, 6, 4 ); 
  const materialtronco3 = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./src/img/tronco.jpg')}); 
  tronco3= new THREE.Mesh( geotronco3, materialtronco3); 

  tronco3.position.x = -30;
  tronco3.position.y = 3.1;
  tronco3.position.z = 25;
  scene.add( tronco3 );

  var arbol4

  const geoarbol4 = new THREE.ConeGeometry(8, 12, 60); 
  const materialarbol4 = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./src/img/hojas.jpg')}); 
  arbol4 = new THREE.Mesh( geoarbol4, materialarbol4); 

  arbol4.position.x = -20;
  arbol4.position.y = 12;
  arbol4.position.z = 47;
  scene.add( arbol4 );

  var tronco4

  const geotronco4 = new THREE.BoxGeometry( 4, 6, 4 ); 
  const materialtronco4 = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./src/img/tronco.jpg')}); 
  tronco4= new THREE.Mesh( geotronco4, materialtronco4); 

  tronco4.position.x = -20;
  tronco4.position.y = 3.1;
  tronco4.position.z = 47;
  scene.add( tronco4 );



}