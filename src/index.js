var React = require( 'react' ),
	ReactDOM = require( 'react-dom' );

require( './style.scss' );

var Component = React.createClass({
	render: function() {
		return (
			<div className="react-boilerplate-widget">
				<h3>Hello, World!</h3>
				<p>I made this thing.</p>
			</div>
		);
	}
});

var widgets = document.querySelectorAll( 'div.react-demo-wrapper' );
widgets = Array.prototype.slice.call( widgets );

widgets.forEach( function( wrapper ) {
	ReactDOM.render(
		<Component />,
		wrapper
	);
} );
