<?php

/**
 * Registers all Gutenberg blocks in the blocks directory.
 *
 * This function scans the blocks directory for block.json files
 * and registers each block using its metadata.
 *
 * @return void
 */
function blogga_blocks_register_blocks() {
	$blocks_dir = BLOGGA_BLOCKS_PLUGIN_DIR . 'build/blocks';

	// Ensure the directory exists.
	if ( ! is_dir( $blocks_dir ) ) {
		return;
	}

	// Recursively scan for block.json files in all subdirectories.
	$block_files = glob( $blocks_dir . '/*/block.json' );

	// Loop through and register each block.
	foreach ( $block_files as $block_file ) {
		register_block_type( dirname( $block_file ) );
	}
}

add_action( 'init', 'blogga_blocks_register_blocks' );
