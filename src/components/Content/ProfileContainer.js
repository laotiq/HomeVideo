import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileThunkCreator, setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()}
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.profileThunkCreator(this.props.match.params.id)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    user: state.auth
})

const WhitsUrlContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile, profileThunkCreator})(WhitsUrlContainerComponent);