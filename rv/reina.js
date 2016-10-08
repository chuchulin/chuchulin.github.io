
var TECLA = {MAS:false, MENOS:false, ARRIBA:false, ABAJO:false,
             IZQUIERDA:false, DERECHA:false};

var piezaMalla;

var camara = new THREE.PerspectiveCamera();
camara.position.z = 25;
camara.position.y = 7;

var escena = new THREE.Scene();

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight * 0.95, window.innerHeight * 0.95);
document.body.appendChild(renderizador.domElement);

init();
document.onkeydown=teclaPulsada;
document.onkeyup=teclaSoltada;
animar();

function teclaPulsada(e){
  switch (e.keyCode){
    case 37: TECLA.IZQUIERDA = true; break;
    case 39: TECLA.DERECHA = true; break;
    case 38: TECLA.ARRIBA = true; break;
    case 40: TECLA.ABAJO = true; break;
    case 107: TECLA.MAS = true; break;
    case 109: TECLA.MENOS = true; break;
  }

}
function teclaSoltada(e){
  switch (e.keyCode){
    case 37: TECLA.IZQUIERDA = false; break;
    case 39: TECLA.DERECHA = false; break;
    case 38: TECLA.ARRIBA = false; break;
    case 40: TECLA.ABAJO = false; break;
    case 107: TECLA.MAS = false; break;
    case 109: TECLA.MENOS = false; break;
  }
}

function animar(){
  if(TECLA.IZQUIERDA) piezaMalla.rotation.y -= 0.01;
  if(TECLA.DERECHA) piezaMalla.rotation.y += 0.01;
  if(TECLA.ARRIBA) piezaMalla.rotation.x += 0.01;
  if(TECLA.ABAJO) piezaMalla.rotation.x -= 0.01;
  if(TECLA.MAS) piezaMalla.position.z += 0.5;
  if(TECLA.MENOS) piezaMalla.position.z -= 0.5;
  renderizar();
  requestAnimationFrame(animar);
}

function init(){
  // Base de la torre
  var toroideBaseForma = new THREE.TorusGeometry(3.5, 1, 50, 50);
  toroideBaseForma.rotateX(Math.PI / 2);
  var toroideBaseMalla = new THREE.Mesh(toroideBaseForma);

  // Cuerpo de la torre
  var cuerpoForma = new THREE.CylinderGeometry(2.2,4,10,50,50);
  cuerpoForma.translate(0,5,0);
  var cuerpoMalla = new THREE.Mesh(cuerpoForma);

  // Corona de la torre
  var coronaForma = new THREE.CylinderGeometry(2.5,2.5,.7,50,50);
  coronaForma.translate(0,10,0);
  var coronaMalla = new THREE.Mesh(coronaForma);

    // Toroide de la corona
  var toroideCoronaForma = new THREE.TorusGeometry(2.2,0.5,50,50);
  toroideCoronaForma.rotateX(Math.PI / 2);
  toroideCoronaForma.translate(0,10,0);
  var toroideCoronaMalla = new THREE.Mesh(toroideCoronaForma);

  // Toroide de la corona
  var CoronaForma = new THREE.SphereGeometry(.5,50,50);
  CoronaForma.translate(0,13,0);
  var CoronaMalla = new THREE.Mesh(CoronaForma);


  // Pieza general
  var piezaForma = new THREE.Geometry();
  piezaForma.merge(toroideBaseMalla.geometry, toroideBaseMalla.matrix);
  piezaForma.merge(cuerpoMalla.geometry, cuerpoMalla.matrix);
  piezaForma.merge(coronaMalla.geometry, coronaMalla.matrix);
  piezaForma.merge(toroideCoronaMalla.geometry, toroideCoronaMalla.matrix);
  piezaForma.merge(CoronaMalla.geometry, CoronaMalla.matrix);

  var material = new THREE.MeshNormalMaterial();
  piezaMalla = new THREE.Mesh(piezaForma,material);

  escena.add(piezaMalla);
}

function renderizar(){
  renderizador.render(escena,camara);
}
