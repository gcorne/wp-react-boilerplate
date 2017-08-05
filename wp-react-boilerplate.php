<?php

/**
 * Plugin Name: WP React Boilerplate
 * Description: Demonstration of a setup for using Webpack, React, and Sass in
 * WordPress plugins and themes
 * Author: Gregory Cornelius
 */

if ( ! class_exists( 'WP_React_Boilerplate' ) ) {

	if ( ! defined( 'WPRB_VER' ) ) {

		define( 'WPRB_VER', '1.0.0' );

		define( '_WPRB_FILE_', __FILE__ );

		define( '_WPRB_SSLUG_', 'WPRB' );
	}

	/**
	 * StartUP of Engine
	 */
	class WP_React_Boilerplate {

		/**
		 * Static property to hold our singleton instance
		 * @var null|WP_React_Boilerplate
		 */
		public static $instance = FALSE;

		/**
		 * Menù Identification
		 * @var null|string
		 */
		private $admin_page = NULL;

		/**
		 * This is the constructor
		 *
		 */
		private function __construct() {
			// back end
			add_action( 'plugins_loaded', array( $this, 'textdomain' ) );
			add_action( 'admin_enqueue_scripts', array(
				$this,
				'admin_scripts'
			) );
			add_action( 'admin_menu', array( $this, 'add_admin_page' ) );

			// front end
			add_action( 'widgets_init', array( $this, 'widgets_init' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'front_scripts' ) );
			$this->include_dependencies();
		}

		/**
		 *Include dependencies
		 *
		 * @return void
		 */
		private function include_dependencies() {
			include_once( plugin_dir_path( __FILE__ ) . '/includes/widget.php' );
		}

		/**
		 * If an instance exists, this returns it.  If not, it creates one and
		 * returns it.
		 *
		 * @return WP_React_Boilerplate
		 */
		public static function getInstance() {
			if ( ! self::$instance ) {
				self::$instance = new self;
			}

			return self::$instance;
		}

		/**
		 * Load textdomain
		 *
		 * @return void
		 */
		public function textdomain() {
			load_plugin_textdomain( _WPRB_SSLUG_, FALSE, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
		}

		/**
		 * Register the widgets
		 *
		 * @return void
		 */
		public function widgets_init() {
			register_widget( 'React_Demo_Widget' );
		}

		/**
		 * call front-end scripts
		 *
		 * @return void
		 */
		public function front_scripts() {
			wp_enqueue_script( 'wp-react-boilerplate-scripts', plugins_url( 'assets/widget.js', __FILE__ ), array(), WPRB_VER, TRUE );
			wp_enqueue_style( 'wp-react-boilerplate-styles', plugins_url( 'assets/widget.css', __FILE__ ), array(), WPRB_VER );
			wp_localize_script( 'wp-react-boilerplate-scripts', 'WPRB', array(
				'version' => WPRB_VER,
				'date'    => date( "D M j G:i:s T Y" ),
			) );
		}

		/**
		 * Admin scripts
		 *
		 * @param $hook
		 *
		 * @return void
		 */
		public function admin_scripts( $hook ) {

			if ( $this->admin_page != NULL && $this->admin_page == $hook ) {
				wp_enqueue_script( 'wp-react-boilerplate-admin-script', plugins_url( 'assets/admin.js', __FILE__ ), array(), NSWC_VER, TRUE );
				wp_enqueue_style( 'wp-react-boilerplate-admin-styles', plugins_url( 'assets/admin.css', __FILE__ ), array(), NSWC_VER );
				wp_localize_script( 'wp-react-boilerplate-admin-script', 'WPRB', array(
					'version' => WPRB_VER,
					'date'    => date( "D M j G:i:s T Y" ),
				) );
			}
		}


		/**
		 * Add Admin Menù
		 *
		 * @return void
		 */
		public function add_admin_page() {
			$this->admin_page = add_menu_page(
				__( 'WP React Component Library', _WPRB_SSLUG_ ),
				__( 'Component Library', _WPRB_SSLUG_ ),
				'read',
				'wp-react-component-library',
				array( $this, 'render_component_library' )
			);
		}

		/**
		 * Render the main div component for admin page
		 *
		 * @return void
		 */
		public function render_component_library() {
			echo '<div id="wp-react-component-library" class="wrap"></div>';
		}

	}

	// Instantiate the class
	$WP_React_Boilerplate = WP_React_Boilerplate::getInstance();
}
