<?php
global $onlinemag_sections;
global $onlinemag_settings_controls;
global $onlinemag_repeated_settings_controls;
global $onlinemag_customizer_defaults;

/*defaults values*/
$onlinemag_customizer_defaults['onlinemag-enable-back-to-top'] = 1;

$onlinemag_sections['onlinemag-back-to-top-options'] =
    array(
        'priority'       => 80,
        'title'          => __( 'Back To Top Options', 'onlinemag' ),
        'panel'          => 'onlinemag-theme-options'
    );

$onlinemag_settings_controls['onlinemag-enable-back-to-top'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-enable-back-to-top'],
        ),
        'control' => array(
            'label'                 =>  __( 'Enable Back To Top', 'onlinemag' ),
            'section'               => 'onlinemag-back-to-top-options',
            'type'                  => 'checkbox',
            'priority'              => 50,
        )
    );