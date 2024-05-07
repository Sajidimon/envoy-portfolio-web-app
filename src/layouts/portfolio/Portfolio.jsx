

const Portfolio = ({ exitem }) => {

    const { title, description, livelink, codelink, expressimage } = exitem;

    return (
               
        <div className="md:ml-4">
            <div className="card p-3 shadow-xl image-full">
                <figure><img src="https://i.ibb.co/GHFF7V9/Screenshot-4.jpg" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-white">{ title}</h2>
                    <h2 className="text-white">{ description}</h2>
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

                // {/* <div className="md:ml-4">
                //     <div className="card p-3 shadow-xl image-full">
                //         <figure><img src="https://i.ibb.co/MZFJ503/Screenshot-5.jpg" /></figure>
                //         <div className="card-body text-center">
                //             <h2 className="text-white">Shopper</h2>
                //             <h2 className="text-white">Bootstrap-Ecommerce-Template</h2>
                //             <div className="card-actions justify-center">
                //                 <a href="https://sajidimon.github.io/Shopper-HTML5-Ecommerce-Template" target="_blank">
                //                     <button className="btn btn-primary btn-sm">Live link</button>
                //                 </a>
                //                 <a href="https://github.com/Sajidimon/Shopper-HTML5-Ecommerce-Template" target="_blank">
                //                     <button className="btn btn-secondary btn-sm">Code</button>
                //                 </a>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                // <div className="md:ml-4">
                //     <div className="card p-3 shadow-xl image-full">
                //         <figure><img src="https://i.ibb.co/f1cZKm4/Screenshot-10.jpg" /></figure>
                //         <div className="card-body text-center">
                //             <h2 className="text-white">Notekhata</h2>
                //             <h2 className="text-white">Online Notebook application</h2>
                //             <div className="card-actions justify-center">
                //                 <a href="https://notekhata-online-notebook.web.app" target="_blank">
                //                     <button className="btn btn-primary btn-sm">Live link</button>
                //                 </a>
                //                 <a href="https://github.com/Sajidimon/notekhata-online-note" target="_blank">
                //                     <button className="btn btn-secondary btn-sm">Code</button>
                //                 </a>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                // <div className="md:ml-4">
                //     <div className="card p-3 shadow-xl image-full">
                //         <figure><img src="https://i.ibb.co/ZdpFSwx/Screenshot-6.jpg" /></figure>
                //         <div className="card-body text-center">
                //             <h2 className="text-white">Moneybag</h2>
                //             <h2 className="text-white">Expense tracker web application</h2>
                //             <div className="card-actions justify-center">
                //                 <a href="https://moneybag-expense-tracker.web.app/register" target="_blank">
                //                     <button className="btn btn-primary btn-sm">Live link</button>
                //                 </a>
                //                 <a href="https://github.com/Sajidimon/moneybag-income-expense-tracker" target="_blank">
                //                     <button className="btn btn-secondary btn-sm">Code</button>
                //                 </a>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                // <div className="md:ml-4 md:mt-4">
                //     <div className="card p-3 shadow-xl image-full">
                //         <figure><img src="https://i.ibb.co/c2LzngL/Screenshot-7.jpg" /></figure>
                //         <div className="card-body text-center">
                //             <h2 className="text-white">Habibi</h2>
                //             <h2 className="text-white">agency-onepage-template</h2>
                //             <div className="card-actions justify-center">
                //                 <a href="https://sajidimon.github.io/agency-onepage-template" target="_blank">
                //                     <button className="btn btn-primary btn-sm">Live link</button>
                //                 </a>
                //                 <a href="https://github.com/Sajidimon/agency-onepage-template" target="_blank">
                //                     <button className="btn btn-secondary btn-sm">Code</button>
                //                 </a>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                // <div className="md:ml-4 md:my-4">
                //     <div className="card p-3 shadow-xl image-full">
                //         <figure><img src="https://i.ibb.co/LdG3qCH/Screenshot-8.jpg" /></figure>
                //         <div className="card-body text-center">
                //             <h2 className="text-white">khoborbd</h2>
                //             <h2 className="text-white">Megazine-Website template</h2>
                //             <div className="card-actions justify-center">
                //                 <a href="https://sajidimon.github.io/khoborbd--megazine-template" target="_blank">
                //                     <button className="btn btn-primary btn-sm">Live link</button>
                //                 </a>
                //                 <a href="https://github.com/Sajidimon/khoborbd--megazine-template" target="_blank">
                //                     <button className="btn btn-secondary btn-sm">Code</button>
                //                 </a>
                //             </div>
                //         </div>
                //     </div>
                // </div> */}
    )
};

export default Portfolio;