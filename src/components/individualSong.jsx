import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Styles from './styles/navigation.module.css'
import logo from './assets/soundCloud-logo.png';
import styles from './styles/individual.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faCirclePause } from "@fortawesome/free-solid-svg-icons";

function IndividualSong(props) {
  const params = useParams();
  // const navigate = useNavigate();
  const { id: selectedId } = params;
  const [songUrl, setSongUrl] = useState(null);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [image, setImage] = useState("");
  const [songName, setSongName] = useState('');
  const [artists, setArtists] = useState([]);

  // useEffect(() => {
  //   if (!props.isLoggedin) {
  //     alert('Please Sign in First');
  //     navigate("/signin");
  //   }
  // }, [props.isLoggedin, navigate]);

  useEffect(() => {
    fetch(`https://academics.newtonschool.co/api/v1/musicx/song/${selectedId}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'projectID': 'qo3cfe3k85m3',
        'Authorization': `Bearer ${props.tokken}` 
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setImage(data.data.thumbnail)
      setSongUrl(data.data.audio_url);
      setSongName(data.data.title);
      let artistNames = '';
      console.log(data.data.artist)
      for (let i of data.data.artist){
        // if (i.name != undefinedundefined){}
        console.log(i);
        artistNames += i.name + ', ';
      }
      artistNames = artistNames.slice(0, -2) + '';
      setArtists(artistNames);
    })
    .catch(error => console.error(error));
  }, [selectedId, props.tokken, artists]);

  useEffect(() => {
    if (songUrl) {
      const audio = new Audio(songUrl);
      setAudio(audio);
    }
  }, [songUrl]);

  const handlePlayPause = () => {
    if (audio) {
      const cd1Element = document.querySelector(`.${styles.cd1}`);
      if (isPlaying) {
        audio.pause();
        cd1Element.style.animationPlayState = 'paused';
      } else {
        audio.play();
        cd1Element.style.animationPlayState = 'running';
      }
      setIsPlaying(!isPlaying);
    }
  }
  useEffect(() => {
    if (songUrl) {
      const audio = new Audio(songUrl);
      setAudio(audio);
  
      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [songUrl]);


  return (
    <div className={styles.body}>
      <div className={Styles.navigation}>
      <div>
        <Link to="/">
          <img src={logo} alt='brand-logo' style={{height: '25px', display: 'inline'}}></img>
        </Link>
        <span className={Styles.brandName}>SOUNDCLOUD</span>
      </div>
      <Link to = "/">
        <button className={Styles.signIn}>Back to Home</button>
      </Link>
    </div>
      <div className={styles.musicPlayer}>
       <div className={styles.container1}>
       <div className={styles.imageContainer}>
        <img src={image} alt="thumbnail"></img>
        </div>
        <div className={styles.cdContainer}>
          <div className={styles.cd}></div>
          <div className={styles.cd1}>
            <img src={image} alt="dispay" style={{height: "242px", borderRadius: "50%"}}/>
          </div>
        </div>
       </div>
        <div className={styles.controls}>
          <div>
            <p className={styles.songId}>{songName}</p>
            <p className={styles.songAuthor}>{artists}</p>
          </div>
        <button onClick={handlePlayPause}>{isPlaying ? <FontAwesomeIcon icon={faCirclePause} className={styles.buttonP}/> : <FontAwesomeIcon icon={faCirclePlay}  className={styles.buttonP}/>}</button>
        </div>
      </div>
    </div>
  )
}

export default IndividualSong;