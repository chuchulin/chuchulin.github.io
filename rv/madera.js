var loader = new THREE.ImageLoader();

// load a image resource
loader.load(
	// resource URL
	'imagen_047.jpg',
	// Function when resource is loaded
	function ( image ) {
		// do something with it

		// like drawing a part of it on a canvas
		var canvas = document.createElement( 'canvas' );
		var context = canvas.getContext( '2d' );
		context.drawImage( image, 100, 100 );
	},
	// Function called when download progresses
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},
	// Function called when download errors
	function ( xhr ) {
		console.log( 'An error happened' );
	}
);
