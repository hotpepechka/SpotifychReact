import React from "react";
import axios from "axios";
import UserImage from '../../assets/images/UserImage1.png';
import './Users_page.css'



class Users_page extends React.Component {

        componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
                this.props.setUsers(response.data.items)
            });
        }

    Users_page = (props) => {


}


    render() {

            let PagesCount = Math.ceil(this.props.TotalUserCount / this.props.pageSize)

            let pages = [];
            for(let i=1; i <= PagesCount; i++ ){
                pages.push(i);
            }

        return(
            <body>
            {pages.map(p =>{
                return <span >{p}</span>
            })}
            {this.props.Users.map(u => <div key={u.id} className='UsersForm'>
            <span>
                <div className='Avatar'>
                    <img src={u.photos.small != null ? u.photos.small : UserImage} className='UserPhoto'/>
                </div>
                <div className='button_follow'>
                    {u.Followed
                        ? <button onClick={() => {this.props.Follow(u.id)}}>Follow</button>
                        : <button onClick={() => {this.props.Unfollow(u.id)}}>Unfollow</button>}

                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                </span>
                <span>

                </span>
            </span>
            </div>)
            }
            </body>
        )
    }
    }


export default Users_page;