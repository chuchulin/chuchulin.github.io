var luz = new THREE.PointLight(0xFFFFFF);
luz.position.y=2;



var forma = new THREE.SphereGeometry(1);
var material    = new THREE.MeshBasicMaterial({color:"#00cc00"});
var malla    = new THREE.Mesh(forma,material);

var base = new THREE.Mesh(new THREE.BoxGeometry(5,.1,5),new THREE.MeshLambertMaterial({color:0xFFFFFF}));


var escena   = new THREE.Scene();
escena.add(malla);
escena.add(base);
escena.add(luz);


var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
camara.position.y = 5;

//var lienzo = document.getElementById("LambertMaterial");
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
