import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './style.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				allowedBlocks={ [ 'core/social-links' ] }
				template={ [
					[
						'core/social-links',
						{
							display: 'logos', // Show only logos, no text
							iconColor: '#000', // Set icons to black color
						},
					],
				] }
				templateLock="insert" // Lock the template so the structure can't be modified
			/>
		</div>
	);
}
