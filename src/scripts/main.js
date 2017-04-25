const navigation = {};
const pageChanges = {};

navigation.changeInputStyle = function() {

  let $this = $(this);

  if($this.val().length > 0) {
  	  $this.addClass("filled");
  } else {
  	 $this.removeClass("filled");
  }

};

navigation.init = function() {

	$(".button-great").on("click", () => console.log("yasss"));

	$('input, textarea').on('keyup', function() {
		console.log("up");
		navigation.changeInputStyle.call($(this));
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