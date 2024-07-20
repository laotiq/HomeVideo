import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Content/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {updateNewPost} from "./redux/Store";
import AllDialogsContainer from "./components/Dialogs/AllDialogsContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Footer/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/content' element={<Profile />}/>
                    <Route path='/dialogs' element={<AllDialogsContainer />}/>
                </Routes>
            </div>
        </div>
    )
};

export default App;
