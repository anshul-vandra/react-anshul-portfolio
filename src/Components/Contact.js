import React, { useState } from "react";
import { Fade, Slide } from "react-reveal";

const Contact = (props) => {

  const { data } = props
  console.log(data)
  const [state, setState] = useState({ subject: '', body: '' })

  function handleSubjectChange(e) {
    setState({ ...state, subject: e.target.value })
  }
  function handleBodyChange(e) {
    setState({ ...state, body: e.target.value })
  }


  if (!props.data)
    return null;

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{data.contactmessage}</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="eight columns">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={handleSubjectChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    onChange={handleBodyChange}
                    id="contactMessage"
                    name="contactMessage"
                  ></textarea>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <a style={{ fontSize: '2rem', border: '2px solid white', padding: '1rem' }} href={`mailto:anshulbv8@gmail.com?subject=${state.subject}&body=${state.body}`}>
                    SUBMIT
                  </a>
                </div>
              </fieldset>
            </form>
          </div>
        </Slide>

        <Slide right duration={1000}>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {data.name}
                <br />
                {data.address.street} <br />
                {data.address.city}, {data.address.state} {data.address.zip}
                <br />
                <span>{data.phone}</span>
              </p>
            </div>
          </aside>
        </Slide>
      </div>
    </section >
  );
}

export default Contact;
