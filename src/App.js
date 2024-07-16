import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Content/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {updateNewPost} from "./redux/State";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Footer/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/content' element={<Profile state={props.state.profilePage}
                                                                 dispatch={props.dispatch}/>}/>
                        <Route path= '/dialogs' element={<Dialogs state={props.state.dialogsPage}
                                                                  dispatch={props.dispatch}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
