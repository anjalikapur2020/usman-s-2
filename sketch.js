var splashimg
var gameState = "wait"
var playbutton, soundonbutton, soundoffbutton


function preload() {
    splashimg = loadImage("assets/cyberChaser.gif")
bgSound=loadSound("backgroundmusic.mp3")

}



function setup() {
    createCanvas(windowWidth, windowHeight)
    playbutton = createImg("play.png")
    playbutton.position(50, height/2)
    playbutton.size(150, 150)

    soundonbutton = createImg("sound.png")
    soundonbutton.position(width-200,height/2)
    soundonbutton.size(150, 150)
    soundonbutton.mouseClicked(mute)
    // soundonbutton.hide()


    soundoffbutton = createImg("mute.png")
    soundoffbutton.position(width-200,height/2)
    soundoffbutton.size(150,150)
    soundoffbutton.hide()
    soundoffbutton.mouseClicked(mute)

bgSound.play()


}

function draw() {
    if (gameState === "wait") {
        if (!bgSound.isPlaying) {
            bgSound.play()
        }
        background(splashimg)
    }
}


function mute() {
    if (bgSound.isPlaying()) {
        bgSound.stop();
        soundoffbutton.show();
        soundonbutton.hide();
        console.log("mute")
    }
    else {
        soundonbutton.show()
        soundoffbutton.hide();
        bgSound.play();
        console.log("unmute")
    }
}


