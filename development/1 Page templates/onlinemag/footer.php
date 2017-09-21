<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 *
 * @package eVision themes
 * @subpackage onlinemag
 * @since onlinemag 1.0.0
 */


/**
 * onlinemag_action_after_content hook
 * @since onlinemag 1.0.0
 *
 * @hooked null
 */
do_action( 'onlinemag_action_after_content' );

/**
 * onlinemag_action_before_footer hook
 * @since onlinemag 1.0.0
 *
 * @hooked onlinemag_before_footer - 10
 */
do_action( 'onlinemag_action_before_footer' );

/**
 * onlinemag_action_widget_before_footer hook
 * @since onlinemag 1.0.0
 *
 * @hooked onlinemag_widget_before_footer - 10
 */
do_action( 'onlinemag_action_widget_before_footer' );

/**
 * onlinemag_action_footer hook
 * @since onlinemag 1.0.0
 *
 * @hooked onlinemag_footer - 10
 */
do_action( 'onlinemag_action_footer' );

/**
 * onlinemag_action_after_footer hook
 * @since onlinemag 1.0.0
 *
 * @hooked null
 */
do_action( 'onlinemag_action_after_footer' );

/**
 * onlinemag_action_after hook
 * @since onlinemag 1.0.0
 *
 * @hooked onlinemag_page_end - 10
 */
do_action( 'onlinemag_action_after' );
?>
<?php wp_footer(); ?>
</body>
</html>