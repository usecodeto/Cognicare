function Features () {
    return(
        <>
            <section id="features">
        <div  className="shadow-md my-5 w-4/5 p-5 mx-auto flex flex-col justify-center items-center shadow-black ">
            <h2 data-aos="fade-up">Key Features</h2>
            <div class="row">
                <div class="col-md-4" data-aos="fade-right">
                    <div class="feature-card">
                        <i class="fas fa-cogs fa-3x mb-3"></i>
                        <h3>Advanced Technology</h3>
                        <p>Utilize cutting-edge technology to provide efficient and personalized care to patients.</p>
                    </div>
                </div>
                <div class="col-md-4" data-aos="fade-up">
                    <div class="feature-card">
                        <i class="fas fa-heartbeat fa-3x mb-3"></i>
                        <h3>Compassionate Care</h3>
                        <p>Combine advanced technology with a compassionate approach for improved patient outcomes.</p>
                    </div>
                </div>
                <div class="col-md-4" data-aos="fade-left">
                    <div class="feature-card">
                        <i class="fas fa-users fa-3x mb-3"></i>
                        <h3>Empower Professionals</h3>
                        <p>Empower healthcare professionals with intelligent tools for better decision-making.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Features;