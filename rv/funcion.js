function init(p){
malla=new THREE.Mesh(new THREE.BoxGeometry(p,p,p), new THREE.MeshNormalMaterial());
escena=new THREE.Scene();
malla.rotateX(Math.PI/4);

escena.add(malla);
camara=new THREE.PerspectiveCamera();
camara.position.z=(p*5);
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(700,700)
document.body.appendChild(renderizador.domElement);

}
var loop= function(){
  requestAnimationFrame(loop);
renderizador.render(escena,camara);
malla.rotateY(0.01);

var con=1;
if (malla.position.x==5)
{
  con=0;
}
else if (malla.position.x==-5)
{con=1;}

if (con==1)
{
malla.position.x+=.01;
}
else{
  
  malla.position.x-=.01;
}


var escena, camara, renderizador,malla;
init(1);
loop();

