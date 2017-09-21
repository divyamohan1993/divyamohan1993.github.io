<?php
global $onlinemag_sections;
global $onlinemag_settings_controls;
global $onlinemag_customizer_defaults;

/*defaults values*/
$onlinemag_customizer_defaults['onlinemag-site-identity-color'] = '#313131';
$onlinemag_customizer_defaults['onlinemag-primary-color'] = '#ff6600';
$onlinemag_customizer_defaults['onlinemag-color-reset'] = '';

/**
 * Reset color settings to default
 *
 * @since onlinemag 1.0.0
 */
if ( ! function_exists( 'onlinemag_color_reset' ) ) :
    function onlinemag_color_reset( ) {
        
            global $onlinemag_customizer_saved_values;
           $onlinemag_customizer_saved_values = onlinemag_get_all_options();
        if ( $onlinemag_customizer_saved_values['onlinemag-color-reset'] == 1 ) {
            global $onlinemag_customizer_defaults;
            global $onlinemag_customizer_saved_values;
            /*getting fields*/

            /*setting fields */
            $onlinemag_customizer_saved_values['onlinemag-site-identity-color'] = $onlinemag_customizer_defaults['onlinemag-site-identity-color'] ;
            $onlinemag_customizer_saved_values['onlinemag-primary-color'] = $onlinemag_customizer_defaults['onlinemag-primary-color'] ;
            remove_theme_mod( 'background_color' );
            $onlinemag_customizer_saved_values['onlinemag-color-reset'] = '';
            /*resetting fields*/
            onlinemag_reset_options( $onlinemag_customizer_saved_values );
        }
        else {
            return '';
        }
    }
endif;
add_action( 'customize_save_after','onlinemag_color_reset' );

$onlinemag_settings_controls['onlinemag-site-identity-color'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-site-identity-color'],
        ),
        'control' => array(
            'label'                 =>  __( 'Site Identity Color', 'onlinemag' ),
            'description'           =>  __( 'Site title and tagline color', 'onlinemag' ),
            'section'               => 'colors',
            'type'                  => 'color',
            'priority'              => 20,
            'active_callback'       => ''
        )
    );

$onlinemag_settings_controls['onlinemag-primary-color'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-primary-color'],
        ),
        'control' => array(
            'label'                 =>  __( 'Primary Color', 'onlinemag' ),
            'section'               => 'colors',
            'type'                  => 'color',
            'priority'              => 30,
            'active_callback'       => ''
        )
    );

$onlinemag_settings_controls['onlinemag-color-reset'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-color-reset'],
            'transport'            => 'postmessage',
        ),
        'control' => array(
            'label'                 =>  __( 'Reset', 'onlinemag' ),
            'description'           =>  __( 'Caution: Reset all color settings above to default. Refresh the page after saving to view the effects', 'onlinemag' ),
            'section'               => 'colors',
            'type'                  => 'checkbox',
            'priority'              => 220,
            'active_callback'       => ''
        )
    );