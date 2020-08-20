import React, { Component } from 'react';
import Table from '@vtex/styleguide/lib/Table'
import Layout from "@vtex/styleguide/lib/Layout";
import { connect } from 'react-redux';

import { explore } from '../../assets';
import Header from '../../component/header';
import Footer from '../../component/footer';
import { fetchUsers } from '../../model/users/actions';
import "./style.scss";
import { DefaultUserSchema } from './data';
import { storeType, routeHistory } from "../../types";

type Props = {
    fetchUsers: Function,
    usersReducer: {
        users: [Object]
        loading: boolean,
        error: string,
    },
    history: routeHistory
}

class Users extends Component<Props> {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { usersReducer, history } = this.props;
        const { users, loading, error } = usersReducer || {};
        return (
            <Layout>
                <Header />
                <div className="home-banner">
                    <img src={explore} alt="explore" />
                </div>
                <div className="content">
                    <h2>Ongraphers List</h2>
                    <hr />
                    <span>{error}</span>
                    <br />
                    <Table
                        schema={DefaultUserSchema}
                        items={users}
                        density="high"
                        onRowClick={() => {}}
                        containerHeight={400}
                        loading={loading}
                    />
                </div>
                <Footer history={history} />
            </Layout>
        );
    }
}

const mapStateToProps = (store: storeType) => {
    return({
      usersReducer: store.usersReducer,
    })
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchUsers: () => {dispatch(fetchUsers());},
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
