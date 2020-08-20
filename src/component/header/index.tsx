import React from "react";
import Button from "@vtex/styleguide/lib/Button";

import { routeHistory } from "../../types";

type linkType = {
    label: string,
    route: string,
}

type Props = {
    history: routeHistory,
    links: Array<linkType>
}

function Header(props: Props) {
    const { links, history } = props;
    return (
        <div className="header">
            <span className="logo">ONGRAPH</span>
            <div className="head-links">
                {links && links.map((data: linkType) => (
                    <Button
                        key={data.label}
                        onClick={() => history.push(data.route)}
                    >
                        {data.label}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default Header;
