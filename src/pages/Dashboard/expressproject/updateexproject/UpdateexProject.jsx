import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { handleUpdateExdata } from '../../../../api/projects';

const UpdateexProject = () => {

    const updateexloadedData = useLoaderData();

    const { title, description, livelink, codelink, expressimage, _id } = updateexloadedData;


    const handleUpdateexProject = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const livelink = form.livelink.value;
        const codelink = form.codelink.value;
        const expressimage = form.expressimage.value;

        const updateExpressData = {
            projectId: _id,
            title,
            description,
            livelink,
            codelink,
            expressimage
        }
        handleUpdateExdata(updateExpressData)
    }


    return (
        <div>
            <SectionTitle SectionTitle='Update Your express project' sectionDescription='Update your project with title, description, link & code' />
            <div className="min-h-screen">
                <div className="card shadow-2xl">
                    <form onSubmit={handleUpdateexProject} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Project title</span>
                            </label>
                            <input type="text" defaultValue={title} name='title' className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Project description</span>
                            </label>
                            <input type="text" defaultValue={description} name='description' className="textarea textarea-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter project Live link</span>
                            </label>
                            <input type="url" defaultValue={livelink} name='livelink' className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter project Code link</span>
                            </label>
                            <input type="url" defaultValue={codelink} name='codelink' className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Project image</span>
                            </label>
                            <input type="file" name='expressimage' className="file-input file-input-bordered file-input-accent bg-white" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update your project</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateexProject;