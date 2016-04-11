import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement(){
		// Validates the contact form and submits it using Formspree.
		Ember.$.validator.setDefaults({
			lang: 'fr',
		    highlight: function(element) {
		        Ember.$(element).closest('.form-group').addClass('has-error');
		    },
		    unhighlight: function(element) {
		        Ember.$(element).closest('.form-group').removeClass('has-error');
		    },
		    errorElement: 'span',
		    errorClass: 'help-block',
		    errorPlacement: function(error, element) {
		        if(element.parent('.input-group').length) {
		            error.insertAfter(element.parent());
		        } else {
		            error.insertAfter(element);
		        }
		    }
		});

		Ember.$('.contact-form').validate({
		  submitHandler: function(form) {
		    Ember.$.ajax({
		   	      url: "//formspree.io/contact@feedes.fr",
				  method: "POST",
				  data: {
				    name: Ember.$(form).find("input[name='name']").val(),
				    _subject: Ember.$(form).find("input[name='_subject']").val(),
				    _replyto: Ember.$(form).find("input[name='_replyto']").val(),
				    message: Ember.$(form).find("textarea[name='message']").val()
				  },
			  	dataType: "json",
		      	success: function() {
			    	Ember.$(form).find('#send-icon').removeClass('fa-spin');
	    			Ember.$(form).append('<div class="alert alert-success">Message envoyé !</div>');
	    		},
	    		error: function() {
			    	Ember.$(form).find('#send-icon').removeClass('fa-spin');
	    			Ember.$(form).append('<div class="alert alert-error">Oups, une erreur est survenue. Réessayez plus tard !</div>');
	    		}
		    });
		  }
		});
	}
});
