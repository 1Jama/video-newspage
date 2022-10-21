import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap';
import { extract } from 'article-parser';

import './PopUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PopUp(props) {
  const [restartGame, setRestartGame] = useState();

  //const input = props.articleURL;
  //const google = `<iframe width='800px' height='800px' scrolling='yes' src=${props.articleURL} sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin' frame-ancestors='self' target='_parent'></iframe>`;
  /*  useEffect(() => {
    var x = toString(input);
    extract(x)
      .then((article) => setNewArticle(article))
      .catch((err) => console.error(err));
  }, [props.articleURL]);
 */
  return props.trigger ? (
    <>
      <div className='page-mask'>
        {/* <div dangerouslySetInnerHTML={{ __html: google ? google : '' }} /> */}
        <div className='articleBoxContainer'>
          <div className='formContainer'>
            <h1>{props.articleTitle}</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: props.articleContent ? props.articleContent : '',
              }}
            />
          </div>

          <Button
            onClick={() => {
              props.setTrigger(false);
              setRestartGame(!restartGame);
            }}
          >
            Restart
          </Button>
        </div>
      </div>
    </>
  ) : (
    ''
  );
}

export default PopUp;
