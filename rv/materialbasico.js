var luz = new THREE.PointLight(0xFFFFFF);
luz.position.x=10;
luz.position.y=10;
luz.position.z=10;


var forma = new THREE.SphereGeometry(1);
var material    = new THREE.MeshBasicMaterial({color:'0x00FF00'});
var malla    = new THREE.Mesh(forma,material);

var escena   = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

//var lienzo = document.getElementById("LambertMaterial");
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
