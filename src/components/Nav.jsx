import "../App.css";
export default function Nav () {
    return (
        <div className="nav">
            <div className="nav_top">
                <li className="menu">
                    <a><span class="material-icons-sharp">menu</span></a>
                    <ul className="vertical_menu">
                        <li><a href="#"><span class="material-icons-sharp" title="Home">home</span></a></li>
                        {/* <li><a href="#"><span class="material-icons-sharp" title="About me">person</span></a></li> */}
                        <li><a href="/Alejo_Schlegel_resume.pdf" target="_blank" title="Resume"><span class="material-icons-sharp">description</span></a></li>
                    </ul>
                </li>
                <div>
                    <h5>Alejo Schlegel</h5>
                    <a href="#" title="Coming soon!"><span class="material-icons-sharp">dark_mode</span></a>
                </div>
            </div>
            <div className="nav_bottom">
                <a href="mailto:alejofschlegel@gmail.com">
                    <span class="material-icons-sharp">mail_outline</span>
                </a>
                <a href="#">
                    <span class="material-icons-sharp">arrow_upward</span>
                </a>
            </div>
        </div>
    )
}