
function ArbolGeometry(){
    THREE.Geometry.call(this);
    var troncoForma= new THREE.CylinderGeometry(.25,.5,1);
    var esferaForma= new THREE.SphereGeometry(.65);
    esferaForma.translate(0,1,0);
    
    var troncoMalla = new THREE.Mesh(troncoForma);
    var esferaMalla = new THREE.Mesh(esferaForma);
    
    this.merge(troncoMalla.geometry,troncoMalla.matrix);
    this.merge(esferaMalla.geometry,esferaMalla.matrix);
    }
    
    ArbolGeometry.prototype= new THREE.Geometry();
    
    setup = function(){
    var arbol1= new Arbol();
    var arbol2= new Arbol();
    
    arbol1.malla.position.x=-5;
    arbol2.malla.position.x=5;
    
    CONSTRUCTOR.camara= new THREE.PerspectiveCamera();
    CONSTRUCTOR.camara.position.z=20;
    
    CONSTRUCTOR.renderizador = new THREE.WebGLRenderer();
    CONSTRUCTOR.renderizador.setSize(600,600);
    
    CONSTRUCTOR.escena = new THREE.Scene();
    CONSTRUCTOR.escena.add(arbol1.malla);
    CONSTRUCTOR.escena.add(arbol2.malla);
    document.body.appendChild(CONSTRUCTOR.renderizador.domElement);
}


CONSTRUCTOR.loop = function (){
requestAnimationFrame(CONSTRUCTOR.loop);
CONSTRUCTOR.renderizador.render(CONSTRUCTOR.escena,CONSTRUCTOR.camara)
}

CONSTRUCTOR.setup();
CONSTRUCTOR.loop();
