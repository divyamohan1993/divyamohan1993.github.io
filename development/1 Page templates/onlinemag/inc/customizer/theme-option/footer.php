<?php
global $onlinemag_sections;
global $onlinemag_settings_controls;
global $onlinemag_repeated_settings_controls;
global $onlinemag_customizer_defaults;

/*defaults values*/
$onlinemag_customizer_defaults['onlinemag-footer-sidebar-number'] = 3;
$onlinemag_customizer_defaults['onlinemag-copyright-text'] = __('Copyright &copy; All right reserved.','onlinemag');
$onlinemag_customizer_defaults['onlinemag-enable-theme-name'] = 1;

$onlinemag_sections['onlinemag-footer-options'] =
    array(
        'priority'       => 15,
        'title'          => __( 'Footer Options', 'onlinemag' ),
        'panel'          => 'onlinemag-theme-options'
    );

$onlinemag_settings_controls['onlinemag-footer-sidebar-number'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-footer-sidebar-number'],
        ),
        'control' => array(
            'label'                 =>  __( 'Number of Sidebars In Footer Area', 'onlinemag' ),
            'section'               => 'onlinemag-footer-options',
            'type'                  => 'select',
            'choices'               => array(
                0 => __( 'Disable footer sidebar area', 'onlinemag' ),
                1 => __( '1', 'onlinemag' ),
                2 => __( '2', 'onlinemag' ),
                3 => __( '3', 'onlinemag' ),
                4 => __( '4', 'onlinemag' )
            ),
            'priority'              => 15,
            'description'           => '',
            'active_callback'       => ''
        )
    );

$onlinemag_settings_controls['onlinemag-copyright-text'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-copyright-text'],
        ),
        'control' => array(
            'label'                 =>  __( 'Copyright Text', 'onlinemag' ),
            'section'               => 'onlinemag-footer-options',
            'type'                  => 'text_html',
            'priority'              => 20,
        )
    );