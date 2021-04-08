import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { MemoryRouter } from "react-router-dom"
import App from "./App";
import React from "react";



const middlewares = [thunk];
const mockstore = configureMockStore(middlewares);

test('renders without crashing', () => {

  const store = mockstore({ postsRed: { posts: [] }, commentsRed: {comments: []}});


  render(
      <Provider store={store}>
        <MemoryRouter>
          <App/>
        </MemoryRouter>
      </Provider>
  );
  const linkElement = screen.getByText("Reddit Clone")
  expect(linkElement).toBeInTheDocument();
});