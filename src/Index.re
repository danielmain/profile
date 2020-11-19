module App = {
  [@react.component]
  let make = () => {
    <div>
      <p>
        "Daniel Main profile" -> React.string
      </p>
    </div>
  }
}

ReactDOMRe.renderToElementWithId(
  <App />,
  "root",
);