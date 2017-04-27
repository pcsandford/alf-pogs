const navigation = {};
const pageChanges = {};
const $popup = $(".popup--container");
const $popupImage = $(".popup--container img");

navigation.changeInputStyle = function() {

  let $this = $(this);

  if($this.val().length > 0) {
  	  $this.addClass("filled");
  } else {
  	 $this.removeClass("filled");
  }

};

navigation.showPopup = function() {
	let image = $(this).data("image");
	let fullImage = "build/images/"+image;
	let altText = $(this).data("alt");
	$popupImage.attr({"src":fullImage, "alt":altText})
	$popup.css("display","block");
};

navigation.closePopup = function() {
	$popup.css("display","none");
};

navigation.init = function() {

	//change the input styling
	$('input, textarea').on('keyup', function() {
		navigation.changeInputStyle.call($(this));
	});

	//show the popup when the button is clicked
	$(".list--design a").on("click", function(e) {
		e.preventDefault();
		navigation.showPopup.call($(this));
	});

	$(".popup__button--close").on("click",function(e) {
		e.preventDefault();
		navigation.closePopup();
	});

};

pageChanges.changeBackground = function() {

	let currentTime = moment().format("HHmm");
	let eveningTime = 2100;
	let morningTime = 600;

	if(currentTime >= eveningTime || currentTime <= morningTime) {
		console.log(currentTime);
		$(".intro").css({"background-color":"black","background-image":"url('build/images/background-night.png')"});
	} else {
		$(".intro").css({"background-color":"white","background-image":"url('build/images/background-day.png')"});
	}

};



pageChanges.init = function() {

	setInterval(pageChanges.changeBackground,60000 );

};


$(function () {

  navigation.init();
  pageChanges.init();
  pageChanges.changeBackground();
});
