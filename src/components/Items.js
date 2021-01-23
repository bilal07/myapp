import React, { Component } from 'react'


class Items extends Component {
    
    render() {
        const items = this.props.items;
        const theItems = items.map((item) => {
            if(item.count > 4){
                return(
                    <div key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                        <div>{item.age}</div>
                        <div>___________</div>
                    </div>
                )
            } else {
                return(
                    <div className="">No item</div>
                )
            }
        })
        return (
            <div>
                {theItems}
            </div>
        );
    }
}

export default Items;