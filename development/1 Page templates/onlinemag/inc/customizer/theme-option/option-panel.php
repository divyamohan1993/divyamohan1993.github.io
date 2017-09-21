<?php
global $onlinemag_panels;
/*creating panel for theme settings*/
$onlinemag_panels['onlinemag-theme-options'] =
    array(
        'title'          => __( 'Theme Options', 'onlinemag' ),
        'priority'       => 235
    );

/*footer options */
require get_template_directory().'/inc/customizer/theme-option/footer.php';

/*layout options */
require get_template_directory().'/inc/customizer/theme-option/layout-options.php';

/*breadcrumb options */
require get_template_directory().'/inc/customizer/theme-option/breadcrumb.php';

/*back to top options */
require get_template_directory().'/inc/customizer/theme-option/back-to-top.php';