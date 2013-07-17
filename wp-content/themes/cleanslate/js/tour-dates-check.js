// Homepage function to trigger On Tour Labelling
$j(document).ready(function() {
    
    // Start artists array
    var artists = new Array();
    
    // Label the band if on tour
    var labelOnTourHome = function(onTour, currentBand) {
        
        // Add .on-tour class to bands on tour
        if( onTour === true ){
            var artistSelector = '.artist[data-band="' + currentBand + '"]';
            $j(artistSelector).addClass('on-tour');
        }
        
    };
    
    // Success callback for tourDatesFeed() function
    var tourDatesFeedCheck = function(feeds, currentBand) {
        
        // If have tour dates, set onTour to true
        if( feeds.length > 1 ) {
            
            var onTour = true;
            
            labelOnTourHome(onTour, currentBand);
        } else {
            // Check for manually added tour dates
            var currentID = artists[currentBand]['id'];
            tourDatesManualCheck(labelOnTourHome, currentBand, currentID);
        }
        
    };
    
    // Check if a band is On Tour
    var checkOnTour = function() {
        
        $j('.artist').each(function() {
            
            // Set band variable
            var currentBand = $j(this).attr('data-band');
            var currentID = $j(this).attr('data-id');
            
            // Set Artist Post ID
            artists[currentBand] = {
                id: currentID
            };
            
            // Run external function with tourDatesCheck as callback
            tourDatesFeed(tourDatesFeedCheck, currentBand);
        });
        
    };
    
    // Only runs on the home page
    checkOnTour();
    
});