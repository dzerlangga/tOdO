import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { 
        articles: state.articles
    };
};


class ConnectedList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            berubah : false,
            id: [],
            edit: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

   
    handleChange(id, value){
        var d = Object.assign({}, this.state.edit)
        Object.assign(d, { [id]: value })
        this.setState({
            berubah: !this.state.berubah,
            id: value,
            edit: d
        });
    }

    hapus(value){
        const { id } = this.state;
        this.setState({
            id: id !== value
        })
    }


    render(){
        
        return (
    <div className="list-group list-group-flush">
        {this.props.articles.map( el => (
                <div key={el.id}>

                {this.state.id === el.id && this.state.berubah ? 
               
               <input value={el.title} onClick={() => this.handleChange('id', el.id)} autoFocus></input> 
                : 
                <li onClick={() => this.handleChange('id', el.id)}>{el.title}</li>}
               
                <button onClick={() => this.hapus(el.id)}>
                    hapus
                </button>
               
                </div> 
                
        ))}
    </div>
    );

    }
};

const List = connect(mapStateToProps)(ConnectedList);
export default List;