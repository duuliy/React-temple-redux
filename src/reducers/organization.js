
/*
    *  永远不要再reducer里面做这些操作：
    *   1、修改传入参数
    *   2、执行有副作用的操作，入api请求和路由跳转
    *   3、调用非纯函数，日Date.now() Math.random().
    *
    *
    *   注意：
    *   1、不要修改 state.
     *   使用 Object.assign() 新建了一个副本。不能这样使用 Object.assign(state, { visibilityFilter: action.filter })，因为它会改变第一个参数的值。
     *   你必须把第一个参数设置为空对象。你也可以开启对ES7提案对象展开运算符的支持, 从而使用 { ...state, ...newState } 达到相同的目的。
     *  2、在 default 情况下返回旧的 state.遇到未知的 action 时，一定要返回旧的 state.
* */


// import { TEST_ACTION } from "../action";
const defaultState = {
  loading: true,
  come:"zzzz",
  data1: {
    toolName: "999",
    name: "888",
    repository: {}
  },
  intlLocale:""
};
export default function(state = defaultState, action) {
  const { type, data, loading } = action;
  switch (type) {
    case 'TEST_ACTION':
    console.log(data)
    console.log(loading)
      return {
        ...state,
        come:data,
        loading
      };
    case 'ADD':
      return {
        ...state,
        data1:data,
        loading
      };
      case 'Langchange':
      return {
        ...state,
        intlLocale:data,
        loading
      };
    default:
      return state;
  }
}

// export default function (state = {}, action) {
//     switch (action.type) {
//         case 'SUCCESS':
//             return {...action.data};
//         case 'DELETE':
//             return {...action.data};
//         case 'ADD':
//             return {...action.data};
//         case 'LOADING':
//             return {...action.data};
//         default:
//             return state;
//     }
// }