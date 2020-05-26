import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Import custom styles for our application
import './App.css';

import Auth from './services/Auth';
import Navbar from "./components/layout/Navbar";
import HomePageNavBar from "./components/layout/HomePageNavBar";


// Import pages
import LoginPage from './components/auth/LoginPage';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import NewsPage from './components/news/NewsPage'
import ContactUsPage from './components/contact/ContactUsPage';
import LandingPage from './components/dashboard/LandingPage';
import UserPage from './components/UserProfile/UserPage';
import HelpRequestPage from './components/helpassistance/HelpRequestPage';
import AllRequestPage from './components/allRequests/AllRequestPage';
import ShowUserPage from './components/UserProfile/ShowUserPage';
import LiveUpdatePage from './components/LiveUpdate/LiveUpdatePage';
import Gallery from './components/gallery/GalleryPage';
import FQAPage from './components/faq/FAQPage';
import Footer from './components/footer/FooterPage';
import MyTaskPage from './components/allRequests/MyTaskPage';
import MyRequestPage from './components/allRequests/MyRequestPage';
import ViewPanelPage from './components/viewpanel/ViewPanelPage';
import InternHome from './components/internhome/InternHomePage';
import ChatPage from './components/chat/ChatPage';
import NotificationPage from "./components/notification/NotificationPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);
 
  const loggedInRouter = (
  
            <Router>
                <Navbar onLogout={() => Auth.logout()}  />

                <div className="container m-0 p-0" style={{ maxWidth:"none"}}>
                    <Switch>

                        <Route exact  path="/" >
                            <InternHome/>
                        </Route>

                        <Route  path="/users/me" >
                            <UserPage/>
                        </Route>

                        <Route path={"/users/:id"} component={ShowUserPage}>
                            
                        </Route>

                        <Route path="/aboutus">
                            <AboutPage/>
                        </Route>

                        <Route path="/contactus">
                            <ContactUsPage/>
                        </Route>                     

                        <Route path="/news">
                            <NewsPage/>
                        </Route>

                        <Route  path="/liveupdate">
                            <LiveUpdatePage/>
                        </Route>
                        
                        <Route path="/users/me">
                            <UserPage/>
                        </Route>

                        <Route path="/loggedin">
                            <LandingPage/>
                        </Route>

                        <Route path="/LandingPage">
                            <LandingPage/>
                        </Route>

                        <Route path="/logout">
                            <LoginPage/>
                        </Route>
                        
                        <Route path="/help">
                          <HelpRequestPage/>
                        </Route>

                        <Route path="/helprequest">
                          <AllRequestPage/>
                        </Route>

                        <Route path="/mytask">
                          <MyTaskPage/>
                        </Route>

                        <Route path="/myrequest">
                          <MyRequestPage/>
                        </Route>

                        <Route path="/faq">
                            <FQAPage />
                        </Route>


                        <Route path="/view/:id" 
                            component={ViewPanelPage} >
                        </Route>


                        <Route path="/chat/:id" 
                            component={ChatPage} >
                        </Route>

                        <Route path="/chat">
                            <ChatPage/>
                        </Route>

                        <Route path="/users/me">
                          <UserPage/>
                        </Route>

                        <Route path="/gallery">
                            <Gallery/>
                        </Route>

                        <Route path="/notification">
                            <NotificationPage/>
                        </Route>


                    </Switch>
                </div>
                <Footer></Footer>
            </Router>
  );
  const homePageRouter= (
  
    <Router>
        <HomePageNavBar />
        <div className="container m-0 p-0" style={{ maxWidth:"none"}}>
            <Switch>
                <Route  exact path="/">
                    <HomePage/>
                </Route>

                <Route path="/aboutus">
                    <AboutPage/>
                </Route>

                <Route path="/contactus">
                    <ContactUsPage/>
                </Route>                     

                <Route path="/news">
                    <NewsPage/>
                </Route>

                <Route path="/loggedin">
                    <LandingPage/>
                </Route>

                <Route path="/signup">
                    <LoginPage />
                </Route>
                
            </Switch>
        </div>
        <Footer></Footer>
    </Router>
);

return (loggedIn ?  loggedInRouter : homePageRouter);

}

export default App;
