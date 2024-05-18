import TrendingSongs from "./trendingSongs";
import RomanticSongs from "./romantic";
import HappySongs from "./happy";
import SadSongs from "./sad";
import ExcitedSongs from "./excited";
import Top20Songs from "./top20ofWeek";
import Top50Songs from "./top50ofMonth";
import EvergreenMelodies from "./evergreenMelodies";
function Body() {
  return (
    <div style={ {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent : 'center', marginBottom: '35px'}}>
      <div style={{width : '1200px'}}>
        <TrendingSongs />
        <Top20Songs />
        <RomanticSongs />
        <HappySongs />
        <EvergreenMelodies />
        <SadSongs />
        <Top50Songs />
        <ExcitedSongs />
      </div>
    </div>
  )
};

export default Body;