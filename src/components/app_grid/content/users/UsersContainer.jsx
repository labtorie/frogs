import {connect} from "react-redux";
import Users from "./Users";
import React from "react";
import {
    fetchUsers,
    updateSearchText
} from "../../../../redux/usersPageReducer";



class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.fetchUsers(this.props.currentPage, this.props.pageSize, this.props.searchInput)
    }

    onPageChanged = (page) => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        this.props.fetchUsers(page, this.props.pageSize, this.props.searchInput)
    }

    onSearchInputUpdate = (event) => {
        this.props.updateSearchText(event.target.value)
    }

    onSearchUsers = () => {
        this.props.fetchUsers(1, this.props.pageSize, this.props.searchInput)}

    render() {
        return <Users usersCount={this.props.usersCount} //todo pack em
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
        updateSearchText,
        fetchUsers
    }
)(UsersContainerAPI)

export default UsersContainer