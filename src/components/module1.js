function Module1() {
    return (
        <>
            <section id="module1" className="module">

                <div className="module-card w-20vw p-2 shadow-sm shadow-black my-2  dark:bg-slate-900 mx-4" data-aos="fade-up">
                    <div className="module-image w-full">
                        <i className="fas fa-user-md fa-3x mb-3"></i>
                        <img src="https://techemergent.com/wp-content/uploads/2023/01/Pros-and-cons-of-artificial-intelligence-in-healthcare.jpg" className="w-20vw h-20vw" alt="DISEASE DIAGNOSIS" />
                    </div>
                    <div className="module-info flex flex-col divide-y-2 divide-gray-800">
                        <h3 className="m-2 p-2 text-center ">AutoDiagnose</h3>
                        <p className="m-2 p-2 ">Automated Disease Diagnosis assists healthcare professionals in accurately diagnosing medical conditions utilizing advanced algorithms.</p>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Module1;