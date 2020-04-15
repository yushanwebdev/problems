$(window).on('load', function() {
	$('form').validate({
		success: "is-valid",
		errorClass : "is-invalid",
		errorPlacement: function( error, ele ) {
			console.log(ele);
		},
		// unhighlight: function(element, errorClass, validClass) {
		// 	console.log(element);
		// }
	});

	$.validator.addClassRules({
        required: {
            required: true
        }
    });
});