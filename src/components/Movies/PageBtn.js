import React from 'react';
import { withRouter } from 'react-router-dom';

class PageBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: false
    };
  }

  componentDidMount() {
    if (this.props.currentPg === '1') {
      this.setState((state, props) => ({
        first: true
      }));
    }
  }

  render() {
    const { currentPg, history, currentGenre, mediaType } = this.props;
    function handleClick(page) {
      history.push(`/${mediaType}/${currentGenre}/page=${page}`);
    }
    return (
      <div className="section__movie__list-btn">
        <button
          onClick={() => handleClick(parseInt(currentPg) - 1)}
          disabled={this.state.first}
          className="btn-secondary"
        >
          <p>Page {currentPg === '1' ? '' : parseInt(currentPg) - 1}</p>
          <div className="btn-secondary-overlay" />
        </button>
        <button
          className="btn-primary"
          onClick={() => handleClick(parseInt(currentPg) + 1)}
        >
          <p>Page {parseInt(currentPg) + 1}</p>
          <div className="btn-primary-overlay" />
        </button>
      </div>
    );
  }
}

export default withRouter(PageBtn);
