import Layout from "./components/UI/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import Register from "./containers/Register/Register";
import Main from "./containers/Main/Main";
import Albums from "./containers/Albums/Albums";
import Tracks from "./containers/Tracks/Tracks";

const App = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={Main}/>
            {/*<Route path="/products/new" component={NewProduct}/>*/}
            {/*<Route path="/products/:id" component={Product}/>*/}
            <Route path="/albums" component={Albums}/>
            <Route path="/tracks" component={Tracks}/>
            <Route path="/register" component={Register}/>
        </Switch>
    </Layout>
);

export default App;
