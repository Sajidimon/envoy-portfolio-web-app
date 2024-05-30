
const Hero = ({ headersbio }) => {

    const headerinfo = headersbio[0]

    return (
        <div>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/9gQqznj/bg-1.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md text-white">
                            <p className="mb-5 text-3xl">Hi, Imon Chowdhury</p>
                            <h1 className="mb-5 text-5xl font-bold leading-tight">Full Stack Web Developer</h1>
                            <a href={headerinfo?.userResume } target="_blank"><button className="btn btn-secondary">My Resume</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;