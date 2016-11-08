var mouse
var raycaster
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
  if(TECLA.MENOS)piezaMalla.position.z -= 0.5;
  renderizar();
  requestAnimationFrame(animar);
}

function init(){
  // Base de la torre
  var toroideBaseForma = new THREE.TorusGeometry(3.5, 1, 50, 50);
  toroideBaseForma.rotateX(Math.PI / 2);
  var toroideBaseMalla = new THREE.Mesh(toroideBaseForma);

  // Cuerpo de la torre
  var cuerpoForma = new THREE.CylinderGeometry(1.7,4,12,50,50);
  cuerpoForma.translate(0,6,0);
  var cuerpoMalla = new THREE.Mesh(cuerpoForma);

  // Corona de la torre
  var coronaForma = new THREE.CylinderGeometry(2.5,2.5,.7,50,50);
  coronaForma.translate(0,12,0);
  var coronaMalla = new THREE.Mesh(coronaForma);

    // Toroide de la corona
  var toroideCoronaForma = new THREE.TorusGeometry(2.2,0.5,50,50);
  toroideCoronaForma.rotateX(Math.PI / 2);
  toroideCoronaForma.translate(0,12,0);
  var toroideCoronaMalla = new THREE.Mesh(toroideCoronaForma);
  
  // Cuerpo de la corona
  var cuerpocoronaForma = new THREE.CylinderGeometry(3,1.5,2.2,50,50);
  cuerpocoronaForma.translate(0,12.9,0);
  var cuerpocoronaMalla = new THREE.Mesh(cuerpocoronaForma);
  
  // Toroide de la corona
  var CoronaForma = new THREE.SphereGeometry(.5,50,50);
  CoronaForma.translate(0,14.2,0);
  var CoronaMalla = new THREE.Mesh(CoronaForma);


  // Pieza general
  var piezaForma = new THREE.Geometry();
  piezaForma.merge(toroideBaseMalla.geometry, toroideBaseMalla.matrix);
  piezaForma.merge(cuerpoMalla.geometry, cuerpoMalla.matrix);
  piezaForma.merge(coronaMalla.geometry, coronaMalla.matrix);
  piezaForma.merge(toroideCoronaMalla.geometry, toroideCoronaMalla.matrix);
  piezaForma.merge(CoronaMalla.geometry, CoronaMalla.matrix);
  piezaForma.merge(cuerpocoronaMalla.geometry, cuerpocoronaMalla.matrix);

  var material = new THREE.MeshNormalMaterial();
  piezaMalla = new THREE.Mesh(piezaForma,material);

  escena.add(piezaMalla);
  
  raycaster = new THREE.Raycaster();
				mouse = new THREE.Vector2();
				renderer = new THREE.CanvasRenderer();
				renderer.setClearColor( 0xf0f0f0 );
				document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );

}

function renderizar(){
  renderizador.render(escena,camara);
}
function onDocumentTouchStart( event ) {
				event.preventDefault();
				event.clientX = event.touches[0].clientX;
				event.clientY = event.touches[0].clientY;
				onDocumentMouseDown( event );
			}
			function onDocumentMouseDown( event ) {
				event.preventDefault();
				mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
				raycaster.setFromCamera( mouse, camera );
				var intersects = raycaster.intersectObjects( objects );
				if ( intersects.length > 0 ) {
					intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );
					var particle = new THREE.Sprite( particleMaterial );
					particle.position.copy( intersects[ 0 ].point );
					particle.scale.x = particle.scale.y = 16;
					scene.add( particle );
				}
			}
