<?php
global $onlinemag_panels;
global $onlinemag_sections;
global $onlinemag_settings_controls;
global $onlinemag_repeated_settings_controls;
global $onlinemag_customizer_defaults;

/*creating panel for fonts-setting*/
$onlinemag_panels['onlinemag-top-header-section'] =
    array(
        'title'          => __( 'Header Section Settings', 'onlinemag' ),
        'priority'       => 190
    );

$onlinemag_sections['onlinemag-feature-header-section'] =
    array(
        'priority'       => 40,
        'title'          => __( 'Top Header Settings', 'onlinemag' ),
        'panel'         => 'onlinemag-top-header-section',
    );

$onlinemag_sections['onlinemag-feature-add'] =
    array(
        'priority'       => 50,
        'title'          => __( 'Header Advertisement Settings', 'onlinemag' ),
        'panel'         => 'onlinemag-top-header-section',
    );

$onlinemag_customizer_defaults['onlinemag-header-add'] = '';
$onlinemag_customizer_defaults['onlinemag-home-header-add-link'] = '#';
$onlinemag_customizer_defaults['onlinemag-header-enable-search'] = 1;
$onlinemag_customizer_defaults['onlinemag-header-enable-home-link'] = 1;
$onlinemag_customizer_defaults['onlinemag-header-enable-tinker'] = 1;
$onlinemag_customizer_defaults['onlinemag-header-tinker-title'] = __('Latest','onlinemag');
$onlinemag_customizer_defaults['onlinemag-header-no-of-tinker'] = 5;
$onlinemag_customizer_defaults['onlinemag-header-enable-date'] = 1;


$onlinemag_settings_controls['onlinemag-header-enable-search'] =
array(
    'setting' =>     array(
        'default'              => $onlinemag_customizer_defaults['onlinemag-header-enable-search'],
    ),
    'control' => array(
        'label'                 =>  __( 'Enable Search', 'onlinemag' ),
        'section'               => 'onlinemag-feature-header-section',
        'type'                  => 'checkbox',
        'priority'              => 40,
    )
);


$onlinemag_settings_controls['onlinemag-header-enable-home-link'] =
array(
    'setting' =>     array(
        'default'              => $onlinemag_customizer_defaults['onlinemag-header-enable-home-link'],
    ),
    'control' => array(
        'label'                 =>  __( 'Enable Home', 'onlinemag' ),
        'section'               => 'onlinemag-feature-header-section',
        'type'                  => 'checkbox',
        'priority'              => 45,
    )
);

$onlinemag_settings_controls['onlinemag-header-enable-date'] =
array(
    'setting' =>     array(
        'default'              => $onlinemag_customizer_defaults['onlinemag-header-enable-date'],
    ),
    'control' => array(
        'label'                 =>  __( 'Enable Date', 'onlinemag' ),
        'section'               => 'onlinemag-feature-header-section',
        'type'                  => 'checkbox',
        'priority'              => 35   ,
    )
);

$onlinemag_settings_controls['onlinemag-header-enable-tinker'] =
array(
    'setting' =>     array(
        'default'              => $onlinemag_customizer_defaults['onlinemag-header-enable-tinker'],
    ),
    'control' => array(
        'label'                 =>  __( 'Header Tiker Enable', 'onlinemag' ),
        'section'               => 'onlinemag-feature-header-section',
        'type'                  => 'checkbox',
        'priority'              => 20,
    )
);

$onlinemag_settings_controls['onlinemag-header-tinker-title'] =
array(
    'setting' =>     array(
        'default'              => $onlinemag_customizer_defaults['onlinemag-header-tinker-title'],
    ),
    'control' => array(
        'label'                 =>  __( 'Header Tinker Title', 'onlinemag' ),
        'section'               => 'onlinemag-feature-header-section',
        'type'                  => 'text',
        'priority'              => 25,
    )
);

$onlinemag_settings_controls['onlinemag-header-no-of-tinker'] =
array(
    'setting' =>     array(
        'default'              => $onlinemag_customizer_defaults['onlinemag-header-no-of-tinker'],
    ),
    'control' => array(
        'label'                 =>  __( 'No of Tinker to Display', 'onlinemag' ),
        'section'               => 'onlinemag-feature-header-section',
        'type'                  => 'number',
        'priority'              => 30,
        'active_callback'       => '',
        'input_attrs' => array( 'min' => 1, 'max' => 20),
    )
);

/*creating setting control for onlinemag-layout-options start*/
$onlinemag_settings_controls['onlinemag-header-add'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-header-add'],
        ),
        'control' => array(
            'label'                 =>  __( 'Header Banner Addvertise', 'onlinemag' ),
            'description'           =>  __( 'Upload Image to be on header banner', 'onlinemag' ),
            'section'               => 'onlinemag-feature-add',
            'type'                  => 'image',
            'priority'              => 20,
        )
    );


/*header banner url*/
$onlinemag_settings_controls['onlinemag-home-header-add-link'] =
array(
    'setting' =>     array(
        'default'              => $onlinemag_customizer_defaults['onlinemag-home-header-add-link']
    ),
    'control' => array(
        'label'                 =>  __( 'Redirect Advertisement URL', 'onlinemag' ),
        'section'               => 'onlinemag-feature-add',
        'type'                  => 'url',
        'priority'              => 60,
        'active_callback'       => ''
    )
);


