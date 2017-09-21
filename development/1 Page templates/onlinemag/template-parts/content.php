<?php
/**
 * Template part for displaying posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package onlinemag
 */

global $onlinemag_customizer_all_values;

?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
 <div class="wrapper-grid">
	<header class="entry-header">
		<?php
		if ( is_single() ) {
		} else {
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		}
		if ( 'post' === get_post_type() ) : ?>
			<div class="entry-meta">
				<?php onlinemag_posted_on(); ?>
			</div><!-- .entry-meta -->
		<?php
		endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php
		$onlinemag_archive_layout = $onlinemag_customizer_all_values['onlinemag-archive-layout'];
		$onlinemag_archive_image_align = $onlinemag_customizer_all_values['onlinemag-archive-image-align'];
		if( 'excerpt-only' == $onlinemag_archive_layout ){
			the_excerpt();
		}
		elseif( 'full-post' == $onlinemag_archive_layout ){
			the_content( sprintf(
			/* translators: %s: Name of current post. */
				wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'onlinemag' ), array( 'span' => array( 'class' => array() ) ) ),
				the_title( '<span class="screen-reader-text">"', '"</span>', false )
			) );
		}
		elseif( 'thumbnail-and-full-post' == $onlinemag_archive_layout ){
			if( 'left' == $onlinemag_archive_image_align ){
				echo "<div class='image-left'>";
				echo '<a href="'.esc_url(get_permalink()).'">';
				the_post_thumbnail('medium');
			}
			elseif( 'right' == $onlinemag_archive_image_align ){
				echo "<div class='image-right'>";
				echo '<a href="'.esc_url(get_permalink()).'">';
				the_post_thumbnail('medium');
			}
			else{
				echo "<div class='image-full'>";
				echo '<a href="'.esc_url(get_permalink()).'">';
				the_post_thumbnail('full');
			}
			echo "</a>";
			echo "</div>";/*div end*/
			the_content( sprintf(
			/* translators: %s: Name of current post. */
				wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'onlinemag' ), array( 'span' => array( 'class' => array() ) ) ),
				the_title( '<span class="screen-reader-text">"', '"</span>', false )
			) );
		}
		else{
			if( 'left' == $onlinemag_archive_image_align ){
				echo "<div class='image-left'>";
				echo '<a href="'.esc_url(get_permalink()).'">';
				the_post_thumbnail('medium');
			}
			elseif( 'right' == $onlinemag_archive_image_align ){
				echo "<div class='image-right'>";
				echo '<a href="'.esc_url(get_permalink()).'">';
				the_post_thumbnail('medium');
			}
			else{
				echo "<div class='image-full'>";
				echo '<a href="'.esc_url(get_permalink()).'">';
				the_post_thumbnail('full');
			}
			echo "</a>";
			echo "</div>";/*div end*/
			the_excerpt();
		}
		?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'onlinemag' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php onlinemag_entry_footer(); ?>
	</footer><!-- .entry-footer -->
	</div>
</article><!-- #post-## -->