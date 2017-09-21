<?php
if ( ! function_exists( 'onlinemag_widget_section' ) ) :
    /**
     *
     * @since OnlineMag 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function onlinemag_widget_section() {
        ?>
        <!-- Main Content section -->
        <section class="wrapper wrap-main-content">
            <div class="container">
                <div class="row">
                    <!-- Main-panel Content -->
                    <div class="col-xs-12 col-sm-12 col-md-8 home-main-content">
                        <div class="main-panel-section">
                            <!-- Main-panel Top Content -->
                                <?php dynamic_sidebar( 'homepage-main-section' ); ?>
                        </div>
                    </div>
                    <!-- Sidebar Content -->
                    <div class="col-xs-12 col-sm-12 col-md-4 sidebar-home">
                        <div class="sidebar-sections">
                            <!-- Sidebar Top Content -->
                            <?php get_sidebar(); ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php
    }
endif;
add_action( 'onlinemag_action_front_page', 'onlinemag_widget_section', 50 );