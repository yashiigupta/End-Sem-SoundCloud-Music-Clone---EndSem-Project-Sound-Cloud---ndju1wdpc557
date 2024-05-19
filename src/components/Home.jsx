import NavigationBar from "./navigation";
import Body from "./Body";

function Home(props){
  return(
    <div>
      <NavigationBar {...props}/>
      <Body {...props}/>
    </div>
  )
}

export default Home;