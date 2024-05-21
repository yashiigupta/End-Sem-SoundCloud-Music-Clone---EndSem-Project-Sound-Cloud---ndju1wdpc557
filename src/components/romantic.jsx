import React, { useEffect, useState } from "react";
import SongBlock from "./songBlock";
import styles from './styles/block.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./nextArrow";
import PrevArrow from "./prevArrow";

function RomanticSongs(props) {
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

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  if (!data) {
    return <p>Loading...</p>;
  }

  if (data){
    console.log(data);
    return (
      <>
      <style jsx>{`
        .slick-next:before, .slick-prev:before {
          display: none !important;
        }
      `}</style>
      <p className={styles.sTitle}>Romantic</p>
      <Slider {...settings}>
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
      </Slider>
      </>
    );
  }
};
export default RomanticSongs;