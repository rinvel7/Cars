/* eslint-disable no-undef */
import React from 'react';
import './Item.css';

class Item extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            imgs: '',
            points: 1,
            ranking: 1,
            stars: []

    }

    this.onremove = this.onremove.bind(this);
    this.onChangeRanking = this.onChangeRanking.bind(this);

    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,  
            imgs: this.props.imgs,
            points: parseInt(this.props.points),
            ranking: parseInt(this.props.ranking),
            stars: Array(parseInt(this.props.ranking)).fill(1)
        });
    }

    onChangeRanking (e){
        const ranking = parseInt(e.target.value);
        this.setState({
           ranking: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(0)
        });   
        
        this.props.onupdateranking({id: this.state.id, title: this.state.title, imgs: this.state.imgs,ranking:ranking});
    }

onremove (e){
        this.props.onremove(this.props.id);
    
    }
   
    render(){
           return(
            <div className="item"> 
                <div className="image"><img src={this.state.imgs} width= "100%" alt={this.state.ti} /></div>
                <div className="title">{this.state.title}</div>
                <div className="description">{this.state.description}</div>
                <div className="ranking">
                    <p>
                        {this.state.stars.map(x =>
                                <img alt="" src="img/star.png" width="32" />
                         )}
                    </p>
          
                    Calificacion:
                    <select value={this.state.ranking} onChange={this.onChangeRanking}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button onClick={this.onremove}>Eliminar</button>
                </div>
            </div>
        );
    }
}
export default Item;