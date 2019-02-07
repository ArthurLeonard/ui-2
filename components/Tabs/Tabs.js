
class TabLink {

    constructor(link) {
        this.link = link;
            // store tab number in this.data
        this.data = this.link.dataset.tab;
        console.log(`this.data is : ${this.data}`);

            // store a reference to tab item matching current tab link
        this.tabItem = document.querySelector(`.tab-item[data-tab = '${this.data}']`);
        this.tabItem = new TabItem(this.tabItem);

        this.link.addEventListener('mouseover', () => this.selectLink() );


    } // end constructor

    /**** gives current tab active-tab attribute  ****/
    /**** removing it from other ****/
    selectLink() {
        console.log(`In selectLink method with tab ${this.link.classList}`);

            // grab all tabs
        const tabs = document.querySelectorAll('.tab');
        console.log(`query selector found ${tabs}`);

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
contact.addEventListener("click", function(){ alert("Suggestions? We would love to hear from you!"); });




// Function to change the text content of the h2's
function modifyText() {
    
        // change h2 texts on the left
    var lefts = document.querySelectorAll(".h2-class");

    var result = Array.from(lefts).filter(left => left.textContent == "Preserve Memories");
    console.log(result[0].textContent);
    result[0].textContent = "Travel Back to Special Moments";

    var result = Array.from(lefts).filter(left => left.textContent == "Access Your Journal From Anywhere");
    console.log(result[0].textContent);
    result[0].textContent = "On The Train or At Your Home";

    var result = Array.from(lefts).filter(left => left.textContent == "Easy to Use Interface");
    console.log(result[0].textContent);
    result[0].textContent = "Access and Edit Your Entries Easily";

    var result = Array.from(lefts).filter(left => left.textContent == "Start Your Journal");
    console.log(result[0].textContent);
    result[0].textContent = "Life is a journey. record it.";

    var result = Array.from(lefts).filter(left => left.textContent == "Contact Us");
    result[0].textContent = "Questions? Comments? We want to hear from you";

  }
  
    // Trigger text change when title section is clicked
  var el = document.querySelectorAll(".left");
  el.forEach(element => element.addEventListener("click", modifyText) );