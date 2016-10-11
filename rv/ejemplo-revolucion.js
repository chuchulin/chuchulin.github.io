var puntos=[];
 for (var i = 18; i<23;i ++){
 puntos.push(new THREE.Vector2(Math.sin(i*0.2)*15,(i-40)*2));
 }
 var forma = new THREE.LatheGeometry(puntos);
 var material= new THREE.MeshNormalMaterial();
 var malla = new THREE.Mesh(forma,material);
 //malla.rotateX( Math.PI/4);
 var escena = new THREE.Scene();
 escena.add(malla);
 var camara = new THREE.PerspectiveCamera();
 camara.position.z=80;
 var renderizador=new THREE.WebGLRenderer();
 renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
 document.body.appendChild(renderizador.domElement);
 renderizador.render(escena,camara);
 

 
