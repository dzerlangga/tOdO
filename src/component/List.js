import React from "react";
import { connect } from "react-redux";
import { RemoveTodo , UpdateTodo } from "../action/index";

const mapStateToProps = state => {
    return { 
        articles: state.articles
    };
};
function mapDistpatchToProps(distpatch) {
    return{
        RemoveTodo: articles => distpatch(RemoveTodo(articles)),
        UpdateTodo: articles => distpatch(UpdateTodo(articles))
    }
}

class ConnectedList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            berubah : false,
            id: 1
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(id, value){
        this.setState({
            berubah: !this.state.berubah,
            id: value
        });
        
    }
    render(){   
        return (
    <div className="list-group list-group-flush">
        {this.props.articles.map(( el, key) => (
                <div key={el.id}>
                {this.state.id === el.id && this.state.berubah ? 
                    (<input
                        type="text"
                        placeholder={el.title}
                        onKeyPress={e => {
                            if (e.key === 'Enter') {
                                // this.props.onUpdates(e.target.value, this.props.keys, true)
                                this.props.UpdateTodo({
                                    value: key,
                                    text: e.target.value,
                                    type: 'IS_UPDATE'
                                })

                                // this.props.UpdateTodo({ type: 'SAVE' })
                                this.setState({
                                    berubah: !this.state.berubah
                                })
                                
                            }
                        }}
                        onBlur={() => {
                            // this.props.abort(this.props.data, this.props.keys)
                            this.props.UpdateTodo({
                                value: el.title,
                                type: 'IS_ABORT'
                            })
                            this.setState({
                                berubah: !this.state.berubah
                            })
                        }}
                        autoFocus={true}
                    />) 
                : 
                (<li 
                onDoubleClick={(d) => this.handleChange('id', d.target.value)} 
                value={el.id}>{el.title}
                        <button onClick={e => this.props.RemoveTodo({value : e.target.value})} value={key}>
                            hapus
                        </button>
                </li>)}
                </div> 
        ))}
    </div>
    );
    }
};

const List = connect(mapStateToProps, mapDistpatchToProps)(ConnectedList);
export default List;