<?php

/**
 * Plugin Name: WP React Boilerplate
 * Description: Demonstration of a setup for using Webpack, React, and Sass in
 * WordPress plugins and themes
 * Author: Gregory Cornelius
 */

include dirname( __FILE__ ) . '/widget.php';

class WP_React_Boilerplate {

	static function widgets_init() {
		register_widget( 'React_Demo_Widget' );
	}

	static function enqueue_scripts() {
		wp_enqueue_script( 'wp-react-boilerplate', plugins_url( 'build/script.js', __FILE__ ), array(), 'v0.0.1', true );
	}

}

add_action( 'widgets_init', array( 'WP_React_Boilerplate', 'widgets_init' ) );
add_action( 'wp_enqueue_scripts', array( 'WP_React_Boilerplate', 'enqueue_scripts' ) );
