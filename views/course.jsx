var React = require('react');
var DefaultLayout = require('./layouts/default');



var Index = React.createClass({
  render: function() {
    return (
      <DefaultLayout>
        <div>
          <h1>{this.props.course.title}</h1>
          <h2>Lectures</h2>
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = Index;