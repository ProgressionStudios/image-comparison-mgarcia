<?php
/**
 * Plugin Name:       Image Comparison Mgarcia
 * Description:       Image Comparison Block for comparing two images side-by-side
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       image-comparison-mgarcia
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function image_comparison_mgarcia_image_comparison_mgarcia_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'image_comparison_mgarcia_image_comparison_mgarcia_block_init' );


//Add new block category https://gutenberghub.com/how-to-create-custom-block-category/
add_filter( 'block_categories_all' , function( $categories ) {

    // Adding a new category.
	$categories[] = array(
		'slug'  => 'michaels-blocks',
		'title' => 'Michaels Blocks'
	);

	return $categories;
	
} );