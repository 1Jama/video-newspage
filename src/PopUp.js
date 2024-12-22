import React, { useState } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap';

import './PopUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PopUp(props) {
  const [restartGame, setRestartGame] = useState();

  return props.trigger ? (
    <>
      <div className='page-mask'>
        {/* <div dangerouslySetInnerHTML={{ __html: google ? google : '' }} /> */}
        <div className='articleBoxContainer'>
          <div className='formContainer'>
            <h1>{props.articleTitle}</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: props.articleDescription
                  ? props.articleDescription
                  : '',
              }}
            />
            <iframe src={props.articleUrl}></iframe>
          </div>
          <Button
            onClick={() => {
              props.setTrigger(false);
              setRestartGame(!restartGame);
            }}
          >
            Close
          </Button>
        </div>
      </div>
    </>
  ) : (
    ''
  );
}

export default PopUp;
