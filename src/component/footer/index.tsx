import React from "react";
import Link from "@vtex/styleguide/lib/Link";
import Button from "@vtex/styleguide/lib/Button";

import { routeHistory } from "../../types";

type Props = {
    history: routeHistory
}

function Footer(props: Props) {
    const { history } = props;
    const openList = () => {
        if (history) {
            history.push("users");
        }
    }
    return (
        <div className="footer">
            <div className="footer-links">
                <Link
                    href="/"
                    mediumWeigth
                >
                    Term of Use
                </Link>
                <Link
                    href="/"
                    mediumWeigth
                >
                    Privacy Policy
                </Link>
            </div>
            <Button onClick={() => openList()}>Ongraphers List</Button>
            <span className="copyright">Ongraph @ 2020. All Rights Reserved</span>
        </div>
    );
}

export default Footer;
