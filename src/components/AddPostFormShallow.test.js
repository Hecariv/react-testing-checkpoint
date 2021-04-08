
import { shallow } from "enzyme"
import AddPostForm from "./AddPostForm";




test("Shallow test of the AddForm component", () => {
    const wrapper = shallow(
            <AddPostForm.WrappedComponent />
        )

    const labels = wrapper.find("Label")
    expect(labels).toHaveLength(4)

    const button = wrapper.find("Button")
    expect(button).toBeDisabled()


})