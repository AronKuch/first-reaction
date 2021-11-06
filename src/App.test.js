import {render} from "@testing-library/react";
import React from "react";
import App from "./App.js";

test("renders an H1", () =>{
  const {getByText} = render(<App/>);
  const h1 = getByText(/Hello Chucktown/);
  expect(h1).toHaveTextContent("Hello Chucktown");
});
