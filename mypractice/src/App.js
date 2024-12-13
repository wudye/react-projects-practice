import FeatureFlagsGlobalState from './components/15-feature-flags/context/index.jsx';
import FeatureFlags from './components/15-feature-flags/index.jsx';
import TikTakToe from './components/14-tik-tak-toe/index.jsx';
import SearchAuto from './components/13-search-auto/index.jsx';
import GithubProfile from './components/12-github-profile/index.jsx';
import TabTest from './components/10-custom-scroll-indicator/tab-text.jsx';
import ModalTest from './components/11-custom-modal-popu/modal-test.jsx';
import LoadMoreData from './components/5-load-more-data/index.jsx';
import { menus } from './components/6-tree-view/data.js';
import TreeView from './components/6-tree-view/index.jsx';
import QrCode from './components/7-qr-code/index.jsx';
import LightDarkMode from './components/8-switch-theme/index.jsx';
import ScrollIndicator from './components/9-scroll-indicator/index.jsx';
import UseFetchTest from './components/16-useFetch/test.jsx';
import UseOutsideClickTest from './components/17-use-outside-click/index.jsx';
import UseWindowResize from './components/18-use-window-resize/index.jsx';
import UseWindowResizeTest from './components/18-use-window-resize/test.jsx';
import ScrollToTop from './components/19-scroll-to-top/index.jsx';


import ScrollParticularSection from './components/20-scroll-particular-section/index.jsx';


function App() {
  return (
    <div className="App">
      {/*      
        <Accordion /> 
        <RandomColor></RandomColor>
        <StarRating></StarRating>
      <SlideImages url={"https://picsum.photos/v2/list?"} limit={"10"} page={"1"}></SlideImages>
      <LoadMoreData />

 <TreeView menus={menus}/> 
       <QrCode/>

      <ScrollIndicator url={`https://dummyjson.com/products?limit=100`} />
             <LightDarkMode />
      <TabTest />
<ModalTest />
<GithubProfile />
<SearchAuto />
<TikTakToe />


<FeatureFlagsGlobalState>
  <FeatureFlags />
</FeatureFlagsGlobalState>
      <UseFetchTest />
            <UseOutsideClickTest />
 <UseWindowResizeTest />

<ScrollToTop />

      */}




<ScrollParticularSection />
    </div>
  )
}

export default App;
