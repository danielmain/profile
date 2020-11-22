module App = {
  @react.component
  let make = _ => <AppLayout />
}

ReactDOMRe.renderToElementWithId(<App />, "root")
