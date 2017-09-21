<?php
global $onlinemag_panels;
global $onlinemag_sections;
global $onlinemag_settings_controls;
global $onlinemag_repeated_settings_controls;
global $onlinemag_customizer_defaults;

/*defaults values feature trip options*/
$onlinemag_customizer_defaults['onlinemag-feature-slider-enable'] = 1;
$onlinemag_customizer_defaults['onlinemag-feature-slider-number'] = 3;
$onlinemag_customizer_defaults['onlinemag-featured-slider-category'] = 1;
$onlinemag_customizer_defaults['onlinemag-fs-slider-mode'] = 'fadeout';
$onlinemag_customizer_defaults['onlinemag-fs-slider-time'] = 2;
$onlinemag_customizer_defaults['onlinemag-fs-slider-pause-time'] = 5;
$onlinemag_customizer_defaults['onlinemag-fs-enable-arrow'] = 1;
$onlinemag_customizer_defaults['onlinemag-fs-enable-autoplay'] = 1;
$onlinemag_customizer_defaults['onlinemag-fs-enable-title'] = 1;

/*feature slider enable setting*/
$onlinemag_sections['onlinemag-feature-section-options'] =
    array(
    	'title'          => __( 'Home Main Slider', 'onlinemag' ),
    	'priority'       => 200
    );

/*Feature section enable control*/
$onlinemag_settings_controls['onlinemag-feature-slider-enable'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-feature-slider-enable']
        ),
        'control' => array(
            'label'                 =>  __( 'Enable Feature Slider', 'onlinemag' ),
            'section'               => 'onlinemag-feature-section-options',
        	'description'    		=> __( 'Enable "Feature slider" on checked' , 'onlinemag' ),
            'type'                  => 'checkbox',
            'priority'              => 10,
            'active_callback'       => ''
        )
    );

    $onlinemag_settings_controls['onlinemag-fs-slider-mode'] =
        array(
            'setting' =>     array(
                'default'              => $onlinemag_customizer_defaults['onlinemag-fs-slider-mode']
            ),
            'control' => array(
                'label'                 =>  __( 'Slider Mode', 'onlinemag' ),
                'section'               => 'onlinemag-fs-slider-options',
                'type'                  => 'select',
                'choices'               => array(
                    'scrollHorz' => __( 'Default', 'onlinemag' ),
                    'fade' => __( 'Fade', 'onlinemag' ),
                    'fadeout' => __( 'Fade-Out', 'onlinemag' ),
                    'flipHorz' => __( 'Flip-Horz', 'onlinemag' ),
                ),
                'priority'              => 10,
                'active_callback'       => ''
            )
        );

/*No of feature slider selection*/
$onlinemag_settings_controls['onlinemag-feature-slider-number'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-feature-slider-number']
        ),
        'control' => array(
            'label'                 =>  __( 'Number Of Slider', 'onlinemag' ),
            'description'           => __( 'You need to have more than three post on that category to make slider section working properly' , 'onlinemag' ),
            'section'               => 'onlinemag-feature-section-options',
            'type'                  => 'select',
            'choices'               => array(
                1 => __( '1', 'onlinemag' ),
                2 => __( '2', 'onlinemag' ),
                3 => __( '3', 'onlinemag' ),
                4 => __( '4', 'onlinemag' )
            ),
            'priority'              => 20,
            'active_callback'       => ''
        )
    );


/*creating setting control for onlinemag-fs-Category start*/
$onlinemag_settings_controls['onlinemag-featured-slider-category'] =
    array(
        'setting' =>     array(
            'default'              => $onlinemag_customizer_defaults['onlinemag-featured-slider-category']
        ),
        'control' => array(
            'label'                 =>  __( 'Select Category For Slider', 'onlinemag' ),
            'description'           =>  __( 'If you have only choosen category then slider will dispaly form it, if not then will display latest post', 'onlinemag' ),
            'section'               => 'onlinemag-feature-section-options',
            'type'                  => 'category_dropdown',
            'priority'              => 30,
            'active_callback'       => ''
        )
    );