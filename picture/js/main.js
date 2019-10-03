$(document).ready(function(){

});

function toggleSidebar() {
		let sideBar = $('.side-bar'); 
		let mainBody = $('.section-body'); 
		if (sideBar.hasClass('hidden-sideBar')) {
			sideBar.removeClass('hidden-sideBar');
		} else {
			sideBar.addClass('hidden-sideBar');
		}

		if (mainBody.hasClass('expand-main-body')) {
			mainBody.removeClass('expand-main-body');
		} else {
			mainBody.addClass('expand-main-body');
		}
	}