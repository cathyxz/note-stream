var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div id="header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
});

var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link href="/css/style.css" rel="stylesheet" type="text/css"></link>
        </head>
        <body>
          <Header title={this.props.title}/>
          {this.props.children}
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;