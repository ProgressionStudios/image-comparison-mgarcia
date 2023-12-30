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

function comparison_enqueue_editor_content_assets_mgarcia() {
		wp_enqueue_style( 'dashicons' );
        wp_enqueue_script(
            'compare-editor-content-mgarcia-scripts',
            plugins_url( 'assets/js/img-comparison-slider.js', __FILE__ ),
        );
}
add_action( 'enqueue_block_assets', 'comparison_enqueue_editor_content_assets_mgarcia' );


//Add new block category https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#block_categories_all
if ( ! function_exists('filter_block_categories_mgarcia')) {
	function filter_block_categories_mgarcia( $block_categories, $editor_context ) {
		if ( ! empty( $editor_context->post ) ) {
			array_push(
				$block_categories,
				array(
					'slug'  => 'michaels-blocks',
					'title' => __( 'Michaels Blocks', 'image-comparison-mgarcia' ),
					'icon'  => null,
				)
			);
		}
		return $block_categories;
	}
	add_filter( 'block_categories_all', 'filter_block_categories_mgarcia', 10, 2 );
}