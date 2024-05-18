import React, { useEffect, useState } from "react";
import SongBlock from "./songBlock";
import styles from './styles/block.module.css'
function RomanticSongs() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=romantic&limit=10', {
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
      <p className={styles.title}>Romantic</p>
      <div className={styles.block}>
        {data.data.map((i, index) => <SongBlock key={index} image={i.thumbnail} songName={i.title} songArtist={i.artist[0].name} />)}
      </div>
      </>
    );
  }
};

export default RomanticSongs;