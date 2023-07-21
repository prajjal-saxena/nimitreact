import IndexPage from "./components/indexPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbarr from './components/Navbarrr';
import Footer from "./Footer";
import Nimitteam from "./Nimitteam";
import Products from "./Products";
import Hiring from "./Hiring";
import SoluHardware from "./SoluHardware";
import SoluNetwork from "./SoluNetwork";
import SoluLicensing from "./SoluLicensing";
import SoluBackup from "./SoluBackup";
import SoluVideo from "./SoluVideo";
import ServInfrastructure from "./ServInfrastructure";
import ServData from "./ServData";
import LifeNimit from "./LifeNimit";
import Holi from "./Holi";
import ItSecurity from "./ItSecurity";
import Googlworkspace from "./Googlworkspace";
import Office365 from "./Office365";
import O365migration from "./O365migration";
import Zohoo from "./Zohoo";
import Dropbox from "./dropbox";
import Microsoftazure from "./Microsoftazure";
import Acronis from "./Acronis";
import AtempoLiveNavigator from "./AtempoLiveNavigator";
import Webdev from "./Webdev";
import Contactus from './contactus';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarr/>
        <Routes>
           <Route exact path='/' element={<IndexPage/>}/>

           <Route exact path='/meet-our-team' element={<Nimitteam/>}/>
           <Route exact path= '/products/:id' element={<Products/>} />
           <Route exact path='/hiring' element={<Hiring/>} />
           <Route exact path='/contact' element={<Contactus/>}/>
              <Route exact path="/hardware" element={<SoluHardware/>} />
              <Route exact path="/network-security" element={<SoluNetwork/>} />
              <Route exact path="/software-licensing" element={<SoluLicensing/>} />
              <Route exact path="/backup-recovery" element={<SoluBackup/>}/>
              <Route exact path="/video-conference" element={<SoluVideo/>} />

              <Route exact path="/it-infrastructure" element={<ServInfrastructure/>}/>
              <Route exact path="/data-migration" element={<ServData/>}/>

              <Route exact path="/life-at-nimit" element={<LifeNimit/>}/>
              <Route exact path="/celebration/:id" element={<Holi/>}/>
           <Route exact path="/it-securities" element={<ItSecurity/>}/>
           <Route exact path="/google-workspace" element={<Googlworkspace/>}/>
           <Route exact path="/office-365" element={<Office365/>}/>
           <Route exact path = "/o365-migration" element={<O365migration/>}/>
           <Route exact path="/zoho" element={<Zohoo/>} />

           <Route exact path="/dropbox" element={<Dropbox/>} />
           <Route exact path="/microsoft-azure" element={<Microsoftazure/>} />
           <Route exact path="/acronis" element={<Acronis/>} />
           <Route exact path="/atempo-live-navigator" element={<AtempoLiveNavigator/>}/>

           <Route exact path="/web-development" element={<Webdev/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
