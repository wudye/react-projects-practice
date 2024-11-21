
import RandomColor from './components/2-random-color/index.jsx';
import StarRating from './components/3-star-rating/index.jsx';
import SlideImages from './components/4-slide-images/index.jsx';
import Accordion from './components/accordian/index.jsx';

function App() {
  return (
    <div className="App">
      {/*      
        <Accordion /> 
        <RandomColor></RandomColor>
        <StarRating></StarRating>


      */}
      <SlideImages url={"https://picsum.photos/v2/list?"} limit={"10"} page={"1"}></SlideImages>

      
    </div>
  )
}

export default App;
