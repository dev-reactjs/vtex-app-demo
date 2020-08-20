import React from "react";
import Button from "@vtex/styleguide/lib/Button";

import { routeHistory } from "../../types";

type Props = {
    history: routeHistory,
    label: string,
    route: string,
}

function Header(props: Props) {
    const { label, route, history } = props;
    return (
        <div className="header">
            <span className="logo">ONGRAPH</span>
            <div className="head-links">
                <Button
                    onClick={() => history.push(route)}
                >
                    {label}
                </Button>
                <Button
                    onClick={() => history.push("/solutions")}
                >
                    Solutions
                </Button>
            </div>
        </div>
    );
}

export default Header;
