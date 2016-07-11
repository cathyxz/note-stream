var React = require('react');
var DefaultLayout = require('./layouts/default');

var CreateButton = React.createClass({
    render: function() {
      return (
         <div id="create_button"><img src="/assets/create.svg"/></div>
      );
    }
});

var Course = React.createClass({
  
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>
          <h2>Lectures</h2>
          <CreateButton/>
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = Course;