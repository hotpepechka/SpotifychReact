import {connect} from "react-redux";
import Users_page from "./Users_page";
import {followAC, SetUsersAC, unfollowAC} from "../../redux/Users-reducer";

let MapStateToProps = (state) => {
    return {
        Users: state.Users.Users,
        pageSize: state.Users.pageSize,
        TotalUserCount: state.Users.TotalUserCount,
        currentPage: state.Users.current
    }
}
let MapDispatchToProps = (dispath) => {
    return{
        Follow: (userId) =>{
            dispath(followAC(userId.target.value));
        },
        Unfollow: (userId) =>{
            dispath(unfollowAC(userId.target.value));
        },
        setUsers: (users) =>{
            dispath(SetUsersAC(users));
        }

    }
}


export default connect(MapStateToProps, MapDispatchToProps)(Users_page);