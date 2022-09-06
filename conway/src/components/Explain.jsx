import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Explain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };
  }

  toggle = () =>  {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div className="float-right">
        <Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Conway's Game of Life</ModalHeader>
          <ModalBody>
            <p>
              This is the exploding bunny version of { ' ' }
              <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">
                Conway's Game of Life
              </a>.
            </p>

            <p>
              Click around the grassy field to add/remove bunnies. Then click "see what happens":
            </p>

            <ol>
              <li>Bunnies that have 2-3 bunnies as neighbors survive.</li>
              <li>Bunnies with too many or too few neighbors explode.</li>
              <li>Empty spaces with exactly three bunnies as neighbors will spawn a new bunny.</li>
            </ol>

            <p>Still confused? This video will help!</p>

            <video
              src="https://dti6i5hz1tz1z.cloudfront.net/items/2C2r440X022y050r3E0Y/Screen%20Recording%202019-08-17%20at%2006.03%20PM.mov"
              controls
              style={ { display: 'block', height: 'auto', width: '100%'} }
            >
              Exploding-Bunnies.mov
            </video>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Got It!</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Explain;