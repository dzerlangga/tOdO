import React from "react";
import { connect } from "react-redux";
import { getData } from '../action/index';

export class Post extends  React.Component {
   

    componentDidMount(){
        this.props.getData();
    }
    render(){
        return (
            <ul className="list-group list-group-flush">
              {this.props.articles.map(el => (
                <li className="list-group-item" key={el.id}>
                  {el.title}
                </li>
              ))}
            </ul>
          );
    }
}

function mapStateToProps(state) {
    return {
      articles: state.remoteArticles.slice(0, 5)
    };
  }

export default connect(mapStateToProps,{getData})(Post);
