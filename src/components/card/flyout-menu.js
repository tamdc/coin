import React from "react";
import Flyout from "./flyout";

const FlyoutMenu = () => {
  return (
    <div className="absolute right-4 top-4 flex items-end flex-col gap-2">
      <Flyout>
        <Flyout.Toggle />
        <Flyout.List>
          <Flyout.Item label="Edit" action={() => console.log("edit this")} />
          <Flyout.Item
            label="Delete"
            action={() => console.log("delete this")}
          />
        </Flyout.List>
      </Flyout>
    </div>
  );
};

export default FlyoutMenu;