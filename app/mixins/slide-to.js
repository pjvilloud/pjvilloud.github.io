import Ember from 'ember';

export default Ember.Mixin.create({
	actions:{
		slideTo(id){
			Ember.$('html, body').animate({
		        scrollTop: Ember.$("#" + id).offset().top - 60
		    }, 1000);
		}
	}
});
