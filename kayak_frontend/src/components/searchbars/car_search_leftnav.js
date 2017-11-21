import React,{ Component } from 'react';
import './../../images/home.css';

class CarSearchLeftNav extends Component{
  toggleCheckbox(checkbox) {
    //need to handle undefined
      console.log("checkbox.checked: ",checkbox.checked);
      checkbox.checked = !checkbox.checked;
  }
  render() {
    console.log("Search leftnav Bar Page");
    return (
      <div >
          <input type="checkbox" className="checkthis"
          onClick={() => this.toggleCheckbox(this)}/>
      </div>
          );
  }
}

export default CarSearchLeftNav;
