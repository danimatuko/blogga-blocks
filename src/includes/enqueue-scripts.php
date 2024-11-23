<?php

/**
 * Enqueue Editor assets.
 */
function blogga_blocks_enqueue_editor_assets() {
	wp_enqueue_script(
		'blogga-blocks-editor-scripts',
		BLOGGA_BLOCKS_PLUGIN_URL . 'src/assets/js/variations.js',
		array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),
	);
}

add_action( 'enqueue_block_editor_assets', 'blogga_blocks_enqueue_editor_assets' );
