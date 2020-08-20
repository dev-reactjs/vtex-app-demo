import React from 'react';
import Link from "@vtex/styleguide/lib/Link";

function Header() {
    return (
        <div className="header">
            <span className="logo">ONGRAPH</span>
            <div className="head-links">
                <Link
                    href="/users"
                    target="_blank"
                    mediumWeigth
                >
                    Employees
                </Link>
                <Link
                    href="/solutions"
                    target="_blank"
                    mediumWeigth
                >
                    Solutions
                </Link>
            </div>
        </div>
    );
}

export default Header;
