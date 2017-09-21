<?php
/**
 * onlinemag Custom Metabox
 *
 * @package onlinemag
 */
$onlinemag_post_types = array(
    'post',
    'page'
);

add_action('add_meta_boxes', 'onlinemag_add_layout_metabox');
function onlinemag_add_layout_metabox() {
    global $post;
    $frontpage_id = get_option('page_on_front');
    if( $post->ID == $frontpage_id ){
        return;
    }

    global $onlinemag_post_types;
    foreach ( $onlinemag_post_types as $post_type ) {
        add_meta_box(
            'onlinemag_layout_options', // $id
            __( 'Layout options', 'onlinemag' ), // $title
            'onlinemag_layout_options_callback', // $callback
            $post_type, // $page
            'normal', // $context
            'high'// $priority
        );
    }

}
/* onlinemag sidebar layout */
$onlinemag_default_layout_options = array(
    'left-sidebar' => array(
        'value'     => 'left-sidebar',
        'thumbnail' => get_template_directory_uri() . '/inc/images/left-sidebar.png'
    ),
    'right-sidebar' => array(
        'value' => 'right-sidebar',
        'thumbnail' => get_template_directory_uri() . '/inc/images/right-sidebar.png'
    ),
    'no-sidebar' => array(
        'value'     => 'no-sidebar',
        'thumbnail' => get_template_directory_uri() . '/inc/images/no-sidebar.png'
    )
);
/* onlinemag featured layout */
$onlinemag_single_post_image_align_options = array(
    'full' => array(
        'value' => 'full',
        'label' => __( 'Full', 'onlinemag' )
    ),
    'right' => array(
        'value' => 'right',
        'label' => __( 'Right ', 'onlinemag' ),
    ),
    'left' => array(
        'value'     => 'left',
        'label' => __( 'Left', 'onlinemag' ),
    ),
    'no-image' => array(
        'value'     => 'no-image',
        'label' => __( 'No Image', 'onlinemag' )
    )
);

function onlinemag_layout_options_callback() {

    global $post , $onlinemag_default_layout_options, $onlinemag_single_post_image_align_options;
    $onlinemag_customizer_saved_values = onlinemag_get_all_options(1);

    /*onlinemag-single-post-image-align*/
    $onlinemag_single_post_image_align = $onlinemag_customizer_saved_values['onlinemag-single-post-image-align'];

    /*onlinemag default layout*/
    $onlinemag_single_sidebar_layout = $onlinemag_customizer_saved_values['onlinemag-default-layout'];

    wp_nonce_field( basename( __FILE__ ), 'onlinemag_layout_options_nonce' );
    ?>
    <table class="form-table page-meta-box">
        <!--Image alignment-->
        <tr>
            <td colspan="4"><em class="f13"><?php _e( 'Choose Sidebar Template', 'onlinemag' ); ?></em></td>
        </tr>
        <tr>
            <td>
                <?php
                $onlinemag_single_sidebar_layout_meta = get_post_meta( $post->ID, 'onlinemag-default-layout', true );
                if( false != $onlinemag_single_sidebar_layout_meta ){
                   $onlinemag_single_sidebar_layout = $onlinemag_single_sidebar_layout_meta;
                }
                foreach ($onlinemag_default_layout_options as $field) {
                    ?>
                    <div class="hide-radio radio-image-wrapper" style="float:left; margin-right:30px;">
                        <input id="<?php echo esc_attr( $field['value'] ); ?>" type="radio" name="onlinemag-default-layout"
                               value="<?php echo esc_attr( $field['value'] ); ?>"
                            <?php checked( $field['value'], $onlinemag_single_sidebar_layout ); ?>/>
                        <label class="description" for="<?php echo esc_attr( $field['value'] ); ?>">
                            <img src="<?php echo esc_url( $field['thumbnail'] ); ?>" />
                        </label>
                    </div>
                <?php } // end foreach
                ?>
                <div class="clear"></div>
            </td>
        </tr>
        <tr>
            <td><em class="f13"><?php _e( 'You can set up the sidebar content', 'onlinemag' ); ?> <a href="<?php echo esc_url( admin_url('/widgets.php') ); ?>"><?php _e( 'here', 'onlinemag' ); ?></a></em></td>
        </tr>
        <!--Image alignment-->
        <tr>
            <td colspan="4"><?php _e( 'Featured Image Alignment', 'onlinemag' ); ?></td>
        </tr>
        <tr>
            <td>
                <?php
                $onlinemag_single_post_image_align_meta = get_post_meta( $post->ID, 'onlinemag-single-post-image-align', true );
                if( false != $onlinemag_single_post_image_align_meta ){
                    $onlinemag_single_post_image_align = $onlinemag_single_post_image_align_meta;
                }
                foreach ($onlinemag_single_post_image_align_options as $field) {
                    ?>
                    <input id="<?php echo esc_attr( $field['value'] ); ?>" type="radio" name="onlinemag-single-post-image-align" value="<?php echo esc_attr( $field['value'] ); ?>" <?php checked( $field['value'], $onlinemag_single_post_image_align ); ?>/>
                    <label class="description" for="<?php echo esc_attr( $field['value'] ); ?>">
                        <?php echo esc_html( $field['label'] ); ?>
                    </label>
                <?php } // end foreach
                ?>
                <div class="clear"></div>
            </td>
        </tr>
    </table>

<?php }

/**
 * save the custom metabox data
 * @hooked to save_post hook
 */
function onlinemag_save_sidebar_layout( $post_id ) {
    global $post;
    // Verify the nonce before proceeding.
    if ( !isset( $_POST[ 'onlinemag_layout_options_nonce' ] ) || !wp_verify_nonce( $_POST[ 'onlinemag_layout_options_nonce' ], basename( __FILE__ ) ) ) {
        return;
    }

    // Stop WP from clearing custom fields on autosave
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }

    if ( !current_user_can( 'edit_page', $post_id ) ) {
        return $post_id;
    }
    
    if(isset($_POST['onlinemag-default-layout'])){
        $old = get_post_meta( $post_id, 'onlinemag-default-layout', true);
        $new = sanitize_text_field($_POST['onlinemag-default-layout']);
        if ($new && $new != $old) {
            update_post_meta($post_id, 'onlinemag-default-layout', $new);
        } elseif ('' == $new && $old) {
            delete_post_meta($post_id,'onlinemag-default-layout', $old);
        }
    }

    /*image align*/
    if(isset($_POST['onlinemag-single-post-image-align'])){
        $old = get_post_meta( $post_id, 'onlinemag-single-post-image-align', true);
        $new = sanitize_text_field($_POST['onlinemag-single-post-image-align']);
        if ($new && $new != $old) {
            update_post_meta($post_id, 'onlinemag-single-post-image-align', $new);
        } elseif ('' == $new && $old) {
            delete_post_meta($post_id,'onlinemag-single-post-image-align', $old);
        }
    }
}
add_action('save_post', 'onlinemag_save_sidebar_layout');
