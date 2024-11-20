import { InnerBlocks, useBlockProps } from '@wordpress/block-editor'
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	const blockProps = useBlockProps({ className: 'bb-search-wrapper' });

	return (
		<div {...blockProps}>
			<InnerBlocks
				allowedBlocks={['core/search']}
				template={[['core/search']]}
				templateLock="all" // Prevent users from removing the search block
			/>
		</div>
	);
}
