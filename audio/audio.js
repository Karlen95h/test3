var data = {
    title:[
        "Gyumri",
        "Komitas_Shushiki",
        "Rey_Charles_Jack"
    ],
    song:[
        "music/Gyumri.mp3",
        "music/Komitas_Shushiki.mp3",
        "music/Rey_Charles_Jack.mp3"

    ],
    poster:[
        "https://c.tenor.com/d_IO8M1rCD0AAAAC/listening-to-music-jerry.gif",
        "https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif",
        "https://thumbs.gfycat.com/EdibleCriminalAntarcticgiantpetrel-size_restricted.gif"

    ]

}
var currentSong= 0;
var song = new Audio();

console.log(song);

window.onload = function(){
    playSong()
}

//playSong()
//playOrPauseSong
//next
//prev
//decrease
//muted
//increase
//timing


function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
}

function playOrPauseSong(){
    let play = document.getElementById("play")
    // console.log(play);
    if(song.paused){//paused?
            song.play()
        play.src = "https://i.pinimg.com/474x/cb/f1/ba/cbf1ba6cba8053055f09d9b77fe2b884.jpg"

    }else{
        song.pause();
        play.src = "https://w7.pngwing.com/pngs/635/67/png-transparent-control-music-pause-play-stop-music-player-controls-icon-thumbnail.png"
    }
}

song.addEventListener("timeupdate",function(){
    //  console.log(song.currentTime);
   // console.log(song.duration);???
   let fill = document.getElementById("fill")

   let position = song.currentTime / song.duration;
   fill.style.width = position * 100 + "%";//fill

   convertTime(song.currentTime)//current Time
   if (song.ended) {
       next()
   }
})


function convertTime(seconds) {
    let currentTime = document.getElementById("currentTime")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec
    totalTime(Math.round(song.duration))
};

function totalTime(seconds) {   
    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent += " / " + min + ":" + sec
};


function next(){
    currentSong++;
    console.log(currentSong);

    if (currentSong >= data.song.length) {
        currentSong = 0
    }
    playSong();
    song.play();
    play.src = "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-cartoon-next-song-icon-download-image_1256944.jpg"


}

function prev(){
    currentSong--;
    if(currentSong< 0){
        currentSong = data.song.length - 1;

    }
    playSong();
    song.play();
    play.src = "https://i.pinimg.com/474x/cb/f1/ba/cbf1ba6cba8053055f09d9b77fe2b884.jpg";
    
}


function muted() {
    var mute = document.getElementById("mute")
    if (song.muted) {
        song.muted = false
        mute.src = "https://image.flaticon.com/icons/svg/1783/1783304.svg" //mute
    } else {
        song.muted = true
        mute.src = "https://image.flaticon.com/icons/svg/1783/1783304.svg" //unmute
    }
}

function increase() {
    if (song.volume < 1) {
        song.volume += 0.2;
    }
}

function decrease() {
    if (song.volume > 0.2) {  
        song.volume -= 0.2;
    }
}
