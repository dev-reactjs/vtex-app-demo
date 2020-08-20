import React, { Component } from "react";
import Layout from "@vtex/styleguide/lib/Layout";

import { explore } from "../../assets";
import Filters from "./filters";
import SearchResult from "./searchResult";
import Header from "../../component/header";
import Footer from "../../component/footer";
import { OPTIONS, HEADER_LINKS } from "./data";
import { routeHistory } from "../../types";
import "./style.scss";

type State = {
    additionalOptions: Object,
    type: string,
    location: string,
    filters: {
        additionalOptions: Object,
        type: string,
        location: string,
    }
}

type Props = {
    history: routeHistory
}

class Home extends Component<Props, State> {
    state = {
        additionalOptions: OPTIONS,
        type: "",
        location: "",
        filters: {
            additionalOptions: {},
            type: "",
            location: "",
        }
    }

    updateFilters = (e: any, field: string) => {
        const VALUE = (field === "additionalOptions") ? e : e.target.value;
        const newState = { ...this.state, [field]: VALUE };
        this.setState(newState);
    }

    applyFilters = () => {
        const { additionalOptions, type, location } = this.state;
        this.setState({
            filters: { additionalOptions, type, location }
        });
    }

    resetFilters = () => {
        this.setState({
            filters: { additionalOptions: {}, type: "", location: "" },
            additionalOptions: OPTIONS, type: "", location: ""
        });
    }

    render() {
        const { additionalOptions, type, filters, location } = this.state;
        const { history } = this.props;
        return (
            <Layout>
                <Header
                    history={history}
                    links={HEADER_LINKS}
                />
                <div className="home-banner">
                    <img src={explore} alt="explore" />
                </div>
                <div className="content">
                    <Filters
                        updateFilters={this.updateFilters}
                        additionalOptions={additionalOptions}
                        type={type}
                        location={location}
                        applyFilters={this.applyFilters}
                        resetFilters={this.resetFilters}
                    />
                    <SearchResult filters={filters} />
                </div>
                <Footer />
            </Layout>
        );
    }
}

export default Home;
