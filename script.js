var arr = [
    {songName: "Ram siya ram", url: "./songs/Ram siya ram.mp3", img: "./images/Ram.jpg"},
    {songName: "4mendown", url: "./songs/4mendown.mp3", img: "./images/4mendown.jpg"},
    {songName: "Pehele bhi main", url: "./songs/Pehele bhi main.mp3" , img: "./images/Animal.jpg"},
    {songName: "Bekhayali", url: "./songs/Bekhayali.mp3", img: "./images/k.jpg"}
]
var allsongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")
var play = document.querySelector("#play")
var forward = document.querySelector("#forward")
var backward = document.querySelector("#backward")


var audio = new Audio()
var selectedSong = 0 


function mainfunction(){
    var clutter = ""
arr.forEach(function(elem,index){
    clutter += `<div class="song-card" id=${index}> 
    <div class="part1">
        <img src=${elem.img} alt="">
        <h2>${elem.songName}</h2>
    </div>
    <h6>1:32</h6>
</div>`
})


allsongs.innerHTML = clutter
audio.src = arr[selectedSong].url
poster.style.backgroundImage =`url(${arr[selectedSong].img})`


}
mainfunction()


allsongs.addEventListener("click",function(dets){
    selectedSong = dets.target.id
    mainfunction()
    play.innerHTML = `<i class="ri-pause-fill"></i>`
    flag = 1
    audio.play()
})

var flag = 0
play.addEventListener("click",function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        mainfunction()
        audio.play()
        flag = 1
    }else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        flag = 0
        mainfunction()
        audio.pause()
    }
})
forward.addEventListener("click",function(){
    if(selectedSong <  arr.length){
        selectedSong++
        mainfunction()
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})

backward.addEventListener("click",function(){
    if(selectedSong >= 0){
        selectedSong--
        mainfunction()
        audio.play()
    }else{
        backward.style.opacity = 0.4
    }
})