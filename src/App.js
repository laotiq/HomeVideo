import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import AllDialogsContainer from "./components/Dialogs/AllDialogsContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";
import ProfileContainer from "./components/Content/ProfileContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Footer/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<ProfileContainer />}/>
                    <Route path='/profile/:id' element={<ProfileContainer />}/>
                    <Route path='/dialogs' element={<AllDialogsContainer />}/>
                    <Route path='/users' element={<UsersContainer />}/>
                </Routes>
            </div>
        </div>
    )
};

export default App;
