
  /*********************************************************************************************************** */
 /*  TABS.JS : uses components to make a tabbed sticky note image and triggers a text change for h2 elements  */
/*********************************************************************************************************** */


class TabLink {

    constructor(link) {
        this.link = link;
            // store tab number in this.data
        this.data = this.link.dataset.tab;

            // store a reference to tab item matching current tab link
        this.tabItem = document.querySelector(`.tab-item[data-tab = '${this.data}']`);
        this.tabItem = new TabItem(this.tabItem);

            // mouseover is nicer for desktop
        this.link.addEventListener('mouseover', () => this.selectLink() );

            // click is better for mobile and tablet
        this.link.addEventListener('click', () => this.selectLink() );


    } // end constructor


     /**** gives current tab active-tab attribute  ****/
    /**** removing it from other                  ****/

    selectLink() {
        console.log(`In selectLink method with tab ${this.link.classList}`);

            // grab all tabs
        const tabs = document.querySelectorAll('.tab');

            // remove active-tab attribute from all tabs
        Array.from(tabs).forEach(tb => tb.classList.remove('active-tab'));

            // add active-tab attribute to current tab
        this.link.classList.add('active-tab');

            // invoke selectItem method of TabItem class which which selects the proper text to display for each tab
        this.tabItem.selectItem();


    } // end selectLink method

} // end TabLink class


class TabItem {
    constructor(item){
        this.item = item;
    } // end constructor

     /****    Removes selected-item attribute from all items           **** /
    /****     and assigns it to the current tab item                  ****/
    selectItem() {

            // store all tab items in items
        const items = document.querySelectorAll('.tab-item');

            // strip the selected-item attribute from all tab items
        items.forEach( itm => itm.classList.remove('selected-item'));

            // add selected-item attribute to current items class list
        this.item.classList.add('selected-item');

    } // end selectItem method
}
 // end TabItem class

    // select all tabs
const tabs = document.querySelectorAll('.tab');

    // turn each tab into a TabLink component
tabs.forEach( tb => new TabLink(tb));


const contact = document.querySelector('.contact');
contact.addEventListener("click", function(){ alert("Help us improve our app and you could win an Ipad!"); });






  /********                                                                      ********/  
 /****  CHANGE ALL H2 LINKS ON THE LEFT TO GIVE A DIFFERENT MESSAGE AFTER CLICKED  *****/
/*********                                                                       *****/
    

    // counter used in modifyText so that text is only transformed once
var a = 0;


/***** Function to replace the text content of the h2's         *****/
function modifyText() {
        

    if( a == 4) {
        // change h2 texts on the left
    var lefts = document.querySelectorAll(".h2-class");

    var result = Array.from(lefts).filter(left => left.textContent.includes("Preserve Memories"));
    result[0].textContent = `Travel Back in Time`;

    var result = Array.from(lefts).filter(left => left.textContent.includes("Access Your Journal From Anywhere") );
    result[0].textContent = "On The Train or At Home";

    var result = Array.from(lefts).filter(left => left.textContent.includes("Easy to Use Interface") );
    result[0].textContent = "Navigate entries easily";

    var result = Array.from(lefts).filter(left => left.textContent.includes("Start Your Journal") );
    result[0].textContent = "Life is a journey. record it.";

    var result = Array.from(lefts).filter(left => left.textContent.includes("Contact Us") );
    result[0].textContent = "Questions? Comments? We want to hear from you!";
    } //endif

    a++;        // Text change will happend only after all click links are sfollowed and then will only happen once

  } // end modifyText()
  

    // Trigger text change when title section is clicked
  var el = document.querySelectorAll(".left");
  el.forEach(element => element.addEventListener("click", modifyText) );