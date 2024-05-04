import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const WpProject = () => {
    return (
        <>
            <div>
                <SectionTitle SectionTitle='Add Your WordPress project' sectionDescription='Mention your project with title, description, link & code' />
                <div className="min-h-screen">
                    <div className="card shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Project title</span>
                                </label>
                                <input type="text" className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Project description</span>
                                </label>
                                <input type="text" className="textarea textarea-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter project link</span>
                                </label>
                                <input type="url" className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Project image</span>
                                </label>
                                <input type="url" className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add your project</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WpProject;