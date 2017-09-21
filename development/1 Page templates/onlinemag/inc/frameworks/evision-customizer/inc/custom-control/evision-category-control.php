<?php
if ( class_exists( 'WP_Customize_Control' ) && !class_exists( 'Evision_Customizer_Category_Dropdown_Control' )){
    /**
     * Custom Control for category dropdown
     * @since 1.0.0
     *
     */
    class Evision_Customizer_Category_Dropdown_Control extends WP_Customize_Control {

        /**
         * Declare the control type.
         *
         * @access public
         * @var string
         */
        public $type = 'category_dropdown';

        /**
         * Function to  render the content on the theme customizer page
         *
         * @access public
         * @since 1.0.0
         *
         * @param null
         * @return void
         *
         */
        public function render_content() {
            $name = 'evision_customizer_dropdown_categories_' . $this->id;;
            $dropdown_categories = wp_dropdown_categories(
                array(
                    'name'              => $name,
                    'echo'              => 0,
                    'show_option_none'  =>__('Select','onlinemag'),
                    'option_none_value' => '0',
                    'selected'          => $this->value(),
                )
            );
            $dropdown_final = str_replace( '<select', '<select ' . $this->get_link(), $dropdown_categories );
            printf(
                '<label><span class="customize-control-title">%s</span> %s</label>',
                $this->label,
                $dropdown_final
            );
        }
    }
}
