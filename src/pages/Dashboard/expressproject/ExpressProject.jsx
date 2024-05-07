import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { saveExpressData } from '../../../api/projects';

const ExpressProject = () => {


  //prepare express data;
  const handleExpress = event => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const livelink = form.livelink.value;
    const codelink = form.codelink.value;
    const expressimage = form.expressimage.value;

   const expressData = {
      title,
      description,
      livelink,
      codelink,
     expressimage
    }
    console.log(expressData)
    
    //save data to db;
    saveExpressData(expressData)
    form.reset();
  }



  return (
    <div>
      <SectionTitle SectionTitle='Add Your express project' sectionDescription='Mention your project with title, description, link & code'/>
      <div className="min-h-screen">
          <div className="card shadow-2xl">
            <form onSubmit={handleExpress} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Project title</span>
                </label>
                <input type="text" name='title' className="input input-bordered bg-white" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Project description</span>
                </label>
              <input type="text" name='description' className="textarea textarea-bordered bg-white" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter project Live link</span>
                </label>
                <input type="url" name='livelink' className="input input-bordered bg-white" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter project Code link</span>
                </label>
                <input type="url" name='codelink' className="input input-bordered bg-white" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Project image</span>
                </label>
              <input type="file" name='expressimage' className="file-input file-input-bordered file-input-accent bg-white" required />
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

export default ExpressProject;