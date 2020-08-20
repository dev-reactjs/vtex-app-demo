import React from 'react';
import Link from "@vtex/styleguide/lib/Link";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-links">
                <Link
                    href="/"
                    target="_blank"
                    mediumWeigth
                >
                    Term of Use
                </Link>
                <Link
                    href="/"
                    target="_blank"
                    mediumWeigth
                >
                    Privacy Policy
                </Link>
            </div>
            <span className="copyright">Ongraph @ 2020. All Rights Reserved</span>
        </div>
    );
}

export default Footer;
