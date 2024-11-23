
import { __ } from '@wordpress/i18n';
import { registerBlockVariation } from '@wordpress/blocks';

// Register a new variation for the Media & Text block
registerBlockVariation('core/media-text', {
	name: 'custom-media-text',
	title: __('Custom Media & Text'),
	description: __('A custom variation of the Media & Text block with predefined settings.'),
	icon: 'align-pull-left', // Icon for the variation
	attributes: {
		mediaPosition: 'left',
		verticalAlignment: 'center',
		//mediaType: 'image',
		//mediaUrl: 'https://example.com/sample-image.jpg', // Replace with your URL
		backgroundColor: 'light-gray',
	},
	innerBlocks: [
		// Predefine content inside the block
		['core/heading', { content: __('Custom Heading') }],
		['core/paragraph', { content: __('This is a custom description.') }],
	],
});
