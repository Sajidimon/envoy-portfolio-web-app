import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const SeoProject = () => {
    return (
        <div>
            <SectionTitle SectionTitle='Add Your SEO project' sectionDescription='Mention your project with seo result' />
            <div className="min-h-screen">
                <div className="card shadow-2xl">
                    <form className="card-body">
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
    );
};

export default SeoProject;