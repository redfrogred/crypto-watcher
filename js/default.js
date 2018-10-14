$(function() {
	
	var APP = {};
			APP.name = 'Crypto Watcher';
			APP.version = '0.03';
			APP.coinsURL = './coins.json';
			APP.statusIndex = 1;
			APP.status = [ 'halted', 'initialized', 'ok' ];
			
	// ----------------------------------------
	
	function init() {
		console.log ( APP.name + ' version ' + APP.version + ' initializing...' );
		$( 'h1' ).html( APP.name + ' <span>' + timestamp() + '</span>' );
		document.title = APP.name + ' v' + APP.version;
		fetchCoinList();
		return;
	}

	// ----------------------------------------
	
	function timestamp() {	
		var d = new Date().toLocaleString();
		return d.replace ( ',', ' -' );
	}

	// ----------------------------------------
	
	function showMessage( mssg, mssgClass ) {
		$( '#messageBox' ).attr( 'class', mssgClass );
		$( '#messageBox' ).html( mssg );
		return;
	}
	
	// ----------------------------------------
	
	function fetchCoinList() {
		showMessage( 'Fetching coin list...', '' )
		// ajax here
		var JSONService = APP.coinsURL,
				tempStr = '',
				tableHeading = '<tr class="heading"><td><br /></td><td>Name</td><td>Price</td><td>1hr %</td><td>24hr %</td><td>Coins</td><td>Portfolio</td></tr>';
		$.ajax({
			type: "GET",
			contentType: "application/json",
			dataType: "json",
			url: JSONService
		})
		.done(function (response) {
			$.each(response, function ( index, value ) {
				tempStr += '<tr id="' + this.coin + '" data-coinFetchName="' + this.coinFetchName + '" class="coin"><td class="icon" title="' + this.coinFullname + '"><br /></td><td class="coinDisplayName">' + this.coinDisplayName + '</td><td class="coinPrice"></td><td class="coin1hr"></td><td class="coin24hr"></td><td class="coinAmount">' + this.coinAmount + '</td><td class="coinPortfolio"></td></tr>'
			});
			// create table
			if ( tempStr != '' ) {
				$( '#app' ).html( '<table><tbody>' + tableHeading + tempStr + '</tbody></table>' );
			}
			else {
				APP.statusIndex = 0;
				$( '#app' ).html( '<table><tbody><tr><td>Coin List empty...</td></tr></tbody></table>' );
			}
		})
		.fail( function ( jqXHR, textStatus ) { 
			APP.statusIndex = 0;
			showMessage( 'Error fetching Coin List', 'red' )
		})
		.always( function () { 
			if ( APP.statusIndex > 0 ) {
				fetchCoinValues ();
			}
			else {
				console.log ( 'Program halted due to fetchCoinList error' );
			}	
		});
						
		return;
	}
	
	// ----------------------------------------
	
	function fetchCoinValues () {
		showMessage( 'Fetching coin values...', '' )
		//left off here...
		return;
	}	
	
	// ----------------------------------------

	init();
	
	 
});