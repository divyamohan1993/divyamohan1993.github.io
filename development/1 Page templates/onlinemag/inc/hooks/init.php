<?php
/**
 * Implement Editor Styles
 *
 * @since onlinemag 1.0.0
 *
 * @param null
 * @return null
 *
 */
add_action( 'init', 'onlinemag_add_editor_styles' );

if ( ! function_exists( 'onlinemag_add_editor_styles' ) ) :
    function onlinemag_add_editor_styles() {
        add_editor_style( 'editor-style.css' );
    }
endif;