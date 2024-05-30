import { useContext, useEffect, useState } from "react";
import { saveHeaderUser } from "../../../api/userdata";
import { AuthContext } from "../../../provider/AuthProvider";


const ThemeOption = () => {

    const { user } = useContext(AuthContext)
    const [headersbio, setHeaderbio] = useState([])

    const headerinfo = headersbio[0]
    console.log(headerinfo)

    const handleHeaderBio = event => {
        event.preventDefault();
        const form = event.target;
        const logo = form.logo.value;
        const facebook = form.facebook.value;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const youtube = form.youtube.value;
        const name = form.name.value;
        const profession = form.profession.value;
        const resume = form.resume.value;

        const headerinfo = {
            userName: user.email,
            logo,
            facebook,
            linkedin,
            github,
            youtube,
            name,
            profession,
            resume
        }
        console.log(headerinfo);
        saveHeaderUser(headerinfo)
    }


    useEffect(() => {
        fetch(`https://envoy-portfolio-server.onrender.com/headersbio/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setHeaderbio(data)
            })
    }, [])



    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-bold" aria-label="Header area" defaultChecked />
                <div role="tabpanel" className="tab-content border-base-300 p-6">
                    <form onSubmit={handleHeaderBio}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-bold">Upload Your Logo</span>
                            </label>
                            <input type="file" name="logo" className="file-input file-input-bordered file-input-accent bg-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-bold">Social Profile</span>
                            </label>
                            <input type="url" defaultValue={headerinfo?.facebook} name="facebook" placeholder="Facebook url" className="input input-bordered bg-white" />
                            <input type="url" defaultValue={headerinfo?.linkedin} name="linkedin" placeholder="LinkedIn url" className="input mt-2 input-bordered bg-white" />
                            <input type="url" defaultValue={headerinfo?.github} name="github" placeholder="Github url" className="input mt-2 input-bordered bg-white" />
                            <input type="url" defaultValue={headerinfo?.youtube} name="youtube" placeholder="Youtube url" className="input mt-2 input-bordered bg-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-bold">Enter Your Bio</span>
                            </label>
                            <input type="text" defaultValue={headerinfo?.userName} name="name" placeholder="full name" className="input input-bordered bg-white" />
                            <input type="text" defaultValue={headerinfo?.userProfession} name="profession" placeholder="profession" className="input mt-2 input-bordered bg-white" />
                            <input type="url" defaultValue={headerinfo?.userResume} name="resume" placeholder="resume link" className="input mt-2 input-bordered bg-white" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Save changed</button>
                        </div>
                    </form>
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-bold" aria-label="Footer area" />
                <div role="tabpanel" className="tab-content border-base-300 p-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black font-bold">Copyright text</span>
                        </label>
                        <input type="text" className="input input-bordered bg-white" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black font-bold">Social Profile</span>
                        </label>
                        <input type="url" placeholder="Facebook url" className="input input-bordered bg-white" />
                        <input type="url" placeholder="LinkedIn url" className="input mt-2 input-bordered bg-white" />
                        <input type="url" placeholder="Github url" className="input mt-2 input-bordered bg-white" />
                        <input type="url" placeholder="Youtube url" className="input mt-2 input-bordered bg-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeOption;