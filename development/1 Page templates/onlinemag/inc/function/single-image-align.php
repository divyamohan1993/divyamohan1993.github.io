<?php 
/*image alignment single post*/

if( ! function_exists( 'onlinemag_single_post_image_align' ) ) :
    /**
     * onlinemag default layout function
     *
     * @since  onlinemag 1.0.0
     *
     * @param int
     * @return string
     */
    function onlinemag_single_post_image_align( $post_id = null ){
        global $onlinemag_customizer_all_values,$post;
        if( null == $post_id && isset ( $post->ID ) ){
            $post_id = $post->ID;
        }
        $onlinemag_single_post_image_align = $onlinemag_customizer_all_values['onlinemag-single-post-image-align'];
        $onlinemag_single_post_image_align_meta = get_post_meta( $post_id, 'onlinemag-single-post-image-align', true );

        if( false != $onlinemag_single_post_image_align_meta ) {
            $onlinemag_single_post_image_align = $onlinemag_single_post_image_align_meta;
        }
        return $onlinemag_single_post_image_align;
    }
endif;