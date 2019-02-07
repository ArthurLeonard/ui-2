


class Rbutton {

    constructor(button) {
        this.button = button;

        this.button.addEventListener('click', () => this.setActive() );
    } // end constructor

    setActive() {

        console.log(`Right arrow button was clicked`);

        const activeslide = document.querySelector('.active-slide');
        const allslides = Array.from(document.querySelectorAll('.mySlides' ) );

        console.log(`Active slide is ${activeslide.dataset.slides}`);
        activeslide.classList.remove('active-slide');
        activeslide.classList.add('.amina');
        console.log(`class list of ${activeslide.dataset.slides} is ${activeslide.classList}`);

        for (let i = 0; i < allslides.length; i++) {

            if ( (parseInt(activeslide.dataset.slides) + 1) % allslides.length == allslides[i].dataset.slides ) {
            console.log('boo');
            allslides[i].classList.add('active-slide');
            }

        } // endfor

    } // end setActive method


} // end Rbutton class


class Lbutton {

    constructor(button) {
        this.button = button;

        this.button.addEventListener('click', () => this.setActive() );
    } // end constructor

    setActive() {

        console.log(`Left arrow button was clicked`);

        const activeslide = document.querySelector('.active-slide');
        const allslides = Array.from(document.querySelectorAll('.mySlides' ) );

        console.log(`Active slide is ${activeslide.dataset.slides}`);
        activeslide.classList.remove('active-slide');
        console.log(`class list of ${activeslide.dataset.slides} is ${activeslide.classList}`);
        console.log(-1%4);
        for (let i = 0; i < allslides.length; i++) {

            if ( (parseInt(activeslide.dataset.slides) + allslides.length -1) % allslides.length == allslides[i].dataset.slides ) {
            console.log('boo');
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

