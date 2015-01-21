$(function() {
    var client = new WindowsAzure.MobileServiceClient('https://apim-exp-contacts.azure-mobile.net/', 'VqzzvozhoqEsMAkHTqClETVRJVBlWF60'),
        contactTable = client.getTable('contacts');

	function handleSuccess() {
		/*
		var namebox = $('cf-name');
		var emailbox = $('cf-email');
		var phonebox = $('cf-phone');
		namebox.val('').focus();
		emailbox.val('');
		phonebox.val('');
		*/
		$('.submit-success').fadeIn(1000);
        $('.submit-error').fadeOut(500);

	}

    function handleError(error) {
        $('.submit-error').fadeIn(1000);
        $('.submit-success').fadeOut(500);
    }

    // Handle insert
    $('#contact-form').submit(function(evt) {
		var sourceurl = document.URL;
		var namebox = $('#cf-name'),
			contactname = namebox.val();
        var emailbox = $('#cf-email'),
			contactemail = emailbox.val();
		var phonebox = $('#cf-phone'),
			contactphone = phonebox.val();
			
		function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };
        if (isValidEmail(contactemail) && (contactname.length > 1)) {
            contactTable.insert({ source: sourceurl, name: contactname, email: contactemail, phone: contactphone}).then(handleSuccess, handleError);
        } else {
            $('.submit-error').fadeIn(1000);
            $('.submit-success').fadeOut(500);
        }
        return false;
    });

});