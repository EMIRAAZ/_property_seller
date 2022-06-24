import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/privateroute';
import Home from './pages/home';
import Buy from './pages/buy';
import Rent from './pages/rent';
import Sell from './pages/sell';
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
import AddProperty from './admin/addproperty';
import Login from './admin/login';
import PropertyView from './pages/propertyview';
import AddAgency from './admin/addagency';
import AddAgent from './admin/addagent';
import Amenity from './admin/amenity';
import News from './pages/news/english/News';
import Neighborhood from './admin/neighborhood';
import Offplan from './admin/offplan';
import TagHead from './admin/taghead';

function Router() {
  const makePrivate = (component, role = '') => (
    <PrivateRoute role={role}>{component}</PrivateRoute>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="admin">
            <Route path="login" element={<Login />} />
            <Route index element={makePrivate(<Property />, 'ADMIN')} />
            <Route
              path="agency"
              element={makePrivate(<AdminAgency />, 'ADMIN')}
            />
            <Route
              path="add-property"
              element={makePrivate(<AddProperty />, 'ADMIN')}
            />
            <Route
              path="add-property/:id"
              element={makePrivate(<AddProperty />, 'ADMIN')}
            />
            <Route path="amenity" element={makePrivate(<Amenity />, 'ADMIN')} />
            <Route
              path="amenity/:id"
              element={makePrivate(<Amenity />, 'ADMIN')}
            />
            <Route
              path="neighborhood"
              element={makePrivate(<Neighborhood />, 'ADMIN')}
            />
            <Route
              path="neighborhood/:id"
              element={makePrivate(<Neighborhood />, 'ADMIN')}
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
          </Route>
          <Route path="buy" element={<Buy />} />
          <Route path="property/:id" element={<PropertyView />} />
          <Route path="news/:id" element={<News />} />
          <Route path="rent" element={<Rent />} />
          <Route path="sell" element={<Sell />} />
          <Route path="shortterm" element={<ShortTerm />} />
          <Route path="management" element={<Management />} />
          <Route path="mortgage" element={<Mortgage />} />
          <Route path="ourteam" element={<OurTeam />} />
          <Route path="ourpartner" element={<Partner />} />
          <Route path="about" element={<About />} />
          <Route path="dailyblog" element={<Blog />} />
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
