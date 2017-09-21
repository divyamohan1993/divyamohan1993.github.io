<?php
if ( ! function_exists( 'onlinemag_set_global' ) ) :
/**
 * Setting global values for all saved customizer values
 *
 * @since onlinemag 1.0.0
 *
 * @param null
 * @return null
 *
 */
function onlinemag_set_global() {
    /*Getting saved values start*/
    $GLOBALS['onlinemag_customizer_all_values'] = onlinemag_get_all_options(1);
}
endif;
add_action( 'onlinemag_action_before_head', 'onlinemag_set_global', 0 );

if ( ! function_exists( 'onlinemag_doctype' ) ) :
/**
 * Doctype Declaration
 *
 * @since onlinemag 1.0.0
 *
 * @param null
 * @return null
 *
 */
function onlinemag_doctype() {
    ?>
    <!DOCTYPE html>
    <html <?php language_attributes(); ?>>
<?php
}
endif;
add_action( 'onlinemag_action_before_head', 'onlinemag_doctype', 10 );

if ( ! function_exists( 'onlinemag_before_wp_head' ) ) :
/**
 * Before wp head codes
 *
 * @since onlinemag 1.0.0
 *
 * @param null
 * @return null
 *
 */
function onlinemag_before_wp_head() {
    ?>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="profile" href="http://gmpg.org/xfn/11">
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php
}
endif;
add_action( 'onlinemag_action_before_wp_head', 'onlinemag_before_wp_head', 10 );

if( ! function_exists( 'onlinemag_default_layout' ) ) :
    /**
     * onlinemag default layout function
     *
     * @since  onlinemag 1.0.0
     *
     * @param int
     * @return string
     */
    function onlinemag_default_layout( $post_id = null ){

        global $onlinemag_customizer_all_values,$post;
        $onlinemag_default_layout = $onlinemag_customizer_all_values['onlinemag-default-layout'];
        if( is_home()){
            $post_id = get_option( 'page_for_posts' );
        }
        if( null == $post_id && isset ( $post->ID ) ){
            $post_id = $post->ID;
        }
        $onlinemag_default_layout_meta = get_post_meta( $post_id, 'onlinemag-default-layout', true );

        if( false != $onlinemag_default_layout_meta ) {
            $onlinemag_default_layout = $onlinemag_default_layout_meta;
        }
        return $onlinemag_default_layout;
    }
endif;

if ( ! function_exists( 'onlinemag_body_class' ) ) :
/**
 * add body class
 *
 * @since onlinemag 1.0.0
 *
 * @param null
 * @return null
 *
 */
function onlinemag_body_class( $onlinemag_body_classes ) {
    if(!is_front_page() || ( is_front_page())){
        $onlinemag_default_layout = onlinemag_default_layout();
        if( !empty( $onlinemag_default_layout ) ){
            if( 'left-sidebar' == $onlinemag_default_layout ){
                $onlinemag_body_classes[] = 'evision-left-sidebar';
            }
            elseif( 'right-sidebar' == $onlinemag_default_layout ){
                $onlinemag_body_classes[] = 'evision-right-sidebar';
            }
            elseif( 'both-sidebar' == $onlinemag_default_layout ){
                $onlinemag_body_classes[] = 'evision-both-sidebar';
            }
            elseif( 'no-sidebar' == $onlinemag_default_layout ){
                $onlinemag_body_classes[] = 'evision-no-sidebar';
            }
            else{
                $onlinemag_body_classes[] = 'evision-right-sidebar';
            }
        }
        else{
            $onlinemag_body_classes[] = 'evision-right-sidebar';
        }
    }
    return $onlinemag_body_classes;

}
endif;
add_filter( 'body_class', 'onlinemag_body_class', 10, 1);

if ( ! function_exists( 'onlinemag_before_page_start' ) ) :
/**
 * intro loader
 *
 * @since onlinemag 1.0.0
 *
 * @param null
 * @return null
 *
 */
function onlinemag_before_page_start() {
    global $onlinemag_customizer_all_values;
    /*intro loader*/
}
endif;
add_action( 'onlinemag_action_before', 'onlinemag_before_page_start', 10 );

if ( ! function_exists( 'onlinemag_page_start' ) ) :
/**
 * page start
 *
 * @since onlinemag 1.0.0
 *
 * @param null
 * @return null
 *
 */
function onlinemag_page_start() {
?>
    <div id="page" class="site container clearfix">
<?php
}
endif;
add_action( 'onlinemag_action_before', 'onlinemag_page_start', 15 );

if ( ! function_exists( 'onlinemag_skip_to_content' ) ) :
/**
 * Skip to content
 *
 * @since onlinemag 1.0.0
 *
 * @param null
 * @return null
 *
 */
function onlinemag_skip_to_content() {
    ?>
    <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'onlinemag' ); ?></a>
