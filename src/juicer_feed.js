import React, { Component } from 'react';

class JuicerFeed extends Component {
  componentDidMount () {
    if (!document.querySelector('.juicer-io-resources-wrapper')) {
      this.appendResourcesWrapper();
    }
  }

  appendResourcesWrapper() {
    const juicerResourcesWrapper = document.createElement('div');
    juicerResourcesWrapper.setAttribute('class', 'juicer-io-resources-wrapper');

    const script = document.createElement('script');
    script.src = 'https://assets.juicer.io/embed.js';
    script.type = 'text/javascript';

    const link = document.createElement('link');
    link.media = 'all';
    link.rel = 'stylesheet'
    link.href = 'https://assets.juicer.io/embed.css';
    link.type = 'text/css';

    juicerResourcesWrapper.appendChild(script);
    juicerResourcesWrapper.appendChild(link);

    document.body.appendChild(juicerResourcesWrapper);
  }

  render() {
    return (
      <ul className='juicer-feed' data-feed-id={this.props.feedId} />
    );
  }
}

export default JuicerFeed;
