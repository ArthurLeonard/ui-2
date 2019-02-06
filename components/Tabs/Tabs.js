
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