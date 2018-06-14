$(document).ready(function() {
    var playing = false;

    $('#play').click(function() {

        $(this).toggleClass("pause");

        if (playing == false) {
            document.getElementById('forecast').play();
            playing = true;

        } else {
            document.getElementById('forecast').pause();
            playing = false;
        }
    });

    $('#hide').click(function() {
        $(this).toggleClass("hiddenbutton");
        $('li.letter').toggleClass("hidevid");
        $('.video').toggleClass("hidden");
        $('.letter.zero.slash').toggleClass("hidden");
    });
});