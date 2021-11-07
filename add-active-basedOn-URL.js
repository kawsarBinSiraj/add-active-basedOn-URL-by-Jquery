
/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */



/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // add class by document path
    $(function () {
        var CurrentUrl = document.URL;
        var CurrentUrlEnd = CurrentUrl.split('/').filter(Boolean).pop();

        $(".navbar-nav a").each(function () {
            var ThisUrl = $(this).attr('href');
            var ThisUrlEnd = ThisUrl.split('/').filter(Boolean).pop();
            if (ThisUrlEnd == CurrentUrlEnd) {
                $(this).addClass('active');
                if ($('.navbar-nav .dropdown-item').hasClass('active')) {
                    $(this).closest('.dropdown-menu').addClass('show');
                    $(this).closest('.dropdown').find('.dropdown-toggle').addClass('active');
                }
            }
        });
    });

});
