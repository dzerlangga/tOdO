 import { ADD_ARTICLE, TODO_REMOVE, TODO_UPDATE } from "../constant/type";

const initialState = {
    articles: [],
    remoteArticles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    } 

    else if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
          remoteArticles: state.remoteArticles.concat(action.payload)
        });
      }

      else if (action.type === TODO_REMOVE) {
          let newData = state.articles.slice()
          let index = parseInt(action.payload.value)
          if (!newData[index]) {
              return state
          }
          newData.splice(index, 1)
          return {
              ...state,
              articles: newData
          }
      }

      else if (action.type === TODO_UPDATE) {
          if (action.payload === {}) {
              return state
          }
          if (action.payload.type === 'ON_EDIT') {
              let newTODO = state.articles.slice()
              let ind = parseInt(action.payload.value)
              if (!newTODO[ind]) {
                  return state
              }
              return {
                  ...state,
                  tempItemText: newTODO[ind].value
              }
          }

          else if (action.payload.type === 'IS_UPDATE') {
              let newTODO = state.articles.slice()
              let ind = action.payload.value
               if (!newTODO[ind]) {
                   return state
              }

              console.log(newTODO)
              newTODO[ind].title = action.payload.text;
              return {
                  ...state,
                  articles: newTODO
              }
              
          }

          else if (action.payload.type === 'IS_ABORT') {
              let newTODO = state.articles.slice()
                let ind = parseInt(action.payload.value)
              if (!newTODO[ind]) {
                  return state
              }
              newTODO[ind].value = state.tempItemText
              return {
                  ...state,
                  tempItemText: '',
                  articles: newTODO
              }
          }

          else if (action.payload.type === 'SAVE') {
              return {
                  ...state,
                  tempItemText: ''
              }
    }
}

      return state;
}

export default rootReducer;