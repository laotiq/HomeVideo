import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData, setUsersThunkCreator} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setUsersThunkCreator()
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setUserData, setUsersThunkCreator})(HeaderContainer)