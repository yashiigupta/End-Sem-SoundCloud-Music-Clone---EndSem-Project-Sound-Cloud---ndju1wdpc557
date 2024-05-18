import styles from './styles/songBlock.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

function SongBlock({image, songName, songArtist}) {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img src={image} className={styles.songImage} alt="thumbnail"></img>
        <FontAwesomeIcon icon={faCirclePlay} className={styles.icon} />
      </div>
      <p id="songName" className={styles.songName}>{songName}</p>
      <p id="songArtist" className={styles.songArtist}>{songArtist}</p>
    </div>
  )
}

export default SongBlock;