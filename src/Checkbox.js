import React, {useReducer} from "react";


export function Checkbox (){
  const [checked, switcher] = useReducer(
    (checked) => !checked,
    false
  );
  return (
    <>
    This module is <label htmlFor="checkbox">{checked ? "useful" : "useless" } </label>
        <input id="checkbox" type="checkbox" value={checked} onChange={switcher} />
    </>

  );
}
