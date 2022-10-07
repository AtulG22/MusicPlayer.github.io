var songs=[
    {
        id:1,
        imageSrc:"./img/143103-ishq-tera-guru-randhawa-mp3-song-300.jpg",
        audioSrc:"./Audio/Ishq Tera - Guru Randhawa.mp3",
        title:"Ishq Tera- Guru Randhawa"
    },
    {
        id:2,
        imageSrc:"./img/143722-wishlist-dino-james-mp3-song-300.jpg",
        audioSrc:"./Audio/Wishlist - Dino James.mp3",
        title:"Wishlist - By  Dino James"
    },
    {
        id:3,
        imageSrc:"./img/143817-tere-naal-darshan-raval-mp3-song-300.jpg",
        audioSrc:"./Audio/Tere Naal - Darshan Raval.mp3",
        title:"Tere Naal - Darshan Raval"
    },
    {
        id:4,
        imageSrc:"./img/144604-3-59-am-divine-mp3-song-300.jpg",
        audioSrc:"./Audio/3 59 AM - Divine.mp3",
        title:"3:59 AM - Divine (Punya Paap)"
    },
    {
        id:5,
        imageSrc:"./img/144707-moonlight-harnoor-mp3-song-300.jpg",
        audioSrc:"./Audio/Moonlight - Harnoor.mp3",
        title:"Moonlight - By Harnoor"
    },
    {
        id:6,
        imageSrc:"./img/146051-bad-boy-x-bad-girl-badshah-mp3-song-300.jpg",
        audioSrc:"./Audio/Bad Boy X Bad Girl - Badshah.mp3",
        title:"Bad Boy X Bad Girl- Badshah"
    },
    {
        id:7,
        imageSrc:"./img/146141-believe-emiway-bantai-mp3-song-300.jpg",
        audioSrc:"./Audio/Believe - Emiway Bantai.mp3",
        title:"Believe - Emiway Bantai"
    },
    {
        id:8,
        imageSrc:"./img/148191-oo-bolega-ya-oo-oo-bolega-pushpa-mp3-song-300.jpg",
        audioSrc:"./Audio/Oo Bolega Ya Oo Oo Bolega - Pushpa.mp3",
        title:"Oo Bolega Ya Oo Oo Bolega"
    },
    {
        id:9,
        imageSrc:"./img/148529-jaise-aankhon-ki-dibiya-mein-nindiya-mp3-song-300.jpg",
        audioSrc:"./Audio/Jaise Aankhon Ki Dibiya Mein Nindiya.mp3",
        title:"Tare Zammen Par- Aamir Khan"
    },
    {
        id:10,
        imageSrc:"./img/148789-kehndi-hundi-si-mp3-song-300.jpg",
        audioSrc:"./Audio/Kehndi Hundi Si.mp3",
        title:"Kehndi Hundi Si- AP Dillon"
    },
  
    {
        id:11,
        imageSrc:"./img/thumb-namaste-london-300.jpg",
        audioSrc:"./Audio/03. Main Jahan Rahoon.mp3",
        title:"Main Jahan Rahoon- Pritam "
    },
    
    {
        id:12,
        imageSrc:"./img/thumb-sultan-2016-movie-mp3-songs11-300.jpg",
        audioSrc:"./Audio/06 Bulleya - Sultan (Popon) 190Kbps.mp3",
        title:"Bulleya - Sultan (Popon)"
    },
    {
        id:13,
        imageSrc:"./img/148772-pasoori-mp3-song-300.jpg",
        audioSrc:"./Audio/Pasoori - Shae Gill.mp3",
        title:"Pasoori - Shae Gill"
    },
    {
        id:14,
        imageSrc:"./img/149480-bhool-bhulaiyaa-2-title-track-mp3-song-300.jpg",
        audioSrc:"./Audio/Bhool Bhulaiyaa 2 - Title Track.mp3",
        title:"Bhool Bhulaiyaa 2 - Title Track"
    },
    {
        id:15,
        imageSrc:"./img/150152-kaale-kaale-chashme-stebin-ben-mp3-song-300.jpg",
        audioSrc:"./Audio/Kaale Kaale Chashme - Stebin Ben.mp3",
        title:"Kaale Kaale Chashme"
    },
    {
        id:16,
        imageSrc:"./img/kesariya.jpeg",
        audioSrc:"./Audio/Kesariya - Brahmastra.mp3",
        title:"Kesarriya - Brahmastra"
    },
    {
        id:17,
        imageSrc:"./img/vaathi coming.jpg",
        audioSrc:"./Audio/Vaathi Coming- [MyMp3Bhojpuri.In].mp3",
        title:"Vaathi Coming"
    },
    {
        id:18,
        imageSrc:"./img/150247-oops-king-mp3-song-300.jpg",
        audioSrc:"./Audio/OOPS - King.mp3",
        title:"OOPS - King"
    },
    {
        id:19,
        imageSrc:"./img/148245-we-rollin-shubh-mp3-song-300.jpg",
        audioSrc:"./Audio/We Rollin - Shubh.mp3",
        title:"We Rollin - Shubh"
    },
    {
        id:20,
        imageSrc:"./img/116403-ishq-di-baajiyaan-diljit-dosanjh-mp3-song-300.jpg",
        audioSrc:"./Audio/Ishq Di Baajiyaan - Diljit Dosanjh.mp3",
        title:"Ishq Di Baajiyaan"
    }
    ,
    {
        id:21,
        imageSrc:"./img/143533-jee-karda-garry-sandhu-mp3-song-300.jpg",
        audioSrc:"./Audio/Jee Karda - Garry Sandhu.mp3",
        title:"Jee Karda - Garry Sandhu"
    }
    ,
    {
        id:22,
        imageSrc:"./img/thumb-do-you-know-diljit-dosanjh-mp3-song1111-300.jpg",
        audioSrc:"./Audio/Do You Know - Diljit Dosanjh 190Kbps.mp3",
        title:"Do You Know"
    }
    ,
    {
        id:23,
        imageSrc:"./img/mqdefault.jpg",
        audioSrc:"./Audio/Bapu Zimidar - Jassi Gill - 320Kbps.mp3",
        title:"Bapu Zimidar - Jassi Gill"
    }
    ,
    {
        id:24,
        imageSrc:"./img/150172-chidiya-vilen-mp3-song-300.jpg",
        audioSrc:"./Audio/Chidiya Vilen 128 Kbps.mp3",
        title:"Chidiya Vilen"
    }
    
]

function generateSongcard()
{
    let htmlString="";
    songs.forEach(function(song,index)
    {
        let songHTML=`
        
     <div class="playcard">

        <div class="audioimg">
            <img src="${song.imageSrc}">
        </div>

        <div class="audio_detail">

            <h3 class="title">${song.title}</h3>

            <button class="btn" onclick="playaudio(${song.id})"><i class="fa-solid fa-play"></i></button>

        </div>

     </div>`;

     htmlString += songHTML;
    });

   document.getElementById("songcards").innerHTML=htmlString;

}
generateSongcard();

 
function playaudio(songid)
 {
     var song=songs.find(function (song,index){return song.id === songid});
    
      document.getElementById("thumbnail").src = song.imageSrc;
      document.getElementById("audios").src = song.audioSrc;
      document.getElementById("right_title").innerText = song.title;
      document.getElementById("audios").play();
     }