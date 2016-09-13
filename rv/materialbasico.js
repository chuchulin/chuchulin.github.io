var luz = new THREE.PointLight(0xFFFFFF);
luz.position.x=10;
luz.position.y=10;
luz.position.z=10;


var forma = new THREE.SphreGeometry(1);
var material    = new THREE.MeshLambertMaterial({color:'0x00ff00');
var malla    = new THREE.Mesh(forma,material);

var escena   = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var lienzo = document.getElementById("LambertMaterial");
var renderizador = new THREE.WebGlRenderer({canvas.lienzo, antialias:true);
renderizador.setSize(600,600);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
