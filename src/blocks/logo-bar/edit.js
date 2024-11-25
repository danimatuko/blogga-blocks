import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
	const SITE_TITLE_TEMPLATE = [
		'core/site-title',
		{
			textAlign: 'center',
			style: {
				elements: {
					link: {
						color: {
							text: 'var:preset|color|bb-black',
						},
					},
				},
				typography: {
					fontSize: '5rem',
					textTransform: 'capitalize',
				},
				spacing: {
					padding: {
						top: 'var:preset|spacing|70',
						bottom: 'var:preset|spacing|70',
					},
				},
			},
			textColor: 'bb-black',
		},
	];

	// TODO: Revisit later to add functionality for toggling between Site Title and Site Logo.

	return (
		<div {...useBlockProps()}>
			<InnerBlocks template={[SITE_TITLE_TEMPLATE]} />
		</div>
	);
}
