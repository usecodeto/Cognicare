function Module2() {
    return (
        <>
            <section id="module2" class="module">

                <div className="module-card w-20vw p-2 shadow-sm shadow-black my-2  dark:bg-slate-900 mx-4" data-aos="fade-up">
                    <div className="module-image w-full">
                        <i className="fas fa-user-md fa-3x mb-3"></i>
                        <img src="https://as1.ftcdn.net/v2/jpg/02/25/00/34/500_F_225003422_3qIXn6dFasl32tGkDQ2H7RTX63wwnuyg.jpg" alt="DISEASE DIAGNOSIS" className="w-20vw h-20vw" />
                    </div>
                    <div className="module-info flex flex-col divide-y-2 divide-gray-800">
                        <h3 className="m-2 p-2 text-center ">PersonalRx</h3>
                        <p className="m-2 p-2 ">Personalized Treatment Recommender provides tailored treatment plans for patients based on their individual health data and history.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Module2;