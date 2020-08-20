import React from 'react';
import Link from "@vtex/styleguide/lib/Link";
import Button from "@vtex/styleguide/lib/Button";

function Header() {
    return (
        <div className="header">
            <span className="logo">ONGRAPH</span>
            <div className="head-links">
                <Link
                    href="/Solutions"
                    target="_blank"
                    mediumWeigth
                >
                    Solutions
                </Link>
                <Button variation="danger">Login</Button>
            </div>
        </div>
    );
}

export default Header;
