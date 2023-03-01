/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

'use strict';

;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));

$('#upload').click(function (e) {
	e.preventDefault();
	var formData = new FormData($(this).parents('form')[0]);
	console.log(formData);
	$.ajax({
		url: '#',
		type: 'POST',
		xhr: function() {
			var myXhr = $.ajaxSettings.xhr();
			return myXhr;
		},
		success: function (data) {
			alert("Data Uploaded: "+data);
		},
		data: formData,
		cache: false,
		contentType: false,
		processData: false
	});
		var a = document.getElementById("myForm").elements.length;

	var x = document.getElementById("myForm").elements[0].value;
		var y = document.getElementById("first_name").value;

	var txt = [];
		var i;
		for (i = 0; i < a; i++) {
			txt.push(document.getElementById("myForm").elements[i].value);
		}
	// window.location = 'file:///C:/Users/user/Desktop/staticassets/sell-my-car.html';
	// $.post('/submitJSONData',  // url
	// 	{ myData: txt }, // data to be submit
	// 	function(data, status, xhr) {   // success callback function
	// 		alert('status: ' + status + ', data: ' + data.responseData);
	// 	},
	// 	'json');
});

