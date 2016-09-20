var luz = new THREE.PointLight(0xFFFFFF);
luz.position.y=20;

var loader = new THREE.TextureLoader();


loader.load(
	'imagen_047.jpg');


var forma = new THREE.SphereGeometry(1);
var material    = new THREE.MeshLambertMaterial({color:"#00cc00"});
material.map=loader;
var malla    = new THREE.Mesh(forma,material);
malla.position.y=2;

var base = new THREE.Mesh(new THREE.BoxGeometry(5,.1,5),new THREE.MeshLambertMaterial({color:0xFFFFFF}));


var escena   = new THREE.Scene();
escena.add(malla);
escena.add(base);
escena.add(luz);


var camara = new THREE.PerspectiveCamera();
camara.position.z = 15;
camara.position.y = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(600,600);

renderizador.shadowMapEnabled=true;
malla.castShadow=true;
base.receiveShadow=true;
luz.castShadow=true;


document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
