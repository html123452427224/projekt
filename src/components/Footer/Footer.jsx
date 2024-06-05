import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <h6>Socials</h6>
                <ul>
                    <li><a href="https://www.instagram.com">Instagram</a></li>
                    <li><a href="https://www.youtube.com">YouTube</a></li>
                    <li><a href="https://www.linkedin.com">LinkedIn</a></li>
                </ul>
            </div>
            <div className="footer-middle">
                <h6>Contacts</h6>
                <ul>
                    <li>contact 1</li>
                    <li>contact 2</li>
                    <li>contact 3</li>
                </ul>
            </div>
            <div className="footer-right">
                <h6>Rights</h6>
                <p>All rights reserved by Centrum Slniecko</p>
            </div>
        </div>
    )
}