<?php
}
endif;
add_action( 'onlinemag_action_before_header', 'onlinemag_skip_to_content', 10 );

if ( ! function_exists( 'onlinemag_header' ) ) :
/**
 * Main header
 *
 * @since onlinemag 1.0.0
 *
 * @param null
 * @return null
 *
 */
function onlinemag_header() {
    global $onlinemag_customizer_all_values;
    ?>
    <div class="col-xs-12 col-sm-12 col-md-12 top-header-right">
        <?php if (has_nav_menu('social' )) { ?>
            <div class="social-widget evision-social-section social-icon-only bottom-tooltip col-md-6">
                <?php
                   wp_nav_menu( array( 
                        'theme_location' => 'social', 
                        'link_before' => '<span>',
                        'link_after'=>'</span>' , 
                        'menu_id' => 'social-menu',
                        'fallback_cb' => false,
                    ) );
                ?>
            </div>
            <?php } ?>
            <?php if (1 == $onlinemag_customizer_all_values['onlinemag-header-enable-date']) { ?>
            <div class="timer col-md-6">
                <?php echo date_i18n( get_option( 'date_format' ), strtotime( 'l, M j, Y' ) ); ?>
            </div>
        <?php } ?>
    </div>
    <header id="masthead" class="wrapper wrap-head site-header">
        <div class="wrapper wrapper-site-identity">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <div class="site-branding">
                            <?php
                                if ( is_front_page() && is_home() ) : ?>
                                    <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
                                <?php else : ?>
                                    <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
                                <?php
                                endif;

                                $description = get_bloginfo( 'description', 'display' );
                                if ( $description || is_customize_preview() ) : ?>
                                    <p class="site-description"><?php echo esc_html($description); /* WPCS: xss ok. */ ?></p>
                                <?php
                                endif; ?>
                            <?php onlinemag_the_custom_logo(); ?>
                        </div><!-- .site-branding -->
                    </div>
                    <?php if (!empty($onlinemag_customizer_all_values['onlinemag-header-add'])) { ?>
                        <div class="col-xs-12 col-sm-12 col-md-8">
                            <div class="ads-section header-right">
                                <a href= "<?php echo esc_url($onlinemag_customizer_all_values['onlinemag-home-header-add-link'] ); ?>">
                                    <img src="<?php echo esc_url($onlinemag_customizer_all_values['onlinemag-header-add']);?>">
                                </a>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </header><!-- #masthead -->

<?php 
}
endif;
add_action( 'onlinemag_action_header', 'onlinemag_header', 10 );


if ( ! function_exists( 'onlinemag_navigation_page_start' ) ) :
/**
 * Skip to content
 *
 * @since onlinemag 1.0.0
 *
 * @param null
 * @return null
 *
 */
function onlinemag_navigation_page_start() {
    global $onlinemag_customizer_all_values; 
    ?>
    <nav class="wrapper wrap-nav">
        <div class="container">
            <div class="wrap-inner">
                <div class="sec-menu">
                    <nav id="sec-site-navigation" class="main-navigation sec-main-navigation" role="navigation" aria-label="secondary-menu">
                    
                    <?php
                        wp_nav_menu( array(
                            'theme_location' => 'primary',
                            'menu_id'        => 'primary-menu',
                            'menu_class'     => 'primary-menu',
                        ) );
                    ?>
                    </nav><!-- #site-navigation -->
                    <div class="nav-holder">
                        <button id="sec-menu-toggle" class="menu-toggle" aria-controls="secondary-menu" aria-expanded="false"><span class="fa fa-bars"></span></button>
                        <div id="sec-site-header-menu" class="site-header-menu">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <button id="mobile-menu-toggle-close" class="menu-toggle" aria-controls="secondary-menu"><span class="fa fa-close"></span></button>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <nav id="sec-site-navigation-mobile" class="main-navigation sec-main-navigation" role="navigation" aria-label="secondary-menu">
                                        <?php
                                            wp_nav_menu( array(
                                                'theme_location' => 'primary',
                                                'menu_id'        => 'primary-menu-mobile',
                                                'menu_class'     => 'primary-menu',
                                            ) );
                                        ?>
                                        </nav><!-- #site-navigation -->
                                    </div>
                                </div>
                            </div>
                        </div><!-- site-header-menu -->
                    </div>
                </div> 
                 <?php if ((1 == $onlinemag_customizer_all_values['onlinemag-header-enable-home-link']) || (1 == $onlinemag_customizer_all_values['onlinemag-header-enable-search'])) { ?>
                    <div class="nav-buttons col-md-1">                        
                        
                        <?php if (1 == $onlinemag_customizer_all_values['onlinemag-header-enable-search']) { ?>
                            <div class="button-list">
                                <div class="search-holder">
                                  <a class="button-search button-outline" href="#">
                                    <i class="fa fa-search"></i>
                                  </a>                                
                                </div>
                            </div>                            
                        <?php } ?>
                    </div>                    
                <?php } ?>                              
            </div>
            <div class="search-form-nav" id="top-search">
                <?php get_search_form();?>
            </div>
        </div>
    </nav>
    <?php if (1 == $onlinemag_customizer_all_values['onlinemag-header-enable-tinker']) { ?>
         <header class="wrapper top-header">
            <div class="container">
                <div class="wrap-inner">
                    <div class="row">
                        <div class="col-xs-10 col-sm-1 col-md-11 top-header-left">
                            <div class="noticebar">
                                <?php if (!empty($onlinemag_customizer_all_values['onlinemag-header-tinker-title'])) { ?>
                                    <span class="notice-title"><?php echo esc_html($onlinemag_customizer_all_values['onlinemag-header-tinker-title']); ?></span>
                                <?php } ?>
                                <div class="ticker">
                                    <div id="cycle-slideshow-ticker" class="cycle-slideshow"
                                        data-cycle-log="false"
                                        data-cycle-swipe=true
                                        data-cycle-timeout=5000
                                        data-cycle-fx=scrollVert
                                        data-cycle-speed=1000
                                        data-cycle-carousel-fluid=true
                                        data-cycle-carousel-visible=5
                                        data-cycle-pause-on-hover=true
                                        data-cycle-auto-height=container
                                        data-cycle-prev=#slide-prev-notice
                                        data-cycle-next=#slide-next-notice 
                                        data-cycle-slides="> div">
                                            <?php $onlinemag_tinker_args = array(
                                                'post_type' => 'post',
                                                'posts_per_page' => intval( $onlinemag_customizer_all_values['onlinemag-header-no-of-tinker']) ,
                                                'ignore_sticky_posts' => 1,
                                            );
                                            $onlinemag_home_tinker_post_query = new WP_Query($onlinemag_tinker_args);
                                            if ($onlinemag_home_tinker_post_query->have_posts()) :
                                                while ($onlinemag_home_tinker_post_query->have_posts()) : $onlinemag_home_tinker_post_query->the_post();
                                                    ?>
                                                    <div class="slide-item">
                                                        <a href="<?php the_permalink(); ?>">
                                                            <span class="notice-content"><?php the_title(); ?></span>
                                                        </a>
                                                    </div>
                                                <?php endwhile; 
                                                wp_reset_postdata();
                                            endif; ?>
                                        </div>
                                    <div class="cycle-pager" id="slide-pager"></div>
                                </div>
                            </div>                            
                        </div>   
                         <div class="controls col-md-1">
                            <a href="#" id="slide-prev-notice"><i class="fa fa-angle-left"></i></a>
                            <a href="#" id="slide-next-notice"><i class="fa fa-angle-right"></i></a>
                      </div>                   
                    </div>
                </div>
            </div>
        </header>
    <?php } ?>                        
    <section class="wrapper">
        <div id="content" class="site-content">
<?php
}
endif;
add_action( 'onlinemag_action_nav_page_start', 'onlinemag_navigation_page_start', 10 );


if( ! function_exists( 'onlinemag_main_slider_setion' ) ) :
/**
 * Main slider
 *
 * @since onlinemag 1.0.0
 *
 * @param null
 * @return null
 *
 */
    function onlinemag_main_slider_setion(){
        if (  is_front_page() && !is_home() ) {
            do_action('onlinemag_action_main_slider');
        } else {
            /**
             * onlinemag_action_after_title hook
             * @since onlinemag 1.0.0
             *
             * @hooked null
             */
            do_action( 'onlinemag_action_after_title' );
        }
    }
endif;
add_action( 'onlinemag_action_on_header', 'onlinemag_main_slider_setion', 10 );


if( ! function_exists( 'onlinemag_add_breadcrumb' ) ) :

/**
 * Breadcrumb
 *
 * @since onlinemag 1.0.0
 *
 * @param null
 * @return null
 *
 */
    function onlinemag_add_breadcrumb(){
        global $onlinemag_customizer_all_values;
        // Bail if Breadcrumb disabled
        $breadcrumb_enable_breadcrumb = $onlinemag_customizer_all_values['onlinemag-enable-breadcrumb' ];
        if ( 1 != $breadcrumb_enable_breadcrumb ) {
            return;
        }
        // Bail if Home Page
        if ( is_front_page() || is_home() ) {
            return;
        }
        echo '<div id="breadcrumb" class="wrapper wrap-breadcrumb"><div class="container">';
         onlinemag_simple_breadcrumb();
        echo '</div><!-- .container --></div><!-- #breadcrumb -->';
        return;
    }
endif;
add_action( 'onlinemag_action_after_title', 'onlinemag_add_breadcrumb', 10 );


