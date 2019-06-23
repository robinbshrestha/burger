import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <div>
          <Layout> 
            <BurgerBuilder />
          </Layout>
      </div>
    );
  }
}

export default App;

//Layout component is the wrapper implementing the toolbar and burger builder
//we'll take adv of layout where the toolbar will always be there and be able to switch the page
//we could use app.js as the root component but we will use this to focus on the layout


//containers are state full components - manage state
//components are dumb and presentational components - don't manage state

// layout is to wrap other components with that specific layout