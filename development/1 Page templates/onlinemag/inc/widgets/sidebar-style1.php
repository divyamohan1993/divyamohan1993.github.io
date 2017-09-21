<?php
if ( ! class_exists( 'Onlinemag_Sidebar_Recent_Post_Widget' ) ) :

    /**
     * Latest News Widget Class
     *
     * @since Onlinemag 1.0.0
     *
     */
    class Onlinemag_Sidebar_Recent_Post_Widget extends WP_Widget {

        function __construct() {
            parent::__construct(
                'onlinemag_sidebar_recent_post_widget', // Base ID
                __('OnlineMag Widget Style 2', 'onlinemag'), // Name
                array( 'description' => __( 'Especially On Sidebar Effective For Recent-Post', 'onlinemag' ) ) // Args
            );
        }


        function widget( $args, $instance ) {
            extract( $args );

            $title             = apply_filters('widget_title', empty($instance['title']) ? '' : $instance['title'], $instance, $this->id_base );
            $post_category     = ! empty( $instance['post_category'] ) ? $instance['post_category'] : 0;
            $post_number       = ! empty( $instance['post_number'] ) ? $instance['post_number'] : 2;
            $custom_class      = apply_filters( 'widget_custom_class', empty( $instance['custom_class'] ) ? '' : $instance['custom_class'], $instance, $this->id_base );
            $featured_image    = ! empty( $instance['featured_image'] ) ? $instance['featured_image'] : 'onlinemag-recent-sidebar';
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
                'posts_per_page' => absint($post_number),
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
                    <div class="sidebar-section">
                        <div class="sb-round-thumb-widget">
                            <div class="right-post-content">
                                <?php
                                // The Loop
                                if ( $all_posts->have_posts() ) {
                                    while ( $all_posts->have_posts() ) {
                                        $all_posts->the_post(); ?>
                                            <div class="small-right-post-content-list">
                                                <div class="thumb-post">
                                                    <figure class="post-img">
                                                        <?php 
                                                        if(has_post_thumbnail()){
                                                            $thumb = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), $featured_image );
                                                            $url = $thumb['0'];
                                                        }
                                                        else{
                                                            $url = get_template_directory_uri().'/assets/images/slider-post.jpg';
                                                        }
                                                        ?>
                                                    <a href="<?php the_permalink(); ?>">
                                                        <img src="<?php echo esc_url($url);?>">
                                                    </a>
                                                    </figure>
                                                    <div class="small-right-post-content">
                                                        <h3 class="entry-title">
                                                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?>
                                                            </a>
                                                        </h3>
                                                        <div class="post-icons">
                                                            <span>
                                                                <?php 
                                                                $author_name   = get_the_author();
                                                                $author_url   = get_author_posts_url( get_the_author_meta( 'ID' ) );?>
                                                                <a href="<?php echo esc_url($author_url); ?>" class="icon" title=""><i class="fa fa-user"></i><span><?php echo esc_html($author_name ); ?></span></a>
                                                            </span>
                                                            <span>
                                                                <?php 
                                                                $archive_year   = get_the_time('Y');
                                                                ?>
                                                                <a href="<?php echo esc_url(get_year_link($archive_year)); ?>" class="icon"><i class="fa fa-calendar"></i> <?php echo esc_html(get_the_date());?></a>
                                                            </span>
                                                            <span>
                                                                <a href="<?php the_permalink(); ?>" class="icon">
                                                                    <i class="fa fa-comment"></i> 
                                                                    <?php
                                                                        $commentscount = get_comments_number();
                                                                        if($commentscount == 1): $commenttext = 'comment'; endif;
                                                                        if($commentscount > 1 || $commentscount == 0): $commenttext = ''; endif;
                                                                        echo (esc_html($commentscount).' '.(esc_html($commenttext)));
                                                                    ?>
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <?php
                                    }
                                } else {
                                    // no posts found
                                }
                                /* Restore original Post Data */
                                wp_reset_postdata();
                                ?>
                            </div>
                        </div>
                    </div><!-- content-bottom-post -->
                <!-- block holder -->
                <!-- Main-panel Full Widget -->
                <?php wp_reset_postdata(); // Reset ?>

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
                <label for="<?php echo absint($this->get_field_id('title')); ?>"><?php _e( 'Title:', 'onlinemag' ); ?></label>
                <input class="widefat" id="<?php echo absint($this->get_field_id('title')); ?>" name="<?php echo esc_html($this->get_field_name( 'title' )); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
            </p>
            <p>
                <label for="<?php echo absint($this->get_field_id('post_category')); ?>"><?php _e( 'Category:', 'onlinemag' ); ?></label>
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
                <label for="<?php echo absint($this->get_field_id('custom_class')); ?>"><?php _e( 'Custom Class:', 'onlinemag' ); ?></label>
                <input class="widefat" id="<?php echo absint($this->get_field_id('custom_class')); ?>" name="<?php echo esc_attr($this->get_field_name( 'custom_class' )); ?>" type="text" value="<?php echo esc_attr( $custom_class ); ?>" />
            </p>
            <?php
        }
        function dropdown_post_columns( $args ){
            $defaults = array(
                'id'       => '',
                'name'     => '',
                'selected' => 0,
                'echo'     => 1,
            );

            $r = wp_parse_args( $args, $defaults );
            $output = '';

            $choices = array(
                '1' => sprintf( __( '%d Column','onlinemag' ), 1 ),
                '2' => sprintf( __( '%d Columns','onlinemag' ), 2 ),
            );

            if ( ! empty( $choices ) ) {

                $output = "<select name='" . esc_attr( $r['name'] ) . "' id='" . esc_attr( $r['id'] ) . "'>\n";
                foreach ( $choices as $key => $choice ) {
                    $output .= '<option value="' . esc_attr( $key ) . '" ';
                    $output .= selected( $r['selected'], $key, false );
                    $output .= '>' . esc_html( $choice ) . '</option>\n';
                }
                $output .= "</select>\n";
            }

            if ( $r['echo'] ) {
                echo $output;
            }
            return $output;

        }
    }
    add_action( 'widgets_init', 'onlinemag_recent_post_widget' );

    if ( ! function_exists( 'onlinemag_recent_post_widget' ) ) :

        /**
         * Load widget
         *
         * @since Onlinemag 1.0.0
         *
         */
        function onlinemag_recent_post_widget(){
            // Latest News widget
            register_widget( 'Onlinemag_Sidebar_Recent_Post_Widget' );
        }

    endif;

endif;