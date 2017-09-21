<?php
/**
 * evision themes Theme Customizer
 *
 * @package eVision themes
 * @subpackage onlinemag
 * @since onlinemag 1.0.0
 */
/*Define Url for including css and js*/
if ( !defined( 'EVISION_CUSTOMIZER_URL' ) ) {
    define( 'EVISION_CUSTOMIZER_URL', trailingslashit( get_template_directory_uri() ) . 'inc/frameworks/evision-customizer/' );
}
/*Define path for including php files*/
if ( !defined( 'EVISION_CUSTOMIZER_PATH' ) ) {
    define( 'EVISION_CUSTOMIZER_PATH', trailingslashit( get_template_directory() ) . 'inc/frameworks/evision-customizer/' );
}

/*define constant for evision customizer name*/
if(!defined('EVISION_CUSTOMIZER_NAME')){
    define( 'EVISION_CUSTOMIZER_NAME', 'onlinemag_options' );
}

/**
 * reset options
 * @param  array $reset_options
 * @return void
 *
 * @since onlinemag 1.0.0
 */
if ( ! function_exists( 'onlinemag_reset_options' ) ) :
    function onlinemag_reset_options( $reset_options ) {
        set_theme_mod( EVISION_CUSTOMIZER_NAME, $reset_options );
    }
endif;

/**
 * Customizer framework added.
 */
require get_template_directory() . '/inc/frameworks/evision-customizer/evision-customizer.php';
global $onlinemag_panels;
global $onlinemag_sections;
global $onlinemag_settings_controls;
global $onlinemag_repeated_settings_controls;
global $onlinemag_customizer_defaults;

/******************************************
Modify Site Color Options
 *******************************************/
require get_template_directory().'/inc/customizer/color/color-section.php';

/******************************************
Modify Site Font Options
 *******************************************/
require get_template_directory().'/inc/customizer/font/font-section.php';

/******************************************
Modify Slider Section Options
 *******************************************/
require get_template_directory().'/inc/customizer/top-header/banner-add.php';

/******************************************
Modify Slider Section Options
 *******************************************/
require get_template_directory().'/inc/customizer/main-slider-section/panel.php';

/******************************************
Modify Blog Section Options
 *******************************************/
require get_template_directory().'/inc/customizer/blog-section/blog.php';

/******************************************
Modify Theme Option Section Options
 *******************************************/
require get_template_directory().'/inc/customizer/theme-option/option-panel.php';



/*Resetting all Values*/
/**
 * Reset color settings to default
 *
 * @since onlinemag 1.0.0
 */
global $onlinemag_customizer_defaults;
$onlinemag_customizer_defaults['onlinemag-customizer-reset-settings'] = '';
if ( ! function_exists( 'onlinemag_customizer_reset' ) ) :
    function onlinemag_customizer_reset( ) {
        global $onlinemag_customizer_saved_values;
        $onlinemag_customizer_saved_values = onlinemag_get_all_options();
        if ( $onlinemag_customizer_saved_values['onlinemag-customizer-reset-settings'] == 1 ) {
            global $onlinemag_customizer_defaults;
            /*getting fields*/
            $onlinemag_customizer_defaults['onlinemag-customizer-reset-settings'] = '';
            /*resetting fields*/
            onlinemag_reset_options( $onlinemag_customizer_defaults );
        }
        else {
            return '';
        }
    }
endif;
add_action( 'customize_save_after','onlinemag_customizer_reset' );

$onlinemag_sections['onlinemag-customizer-reset'] =
    array(
        'priority'       => 999,
        'title'          => __( 'Reset All Options', 'onlinemag' )
    );
$onlinemag_settings_controls['onlinemag-customizer-reset-settings'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-customizer-reset-settings'],
            'transport'            => 'postmessage',
        ),
        'control' => array(
            'label'                 =>  __( 'Reset All Options', 'onlinemag' ),
            'description'           =>  __( 'Caution: Reset all options settings to default. Refresh the page after save to view the effects. ', 'onlinemag' ),
            'section'               => 'onlinemag-customizer-reset',
            'type'                  => 'checkbox',
            'priority'              => 10,
            'active_callback'       => ''
        )
    );

/******************************************
Aranging header image
 *******************************************/
$onlinemag_sections['custom_css'] =
    array(
        'title'          => __( 'Additional CSS', 'onlinemag' ),
        'priority'       => 400,
    );
    
$onlinemag_sections['header_image'] =
    array(
        'priority'       => 1999,
        'title'          => __( 'Header Image', 'onlinemag' )
    );

$onlinemag_customizer_args = array(
    'panels'            => $onlinemag_panels, /*always use key panels */
    'sections'          => $onlinemag_sections,/*always use key sections*/
    'settings_controls' => $onlinemag_settings_controls,/*always use key settings_controls*/
    'repeated_settings_controls' => $onlinemag_repeated_settings_controls,/*always use key sections*/
);

/*registering panel section setting and control start*/
function onlinemag_add_panels_sections_settings() {
    global $onlinemag_customizer_args;
    return $onlinemag_customizer_args;
}
add_filter( 'evision_customizer_panels_sections_settings', 'onlinemag_add_panels_sections_settings' );
/*registering panel section setting and control end*/

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function onlinemag_customize_register( $wp_customize ) {
    $wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
    $wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
}
add_action( 'customize_register', 'onlinemag_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function onlinemag_customize_preview_js() {
    wp_enqueue_script( 'onlinemag_customizer', get_template_directory_uri() . '/assets/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'onlinemag_customize_preview_js' );


/**
 * get all saved options
 * @param  null
 * @return array saved options
 *
 * @since onlinemag 1.0.0
 */
if ( ! function_exists( 'onlinemag_get_all_options' ) ) :
    function onlinemag_get_all_options( $merge_default = 0 ) {
        $onlinemag_customizer_saved_values = evision_customizer_get_all_values( EVISION_CUSTOMIZER_NAME );
        if( 1 == $merge_default ){
            global $onlinemag_customizer_defaults;
            if(is_array( $onlinemag_customizer_saved_values )){
                $onlinemag_customizer_saved_values = array_merge($onlinemag_customizer_defaults, $onlinemag_customizer_saved_values );
            }
            else{
                $onlinemag_customizer_saved_values = $onlinemag_customizer_defaults;
            }
        }
        return $onlinemag_customizer_saved_values;
    }
endif;
