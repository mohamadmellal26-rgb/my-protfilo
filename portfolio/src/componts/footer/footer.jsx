import "./footer.css";
export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#uses">Uses</a></li>
            </ul>
            <p className="copyright">
                &copy; 2026 Molla Moamad. All Rights Reserved.
            </p>
        </footer>
    );
}