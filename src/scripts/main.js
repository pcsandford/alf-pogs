const navigation = {}, pageChanges = {}, $popup = $(".popup--container"), $popupImage = $(".popup--container img"), $emailPopup = $(".popup--container--email");

const colorChoices = ["#03FD06", "#ED058F", "EA0FEA"];

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
	$popupImage.attr({"src":fullImage, "alt":altText});
	$popup.css("display","block");
};

navigation.closePopup = function() {
	$popup.css("display","none");
};

navigation.showEmailPopup = function() {
	$emailPopup.css("display","block");
};

navigation.clearEmailFields = function() {
	let $name = $(".input--name");
	let $email = $(".input--email");
	let $message =$(".input--message");
	$name.val("").removeClass("filled");;
	$email.val("").removeClass("filled");;
	$message.val("").removeClass("filled");;
};

navigation.closeEmailPopup = function() {
	$emailPopup.css("display","none");
	navigation.clearEmailFields();
};

navigation.init = function() {

	//change the input styling
	$("input, textarea").on("keyup", function() {
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

	$(".popup--email__button--close").on("click",function(e) {
		e.preventDefault();
		navigation.closeEmailPopup();
	});

};

pageChanges.changeBackground = function() {

	let currentTime = moment().format("HHmm");
	let eveningTime = 2100;
	let morningTime = 600;

	if(currentTime >= eveningTime || currentTime <= morningTime) {
		$(".intro").css({"background-color":"black","background-image":"url('build/images/background-night.png')"});
	} else {
		$(".intro").css({"background-color":"white","background-image":"url('build/images/background-day.png')"});
	}
};

// pageChanges.changeHoverColour = function() {
// 	function getRandomArbitrary(min, max) {
// 	  return Math.floor(Math.random() * (max - min)) + min;
// 	}
// 	let randomNum = getRandomArbitrary(0,2);
// 	$(this).find("a").css("background",colorChoices[randomNum]);
// };

// pageChanges.removeHoverColour = function() {
// 	$(this).find("a").css("background","black");
// }


pageChanges.init = function() {

	setInterval(pageChanges.changeBackground,60000 );

	// $("li").on("mouseenter", function() {
	// 	pageChanges.changeHoverColour.call($(this));
	// });

	// $("li").on("mouseout", function() {
	// 	pageChanges.removeHoverColour.call($(this));
	// });

};


$(function () {

  navigation.init();
  pageChanges.init();
  pageChanges.changeBackground();
  // pageChanges.changeHoverColour();

  var message = "";

  $("#contact-form__submit").on("click", function() {
      message = $("#contact-form").serialize();
      $.ajax({
          url: "https://formspree.io/peter@cameroncodes.com",
          method: "POST",
          data: {message: message},
          dataType: "json"
      });
      navigation.showEmailPopup();
      return false;
  });
});
