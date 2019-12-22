import React from 'react';
import SpinnerSm from '../Layout/SpinnerSm';
import { withDataFetch } from './context';

function Trailers({ data }) {
  console.log(data.trailers);
  function renderResult() {
    if (data.trailers.list.length === 0) {
      return <p className="text-lead">No Trailers Avalable!</p>;
    }
    return data.trailers.list
      .slice(0, 5)
      .map(trailer => (
        <iframe
          key={trailer.id}
          title={trailer.name}
          width="100%"
          height="190"
          style={{ marginTop: '2rem' }}
          src={`https://www.youtube.com/embed/${trailer.key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ));
  }

  return (
    <>
      <h2 className="movie__details__body-content-title">Trailers</h2>
      {data.trailers.loading ? <SpinnerSm /> : renderResult()}
    </>
  );
}

export default withDataFetch(Trailers);
