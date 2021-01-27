import React, { Component } from 'react'
import  "./items.css";

class Items extends Component {
    
    render() {
        const items = this.props.items;
        const theItems = items.map((item) => {
                return(
                    <div className="item" key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                        <div>{item.age}</div>
                    </div>
                )
            
        })
        return (
            <div>
                {theItems}
            </div>
        );
    }
}

export default Items;