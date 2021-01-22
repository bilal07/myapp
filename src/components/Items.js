import React, { Component } from 'react'


class Items extends Component {
    
    render() {
        const items = this.props.items;
        const theItems = items.map((item) => {
            return(
                <div>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
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