import {render, screen} from "@testing-library/react";
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk";
import { shallow } from "enzyme"
import AddPostForm from "./AddPostForm";

const middleton = [thunk]
const mockStore = configureMockStore(middleton)


test("Shallow test of the Nav component", () => {
    const wrapper = shallow(
            <AddPostForm.WrappedComponent />
        )

    const labels = wrapper.find("Label")
    expect(labels).toHaveLength(4)

    const button = wrapper.find("Button")
    expect(button).toBeDisabled()


})