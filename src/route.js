import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/privateroute';
import Home from './pages/home';
import Buy from './pages/buy';
import Rent from './pages/rent';
import NeighBourhood from './pages/neighbourhood';
import WebOffplan from './pages/offplan';
import WebOffplanProjects from './pages/offplanprojects';
import ShortTerm from './pages/shortterm';
import Management from './pages/management';
import Mortgage from './pages/mortgage';
import { Preview } from './preview';
import OurTeam from './pages/ourteam';
import AboutFounder from './pages/aboutfounder';
import About from './pages/about';
import Partner from './pages/ourpartners';
import Policy from './pages/privacypolicy';
import Terms from './pages/terms';
import Career from './pages/career';
import Blog from './pages/dailyblog';
import Property from './admin/property';
import AdminAgency from './admin/agency';
import AdminAdvertise from './admin/listadvertiseclient';
import AddProperty from './admin/addproperty';
import Advertise from './pages/advertise/english/Advertise';
import Login from './admin/login';
import PropertyView from './pages/propertyview';
import AddAgency from './admin/addagency';
import AddAgent from './admin/addagent';
import Amenity from './admin/amenity';
import News from './pages/news';
import AdminNeighborhood from './admin/neighborhood';
import PropertyList from './pages/propertylist';
import Luxuary from './pages/luxuary/english';
import Offplan from './admin/offplan';
import TagHead from './admin/taghead';
import TagLine from './admin/tagline';
import AdminNews from './admin/news';
import AdminBlog from './admin/blog';
import Topstory from './pages/topstory';
import ListProperty from './pages/listproperty';
import AddOffplan from './admin/addoffplan';
import PropertySearchView from './pages/propertysearchview';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import AgentDashboard from './adminAgency/dashboard';
import AgentAddAgent from './adminAgency/addagent';
import AgentList from './adminAgency/listAgent';
import AgencyLogin from './adminAgency/login';
import AgentAddProperty from './adminAgency/addproperty';
import Nft from './pages/nft/english';
import OffplanViewNew from './pages/offplanviewnew/english';
import City from './admin/city/english';
import India from './pages/india';
import AllProperties from './pages/allProperties/AllProperties';
function Router() {
  const makePrivate = (component, role = '') => (
    <PrivateRoute role={role}>{component}</PrivateRoute>
  );
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="india" element={<India />} />
          <Route path="agency">
            <Route exact path="login" element={<AgencyLogin />} />
            <Route index element={makePrivate(<AgentDashboard />, 'AGENCY')} />
            <Route
              path="add-agent"
              element={makePrivate(<AgentAddAgent />, 'AGENCY')}
            />
            <Route
              path="add-agent/:id"
              element={makePrivate(<AgentAddAgent />, 'AGENCY')}
            />
            <Route
              path="list-agent"
              element={makePrivate(<AgentList />, 'AGENCY')}
            />
            <Route
              path="add-property"
              element={makePrivate(<AgentAddProperty />, 'AGENCY')}
            />
            <Route
              path="add-property/:id"
              element={makePrivate(<AgentAddProperty />, 'AGENCY')}
            />
          </Route>
          <Route path="admin">
            <Route path="login" element={<Login />} />
            <Route index element={makePrivate(<Property />, 'ADMIN')} />
            <Route
              path="agency"
              element={makePrivate(<AdminAgency />, 'ADMIN')}
            />
            <Route
              path="advertise-with-us"
              element={makePrivate(<AdminAdvertise />, 'ADMIN')}
            />
            <Route
              path="add-property"
              element={makePrivate(<AddProperty />, 'ADMIN')}
            />
            <Route
              path="add-property/:id"
              element={makePrivate(<AddProperty />, 'ADMIN')}
            />
            <Route
              path="add-offplan"
              element={makePrivate(<AddOffplan />, 'ADMIN')}
            />
            <Route
              path="add-offplan/:id"
              element={makePrivate(<AddOffplan />, 'ADMIN')}
            />
            <Route path="amenity" element={makePrivate(<Amenity />, 'ADMIN')} />
            <Route
              path="amenity/:id"
              element={makePrivate(<Amenity />, 'ADMIN')}
            />
            <Route
              path="neighborhood"
              element={makePrivate(<AdminNeighborhood />, 'ADMIN')}
            />
            <Route
              path="neighborhood/:id"
              element={makePrivate(<AdminNeighborhood />, 'ADMIN')}
            />
            <Route path="offplan" element={makePrivate(<Offplan />, 'ADMIN')} />
            <Route
              path="add-agent"
              element={makePrivate(<AddAgent />, 'ADMIN')}
            />
            <Route
              path="add-agent/:id"
              element={makePrivate(<AddAgent />, 'ADMIN')}
            />
            <Route
              path="add-agency"
              element={makePrivate(<AddAgency />, 'ADMIN')}
            />
            <Route
              path="add-agency/:id"
              element={makePrivate(<AddAgency />, 'ADMIN')}
            />
            <Route path="taghead" element={makePrivate(<TagHead />, 'ADMIN')} />
            <Route
              path="taghead/:id"
              element={makePrivate(<TagHead />, 'ADMIN')}
            />
            <Route path="tagline" element={makePrivate(<TagLine />, 'ADMIN')} />
            <Route
              path="tagline/:id"
              element={makePrivate(<TagLine />, 'ADMIN')}
            />
            {/* <Route
              path="newstopics"
              element={makePrivate(<NewsTopics />, 'ADMIN')}
            />
            <Route
              path="newstopics/:id"
              element={makePrivate(<NewsTopics />, 'ADMIN')}
            /> */}
            <Route path="news" element={makePrivate(<AdminNews />, 'ADMIN')} />
            <Route
              path="news/:id"
              element={makePrivate(<AdminNews />, 'ADMIN')}
            />
            <Route path="blog" element={makePrivate(<AdminBlog />, 'ADMIN')} />
            <Route
              path="blog/:id"
              element={makePrivate(<AdminBlog />, 'ADMIN')}
            />{' '}
            <Route path="city" element={makePrivate(<City />, 'ADMIN')} />
            <Route path="city/:id" element={makePrivate(<City />, 'ADMIN')} />
          </Route>

          <Route path="buy" element={<Buy />} />
          <Route path="all-properties" element={<AllProperties />} />
          <Route path="property-search" element={<PropertySearchView />} />
          <Route path="property/:id" element={<PropertyView />} />
          <Route path="news" element={<Topstory />} />
          <Route path="news/:id" element={<News />} />
          <Route path="rent" element={<Rent />} />
          <Route path="luxury-property" element={<Luxuary />} />
          <Route path="luxury-property/:id" element={<Luxuary />} />
          <Route path="neighbourhood" element={<NeighBourhood />} />
          <Route path="sell" element={<Advertise />} />
          <Route path="off-plan" element={<WebOffplan />} />
          <Route path="off-plan/:id" element={<PropertyView />} />
          <Route path="offplan-projects" element={<WebOffplanProjects />} />
          <Route path="offplan-projects/:id" element={<OffplanViewNew />} />
          <Route path="shortterm" element={<ShortTerm />} />
          <Route path="management" element={<Management />} />
          <Route path="management" element={<PropertyList />} />
          <Route path="management" element={<Luxuary />} />
          <Route path="mortgage" element={<Mortgage />} />
          <Route path="ourteam" element={<OurTeam />} />
          <Route path="ourpartner" element={<Partner />} />
          <Route path="about" element={<About />} />
          <Route path="dailyblog" element={<Blog />} />
          <Route path="listproperty/:id" element={<ListProperty />} />
          <Route path="dailyblog/:id" element={<Blog />} />
          <Route path="viewblog/:id" element={<Nft />} />
          <Route path="privacypolicy" element={<Policy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="career" element={<Career />} />
          <Route path="aboutfounder" element={<AboutFounder />} />
          <Route path="preview" element={<Preview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
