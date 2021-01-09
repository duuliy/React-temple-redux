
// import fetch from "libs/fetch";
// export const TEST_ACTION = "test_action";

// /**
//  * @param {Any} params  这里可以拿到传过来的参数进行 请求处理
//  */
// export default (params = {}) => dispatch => {
//   setTimeout(async () => {
//     const data = await fetch.getMockJson("/dawdler.json");
//     dispatch({
//       type: TEST_ACTION,
//       data,
//       loading: false
//     });
//   }, 1000);
// };

export function addtest () {
    let param='duuliy666'
    return async function (dispatch) {
        dispatch({
            type: 'TEST_ACTION',
            data:param,
            loading: false
          });
    }
  };

  export function langch (data) {
    return async function (dispatch) {
        dispatch({
            type: 'Langchange',
            data:data,
            loading: false
          });
    }
  };


  export function addtest2 () {
    const param={
      toolName: "999",
      name: "games",
      repository: {}
    }
    return async function (dispatch) {
        dispatch({
            type: 'ADD',
            data:param,
            loading: false
          });
    }
  };


let arr = {
    total:3,
    data:[
        {
            key:1,
            address: '地球',
            contactUser: '上帝',
            createTime: "2018-11-06T10:11:00.3321928+08:00",
            createTimeDesc: "2018-11-06 10:11:00",
            dateDue: "2019-11-06T23:59:59.999+08:00",
            dateDueDesc: "2019-11-06 23:59:59",
            description: "123456",
            email: '123456@qq.com',
            id: "15d110d7-5496-4717-a1b0-09a5042c0b95",
            name: "111",
            parentId: "3454df31-d9d2-4558-81b2-95ca32c9d845",
            parentName: "Root",
            phoneNumber: '18888888888',
            remainPdfPage: '111',
            remainWords: 5000,
            userCount: 1,
        },
        {
            key:2,
            address: '地球',
            contactUser: '上帝',
            createTime: "2018-11-06T10:11:00.3321928+08:00",
            createTimeDesc: "2018-11-06 10:11:00",
            dateDue: "2019-11-06T23:59:59.999+08:00",
            dateDueDesc: "2019-11-06 23:59:59",
            description: "123456",
            email: '123456@qq.com',
            id: "15d110d7-5496-4717-a1b0-09a5042c0b95",
            name: "222",
            parentId: "3454df31-d9d2-4558-81b2-95ca32c9d845",
            parentName: "Root",
            phoneNumber: '18888888888',
            remainPdfPage: '111',
            remainWords: 5000,
            userCount: 1,
        },
        {
            key:3,
            address: '地球',
            contactUser: '上帝',
            createTime: "2018-11-06T10:11:00.3321928+08:00",
            createTimeDesc: "2018-11-06 10:11:00",
            dateDue: "2019-11-06T23:59:59.999+08:00",
            dateDueDesc: "2019-11-06 23:59:59",
            description: "123456",
            email: '123456@qq.com',
            id: "15d110d7-5496-4717-a1b0-09a5042c0b95",
            name: "333",
            parentId: "3454df31-d9d2-4558-81b2-95ca32c9d845",
            parentName: "Root",
            phoneNumber: '18888888888',
            remainPdfPage: '111',
            remainWords: 5000,
            userCount: 1,
        }
    ]
};


//action创建函数
function success(data) {
    return {
        type:'SUCCESS',
        data
    };
}

function loading(data) {
    return{
        type:'LOADING',
        data
    }
}

export function del(data) {
    arr.total -= 1;
    arr.data.splice(arr.data.findIndex(item => item.key === data),1);
    return {
        type:'DELETE',
        data:arr
    };
}

export function add() {
    arr.total += 1;
    arr.data.push({
        key:arr.data.length+1,
        address: '地球',
        contactUser: '上帝',
        createTime: "2018-11-06T10:11:00.3321928+08:00",
        createTimeDesc: "2018-11-06 10:11:00",
        dateDue: "2019-11-06T23:59:59.999+08:00",
        dateDueDesc: "2019-11-06 23:59:59",
        description: "123456",
        email: '123456@qq.com',
        id: "15d110d7-5496-4717-a1b0-09a5042c0b95",
        name: "111",
        parentId: "3454df31-d9d2-4558-81b2-95ca32c9d845",
        parentName: "Root",
        phoneNumber: '18888888888',
        remainPdfPage: '111',
        remainWords: 5000,
        userCount: 1,
    });
    return {
        type:'ADD',
        data:arr
    };
}

export function getOrganization(data) {
    return async function (dispatch) {
        // console.log(data);
        dispatch(loading({isLoading:true}));
        setTimeout(() => {
            dispatch(success(arr));
        },2000)
    }
}