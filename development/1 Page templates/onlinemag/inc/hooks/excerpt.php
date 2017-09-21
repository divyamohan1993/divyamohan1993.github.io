<?php
if( ! function_exists( 'onlinemag_excerpt_length' ) ) :

    /**
     * Excerpt length
     *
     * @since  onlinemag 1.0.0
     *
     * @param null
     * @return int
     */
    function onlinemag_excerpt_length( $length ){
        global $onlinemag_customizer_all_values;
        $excerpt_length = $onlinemag_customizer_all_values['onlinemag-excerpt-length'];
        if ( empty( $excerpt_length) ) {
            $excerpt_length = $length;
        }
        return absint( $excerpt_length );

    }

endif;
add_filter( 'excerpt_length', 'onlinemag_excerpt_length', 999 );