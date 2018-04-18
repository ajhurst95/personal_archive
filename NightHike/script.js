$(document).mousemove(function(event) {
    $('#light').offset({
        top: event.pageY - 100,
        left: event.pageX - 100
    });
});
// $(document).on({
//     mousemove: function(e) {
//         console.log("move");
//         $('#light').offset({
// 	        top: e.pageY - 50,
// 	        left: e.pageX - 50
//     	});
//     }
// });