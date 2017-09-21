<?php
global $onlinemag_panels;
global $onlinemag_sections;
global $onlinemag_settings_controls;
global $onlinemag_repeated_settings_controls;
global $onlinemag_customizer_defaults;

/*defaults values*/
$onlinemag_customizer_defaults['onlinemag-blog-enable'] = 1;
$onlinemag_customizer_defaults['onlinemag-blog-category'] = 1;

/*aboutoptions*/
$onlinemag_sections['onlinemag-blog-options'] =
    array(
        'priority'       => 230,
        'title'          => __( 'Home Blog Options', 'onlinemag' ),
    );

$onlinemag_settings_controls['onlinemag-blog-enable'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-blog-enable']
        ),
        'control' => array(
            'label'                 =>  __( 'Enable Blog Section', 'onlinemag' ),
            'section'               => 'onlinemag-blog-options',
            'type'                  => 'checkbox',
            'priority'              => 10,
            'active_callback'       => ''
        )
    );


/*creating setting control for onlinemag-fs-Category start*/

    $onlinemag_repeated_settings_controls['onlinemag-blog-category'] =
        array(
            'repeated' => 3,
            'onlinemag-blog-category-ids' => array(
                'setting' =>     array(
                    'default'              => $onlinemag_customizer_defaults['onlinemag-blog-category'],

                ),
                'control' => array(
                    'label'                 =>  __( 'Select Category For Blog %s', 'onlinemag' ),
                    'description'           =>  __( 'Selected category will displayed below the slider', 'onlinemag' ),
                    'section'               => 'onlinemag-blog-options',
                    'type'                  => 'category_dropdown',
                    'priority'              => 60,
                    'active_callback'       => ''
                )
            ),
            'onlinemag-blog-category-divider' => array(
                'control' => array(
                    'section'               => 'onlinemag-blog-options',
                    'type'                  => 'message',
                    'priority'              => 20,
                    'description'           => '<br /><hr />'
                )
            )
        );