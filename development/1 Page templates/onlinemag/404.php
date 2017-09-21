<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package onlinemag
 */

get_header(); ?>
	<div class="wrapper page-inner-title">
		<div class="container">
		    <div class="row">
		        <div class="col-md-12 col-sm-12 col-xs-12">
					<header class="entry-header">
						<div class="inner-banner-overlay">
							<h1 class="entry-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'onlinemag' ); ?></h1>
						</div>
					</header><!-- .entry-header -->
		        </div>
		    </div>
		</div>
	</div>
	<div id="content" class="site-content page404 container">
	<div class="row">
		<div class="col-md-12">
			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">
					<section class="error-404 not-found">
						<div class="page-content">
						<h1>4o4</h1>
							<p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'onlinemag' ); ?></p>	
							 <div id="404-search"> 
                                    <?php get_search_form();  ?>                       
                                </div>						
     					</div><!-- .page-content -->
					</section><!-- .error-404 -->

				</main><!-- #main -->
			</div><!-- #primary -->
		</div>
	</div>
</div>

<?php
get_footer();
