/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2014 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */



//make all images responsive
$('img').addClass('img-responsive');

// remove default hashtag behavior
$('article .container a[href="#"]').click( function(e) {
      e.preventDefault();
} );

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }
});

// Jekyll Search configuration
$(function() {
    $("#search-query").lunrSearch({
      indexUrl: '/js/index.json',   // Url for the .json file containing search index data
      results : '#search-results',  // selector for containing search results element
      entries : '.entries',         // selector for search entries containing element (contained within results above)
      template: '#search-results-template'  // selector for Mustache.js template
    });
});

// Image zoom
! function() {
    function a() {
        var a = this;
        this.init = function() {
            $(document).ready(function() {
                var b = $("<div class='image-zoom'></div>");
                a.zoomv = b, $("div.image-zoom").length || $("body").append(b), $("img[data-zoom]").each(function() {
                    var c = $(this);
                    c.attr("src", c.attr("src") + "?" + (new Date).getTime()), c.load(function() {
                        var b = $(this).attr("data-zoom"),
                            c = $("<div data-zoomContainer></div>");
                        if (c.addClass("zoom-container"), b = b.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '), b = b ? JSON.parse(b) : {}, b.animation && c.addClass(b.animation), b.theme || (b.theme = "dark", c.addClass("theme"), c.addClass("dark"), $("div.image-zoom").addClass("dark"), $("div.image-zoom").addClass("theme")), b.speed || (b.speed = "normal"), b.url) {
                            var d = $(this).clone();
                            d.attr("src", b.url + "?" + (new Date).getTime()), c.append(d)
                        } else c.append($(this).clone());
                        c.data("options", b), c.data("original", {
                            parent: $(this),
                            position: $(this).offset()
                        }), c.css({
                            position: "absolute",
                            width: $(this).outerWidth(),
                            height: $(this).outerHeight(),
                            top: $(this).offset().top,
                            left: $(this).offset().left
                        }), $(this).data("container", c), c.addClass("anim-" + b.speed), $("body").append(c), $(this).on("click", function() {
                            a.pop($(this).data("container"))
                        }), c.on("click", function() {
                            a.unpop($(this))
                        })
                    }), $(this).bind("expand", function() {
                        a.pop($(this).data("container"))
                    }), $(this).bind("retract", function() {
                        a.unpop($(this).data("container"))
                    })
                }), setInterval(function() {
                    a.reLayout()
                }, 2e3)
            }), $(window).resize(function() {
                a.reLayout()
            })
        }, this.reLayout = function() {
            $("div[data-zoomContainer]").each(function() {
                if ($(this).hasClass("open")) $(this).css({
                    top: $(window).scrollTop() + "px",
                    left: "0px",
                    width: "100%",
                    height: "100%"
                });
                else {
                    var b = $(this).data("original");
                    $(this).css({
                        width: b.parent.outerWidth(),
                        height: b.parent.outerHeight(),
                        top: b.parent.offset().top,
                        left: b.parent.offset().left
                    })
                }
            })
        }, this.pop = function(b) {
            a.zoomv.removeClass(), a.zoomv.addClass("image-zoom").addClass("theme").addClass(b.data("options").theme), a.zoomv.addClass("show"), b.addClass("open"), b.css({
                position: "absolute",
                top: $(window).scrollTop() + "px",
                left: "0px",
                width: "100%",
                height: "100%"
            })
        }, this.unpop = function(b) {
            a.zoomv.removeClass("show");
            var c = b.data("original").parent;
            b.css({
                position: "absolute",
                top: c.offset().top + "px",
                left: c.offset().left + "px",
                width: c.outerWidth() + "px",
                height: c.outerHeight() + "px"
            }), b.removeClass("open")
        }, this.init()
    }
    var a = new a
}();
