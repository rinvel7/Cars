import React from 'react';


class PanelAdd extends React.Component{

    constructor(props){
        super(props);

     
        this.state ={
            title: '',
            description: '',
            image: '',
            ranking: 1,
            points: 1
        };
   
        this.cancelAction = this.cancelAction.bind(this);
        this.createItem = this.createItem.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeRanking = this.onChangeRanking.bind(this);
        this.onChangePoints = this.onChangePoints.bind(this);
    }

    cancelAction(e){
        this.props.onhide();
    }

    onChangeTitle(e){
        this.setState({title: e.target.value});
        
    }
    onChangeImage(e){
        this.setState({imgs: e.target.value});
    }
    onChangeDescription(e){
        this.setState({description: e.target.value});
    }
    onChangeRanking(e){
        const ranking = parseInt(e.target.value);
        this.setState({ranking: ranking});
    }
    onChangePoints(e){
        const points = parseInt(e.target.value);
        this.setState({points: points});
    }

    createItem(e){
        e.preventDefault();
        const title = this.state.title;
        const imgs = this.state.imgs;
        const ranking = this.state.ranking;
        const points = this.state.points;
        const description = this.state.description

        this.props.onadd({title: title, imgs: imgs, description: description,points: points, ranking: ranking});
        this.cancelAction();
    }

    render(){
        return(
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.createItem}>
                        <p>
                        <label>Nome Trilha</label><br />
                        <input type="text" name="title" className="input" onChange={this.onChangeTitle} />
                        </p>

                        <p>
                        <label>Descripcion</label><br />
                        <input type="text"  name="description" className="input" onChange={this.onChangeDescription} />
                        </p>

                        <p>
                        <label>Imagen</label><br />
                        <input type="text" name="image" className="input" onChange={this.onChangeImage} />
                        </p>

                        <p>
                        <label>Qualificação</label><br />
                        <select onChange={this.onChangeRanking}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Criar Trilha" />
                        <button className="button btn-prymary" onClick={this.props.onhide}>Cancelar</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default PanelAdd;