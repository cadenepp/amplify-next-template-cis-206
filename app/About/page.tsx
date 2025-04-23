import Link from 'next/link';
import './About.css';

export default function About() {
    return (
        <>
            <nav className="about-navbar">
                <div className="navbar-brand">SwingInfo</div>
                <Link href="/" className="navbar-link">Home</Link>
            </nav>

            <div className="about-container">

                <div className="about-card">

                    <h1 className="about-title">About</h1>

                    <div className="about-section">

                        <h2 className="about-subtitle">About This Application</h2>
                        <p className="about-text">
                            This is a stock lookup application specifically used for swing trading. 
                            Whenever you search for a stock, it returns information a swing trader would want to know - 
                            a bundled basket of insights, if you will.
                        </p>

                    </div>

                    <div className="about-section">

                        <h2 className="about-subtitle">About Me</h2>
                        <p className="about-text">
                            Hello! My name is Caden Epp. I’m a software development student at Indian Hills Community College. 
                            This is my final project for Web Scripting. Special thanks to my instructor, James Warner, for teaching me 
                            everything I know about React and AWS Amplify so far.
                        </p>

                    </div>

                </div>

            </div>

        </>
    );
}



