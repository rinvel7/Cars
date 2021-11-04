import React from 'react';
import Menu from './Menu';
import List from './List';


class CrudTrilhas extends React.Component {

  constructor(props){
    super(props);
    this.state = {trilhas:[],copytrilhas: []};
    this.onSearch = this.onSearch.bind(this);
    this.addItem = this.addItem.bind(this);
    this.remove = this.remove.bind(this);
    this.updateRanking = this.updateRanking.bind(this);

  }

  async get(){
   const data = await fetch("http://localhost:5000/trilhas")
   const result = await data.json()
   this.setState({trilhas: result});
   this.setState({copytrilhas: [...this.state.trilhas]});
  }


  async post(data){
    fetch('http://localhost:5000/trilhas', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err));
      this.inittrilhas()
  }

  async put(data){
    fetch('http://localhost:5000/trilhas'+data.id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err));
      this.inittrilhas()
  }

  async delete(id){
    let url='http://localhost:5000/trilhas'+id;  
      
    fetch(url, {
      method: "DELETE",
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));
    this.inittrilhas()
  }

inittrilhas = () =>{
  this.get ()
}

componentDidMount(){
  this.inittrilhas();

}
  onSearch= (query) =>{
   if(query === ''){
    this.setState({copytrilhas: [...this.state.trilhas]});
  }else{
    const temp = [...this.state.trilhas];
    var res = [];
    temp.forEach(item =>{
      if(item.title.toLowerCase().indexOf(query) > -1){
        res.push(item);
      }
    });

    this.setState({copytrilhas: [...res]});
  } 

}
  
  addItem(item){
    this.post(item);
    this.inittrilhas();
  }

remove(id){
  this.delete(id);
  this.inittrilhas();
}

updateRanking = (item) =>{
  this.put(item);
  this.inittrilhas();  
}

render(){
    return (
      <div className="crudTrilhas">
        <Menu title="Trilhas Manaus" onsearch={this.onSearch}
        onadd={this.addItem} />
        <List className="list"
        items={this.state.copytrilhas} 
        onremove={this.remove}
        onupdateranking = {this.updateRanking} />
      </div>
    );
  }
}

export default CrudTrilhas;
