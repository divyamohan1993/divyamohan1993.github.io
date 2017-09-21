<?php
/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function onlinemag_widgets_init() {
    register_sidebar( array(
        'name'          => esc_html__( 'Sidebar', 'onlinemag' ),
        'id'            => 'sidebar-1',
        'description'   => '',
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );

    register_sidebar( array(
        'name'          => esc_html__( 'Home/Front Page Widget', 'onlinemag' ),
        'id'            => 'homepage-main-section',
        'description'   => '',
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );

    $onlinemag_get_all_options = onlinemag_get_all_options(1);
    $onlinemag_footer_widgets_number = $onlinemag_get_all_options['onlinemag-footer-sidebar-number'];

    if( $onlinemag_footer_widgets_number > 0 ){
        register_sidebar(array(
            'name' => __('Footer Column One', 'onlinemag'),
            'id' => 'footer-col-one',
            'description' => __('Displays items on footer section.','onlinemag'),
            'before_widget' => '<aside id="%1$s" class="widget %2$s">',
            'after_widget' => '</aside>',
            'before_title'  => '<h1 class="widget-title">',
            'after_title'   => '</h1>',
        ));
        if( $onlinemag_footer_widgets_number > 1 ){
            register_sidebar(array(
                'name' => __('Footer Column Two', 'onlinemag'),
                'id' => 'footer-col-two',
                'description' => __('Displays items on footer section.','onlinemag'),
                'before_widget' => '<aside id="%1$s" class="widget %2$s">',
                'after_widget' => '</aside>',
                'before_title'  => '<h1 class="widget-title">',
                'after_title'   => '</h1>',
            ));
        }
        if( $onlinemag_footer_widgets_number > 2 ){
            register_sidebar(array(
                'name' => __('Footer Column Three', 'onlinemag'),
                'id' => 'footer-col-three',
                'description' => __('Displays items on footer section.','onlinemag'),
                'before_widget' => '<aside id="%1$s" class="widget %2$s">',
                'after_widget' => '</aside>',
                'before_title'  => '<h1 class="widget-title">',
                'after_title'   => '</h1>',
            ));
        }
        if( $onlinemag_footer_widgets_number > 3 ){
            register_sidebar(array(
                'name' => __('Footer Column Four', 'onlinemag'),
                'id' => 'footer-col-four',
                'description' => __('Displays items on footer section.','onlinemag'),
                'before_widget' => '<aside id="%1$s" class="widget %2$s">',
                'after_widget' => '</aside>',
                'before_title'  => '<h1 class="widget-title">',
                'after_title'   => '</h1>',
            ));
        }
    }
}
add_action( 'widgets_init', 'onlinemag_widgets_init' );

require get_template_directory() . '/inc/widgets/mainpage-style1.php';
require get_template_directory() . '/inc/widgets/sidebar-style1.php';
