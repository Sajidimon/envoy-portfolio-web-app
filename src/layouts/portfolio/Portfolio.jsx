

const Portfolio = ({ exitem }) => {

    const { title, description, livelink, codelink } = exitem;

    return (
               
        <div className="md:ml-4">
            <div className="card bg-info p-3 m-2 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-black font-serif font-bold text-base">{ title}</h2>
                    <h2 className="text-black font-serif font-bold text-base">{ description}</h2>
                    <div className="card-actions justify-center">
                        <a href={ livelink} target="_blank">
                            <button className="btn btn-primary btn-sm">Live link</button>
                        </a>
                        <a href={ codelink} target="_blank">
                            <button className="btn btn-secondary btn-sm">Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;