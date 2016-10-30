import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';

import Widget from '../src/components/widget';

describe( 'Widget class', () => {
	it( 'should have proper markup', () => {
		const item = renderIntoDocument(
			<Widget />
		);

		expect( item.refs.header.textContent ).to.equal( 'Hello, World!' );
		expect( item.refs.text.textContent ).to.equal( 'I made this thing.' );
	});
});
