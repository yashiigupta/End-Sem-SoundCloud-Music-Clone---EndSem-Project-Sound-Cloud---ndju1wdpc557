import TrendingSongs from "./trendingSongs";
import RomanticSongs from "./romantic";
import HappySongs from "./happy";
import SadSongs from "./sad";
import ExcitedSongs from "./excited";
import Top20Songs from "./top20ofWeek";
import Top50Songs from "./top50ofMonth";
import EvergreenMelodies from "./evergreenMelodies";
function Body(props) {
  return (
    <div style={ {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent : 'center', marginBottom: '35px'}}>
      <div style={{width : '1200px'}}>
        <TrendingSongs {...props}/>
        <Top20Songs {...props} />
        <RomanticSongs  {...props}/>
        <HappySongs  {...props}/>
        <EvergreenMelodies  {...props}/>
        <SadSongs  {...props}/>
        <Top50Songs  {...props}/>
        <ExcitedSongs  {...props}/>
      </div>
    </div>
  )
};

export default Body;