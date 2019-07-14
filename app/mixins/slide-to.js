import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export default Mixin.create({
	actions:{
		slideTo(id){
			$('html, body').animate({
        scrollTop: $("#" + id).offset().top - 60
      }, 1000);
		}
	}
});
