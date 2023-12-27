import React from "react";

const CardActionsContext = React.createContext();

const Flyout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <CardActionsContext.Provider value={{ open, toggle }}>
      {children}
    </CardActionsContext.Provider>
  );
};

const ToggleButton = () => {
  const { toggle } = React.useContext(CardActionsContext);
  return (
    <button onClick={toggle} className="border rounded px-1 self-end">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </button>
  );
};

const List = ({ children }) => {
  const { open } = React.useContext(CardActionsContext);
  if (!open) return null;
  return (
    <ul className="flex flex-col gap-4 p-4 bg-neutral-800 rounded">
      {children}
    </ul>
  );
};

const Item = ({ label, action }) => {
  const { toggle } = React.useContext(CardActionsContext);
  return (
    <li
      className="text-yellow-300 hover:cursor-pointer"
      onClick={() => {
        action();
        toggle();
      }}
    >
      {label}
    </li>
  );
};

Flyout.Toggle = ToggleButton;
Flyout.List = List;
Flyout.Item = Item;

export default Flyout;
