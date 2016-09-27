var textura =new Object();
 textura.retrollamada = function()
 {
  var material = new THREE.MeshBasicMaterial({map:textura});
  textura.malla = new THREE.Mesh(new THREE.SphereGeometry(1),material);
  textura.escena.add(textura.malla);
 }
 
textura.setup=function()
{

  textura.escena=new THREE.Scene();
  var cargador = new THREE.TextureLoader();
  cargador.load("earth_atmos_2048.jpg",textura.retrollamada);
  
  textura.camara=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
  textura.camara.position.z=5;

  textura.renderizador = new THREE.WebGLRenderer();
  textura.renderizador.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(textura.renderizador.domElement);
}
textura.loop=function()
{
if(textura.malla !==undefined)
  {
    requestAnimationFrame(Ventana.loop);
    textura.malla.rotateX(0.01);
    textura.malla.rotateY(0.01);
    textura.renderizador.render(textura.escena,textura.camara);
  }
}

textura.setup();
textura.loop();

