let herobanner = document.querySelector(".herobanner .content");
let mainslider = document.querySelector(".contentAndSlider .slidercontainer .mainslider");
let newsCards = mainslider.querySelectorAll(".newsCard");
var newsCardsIndex = -1;
var newsCardsIndexMove = -1;

function connect_news_slider_to_herobanner() {
    setInterval(() => {
        newsCardsIndex++;
        if (newsCardsIndex >= newsCards.length) {
            newsCardsIndex = 0;
        }
        let s = newsCards[newsCardsIndex];
        if (s) {
            mainslider.lastElementChild.style.mixBlendMode = "luminosity";
            s.style.mixBlendMode = "normal";
            s.querySelector(".newsDetails").classList.add("newscardactive");
            s.querySelector(".media").classList.add("newscardactive");
            newsCardBackgroundImage = s.style.backgroundImage.split('"')[1];
            console.log(newsCardBackgroundImage);
            document.querySelector(".herobanner .mainImage img").src = newsCardBackgroundImage ;
            herobanner.querySelector(" .mainNewsTitle").innerHTML = '<p>' + s.querySelector(".newsDetails .cardNewsTitle").innerHTML + '</p>';
            herobanner.querySelector(" .editorDateMedia .EditorDate .editor").innerHTML = '<p>' + s.querySelector(".newsDetails div .EditorDate .editor").innerHTML + '</p>';
            herobanner.querySelector(" .editorDateMedia .date .day p ").innerHTML = '<p>' + s.querySelector(".newsDetails div .EditorDate .date .day p").innerHTML + '</p>';
            herobanner.querySelector(" .editorDateMedia .date .fullDate p ").innerHTML = '<p>' + s.querySelector(".newsDetails div .EditorDate .date .fullDate p").innerHTML + '</p>';
            herobanner.querySelector(" .tags .tag").innerHTML = '<p>' + s.querySelector(".newsDetails div .tag").innerHTML + '</p>';
            if(newsCards[newsCardsIndex - 1] != newsCards[-1]){
                newsCards[newsCardsIndex - 1].style.mixBlendMode = "luminosity";
                newsCards[newsCardsIndex - 1].querySelector(".newsDetails").classList.remove("newscardactive");
                newsCards[newsCardsIndex - 1].querySelector(".media").classList.remove("newscardactive");
            }            
        }
    }, 1000 * 3);
}
connect_news_slider_to_herobanner();

function move_scroll_bar(){
    setInterval(() => {
        newsCardsIndexMove++;
        if (newsCardsIndexMove >= newsCards.length) {
            newsCardsIndexMove = 0;
        }
        mainslider.style.left = 0
        if(mainslider.style.left >= `${newsCardsIndexMove * 100}px` ){
            mainslider.style.left = `${newsCardsIndexMove * 0}px`;
        }else{
            if(screen.width > 1024){
                mainslider.style.left = `${newsCardsIndexMove * 50}px`;
            }else if(screen.width < 1024 && screen.width > 767){
                mainslider.style.left = `${newsCardsIndexMove * 165}px`;
            }else if(screen.width < 767 && screen.width > 424){
                mainslider.style.left = `${newsCardsIndexMove * 240}px`;
            }else if(screen.width < 424 && screen.width > 374){
                mainslider.style.left = `${newsCardsIndexMove * 250}px`;
            }else if(screen.width < 374 && screen.width > 319){
                mainslider.style.left = `${newsCardsIndexMove * 270}px`;
            }
            mainslider.style.transition = "1s ease-in-out";
        }
    }, 1000 * 3);
}
move_scroll_bar();