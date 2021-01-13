// start button dropdown

	$(document).ready(function(){

		var windowwidth = $(window).width();
		if (windowwidth > 768) {
			$(function(){
   			 $(".dropdown").hover(
            	function() {
	                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
	                $(this).toggleClass('open');
	                $('b', this).toggleClass("caret caret-up");
            	},

            	function() {
	                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
	                $(this).toggleClass('open');
	                $('b', this).toggleClass("caret caret-up");
           		 });
    		});
			};
});

	// end button dropdown


$("#scrollTop").click(function() {
    $('html,body').animate({scrollTop: 0},'medium');
});

$("#browseTools").click(function() {
    $('html,body').animate({
        scrollTop: $(".bannercontainer").offset().top},
        'slow');
});

const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');
let share_url = document.location.href;

shareButton.addEventListener('click', event => {
  if (navigator.share) {
   navigator.share({
      title: share_url,
      url: share_url
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

closeButton.addEventListener('click', event => {
  shareDialog.classList.remove('is-open');
});
