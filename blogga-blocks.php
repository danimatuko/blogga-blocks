<?php

/**
 * Plugin Name:       Blogga Blocks
 * Description:       Customizable Gutenberg blocks for enhanced content creation.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Dani Matuko
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blogga-blocks
 *
 * @package BloggaBlocks
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}


/**
 * Registers all Gutenberg blocks in the `build` directory.
 *
 * This function scans the `build` directory for `block.json` files
 * and registers each block using its metadata. It ensures that only
 * built blocks are registered in the WordPress block editor.
 *
 * @return void
 */
function blogga_blocks_register_blocks()
{
	$blocks_dir = __DIR__ . '/build';

	// Ensure the directory exists.
	if (!is_dir($blocks_dir)) {
		return;
	}

	// Recursively scan for block.json files.
	$block_files = glob($blocks_dir . '/*/block.json');

	// Loop through and register each block.
	foreach ($block_files as $block_file) {
		register_block_type(dirname($block_file));
	}
}

add_action('init', 'blogga_blocks_register_blocks');
