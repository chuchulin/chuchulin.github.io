function init(p){
var malla=new THREE.Mesh(new THREE.BoxGeometry(p,p,p), new THREE.MeshNormalMaterial());
escena=new THREE.Scene();
malla.rotateX=(Math.PI/4);
malla.rotatey=(Math.PI/4);
escena.add(malla);
camara=new THREE.PerspectiveCamera();
camara.position.z=(p+5);
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(700,700)
document.body.appendChild(renderizador.domElement);

}
var main= function(){
renderizador.render(escena,camara);


}
var escena, camara, renderizador;
init(1);
main();
