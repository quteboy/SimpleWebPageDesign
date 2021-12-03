import Header from "./components/Header/Header";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./theme";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import GamingPage from "./components/GamingPage/GamingPage";
import ModulePage from "./components/ModulePage/ModulePage";
import PlatformPage from "./components/PlatformPage/PlatformPage";
import Services from "./components/Services/Services";
import PeoplePage from "./components/PeoplePage/PeoplePage";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <ThemeProvider theme={theme}>

            <Header/>
            <LandingPage/>
            <GamingPage/>
            <ModulePage/>
            <PlatformPage/>
                {/*<Services/>*/}
            <PeoplePage/>
            <GetStarted/>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;
