import React, { useEffect, useState } from "react";
import SongBlock from "./songBlock";
import styles from './styles/block.module.css'
function TrendingSongs(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Trending%20songs&limit=10', {
        method: 'GET',
        headers:{
          'accept': 'application/json',
          'projectID': 'qo3cfe3k85m3',
        }
      });
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  if (data){
    console.log(data);
    return (
      <>
      <p className={styles.sTitle}>Trending Songs</p>
      <div className={styles.block}>
        {data.data.map((i, index) => {
        const artistNames = i.artist.map(artist => artist.name).join(', ');
          return (
            <SongBlock
              key={index}
              songId={i._id}
              image={i.thumbnail}
              songName={i.title}
              songArtist={artistNames}
              {...props}
            />
          );
        })}
      </div>
      </>
    );
  }
};

export default TrendingSongs;