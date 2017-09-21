<?php
if ( ! class_exists( 'Onlinemag_Two_Column_Widget' ) ) :

    /**
     * Latest News Widget Class
     *
     * @since Onlinemag 1.0.0
     *
     */
    class Onlinemag_Two_Column_Widget extends WP_Widget {

        function __construct() {
            parent::__construct(
                'onlinemag_full_content_blog_widget', // Base ID
                __('OnlineMag Widget Style 1', 'onlinemag'), // Name
                array( 'description' => __( 'Homepage Widget with two column post display', 'onlinemag' ) ) // Args
            );
        }


        function widget( $args, $instance ) {
            extract( $args );

            $title             = apply_filters('widget_title', empty($instance['title']) ? '' : $instance['title'], $instance, $this->id_base );
            $post_category     = ! empty( $instance['post_category'] ) ? $instance['post_category'] : 0;
            $post_number       = ! empty( $instance['post_number'] ) ? $instance['post_number'] : 2;
            $custom_class      = apply_filters( 'widget_custom_class', empty( $instance['custom_class'] ) ? '' : $instance['custom_class'], $instance, $this->id_base );
            $featured_image    = ! empty( $instance['featured_image'] ) ? $instance['featured_image'] : 'onlinemag-style-one';
            $excerpt_length    = ! empty( $instance['excerpt_length'] ) ? $instance['excerpt_length'] : 50;
            // Add Custom class
            if ( $custom_class ) {
                $before_widget = str_replace( 'class="', 'class="'. $custom_class . ' ', $before_widget );
            }

            echo $before_widget;

            // Title
            if ( $title ) echo $before_title . $title . $after_title;

            //
            ?>
            <?php
            $qargs = array(
                'posts_per_page' => $post_number,
                'no_found_rows'  => true,
                'ignore_sticky_posts'  => 1
            );
            if ( absint( $post_category ) > 0  ) {
                $qargs['cat'] = $post_category;
            }
            $all_posts = new WP_Query( $qargs );
            ?>
            <?php if ( ! empty( $all_posts )): ?>
                <!--html generate-->
                <div class="mp-tab-widget mp-bottom-widget">
                    <div class="row">
                        <?php
                        // The Loop
                        if ( $all_posts->have_posts() ) {
                            $i = 1;
                            while ( $all_posts->have_posts() ) {
                                $all_posts->the_post(); ?>
                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <div class="thumb-post main-page">
                                            <figure class="post-img">
                                                <?php 
                                                if(has_post_thumbnail()){
                                                    $thumb = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), $featured_image );
                                                    $url = $thumb['0'];
                                                }
                                                else{
                                                    $url = get_template_directory_uri().'/assets/images/below-banner-post.jpg';
                                                }
                                                ?>
                                            <a href="<?php the_permalink(); ?>">
                                                <img src="<?php echo esc_url($url);?>">
                                            </a>
                                            </figure>
                                            <div class="post-icons mainpage-style">                                               
                                                <span>
                                                    <?php 
                                                    $archive_year   = get_the_time('Y');
                                                    ?>
                                                    <a href="<?php echo esc_url(get_year_link($archive_year)); ?>" class="icon"><i class="fa fa-calendar"></i> <?php echo esc_html(get_the_date());?></a>
                                                </span>                                                
                                            </div>
                                            <div class="bottom-post-content mainpage">
                                                <h3 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                                                <div class="par">
                                                    <?php
                                                    $excerpt = onlinemag_words_count( $excerpt_length, get_the_excerpt() );
                                                    echo esc_html( $excerpt );
                                                    ?>
                                                </div>
                                                <!-- <div class="entry-cat-links">
                                                    <span class="cat-links">
                                                        <?php echo wp_kses_post(get_the_category_list( " ", "", get_the_id())); ?>
                                                    </span>
                                                </div> -->
                                                <div class="post-content-footer main-page">
                                                 <span>
                                                    <?php 
                                                    $author_name   = get_the_author();
                                                    $author_url   = get_author_posts_url( get_the_author_meta( 'ID' ) );?>
                                                    <a href="<?php echo esc_url($author_url); ?>" class="icon" title=""><i class="fa fa-user"></i><span><?php echo esc_html($author_name ); ?></span></a>
                                                </span>
                                                    <span class="comment">
                                                    <a href="<?php the_permalink(); ?>" class="icon">
                                                        <i class="fa fa-comment"></i> 
                                                        <?php
                                                            $commentscount = get_comments_number();
                                                            if($commentscount == 1): $commenttext = 'comment'; endif;
                                                            if($commentscount > 1 || $commentscount == 0): $commenttext = 'comments'; endif;
                                                            echo (esc_html($commentscount).' '.(esc_html($commenttext)));
                                                        ?>
                                                    </a>
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php
                                    if (($i % 2) == 0){?>
                                        <div class = "clear"> </div>
                                <?php }
                                $i++;
                            }
                        } else {
                            // no posts found
                        }
                        /* Restore original Post Data */
                        wp_reset_postdata();
                        ?>
                    </div><!-- content-bottom-post -->
                </div><!-- block holder -->
                <div class="clear"></div>
                <!--html generate-->

            <?php endif; ?>
            <?php
            echo $after_widget;

        }
        function update( $new_instance, $old_instance ) {
            $instance = $old_instance;
            $instance['title']            = isset($new_instance['title'])  ? $new_instance['title'] : '';
            $instance['post_category']    = isset( $new_instance['post_category'] ) ?  $new_instance['post_category'] : '';
            $instance['post_number']      = isset( $new_instance['post_number'] ) ?  $new_instance['post_number'] : '';
            $instance['custom_class']     = isset($new_instance['custom_class'] )  ? $new_instance['custom_class'] : '';

            return $instance;
        }

        function form( $instance ) {

            //Defaults
            $instance = wp_parse_args( (array) $instance, array(
                'title'            => '',
                'post_category'    => '',
                'post_number'      => 1,
                'custom_class'     => '',
            ) );
            $title            = strip_tags( $instance['title'] );
            $post_category    = absint( $instance['post_category'] );
            $post_number      = absint( $instance['post_number'] );
            $custom_class     = esc_attr( $instance['custom_class'] );

            ?>
            <p>
                <label for="<?php echo absint($this->get_field_id( 'title' )); ?>"><?php _e( 'Title:', 'onlinemag' ); ?></label>
                <input class="widefat" id="<?php echo absint($this->get_field_id( 'title' )); ?>" name="<?php echo esc_html($this->get_field_name( 'title' )); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
            </p>
            <p>
                <label for="<?php echo absint($this->get_field_id( 'post_category' )); ?>"><?php _e( 'Category:', 'onlinemag' ); ?></label>
                <?php
                $cat_args = array(
                    'orderby'         => 'name',
                    'hide_empty'      => 0,
                    'taxonomy'        => 'category',
                    'name'            => esc_html($this->get_field_name('post_category')),
                    'id'              => absint($this->get_field_id('post_category')),
                    'selected'        => $post_category,
                    'show_option_all' => __( 'All Categories','onlinemag' ),
                );
                wp_dropdown_categories( $cat_args );
                ?>
            </p>
            <p>
                <label for="<?php echo absint($this->get_field_id( 'post_number' )); ?>"><?php _e('Number of Posts:', 'onlinemag' ); ?></label>
                <input class="widefat1" id="<?php echo absint($this->get_field_id( 'post_number' )); ?>" name="<?php echo esc_html($this->get_field_name( 'post_number' )); ?>" type="number" value="<?php echo absint( $post_number ); ?>" min="1" style="max-width:50px;" />
            </p>
            <p>
                <label for="<?php echo esc_html($this->get_field_id( 'custom_class' )); ?>"><?php _e( 'Custom Class:', 'onlinemag' ); ?></label>
                <input class="widefat" id="<?php echo absint($this->get_field_id( 'custom_class')); ?>" name="<?php echo esc_attr($this->get_field_name( 'custom_class' )); ?>" type="text" value="<?php echo esc_attr( $custom_class ); ?>" />
            </p>
            <?php
        }

    }
    add_action( 'widgets_init', 'onlinemag_full_content_load_widgets' );

    if ( ! function_exists( 'onlinemag_full_content_load_widgets' ) ) :

        /**
         * Load widget
         *
         * @since Onlinemag 1.0.0
         *
         */
        function onlinemag_full_content_load_widgets(){
            // Latest News widget
            register_widget( 'Onlinemag_Two_Column_Widget' );
        }

    endif;

endif;