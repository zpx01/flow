import React from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

export const CheckList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div>
        <Checkbox default IsUnchecked>
          {task}
        </Checkbox>
        <br />
        </div>
      ))}
    </div>
  );
};
