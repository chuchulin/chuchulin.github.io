var troncoForma = new THREE.CylinderGeometry(.25,.5, 1);
var esferaForma = new THREE.SphereGeometry(.65);
esderaForma.translate(0,1,0);

var troncoMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma);

var arbolForma = new THREE.Geometry();
arbolForma.merge(troncoMalla.geometry,troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry,esferaMalla.matrix);

var materia = new THREE.meshNormalMaterial();
var arbolMalla= new THREE.Mesh(arbolForma,material);

var escena = new THREE.Scene();
escena.add(arbolMalla);
var camera = nw THREE.PerspectiveCamera();
camera.position.z=5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElemenet);
renderizador,render(escena,camera);
