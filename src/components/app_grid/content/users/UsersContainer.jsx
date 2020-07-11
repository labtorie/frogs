import {connect} from "react-redux";
import Users from "./Users";
import React from "react";
import {searchUsers, selectPage, setUsers, toggleFetching, updateSearchText} from "../../../../redux/usersPageReducer";
import {usersAPI} from "../../../../API/API";

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true)
        usersAPI.fetchUsers(this.props.currentPage, this.props.pageSize, this.props.searchInput).then(
            (response) => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.items, response.totalCount, this.props.currentPage)
            }
        )
    }

    onPageChanged = (page) => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        this.props.selectPage(page)
        this.props.toggleFetching(true)

        usersAPI.fetchUsers(page, this.props.pageSize, this.props.searchInput)
            .then(
                (response) => {
                    this.props.toggleFetching(false)
                    this.props.setUsers(response.items, response.totalCount, page)

                }
            )
    }

    onSearchInputUpdate = (event) => {
        this.props.updateSearchText(event.target.value)
    }

    onSearchUsers = () => {
        this.props.toggleFetching(true)
        this.props.searchUsers()

        usersAPI.fetchUsers(1, this.props.pageSize, this.props.searchInput).then(
            (response) => {
                this.props.toggleFetching(false)
                if (response.items.length === 0) alert("Ничего не найдено") //TODO normal message
                this.props.setUsers(response.items, response.totalCount, 1)
            }
        )
    }

    render() {
        return <Users usersCount={this.props.usersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onSearchUsers={this.onSearchUsers}
                      onSearchInputUpdate={this.onSearchInputUpdate}
                      searchInput={this.props.searchInput}
                      isFetching={this.props.isFetching}
                      selectPage={this.onPageChanged}/>
    }
}


const mapStateToProps = (state) => {
    return {
        usersCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        users: state.usersPage.items,
        searchInput: state.usersPage.searchString,
        isFetching: state.usersPage.isFetching
    }
}


const UsersContainer = connect(mapStateToProps,
    {
        selectPage,
        setUsers,
        updateSearchText,
        searchUsers,
        toggleFetching
    }
)(UsersContainerAPI)

export default UsersContainer