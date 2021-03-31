function postToGoogle() {
	 var field2 = $("#emailField").val();

	 if(field2 == ""){
					alert('Please Fill Your Email');
					document.getElementById("emailField").focus();
					return false;
				}

	 $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSdlndeC2L_6-3RCEkKwqoCV0JpMvqOeF-VILzPopB2S3nl35w/formResponse?",
					data: {"entry.1460631936": field2},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
					{
					},
					error: function(x, y, z)
						{

							$('#success-msg').show();
							$('#form').hide();
							
						}
                });
				return false;
            }

}