import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {Checkbox} from "./Checkbox.js";


test("Selecting checkbox", ()=> {
  const {getByLabelText} = render(<Checkbox />);
  const checkbox = getByLabelText(/useless/);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
