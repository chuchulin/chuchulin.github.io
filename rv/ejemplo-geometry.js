///se define el objeto
var forma = new THREE.Geometry();
///se definen los vertices de la geometria en un orden indicado
forma.vertices.push(new THREE.Vector3(1,0,1));
forma.vertices.push(new THREE.Vector3(1,0,-1));
forma.vertices.push(new THREE.Vector3(-1,0,-1));
forma.vertices.push(new THREE.Vector3(-1,0,1));
forma.vertices.push(new THREE.Vector3(0,1,0));
//se definen las caras
forma.faces.push(new THREES.Face3(3,2,1));
forma.faces.push(new THREES.Face3(3,1,0));
forma.faces.push(new THREES.Face3(3,0,4));
forma.faces.push(new THREES.Face3(0,1,4));
forma.faces.push(new THREES.Face3(1,2,4));
forma.faces.push(new THREES.Face3(2,3,4));
///se hace una esfera de menor tamanio que acota al objeto
forma.computeBoundingSphere();
forma.computeFaceNormals();
var material = new THREE.MeshNormal Material();
var malla= new THREE.Mesh(forma, material);
malla.rotateX(Math.PI/4);
var escena = new THREE.Scene();
escena.add.malla;
var camara = new THREE.PerspectiveCamera();
camara.position.z=5;
var renderizador = new three.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camera);
