import React from "react";


const Follow = 'Follow';
const Unfollow = 'Unfollow';
const set_users = 'set_users';

let initialState = {
  Users: [
      ],
    pageSize: 5,
    TotalUserCount: 20,
    currentPage: 1
};


const UsersReducer = (state = initialState, action) => {
    switch (action.type){
        case Follow:
            return  {
                ...state,
                Users: state.Users.map(u => {
                if(u.id === action.userId){
                    return  {...u, Followed: true}
                }
                return u;
                })
            }
        case Unfollow:
            return  {...state, Users: state.Users.map(u => {
                    if(u.id === action.userId){
                        return  {...u, Followed: false}
                    }
                    return u;
                })
            }
        case set_users:{
            return {...state, Users: [...state.Users, ...action.Users]}
        }
        default:
            return state
    }
}


export const followAC = (userId) => ({type: Follow, userId})
export const unfollowAC = (userId) => ({type: Unfollow, userId})
export const SetUsersAC = (Users) => ({type: set_users, Users})

export default UsersReducer;