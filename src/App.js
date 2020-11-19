import Movie from "./components/Movie/Movie"
import MovieDetails from "./components/Movie/MovieDetails"

import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/detail/:id" component={MovieDetails} exact/>

                <Route path="/" component={Movie}/>
            </Switch>
        </BrowserRouter>
    )
}
export default App;
