<?php
global $onlinemag_sections;
global $onlinemag_settings_controls;
global $onlinemag_repeated_settings_controls;
global $onlinemag_customizer_defaults;

/*defaults values*/
$onlinemag_customizer_defaults['onlinemag-enable-breadcrumb'] = 1;

$onlinemag_sections['onlinemag-breadcrumb-options'] =
    array(
        'priority'       => 50,
        'title'          => __( 'Breadcrumb Options', 'onlinemag' ),
        'panel'          => 'onlinemag-theme-options',
    );

$onlinemag_settings_controls['onlinemag-enable-breadcrumb'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-enable-breadcrumb'],
        ),
        'control' => array(
            'label'                 =>  __( 'Enable Breadcrumb', 'onlinemag' ),
            'section'               => 'onlinemag-breadcrumb-options',
            'type'                  => 'checkbox',
            'priority'              => 10,
        )
    );