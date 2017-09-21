<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package onlinemag
 */

/**
 * onlinemag_action_before_head hook
 * @since onlinemag 1.0.0
 *
 * @hooked onlinemag_set_global -  0
 * @hooked onlinemag_doctype -  10
 */
do_action( 'onlinemag_action_before_head' );?>



<head>

	<?php
	/**
	 * onlinemag_action_before_wp_head hook
	 * @since onlinemag 1.0.0
	 *
	 * @hooked onlinemag_before_wp_head -  10
	 */
	do_action( 'onlinemag_action_before_wp_head' );

	wp_head();

	/**
	 * onlinemag_action_after_wp_head hook
	 * @since onlinemag 1.0.0
	 *
	 * @hooked null
	 */
	do_action( 'onlinemag_action_after_wp_head' );
	?>

</head>

<body <?php body_class(); ?>>

<?php
/**
 * onlinemag_action_before hook
 * @since onlinemag 1.0.0
 *
 * @hooked onlinemag_page_start - 15
 */
do_action( 'onlinemag_action_before' );

/**
 * onlinemag_action_before_header hook
 * @since onlinemag 1.0.0
 *
 * @hooked onlinemag_skip_to_content - 10
 */
do_action( 'onlinemag_action_before_header' );

/**
 * onlinemag_action_header hook
 * @since onlinemag 1.0.0
 *
 * @hooked onlinemag_after_header - 10
 */
do_action( 'onlinemag_action_header' );

/**
 * onlinemag_action_nav_page_start hook
 * @since onlinemag 1.0.0
 *
 * @hooked page start and navigations - 10
 */
do_action( 'onlinemag_action_nav_page_start' );

/**
 * onlinemag_action_on_header hook
 * @since onlinemag 1.0.0
 *
 * @hooked page start and navigations - 10
 */
do_action( 'onlinemag_action_on_header' );

/**
 * onlinemag_action_before_content hook
 * @since onlinemag 1.0.0
 *
 * @hooked null
 */
do_action( 'onlinemag_action_before_content' );
?>

