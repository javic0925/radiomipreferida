$(function () {
    var song = document.getElementsByTagName('audio')[0],
        sourceMp3 = document.getElementsByTagName('audio')[0];

    sourceMp3.src = 'https://c21.radioboss.fm:18026/stream';


    $('#player').click(function (e) {
        e.preventDefault();
        if (song.paused) song.play();
        else 
        song.setAttribute('src' , 'https://c21.radioboss.fm:18026/stream'); 
    
    });
    $('#player').bind('click', function() {
        if ($('#playback').attr('src') == './assets/Icons/Play.svg')
            $('#playback').attr('src', './assets/Icons/Pause.svg');
        else
            $('#playback').attr('src', './assets/Icons/Play.svg');
    });

    song.addEventListener('pause', function () {
        song.setAttribute('src' , 'https://c21.radioboss.fm:18026/stream');
        song.currentTime = 0;
        $('#playback').attr('src', './assets/Icons/Play.svg');
    });

    

    



    
});


let mediaSession = navigator.mediaSession;

if ("mediaSession" in navigator){
    navigator.mediaSession.metadata = new MediaMetadata({
      title: "Radio Mi Preferida",
      artist: "Los Exitos De Hoy",
      album: "Radio",
      artwork: [{src: "#"}]
    });}
