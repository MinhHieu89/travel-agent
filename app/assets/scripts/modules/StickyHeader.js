import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor() {
        this.lazyImages = $('.lazyload');
        this.siteHeader = $('.site-header');
        this.headerTriggerElement = $('.large-hero__title');
        this.pageSections = $('.page-section'); 
        this.siteHeaderLinks = $('.primary-nav a');
        this.createHeaderWaypoint();
        this.createPageSectionWaypoints();
        this.addSmoothScroll();
        this.refreshWaypoints();
    }

    refreshWaypoints() {
        this.lazyImages.load(function() {
            Waypoint.refreshAll();
        });
    }

    addSmoothScroll() {
        this.siteHeaderLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: that.headerTriggerElement[0],
            handler: function(direction) {
                if (direction == 'down') {
                    that.siteHeader.addClass('site-header--dark');
                } else {
                    that.siteHeader.removeClass('site-header--dark');
                }
            }
        });
    }

    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function() {
            var currentSection = this;
            new Waypoint({
                element: currentSection,
                handler: function(direction) {
                    if (direction == 'down') {
                        var link = currentSection.getAttribute('data-matching-link');
                        that.siteHeaderLinks.removeClass('is-current-link');
                        $(link).addClass('is-current-link');
                    }
                },
                offset: '20%'
            });

            new Waypoint({
                element: currentSection,
                handler: function(direction) {
                    if (direction == 'up') {
                        var link = currentSection.getAttribute('data-matching-link');
                        that.siteHeaderLinks.removeClass('is-current-link');
                        $(link).addClass('is-current-link');
                    }
                },
                offset: '-40%'
            });
        });
        
    }
}

export default StickyHeader;