import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";

export function withRouter(Children){
    return (props) => {
        const match = {params: useParams()}
        return<Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {
   componentDidMount() {
       let userID = this.props.match.params.id;
       axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userID,
           {
               headers: {
                   'API-KEY': 'c3763275-6111-4462-b4c9-205fba0b3504'
               }
           }).then((response) => {
           this.props.setUserProfile(response.data)
       })
   }


    render() {
    return (
        <Profile {...this.props} profile={this.props.profile}/>
    )
}}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


const WhitsUrlContainerComponent = withRouter(ProfileContainer)
export default connect (mapStateToProps, {setUserProfile})(WhitsUrlContainerComponent);