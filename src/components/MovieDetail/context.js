import React from 'react';

const DataFetchContext = React.createContext(null);

export const withDataFetch = Component => props => (
  <DataFetchContext.Consumer>
    {data => <Component {...props} data={data} />}
  </DataFetchContext.Consumer>
);

export default DataFetchContext;
