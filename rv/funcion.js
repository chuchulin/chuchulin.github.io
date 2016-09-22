function init(p){
var malla=new THREE.Mesh(new THREE.BoxGeometry(p,p,p), new THREE.MeshBasicMaterial());
escenea=new THHREE.Scene();
escena.add(malla);
camara=new THREE.PerspectiveCamera();
renderizador = new THREE.WEBGLRenderer();
renderizador.setSize(700,700)
document.body.appendChild(renderizador.domElement);
}
var main= function(){
renderizador.render(escena,camara);


}
var escena, camara, renderizador;
init(1);
main();
