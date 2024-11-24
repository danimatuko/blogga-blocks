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

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define constants for paths and URLs.
define( 'BLOGGA_BLOCKS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'BLOGGA_BLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

// Include block registration functionality.
require_once BLOGGA_BLOCKS_PLUGIN_DIR . 'includes/register-blocks.php';
