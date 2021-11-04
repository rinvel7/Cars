import React from "react";
import Item from "./Item";
import './List.css';

function List(props){
    return(
      <div className="list"> 
           {props.items.map(item =>
                <Item 
                    key={item.id} 
                    id={item.id} 
                    title={item.title}
                    points={item.points}
                    description={item.description}  
                    imgs={item.imgs} 
                    ranking={item.ranking} 
                    onremove={props.onremove}
                    onupdateranking={props.onupdateranking} />
            )}
        </div>
    );
}


export default List;