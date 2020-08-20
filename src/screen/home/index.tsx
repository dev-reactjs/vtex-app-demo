import React, { Component } from 'react';
import Layout from "@vtex/styleguide/lib/Layout";

import { explore } from '../../assets';
import Filters from './filters';
import SearchResult from './searchResult';
import Header from '../../component/header';
import Footer from '../../component/footer';
import { OPTIONS } from './data';
import "./style.scss";

type State = {
    additionalOptions: Object
}

class Home extends Component<{}, State> {
    state = {
        additionalOptions: OPTIONS,
    }

    updateFilters = (e: any, field: string) => {
        const VALUE = (field === "additionalOptions") ? e : e.target.value;
        const newState = { ...this.state, [field]: VALUE };
        this.setState(newState);
    }

    render() {
        const { additionalOptions } = this.state;
        return (
            <Layout>
                <Header />
                <div className="home-banner">
                    <img src={explore} alt="explore" />
                </div>
                <div className="content">
                    <Filters
                        updateFilters={this.updateFilters}
                        additionalOptions={additionalOptions}
                    />
                    <SearchResult />
                </div>
                <Footer />
            </Layout>
        );
    }
}

export default Home;
