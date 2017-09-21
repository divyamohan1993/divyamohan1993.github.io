<?php
/**
 * The template for displaying archive pages.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package onlinemag
 */

get_header(); ?>
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
		<?php if (is_archive()) { ?>
			<div class="wrapper page-inner-title">
				<div class="container">
				    <div class="row">
				        <div class="col-md-12 col-sm-12 col-xs-12">
							<header class="entry-header">
								<div class="inner-banner-overlay">
									<?php 
									the_archive_title( '<h1 class="entry-title">', '</h1>' );
									the_archive_description( '<div class="taxonomy-description">', '</div>' );
									?>
								</div>
							</header><!-- .entry-header -->
				        </div>
				    </div>
				</div>
			</div>
		<?php } ?>

		<?php
		if ( have_posts() ) : ?>
				
			<?php
			echo '<div class="content-start">';
			/* Start the Loop */
			while ( have_posts() ) : the_post();

				/*
				 * Include the Post-Format-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
					get_template_part( 'template-parts/content', get_post_format() );
			endwhile;

			echo '</div>';
			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
