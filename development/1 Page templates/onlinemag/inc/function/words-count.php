<?php
/**
* Returns word count of the sentences.
*
* @since onlinemag 1.0.0
*/
if ( ! function_exists( 'onlinemag_words_count' ) ) :
	function onlinemag_words_count( $length = 25, $onlinemag_content = null ) {
		$length = absint( $length );
		$source_content = preg_replace( '`\[[^\]]*\]`', '', $onlinemag_content );
		$trimmed_content = wp_trim_words( $source_content, $length, '...' );
		return $trimmed_content;
	}
endif;