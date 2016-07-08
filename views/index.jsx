var React = require('react');
var DefaultLayout = require('./layouts/default');

var CourseCard = React.createClass({
  render: function() {
    return (
      <div>
        <h3>{this.props.course.catalog_id}: {this.props.course.title}</h3>
        <p>{this.props.course.semester}</p>
        <p>{this.props.course.description}</p>
      </div>
    );
  }
});

var Index = React.createClass({
  render: function() {
    return (
      <DefaultLayout>
        <div>
          <h1>Note Stream</h1>
            {this.props.courses.map(function(course) {
              return <CourseCard key={course.id} course={course}/>;
            })}
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = Index;