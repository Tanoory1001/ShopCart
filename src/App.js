import React from 'react';
// component
import Store from "./Components/Store";
import ProDetail from "./Components/ProDetail";
import Navbar from "./shared/Navbar"
import Shop from "./shared/Shop"
// context
import Productprovider from "./Context/Productprovider";
import CardProvider from "./Context/CardProvider";

import {Switch , Route ,Redirect} from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <Productprovider>
        <CardProvider>
          <Navbar/>
          <Switch>
            <Route path="/details/:id" component={ProDetail}  />
            <Route path="/store" component={Store}  />
            <Route path="/shop" component={Shop}  />
            <Redirect to="/store" />
          </Switch>
        </CardProvider>
      </Productprovider>
    </div>
  );
};

export default App;