import { Component } from "../core/component";

export class NavigationComponent extends Component {
  constructor(id) {
    super(id)
  }
  init() {

    this.$el.addEventListener('click', tabClickHandler.bind(this))

  }
  registerTabs(tabs){
    this.tabs = tabs
  }
}

function tabClickHandler(event) {
  event.preventDefault()
  if (event.target.classList.contains('tab')) {
    const tabs = this.$el.querySelectorAll('.tab')
    tabs.forEach(tab => {
      tab.classList.remove('active')
    });
    event.target.classList.add('active')

    const activeTab = this.tabs.find(tabBlock => tabBlock.name === event.target.dataset.name )
    this.tabs.forEach(tabBlock =>  tabBlock.component.hide());
    activeTab.component.show()
  }

}