import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import CareerPathways from './components/CareerPathways';
import SkillsAssessment from './components/SkillsAssessment';
import JobMarketInsights from './components/JobMarketInsights';
import ProfileDashboard from './components/ProfileDashboard';
import LearningResources from './components/LearningResources';
import AIChatbot from './components/AIChatbot';
import SuccessStories from './components/SuccessStories';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/career-pathways" component={CareerPathways} />
          <Route path="/skills-assessment" component={SkillsAssessment} />
          <Route path="/job-market-insights" component={JobMarketInsights} />
          <Route path="/profile" component={ProfileDashboard} />
          <Route path="/learning-resources" component={LearningResources} />
          <Route path="/success-stories" component={SuccessStories} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <AIChatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;