import { FaTrash } from "react-icons/fa";
import { useLoaderData, Link } from "react-router-dom";
import { handleDeleteExdata } from "../../../../api/projects";


const AllexProjects = () => {

    const allexloadedData = useLoaderData();

    return (

        <div>
            {allexloadedData.length > 0 ? <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr className="text-center">
                            <th className="text-xl text-gray-800">Project title</th>
                            <th className="text-xl text-gray-800">Description</th>
                            <th className="text-xl text-gray-800">Live url</th>
                            <th className="text-xl text-gray-800">Code url</th>
                            <th className="text-xl text-gray-800">Project thumbnail</th>
                            <th className="text-xl text-gray-800">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allexloadedData.map(singleexitem => <tr key={singleexitem._id}>
                                <td className="text-base">{singleexitem.title}</td>
                                <td className="text-base">{singleexitem.description}</td>
                                <td className="text-base">{singleexitem.livelink}</td>
                                <td className="text-base">{singleexitem.codelink}</td>
                                <td className="text-base">{singleexitem.expressimage}</td>
                                <td className="flex gap-2">
                                    <Link to={`/dashboard/update-exproject/${singleexitem._id}`}><button className="btn btn-sm px-8 btn-info"> Edit</button></Link>
                                    <button onClick={() => handleDeleteExdata(singleexitem._id)} className="btn btn-sm btn-error"><FaTrash /> Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div> :

                <div className="text-center">
                    <h2 className="text-2xl my-5">No projects available. Please add some projects!</h2>
                    <Link to='/dashboard'><button className="btn btn-lg btn-primary">Add Project</button></Link>
                </div>

            }
        </div>
    );
};

export default AllexProjects;