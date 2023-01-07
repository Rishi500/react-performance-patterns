import React from "react";
export default function ImportOnInteraction() {
  const [anotherComponent, setAnotherComponent] = React.useState(null);
  const onLoadAnotherComponent = () => {
    import("./AnotherComponent")
      .then((module) => module.default)
      .then((AnotherComponent) => {
        setAnotherComponent(React.createElement(AnotherComponent));
      });
  };
  return (
    <>
      <div>Hello world</div>
      <button onClick={onLoadAnotherComponent}>Load another component</button>
      {anotherComponent}
    </>
  );
}
