import React from 'react';
import { Link } from "react-router-dom";
import '../css/perfil.css';

const Perfil = () => {
  return (
    <div className="perfil">
      <h1>Perfil</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 border">

            {/* <div className="card" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://i.pinimg.com/564x/27/28/de/2728dedb1641c748143b7849dd6433af.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Jhon Sanchez</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div> */}



            <div className="carta">
              <div className="carta-img">
                <img src="https://wallpaperaccess.com/full/153.jpg"></img>
              </div>
              <div className="perfil-img">
                <img src="https://64.media.tumblr.com/fca81cd0ffc891a2c39da882c6f7d161/72b889ad881e1f1c-54/s1280x1920/e6c34c7a64d94b2211c69f5ff80155039d1e9ef7.jpg"></img>
              </div>
              <div className="carta-contenido">
                <h3>Jhon Sanchez</h3>
                <p> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
              </div>
              

            </div>



          </div>

        </div>
        <div className="row">
          <div className="col-12 border">4

            <div className="row">
              <div className="col-4">
                <div className="list-group" id="list-tab" role="tablist">
                  <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
                  <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
                  <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
                  <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
                </div>
              </div>
              <div className="col-8">
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Home</div>
                  <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">

                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                  </div>
                  <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Messages</div>
                  <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">

                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                          </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                          </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>




  );
}

export default Perfil;