import React from 'react';
import styled from 'styled-components';

const ExpandedView = styled.div`
  width: 500px;
  background: white;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
`;


class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  onClose = e => {
    this.props.onClose(e);
  };

  render() {
    if(!this.props.show) {
      return null
    }
    return (
      <div>
        <div>{this.props.children}</div>
        <div>
          <button
            onClose={e => {
              this.onClose(e);
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;