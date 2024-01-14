for(var i = 0; i < document.querySelectorAll(".play-button").length; i++) {
    document.querySelectorAll(".play-button")[i].addEventListener("click", function() {
        var playButtonHtml = this.getElementsByTagName("audio")[0].id;
        playMusic(playButtonHtml);
    });
}

function playMusic(key) {
    switch (key) {
        case "one":
            var music1 = document.querySelector(`#${key}`);
            if(music1.paused) {
                music1.play();
                for(var i = 0; i <= document.querySelectorAll(".play-button").length; i++) {
                    if (document.querySelectorAll("audio")[i].id != key) {
                        document.querySelectorAll("audio")[i].pause();
                    }
                    else {
                        continue;
                    }
                }
            }
            else {
                music1.pause();
            }
            break;

        case "two":
            var music2 = document.querySelector(`#${key}`);
            if(music2.paused) {
                music2.play();
                for(var i = 0; i <= document.querySelectorAll(".play-button").length; i++) {
                    if (document.querySelectorAll("audio")[i].id != key) {
                        document.querySelectorAll("audio")[i].pause();
                    }
                    else {
                        continue;
                    }
                }
            }
            else {
                music2.pause();
            }
            break;

        case "three":
            var music3 = document.querySelector(`#${key}`);
            if(music3.paused) {
                music3.play();
                for(var i = 0; i <= document.querySelectorAll(".play-button").length; i++) {
                    if (document.querySelectorAll("audio")[i].id != key) {
                        document.querySelectorAll("audio")[i].pause();
                    }
                    else {
                        continue;
                    }
                }
            }
            else {
                music3.pause();
            }
            break;

        case "four":
            var music4 = document.querySelector(`#${key}`);
            if(music4.paused) {
                music4.play();
                for(var i = 0; i <= document.querySelectorAll(".play-button").length; i++) {
                    if (document.querySelectorAll("audio")[i].id != key) {
                        document.querySelectorAll("audio")[i].pause();
                    }
                    else {
                        continue;
                    }
                }
            }
            else {
                music4.pause();
            }
            break;
    
        case "five":
            var music5 = document.querySelector(`#${key}`);
            if(music5.paused) {
                music5.play();
                for(var i = 0; i <= document.querySelectorAll(".play-button").length; i++) {
                    if (document.querySelectorAll("audio")[i].id != key) {
                        document.querySelectorAll("audio")[i].pause();
                    }
                    else {
                        continue;
                    }
                }
            }
            else {
                music5.pause();
            }
            break;

        case "six":
            var music6 = document.querySelector(`#${key}`);
            if(music6.paused) {
                music6.play();
                for(var i = 0; i <= document.querySelectorAll(".play-button").length; i++) {
                    if (document.querySelectorAll("audio")[i].id != key) {
                        document.querySelectorAll("audio")[i].pause();
                    }
                    else {
                        continue;
                    }
                }
            }
            else {
                music6.pause();
            }
            break;

        case "seven":
            var music7 = document.querySelector(`#${key}`);
            if(music7.paused) {
                music7.play();
                for(var i = 0; i <= document.querySelectorAll(".play-button").length; i++) {
                    if (document.querySelectorAll("audio")[i].id != key) {
                        document.querySelectorAll("audio")[i].pause();
                    }
                    else {
                        continue;
                    }
                }
            }
            else {
                music7.pause();
            }
            break;

        case "eight":
            var music8 = document.querySelector(`#${key}`);
            if(music8.paused) {
                music8.play();
                for(var i = 0; i <= document.querySelectorAll(".play-button").length; i++) {
                    if (document.querySelectorAll("audio")[i].id != key) {
                        document.querySelectorAll("audio")[i].pause();
                    }
                    else {
                        continue;
                    }
                }
            }
            else {
                music8.pause();
            }
            break;

        case "nine":
            var music9 = document.querySelector(`#${key}`);
            if(music9.paused) {
                music9.play();
                for(var i = 0; i <= document.querySelectorAll(".play-button").length; i++) {
                    if (document.querySelectorAll("audio")[i].id != key) {
                        document.querySelectorAll("audio")[i].pause();
                    }
                    else {
                        continue;
                    }
                }
            }
            else {
                music9.pause();
            }
            break;

        default:
            console.log(key);
            break;
    }
}

