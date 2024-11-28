//Creación de elementos básicos

var scene = null;
    camera = null;
    renderer = null;
    controls = null;

const size = 20, division =20;

function startScene(){

    //scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x343a40);
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    //camera.position.set( 0, 0, 100 );
    


renderer = new THREE.WebGLRenderer({canvas: document.getElementById("app")});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//OrbitControls
controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.set( 0, 0, 0);
controls.uptade


//Grid Helper
const gridHelper = new THREE.GridHelper(size, division);
scene.add(gridHelper);


//Create a Box
const geometry = new THREE.BoxGeometry( 1, 1, 1);
const material = new THREE.MeshBasicMaterial( { color: 0x8a36d2 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
animate();


}

function animate() {

    requestAnimationFrame(animate);
    controls.uptade
	renderer.render( scene, camera );
    
}

window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}



