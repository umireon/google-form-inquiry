export default class Root {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/">
          <IndexRoute component={ConfigContainer} />
          <Route path="notify-template" component={NotifyTemplateContainer} />
          <Route path="reply-template" component={NotifyTemplateContainer} />
        </Route>
      </Router>
    );
  }
}
