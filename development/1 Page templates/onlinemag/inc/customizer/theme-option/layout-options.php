<?php
global $onlinemag_sections;
global $onlinemag_settings_controls;
global $onlinemag_repeated_settings_controls;
global $onlinemag_customizer_defaults;

/*defaults values*/
$onlinemag_customizer_defaults['onlinemag-enable-static-page'] = 1;

$onlinemag_customizer_defaults['onlinemag-default-layout'] = 'right-sidebar';
$onlinemag_customizer_defaults['onlinemag-single-post-image-align'] = 'full';
$onlinemag_customizer_defaults['onlinemag-excerpt-length'] = '50';
$onlinemag_customizer_defaults['onlinemag-archive-layout'] = 'thumbnail-and-excerpt';
$onlinemag_customizer_defaults['onlinemag-archive-image-align'] = 'full';

$onlinemag_sections['onlinemag-layout-options'] =
    array(
        'priority'       => 20,
        'title'          => __( 'Layout Options', 'onlinemag' ),
        'panel'          => 'onlinemag-theme-options',
    );

    /*home page static page display*/
$onlinemag_settings_controls['onlinemag-enable-static-page'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-enable-static-page'],
        ),
        'control' => array(
            'label'                 =>  __( 'Enable Static Front Page', 'onlinemag' ),
            'description'           =>  __( 'If you disable this the static page will be disappera form the home page and other section from customizer will reamin as it is', 'onlinemag' ),
            'section'               => 'onlinemag-layout-options',
            'type'                  => 'checkbox',
            'priority'              => 10,
        )
    );
/*layout-options option responsive lodader start*/

$onlinemag_settings_controls['onlinemag-default-layout'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-default-layout'],
        ),
        'control' => array(
            'label'                 =>  __( 'Default Layout', 'onlinemag' ),
            'description'           =>  __( 'Please note that this section can be overridden for individual page/posts', 'onlinemag' ),
            'section'               => 'onlinemag-layout-options',
            'type'                  => 'select',
            'choices'               => array(
                'right-sidebar' => __( 'Content - Primary Sidebar', 'onlinemag' ),
                'left-sidebar' => __( 'Primary Sidebar - Content', 'onlinemag' ),
                'no-sidebar' => __( 'No Sidebar', 'onlinemag' )
            ),
            'priority'              => 10,
            'active_callback'       => ''
        )
    );


$onlinemag_settings_controls['onlinemag-single-post-image-align'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-single-post-image-align'],
        ),
        'control' => array(
            'label'                 =>  __( 'Alignment Of Image In Single Post/Page', 'onlinemag' ),
            'section'               => 'onlinemag-layout-options',
            'type'                  => 'select',
            'choices'               => array(
                'full' => __( 'Full', 'onlinemag' ),
                'right' => __( 'Right', 'onlinemag' ),
                'left' => __( 'Left', 'onlinemag' ),
                'no-image' => __( 'No image', 'onlinemag' )
            ),
            'priority'              => 40,
            'description'           =>  __( 'Please note that this setting can be override from individual post/page', 'onlinemag' ),
        )
    );

    $onlinemag_settings_controls['onlinemag-excerpt-length'] =
        array(
            'setting' =>     array(
                'default'              => $onlinemag_customizer_defaults['onlinemag-excerpt-length'],
            ),
            'control' => array(
                'label'                 =>  __( 'Excerpt Length (in words)', 'onlinemag' ),
                'section'               => 'onlinemag-layout-options',
                'type'                  => 'number',
                'priority'              => 40,
            )
        );

        $onlinemag_settings_controls['onlinemag-archive-layout'] =
            array(
                'setting' =>     array(
                    'default'              => $onlinemag_customizer_defaults['onlinemag-archive-layout'],
                ),
                'control' => array(
                    'label'                 =>  __( 'Archive Layout', 'onlinemag' ),
                    'section'               => 'onlinemag-layout-options',
                    'type'                  => 'select',
                    'choices'               => array(
                        'excerpt-only' => __( 'Excerpt Only', 'onlinemag' ),
                        'thumbnail-and-excerpt' => __( 'Thumbnail and Excerpt', 'onlinemag' ),
                        'full-post' => __( 'Full Post', 'onlinemag' ),
                        'thumbnail-and-full-post' => __( 'Thumbnail and Full Post', 'onlinemag' ),
                    ),
                    'priority'              => 55,
                )
            );