$(function() {
	
	var APP = {};
			APP.name = 'Crypto Watcher';
			APP.version = '0.01';
		
	// ----------------------------------------
	
	function init() {
		console.log ( APP.name + ' version ' + APP.version + ' initializing...' );
		$( 'h1' ).text( APP.name + ' ' + timestamp() );
		document.title = APP.name + ' v' + APP.version;
		fetchCoinList();
		return;
	}

	// ----------------------------------------
	
	function timestamp() {	
		return new Date().toLocaleString();
	}

	// ----------------------------------------
	
	function showMessage( mssg, mssgClass ) {
		$( '#messageBox' ).addClass( mssgClass );
		$( '#messageBox' ).html( mssg );
		return;
	}
	
	// ----------------------------------------
	
	function fetchCoinList() {
		showMessage( 'Fetching coin list...', '' )
		// ajax here
		return;
	}
	
	// ----------------------------------------

	init();
	
	 
});