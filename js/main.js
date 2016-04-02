/*---------------------- 
FULL HOUSE MAIN JavaScript
-----------------------*/

/*---------------------- 
GLOBAL VARIABLES
-----------------------*/
var mobileSize = false;
var tabletSize = false;
var desktopSize = false

  //Sizes for Window View Points
  var MobileMaximumWidth = 749;
  var TabletMaximumWidth = 1099;

  var slideRightSide = false;



  /*---------------------- 
GENERAL CONTROLL AND OPTION VARIABLES
-----------------------*/


          function checkWindowSize()
          {
          //mobile
          if($(window).width() <= MobileMaximumWidth)
          {
            mobileSize = true;
            tabletSize = false;
            desktopSize = false;
          }
          //tablet
          if($(window).width() <= TabletMaximumWidth && $(window).width() >= MobileMaximumWidth)
          {
            mobileSize = false;
            tabletSize = true;
            desktopSize = false;
          }
          //desktop
          if($(window).width() >= TabletMaximumWidth+1)
          {
            mobileSize = false;
            tabletSize = false;
            desktopSize = true;
          }
          //console.log(mobileSize + " " + tabletSize + " " + desktopSize );
        }




/*---------------------- 
DOCUMENT READY FUNCTION
-----------------------*/


$( document ).ready(function() {

    /*$('#fullpage').fullpage({
        anchors:['firstPage', 'secondPage', 'thirdPage'],
        touchSensitivity: 1,
        fitToSection: false,
        scrollOverflow: true,
        loopHorizontal: false
    });


	//https://github.com/alvarotrigo/fullPage.js#fullpagejs
	//https://github.com/jquery/jquery-mousewheel
	/*$('#fullpage').on('mousewheel', function(event) {
	       if (event.deltaY > 0){$.fn.fullpage.moveSlideRight();}
	       else{$.fn.fullpage.moveSlideLeft();}
	});

	$('#fullpage').on('mousewheel', function(event) {
	       if (event.deltaY > 0){$.fn.fullpage.moveSlideRight();}
	       else{$.fn.fullpage.moveSlideLeft();}
	});*/

    $('#leftSite').pagepiling({
        direction: 'horizontal',
	    anchors: ['Home', 'Wissenswertes', 'Veranstaltungen', 'Besucher'],
	    navigation: false,
	    menu: '#mainMenu'
    });

  $('#rightSite').slick({
	  dots: true,
	  speed: 300,
	  variableWidth: true,
	  slidesToShow: 1,
	  centerMode: true
  });


	$( "#rightSite" ).click(function() {
		if(slideRightSide == false)
		{
			$( "#rightSite" ).animate({
	    	left: "10%",
	  		}, 500 );
	  		slideRightSide = true;
		}
		else
		{
			$( "#rightSite" ).animate({
	    	left: "90%",
	  		}, 500 );
	  		slideRightSide = false;
		}
	});

	checkWindowSize();


    //check if window resize
    $( window ).resize(function() 
    {
    	checkWindowSize();
    });

});