import "./footerstyle.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>trippy</h1>
                    <p>choose your destination</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fab fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fab fa-behance-square"></i>
                    </a>
                    <a href="/">
                        <i className="fab fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>project</h4>
                    <a href="">changelog</a>
                    <a href="">status</a>
                    <a href="">license</a>
                    <a href="">all versions</a>
                </div>
                <div>
                    <h4>community</h4>
                    <a href="">github</a>
                    <a href="">project</a>
                    <a href="">issue</a>
                    <a href="">twitter</a>
                </div>
                <div>
                    <h4>help</h4>
                    <a href="">support</a>
                    <a href="">troubleshoot</a>
                    <a href="">contact</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
