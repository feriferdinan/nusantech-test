const initialState = {
    data: {
        1:{
            id:1,
            type:"input",
            is_checked:true,
            value:0
        },
        2:{
            id:2,
            type:"input",
            is_checked:true,
            value:0
        },
        3:{
            id:3,
            type:"input",
            is_checked:true,
            value:0
        }
    },
    buttons:[
      {
        id:1,
        value:"+",
        label:"+"
      },
      {
        id:2,
        value:"-",
        label:"-"
      },
      {
        id:3,
        value:"x",
        label:"x"
      },
      {
        id:4,
        value:"/",
        label:"/"
      },
    ]
  };
  
const forms = (state = initialState, action) => {
    const {payload} = action
    switch (action.type) {
      case 'SET_VALUE':
        state.data[payload.id].value = payload.value
        return {
          ...state,
        };
      case 'SET_CHECK':
        state.data[payload.id].is_checked = payload.is_checked
        return {
          ...state,
        };
      default:
        return state;
    }
  };
  
  export default forms;
  