<?php
/**
 * The template for displaying home page.
 * @package onlinemag
 */

get_header();
if ( 'posts' == get_option( 'show_on_front' ) ) {
    include( get_home_template() );
    }
else{
	/**
	 * onlinemag_action_front_page hook
	 * @since onlinemag 1.0.0
	 *
	 * @hooked onlinemag_action_front_page -  10
	 * @sub_hooked onlinemag_action_front_page -  30
	 */
	do_action( 'onlinemag_action_front_page' );	
	$onlinemag_static_page = absint($onlinemag_customizer_all_values['onlinemag-enable-static-page']);
	if ($onlinemag_static_page == 1) { ?>
			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">

					<?php
					while ( have_posts() ) : the_post();

						get_template_part( 'template-parts/content', 'page' );

						// If comments are open or we have at least one comment, load up the comment template.
						if ( comments_open() || get_comments_number() ) :
							comments_template();
						endif;

					endwhile; // End of the loop.
					?>

				</main><!-- #main -->
			</div><!-- #primary -->
			<?php
				get_sidebar();
			?>
	</div>
	<?php }
}
get_footer();