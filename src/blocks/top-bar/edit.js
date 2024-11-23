import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	// Define the template for InnerBlocks using core/columns
	const TEMPLATE = [
		[
			'core/columns', // Use the columns block to create a row
			{},
			[
				[
					'core/column', // First column
					{},
					[['blogga-blocks/social-links', {}]],
				],
				[
					'core/column', // Second column
					{},
					[
						[
							'blogga-blocks/search',
							{ placeholder: 'Search...' },
						],
					],
				],
			],
		],
	];

	return (
		<div {...useBlockProps()}>
			{ /* Use InnerBlocks with a predefined columns template */}
			<InnerBlocks template={TEMPLATE} templateLock="insert" />
		</div>
	);
}
