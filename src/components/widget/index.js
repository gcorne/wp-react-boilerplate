import React from 'react';

require( './style.scss' );

export default React.createClass({

	displayName: 'Widget',

	render() {
		return (
			<div className="react-boilerplate-widget">
				<h3 ref="header">Hello, World!</h3>
				<p ref="text">I made this thing.</p>
			</div>
		);
	}
});
