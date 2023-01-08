import React from "react";
import LoadableVisibility from "react-loadable-visibility/react-loadable";
const AnotherComponent = LoadableVisibility({
  loader: () => import("./AnotherComponent"),
  loading: () => <p id="loading">Loading..</p>,
});

export default function ImportOnVisibility() {
  return (
    <>
      <>
        You might not see another component initially. Its chunk will be loaded
        as you scroll. Use fast 3G as network to observe the changes
      </>
      {Array(100)
        .fill(null)
        .map((_) => {
          return (
            <div style={{ padding: 10 }}>This is some dummy component. </div>
          );
        })}
      <AnotherComponent />
    </>
  );
}
