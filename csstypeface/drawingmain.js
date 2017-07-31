// $(document).ready(function(){
// 	$("#play").toggle(
// 		function(){
// 			document.getElementById('#forecast').play();
// 		},
// 		function(){
// 			document.getElementById('#forecast').pause();
// 		});
// });
$(document).ready(function(){
	$('#play').toggle(
	function () {
	document.getElementById('forecast').play();
	},
	function () {
	document.getElementById('forecast').pause();
	}
	);
});
	