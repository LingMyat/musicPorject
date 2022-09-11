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
    songId: `music/7!!_-_Orange_Lyrics_(acoustic_ver)(256k).mp3`,
    title: `7Orange(Your Lie in April Ending Theme)`,
    img: `https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/167440010_231021015375847_407646901502204481_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=1nTV11dwUUIAX-dXUwO&tn=-AsB6s5Cx93J83HF&_nc_ht=scontent-sin6-4.xx&oh=00_AT-3kWQhhEJEC0Y2QFTOnSCox5YrRJxg01aZ-uQwY8ub7g&oe=623B0B04`,
    class:`value0`
  },
  {
    songId: `music/Japanese_soft_song_•_Nandemonaiya_-_Mone_Kamishiraishi_(Mitsuha)__Lyrics_Video(256k).mp3`,
    title: `Nandeminaiya(Your Name Theme)`,
    img: `https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/150183880_908264113275828_6484264334406283970_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=Mwgw5wrK0ikAX_5EQix&_nc_ht=scontent-sin6-1.xx&oh=00_AT9Xd57MlTl61bk6MK3_ds1Kx1S38exstThrpdsfPClAJw&oe=623DC35E`,
    class:`value1`
  },
  {
    songId: `music/Sparkle__Your_Name_AMV(256k).mp3`,
    title: `Sparkle(Your Name Theme)`,
    img: `music/46456808_357179818378613_8157921779918899784_n (1).jpg`,
    class:`value2`
  },
  {
    songId: `music/ReoNa_-_虹の彼方に_Niji_no_kanatani__刀劍神域_SAO_Alicization_EP19,_24_插曲__中日羅歌詞(256k).mp3`,
    title: `Over the Rainbow(Sword Art Online: Alicization Insert Song)`,
    img: `https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/171313906_831433644175706_3539930079664631687_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=g_x4wazVOMsAX-4UQAB&_nc_ht=scontent-sin6-2.xx&oh=00_AT8Pt_3892pSN461WRRfvV_Zhb79Z_6h-mTbuXS9h8I4lQ&oe=621BD795`,
    class:`value3`
  },
  {
    songId: `music/Jujutsu_Kaisen_-_Opening_Full『Kaikai_Kitan』by_Eve(256k).mp3`,
    title: `KaiKai Kaisen(JujUtsu Kaisen Opening Theme)`,
    img: `https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/240525722_136160845385643_6162677161104874159_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=0qKdxeQSXCQAX-GtcyZ&_nc_ht=scontent-sin6-2.xx&oh=00_AT94nqJlvk5kiGTNspn1uCnIJu0EoDjxD-xqgcsXTZuPdg&oe=621C873C`,
    class:`value4`
  },
  {
    songId: `music/Horimiya_Opening_full_AMV_{_Iro_Kousui_}(256k).mp3`,
    title: `Iro Kousui(Horimiya Opening Theme)`,
    img: `https://scontent-sin6-1.xx.fbcdn.net/v/t45.5328-4/202574020_2962334820558056_6893655336702730090_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=c48759&_nc_ohc=DqB_YZWOdrMAX_YRKZu&_nc_ht=scontent-sin6-1.xx&oh=00_AT9YIRG1VPvot-VqcgN04IES15i76oo3kuqHpZFPFs_E6g&oe=621BF40E`,
    class:`value5`
  },
  {
    songId: `music/_Blue_Bird__-_ikimono_-_gakari__LYRIC__OP_3_Naruto_Shippuden(256k).mp3`,
    title: `Blue Bird(Naruto Shippuden Opening 3)`,
    img: `https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/120837071_662043357781403_8534632484170230895_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=eCVFFnZnkVoAX_43XFU&_nc_ht=scontent-sin6-2.xx&oh=00_AT9aFmgdPsMON3F0kPvcpnK110EQoABfJBDDKbQyusAp_Q&oe=623C1616`,
    class:`value6`
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
  audio.src = songs[g].songId;
    audio.play();
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
