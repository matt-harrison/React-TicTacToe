import React from 'react';

class Square extends React.Component {
  render() {
    let css = 'square';

    if (this.props.isHighlighted) {
      css += ' bgGreen';
    }

    return (
      <div
      className={css}
      onClick={() => {this.props.onClick(this.props.id)}}
      value={this.props.value}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Square;
