import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { ApolloProvider, createHttpLink } from '@apollo/react-hooks';


const httpLink = createHttpLink({
  uri: 'http://localhost:4000/'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
