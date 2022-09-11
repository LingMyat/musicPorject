const albumsListButton = document.getElementsByClassName(`albumsList`)[0];
const closeBtn1 = document.getElementsByClassName(`fa-chevron-up`)[0];

const songsListButton = document.getElementsByClassName(`songsList`)[0];
const closeBtn2 = document.getElementsByClassName(`fa-times`)[0];
const album = document.getElementsByClassName(`album`)[0];
const songNames = document.getElementsByClassName(`songNames`)[0];
const audio = document.getElementsByClassName(`audio`)[0];
const img = document.getElementsByClassName(`img`)[0];
const title = document.getElementsByClassName(`title`)[0];
const timeText = document.getElementsByClassName(`time`)[0];
const progressBar = document.getElementsByClassName(`progressBar`)[0];
const playButton = document.getElementsByClassName(`playButton`)[0];
const pauseButton = document.getElementsByClassName(`pauseButton`)[0];
const backButton = document.getElementsByClassName(`backButton`)[0];
const nextButton = document.getElementsByClassName(`nextButton`)[0];
const songs = [
  {
    songId: `music/ဘာလိုနေသေးလဲ_(Lyrics)(256k).mp3`,
    title: `ဘာလိုနေသေးလဲ(Idiots)`,
    img: `music/IMG_20220226_103856.jpg`,
    class:`value0`
  },
  {
    songId: `music/တစ်ခန်းရပ်_by_Raymond_iDIOTS_(Lyrics_Video)(256k).mp3`,
    title: `တစ်ခန်းရပ်(Idiots)`,
    img: `music/IMG_20220226_104008.jpg`,
    class:`value1`
  },
  {
    songId: `music/အိပ်ယာဝင်တေး_-_Raymond_(_Idiots_)_(_Lyrics_)(256k).mp3`,
    title: `အိပ်ယာဝင်တေး(Idiots)`,
    img: `music/IMG_20220226_114119.jpg`,
    class:`value2`
  },
  {
    songId: `music/idiots_Myanmar_song_ေတြ႕ရတာဝမ္းသာတယ္(256k).mp3`,
    title: `တွေ့ရတာဝမ်းသာတယ်(Idiots)`,
    img: `https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/173977871_1482781342076867_2171692728302715093_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=cnWMOLAVyPsAX_ePnH3&_nc_ht=scontent-sin6-1.xx&oh=00_AT8clP7A2j27iOW0yQwTbcI5FHDWQNnBwluQUy2-3_H7kQ&oe=621FA907`,
    class:`value3`
  },
  {
    songId: `music/Idiots_-_Chan_khae_-_ချန်ခဲ့(256k).mp3`,
    title: `ချန်ခဲ့(Idiots)`,
    img: `music/IMG_20220226_103934.jpg`,
    class:`value4`
  },
  {
    songId: `music/Min_Nae_Nee_Poe___Acoustic_Version(256k).mp3`,
    title: `မင်းနဲ့နီးဖို့(Idiots)`,
    img: `music/IMG_20220226_103920.jpg`,
    class:`value5`
  },
  
];
let isPlaying = false;
const updatePlayAndPauseButton = ()=>{
  if(isPlaying){    
    pauseButton.style.display=`inline`;
    playButton.style.display=`none`;
  }else {
    pauseButton.style.display=`none`;
    playButton.style.display=`inline`;
  }
}
g = 0;
title.textContent = songs[g].title;
img.src = songs[g].img;
audio.src = songs[g].songId;
nextButton.addEventListener(`click`, () => {
  g++;
  if (g === songs.length) {
    g = 0;
  }
  title.textContent = songs[g].title;
  img.src = songs[g].img;
  audio.src = songs[g].songId;
  audio.play();
  isPlaying=true;
  updatePlayAndPauseButton();
});
backButton.addEventListener(`click`, () => {
  g--;
  if (g < 0) {
    g = songs.length - 1;
  }
  title.textContent = songs[g].title;
  img.src = songs[g].img;
  audio.src = songs[g].songId;
  audio.play();
  updatePlayAndPauseButton();
});

for (let i = 0; i < songs.length; i++) {
  const songsListItem = document.createElement(`div`);
  songsListItem.classList.add(songs[i].class)
  const titleName = songs[i].title;
  const titleWithOrder = (i + 1).toString() + `. ` + titleName;
  songsListItem.textContent = titleWithOrder;
  songNames.append(songsListItem);
  songsListItem.addEventListener(`click`,()=>{
    title.textContent = titleName;
    const imgSource = songs[i].img;
    img.src = imgSource;
    const songId = songs[i].songId;
    audio.src = songId;
    audio.play();
    isPlaying = true;
    updatePlayAndPauseButton();
    g=i;
  })
}
albumsListButton.addEventListener(`click`, () => {
  album.classList.remove(`display`);
  songNames.classList.add(`display`);
  closeBtn1.style.display = `inline`;
  albumsListButton.style.display = `none`;
  closeBtn2.style.display = `none`;
  songsListButton.style.display = `inline`;
});
closeBtn1.addEventListener(`click`, () => {
  closeBtn1.style.display = `none`;
  albumsListButton.style.display = `inline`;
  album.classList.add(`display`);
});
songsListButton.addEventListener(`click`, () => {
  songNames.classList.remove(`display`);
  album.classList.add(`display`);
  closeBtn2.style.display = `inline`;
  songsListButton.style.display = `none`;
  closeBtn1.style.display = `none`;
  albumsListButton.style.display = `inline`;
});
closeBtn2.addEventListener(`click`, () => {
  songNames.classList.add(`display`);
  closeBtn2.style.display = `none`;
  songsListButton.style.display = `inline`;
});
let duration = 0;
let durationTime = 0;
audio.addEventListener(`loadeddata`, () => {
  duration = Math.floor(audio.duration);
  durationTime = createDuration(duration);
});
const createDuration = (total) => {
  const min = Math.floor(total / 60);
  const sec = total % 60;
  const minText = min < 10 ? `0` + min.toString() : min;
  const secText = sec < 10 ? `0` + sec.toString() : sec;
  return minText + `:` + secText;
};

audio.addEventListener(`timeupdate`, () => {
  const current = Math.floor(audio.currentTime);
  const currentTime = createDuration(current);
  timeText.textContent = currentTime + `/` + durationTime;
  updatePrograssBar(current);
});
const updatePrograssBar = (current) => {
  const barWidth = (200 / duration) * current;
  progressBar.style.width = barWidth + `px`;
};
audio.addEventListener(`ended`,()=>{
  g++;
  if (g===audio.length){
    g=0;
  }
  title.textContent = songs[g].title;
  img.src = songs[g].img;
  audio.src = songs[g].songId;
  audio.play();
  updatePlayAndPauseButton();
})

playButton.addEventListener(`click`,()=>{
  isPlaying = true;
  const current = Math.floor(audio.currentTime)
  if (current===0){
    audio.src = songs[g].songId;
    audio.play();
  }else{
    audio.play();
  }
  
  audio.play();
  updatePlayAndPauseButton();
});
pauseButton.addEventListener(`click`,()=>{
  isPlaying = false;
  audio.pause();
  updatePlayAndPauseButton();
})
