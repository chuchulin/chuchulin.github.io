
var ArbolGeometry()=function()
{
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
    var arbol1= new THREE.Mesh (ArbolGeometry(),new THREE.MeshNormalMaterial());
    var arbol2= new THREE.Mesh (ArbolGeometry(),new THREE.MeshNormalMaterial());
    
    arbol1.position.x=-5;
    arbol2.position.x=5;
    
    camara= new THREE.PerspectiveCamera();
    camara.position.z=20;
    
    renderizador = new THREE.WebGLRenderer();
    renderizador.setSize(600,600);
    
    escena = new THREE.Scene();
    escena.add(arbol1);
    escena.add(arbol2);
    document.body.appendChild(renderizador.domElement);
}


loop = function (){
requestAnimationFrame(loop);
renderizador.render(escena,camara)
}

setup();
loop();
