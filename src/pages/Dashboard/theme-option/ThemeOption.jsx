

const ThemeOption = () => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-bold" aria-label="Header area" checked />
                <div role="tabpanel" className="tab-content border-base-300 p-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black font-bold">Upload Your Logo</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input-accent bg-white" />
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black font-bold">Enter Your Bio</span>
                        </label>
                        <input type="text" placeholder="full name" className="input input-bordered bg-white" />
                        <input type="text" placeholder="profession" className="input mt-2 input-bordered bg-white" />
                        <input type="url" placeholder="resume link" className="input mt-2 input-bordered bg-white" />
                    </div>
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