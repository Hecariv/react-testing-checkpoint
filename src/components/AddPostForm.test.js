import React from 'react';
import renderer from "react-test-renderer"

import AddPostForm from "./AddPostForm";



test("renders the same way every time", () => {

    const tree = renderer.create(<AddPostForm.WrappedComponent/>).toJSON();
    expect(tree).toMatchSnapshot();

})