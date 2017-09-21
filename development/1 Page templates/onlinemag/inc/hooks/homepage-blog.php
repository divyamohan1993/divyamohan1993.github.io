<?php
if ( ! function_exists( 'onlinemag_home_blog' ) ) :
    /**
     * Blog Section
     *
     * @since onlinemag 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function onlinemag_home_blog() {
        global $onlinemag_customizer_all_values;
        if( 1 != $onlinemag_customizer_all_values['onlinemag-blog-enable'] ){
            return null;
        }
        $repeated_category = array('onlinemag-blog-category-ids');
        $onlinemag_blog_category = evision_customizer_get_repeated_all_value(3 , $repeated_category);
        $onlinemag_blog_cat_posts_ids=array();
        foreach( $onlinemag_blog_category as $onlinemag_blog_cat_post ) {
            if( 0 != $onlinemag_blog_cat_post['onlinemag-blog-category-ids'] ){
                $onlinemag_blog_cat_posts_ids[] = $onlinemag_blog_cat_post['onlinemag-blog-category-ids'];
            }
        }
        $onlinemag_home_blog_args = array();
        if( !empty( $onlinemag_blog_cat_posts_ids) ){
            $onlinemag_home_blog_args = array(
                'post_type' => 'post',
                'cat' => $onlinemag_blog_cat_posts_ids,
                'ignore_sticky_posts' => true,
                'posts_per_page' => 4,
            );
        } ?>
        <?php 
/*        $cat_name_1 = get_cat_name( $onlinemag_blog_cat_posts_ids[1]);
        echo $cat_name_1;*/
        ?>
        <section class="wrapper wrap-below-banner">
            <div class="container">
                <div class="category-grid">
                <?php for ($j=0; $j < count($onlinemag_blog_cat_posts_ids) ; $j++) {
                  $onlinemag_category = get_cat_name( $onlinemag_blog_cat_posts_ids[$j]); ?>
                  <?php $onlinemag_cat_link = get_category_link( $onlinemag_blog_cat_posts_ids[$j]); ?> 
                  <div class="col-md-4">
                      <div class="card ">
                      <a href="<?php echo esc_url($onlinemag_cat_link); ?>">
                        <p class="card-title"><?php echo esc_html($onlinemag_category); ?></p>
                      </a>
                      <?php 
                      $onlinemag_logs_args = array(
                          'post_type' => 'post',
                          'category_name' => esc_html($onlinemag_category),
                          'ignore_sticky_posts' => true,
                          'posts_per_page' => 4,
                      );
                      $i = 1;
                      $onlinemag_blogs_post_query = new WP_Query($onlinemag_logs_args);
                      if ($onlinemag_blogs_post_query->have_posts()) :
                          $data_delay = 0;
                          while ($onlinemag_blogs_post_query->have_posts()) : $onlinemag_blogs_post_query->the_post(); 
                          if ($i == 1) { ?>
                            <a href="<?php the_permalink(); ?>">
                              <div class="card-img-top">
                                <?php the_post_thumbnail(); ?>
                                <div class="img-overlay"></div>
                              </div>
                            </a>
                            <div class="card-block">
                              <h4 class="card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
                              <?php 
                              $onlinemag_blog_single_words = 20;
                              $onlinemag_blog_content = onlinemag_words_count( $onlinemag_blog_single_words ,get_the_content());
                              ?>
                              <p class="card-text"><?php echo wp_kses_post($onlinemag_blog_content); ?></p>                            
                            </div>
                           <?php $i++; } else {?>
                             <div class="card-block">
                                <h4 class="card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
                              </div>
                           <?php }  ?>
                               <?php endwhile;
                           wp_reset_postdata();
                           endif;
                            ?>
                        <div class="category-link">
                        <a href="<?php echo esc_url(get_category_link(  $onlinemag_blog_cat_posts_ids[$j] )); ?> " class="category-more"><?php echo esc_html__( 'View More', 'onlinemag' ); ?></a>
                        </div>
                      </div>
                  </div>
                <?php } ?>
                </div>
            </div>
        </section>
        <?php
    }
endif;
add_action( 'onlinemag_action_front_page', 'onlinemag_home_blog', 40 );