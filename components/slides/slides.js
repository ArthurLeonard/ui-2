

     /*********************************************************************************************************** */
    /*      SLIDES.JS : uses components to create an image carousel that can handle any number of images         */
   /*       Avoids having to layer two classes by making classes for the buttons instead of the images          */ 
  /*        but makes up for this efficiency by effectively doubling the code by using separate classes        */
 /*        for the left and right buttons needlessly.                                                         */             
/*********************************************************************************************************** */



class Rbutton {

    constructor(button) {
        this.button = button;

        this.button.addEventListener('click', () => this.setActive() );
        this.button.addEventListener('mouseover', () => this.setActive() );

        this.button.addEventListener('mouseover', () => this.setBackGround( "pink"  ) );
        this.button.addEventListener('mouseout', () => this.setBackGround( "lightgray" ) );
    } // end constructor

        // simply sets the background since :hover is being an SOB
    setBackGround(coloor) {
        this.button.style.background = coloor;
        this.button.style.opacity = 0.5;
    }

        // removes active-slide attribute from last image and places it on next one
    setActive() {

            // store references to currently active image and an array of all images
        const activeslide = document.querySelector('.active-slide');
        const allslides = Array.from(document.querySelectorAll('.mySlides' ) );

        activeslide.classList.remove('active-slide');

            // find next image and make it active
        for (let i = 0; i < allslides.length; i++) {

            if ( (parseInt(activeslide.dataset.slides) + 1) % allslides.length == allslides[i].dataset.slides ) {
                 allslides[i].classList.add('active-slide');
            } // endif

        } // endfor

    } // end setActive method


} // end Rbutton class


class Lbutton {

    constructor(button) {
        this.button = button;

        this.button.addEventListener('click', () => this.setActive() );
        this.button.addEventListener('mouseover', () => this.setActive() );

        this.button.addEventListener('mouseover', () => this.setBackGround( "pink"  ) );
        this.button.addEventListener('mouseout', () => this.setBackGround( "lightgray" ) );
    } // end constructor

        // simply sets the background since :hover is being an SOB
    setBackGround(coloor) {
        this.button.style.background = coloor;
        this.button.style.opacity = 0.5;
    }
    
        // removes active-slide attribute from last image and places it on next one
    setActive() {
            // store references to currently active image and an array of all images
        const activeslide = document.querySelector('.active-slide');
        const allslides = Array.from(document.querySelectorAll('.mySlides' ) );

        activeslide.classList.remove('active-slide');

            // Same as before. should have had one class handle left and right clicks and have setActive() take an argument of -1 or 1
        for (let i = 0; i < allslides.length; i++) {

            if ( (parseInt(activeslide.dataset.slides) + allslides.length -1) % allslides.length == allslides[i].dataset.slides ) {
                allslides[i].classList.add('active-slide');
            }

        } // endfor
        
    } // end setActive method


} // end Rbutton class



      // create button components for left and right buttons
      const rbutton = document.querySelector('.right-button');
      const right = new Rbutton(rbutton);
      
      const lbutton = document.querySelector('.left-button');
      const left = new Lbutton(lbutton);

