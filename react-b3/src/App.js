
import './App.css';
import Button from "./Components/Button"
import Bulb from './Components/bulb';

import Taj from "./Components/Taj"
import Diffrence from "./Components/Diffrence"
import Primites from './Components/Pyramits';
import ChinaWall from './Components/ChinaWall';
import Chisten from './Components/Chisten';
import Poem from './Components/map';

function App() {
  return (
    <div className="App">
          <h2>Wonders of World</h2>

    <Taj />
  
    <Diffrence img2={<img src="https://icon2.cleanpng.com/20180204/tye/kisspng-colosseum-ridge-ancient-rome-colosseum-png-photos-5a77d04d61ccb7.6782692915178015494006.jpg" width="500px" />}/>
    <ChinaWall  img1={<img src='https://icon2.cleanpng.com/20180204/lqe/kisspng-great-wall-of-china-mutianyu-new7wonders-of-the-wo-great-wall-of-china-png-pic-5a77ccad6460a9.9846552715178006214112.jpg' width="500px" />}/>
    <Primites img3={ <img src='https://e7.pngegg.com/pngimages/771/528/png-clipart-pyramid-of-giza-and-the-great-sphynx-great-sphinx-of-giza-egyptian-pyramids-great-pyramid-of-giza-ancient-egypt-egyptian-pyramids-egypt-ancient-history-thumbnail.png'  width="500px"/>} />
  
    <Chisten img5={<img src='' width="500px"/>} />
<Poem />
    </div>
  );
}
// Yarn install pakages with pararll way
// vite- 
export default App;
