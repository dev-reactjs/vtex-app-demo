import React, { Component } from "react";
import Layout from "@vtex/styleguide/lib/Layout";

import { explore } from "../../assets";
import Filters from "./filters";
import SearchResult from "./searchResult";
import Header from "../../component/header";
import Footer from "../../component/footer";
import { OPTIONS } from "./data";
import { routeHistory } from "../../types";
import "./style.scss";

type State = {
    additionalOptions: Object,
    type: string,
}

type Props = {
    history: routeHistory
}

class Home extends Component<Props, State> {
    state = {
        additionalOptions: OPTIONS,
        type: "",
    }

    updateFilters = (e: any, field: string) => {
        const VALUE = (field === "additionalOptions") ? e : e.target.value;
        const newState = { ...this.state, [field]: VALUE };
        this.setState(newState);
    }

    render() {
        const { additionalOptions, type } = this.state;
        const { history } = this.props;
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
                        type={type}
                    />
                    <SearchResult />
                </div>
                <Footer history={history} />
            </Layout>
        );
    }
}

export default Home;
