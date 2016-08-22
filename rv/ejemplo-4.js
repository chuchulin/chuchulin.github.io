var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
// document.body.appendChild -> Añade una rama a body
document.body.appendChild(renderizador.domElement);
// Describimos la forma de la figura
var forma = new THREE.BoxGeometry(1, 1, 1);
// Asignamos el material a la figura
var material = new THREE.MeshNormalMaterial();
// Creamos la figura
var cubo = new THREE.Mesh(forma, material);
// Usa radianes
cubo.rotateX(-Math.PI/4);
cubo.rotateY(Math.PI/4);
// Genera la imagen
escena.add(cubo);
renderizador.render(escena,camara);
