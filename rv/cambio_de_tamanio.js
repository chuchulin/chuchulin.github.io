var Ventana = new Object();
Ventana.listener=function()
{
  Ventana.camara.aspect=window.innerWidth/window.innerHeight;
  Ventana.camera.updateProjectionMatrix();
  Ventana.renderizador.setSize(window.innerWidth,window.innerHeight);
}

Ventana.setup=function()
{
  var tipo_evento='resize';

  var capturarp=false;

  window.addEventListener(tipo_evento,Ventana.listener,capturarp);

  Ventana.escena=new THREE.Scene();
  Ventana.camara=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
  Ventana.camara.position.z=5;

  Ventana.renderizador = new THREE.WebGLRenderer();
  Ventana.renderizador.setSize(window.innerWidth,window.innerHeight);
  Ventana.malla=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshNormalMaterial());
  Ventana.escena.add(Ventana.malla);

  document.body.appendChild(Ventana.renderizador.domElement);
}

Ventana.loop=function()
{
  requestAnimationFrame(Ventana.loop);
  Ventana.malla.rotateX(0.01);
  Ventana.malla.rotateY(0.01);
  Ventana.renderizador.render(Ventana.escena,Ventana.camara);
}
Ventana.setup();
Ventana.loop();

  
  


