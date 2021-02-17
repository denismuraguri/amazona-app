import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

{/**</BrowserRouter> */}
function App() {
  return (
      <BrowserRouter >
            <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">Amazon</a>
                </div>
                <div>
                    <a href="/cart">
                        cart
                    </a>
                    <a href="/sign-in">
                        sign-in
                    </a>
                </div>

            </header>
            <main>
                <Route path="/product/:id" component={ProductScreen}>

                </Route>
                <Route path="/" component={HomeScreen} exact>

                </Route>
            </main>
            <footer className="row center">All right reserved

            </footer>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
