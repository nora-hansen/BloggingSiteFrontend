import './Footer.css'

function Footer()
{
    return(
        <footer className="footer-row">
            <div className="footer-col">
                <p>Source:</p>
                <a href="https://github.com/nora-hansen/BloggingSiteFrontend" aria-label="Source code on Github">Github</a>
            </div>
            <div className="footer-col">
                <p>Contact:</p>
                <p>Probably also Github</p>
                <p>Or on Discord @nure</p>
            </div>
        </footer>
    )
}

export default Footer;