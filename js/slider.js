$(document).ready(function () {

    var options = {
        $AutoPlay: true,
        $FillMode: 1,
        $LazyLoading: 3,
        $UISearchMode: 2,
        $PauseOnHover: 0,
        $BulletNavigatorOptions: {
            $AutoCenter: 1,
            $SpacingX: 5,
            $Class: $JssorBulletNavigator$,
            $ChanceToShow: 2,
        }
    };
    var jssor_slider1 = new $JssorSlider$("slider1_container", options);

    function ScaleSlider() {
        var bodyWidth = document.body.clientWidth;
        if (bodyWidth) {
            jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);


});
		


