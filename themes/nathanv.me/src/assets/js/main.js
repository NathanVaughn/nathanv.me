/* jshint esversion: 6 */

// lazyloading config
window.lazySizesConfig = window.lazySizesConfig || {};
lazySizesConfig.preloadAfterLoad = true;

import { Sidenav, ScrollSpy, Collapsible, Tabs, Modal, Materialbox, Tooltip } from "materialize-css";
import "lazysizes";
import mixitup from "mixitup";

document.addEventListener("DOMContentLoaded", function () {
    var elems;
    var options;

    // sidenav
    elems = document.querySelectorAll(".sidenav");
    Sidenav.init(elems);

    // scrollspy for navbar
    elems = document.querySelectorAll(".scrollspy");
    options = {
        scrollOffset: 75,
    };
    ScrollSpy.init(elems, options);

    // collpasible content
    elems = document.querySelectorAll(".collapsible.popout");
    Collapsible.init(elems, {
        accordion: false,
    });

    // tabs for the projects
    elems = document.querySelectorAll(".tabs");
    Tabs.init(elems);

    // mix it up
    mixitup(".mix-container");

    // project modals
    elems = document.querySelectorAll(".modal");
    Modal.init(elems);

    // Internet Explorer 6-11
    var isIE =
        navigator.userAgent.indexOf("MSIE ") > -1 ||
        navigator.userAgent.indexOf("Trident/") > -1;

    if (!isIE) {
        // currently broken on ie, so don't load
        // image lightboxes
        elems = document.querySelectorAll(".materialboxed");
        Materialbox.init(elems);
    }

    // tooltips for social media
    elems = document.querySelectorAll(".tooltipped");
    options = {
        margin: 25,
    };
    Tooltip.init(elems, options);
});
