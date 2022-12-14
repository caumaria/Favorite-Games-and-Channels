import "./style.css";
import Header from "./components/header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },
  {
    url: "https://www.twitch.tv/directory/game/Ragnarok",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/15229_IGDB-144x192.jpg",
    alt: "Imagem do jogo Ragnarok"
  },
  {
    url: "https://www.twitch.tv/directory/game/Ark",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/489635-144x192.jpg",
    alt: "Imagem do jogo Ark"  
  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT"
  }
]

const channelListData = [
  {
    url: "https://www.twitch.tv/yoda",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/a1489408-be7a-42b8-b823-962d1e0f0a6a-profile_image-70x70.png",
    alt: "Imagem de Yoda"
  },
  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    alt: "Imagem de Alanzoka"
  },
  {
    url: "https://www.twitch.tv/vihcent",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/721c2541-2f8d-4d1c-acd1-cce93319960c-profile_image-70x70.png",
    alt: "Imagem de Vihcent"
  }
]

const socialListData = [
  {
    url: "https://www.twitch.tv/cacau_",
    imageUrl: "/assets/twitch.svg",
    alt: "Twitch de Cau"
  },
  {
    url: "https://twitter.com/confianacall",
    imageUrl: "/assets/twitter.svg",
    alt: "Twitter de Cau"
  },
  {
    url: "https://www.youtube.com/channel/UC_P4n2DhbUYsOUgt-oba3Ew",
    imageUrl: "/assets/youtube.svg",
    alt: "Youtube de Cau"
  },
  {
    url: "https://www.instagram.com/caumaria/",
    imageUrl: "assets/instagram.svg",
    alt: "Instagram de Cau"
  }
]

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section 
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list">
          {
            gamesListData.map(function(item) {
              return (
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>

        <Section 
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que eu não perco"
          className="channel-list"
          >          

          {
            channelListData.map(function(item) {
              return (
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        
        </Section>

        <Section
        title="Minhas redes"
        subtitle="Se conecte comigo agora mesmo!"
        className="social-list"
        >
          {
            socialListData.map(function(item) {
              return (
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }

        </Section>
      </main>

    </div>
  );
}

export default App;
