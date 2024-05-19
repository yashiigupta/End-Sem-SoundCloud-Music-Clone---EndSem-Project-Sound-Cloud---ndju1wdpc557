import styles from './styles/songBlock.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
function SongBlock({songId, image, songName, songArtist, ...props}) {
  const navigate = useNavigate();
  const handlePlay = () => {
    if(props.isLoggedin) {
      navigate(`/song/${songId}`);
     }
    else{
      navigate('/signin');
    }
  }
  return (
    <div>
      <div className={styles.imageContainer}>
        <img src={image} className={styles.songImage} alt="thumbnail"></img>
        <FontAwesomeIcon icon={faCirclePlay} className={styles.icon1} onClick={handlePlay}/>
        <FontAwesomeIcon icon={faSoundcloud} className={styles.icon2} />
      </div>
      <p id="songName" className={`${styles.songName} ${styles.truncate}`}>{songName}</p>
      <p id="songArtist" className={`${styles.songArtist} ${styles.truncate}`}>{songArtist}</p>
    </div>
  )
}

export default SongBlock;