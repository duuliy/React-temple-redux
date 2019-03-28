import fetch from '../utils/fetch';


//正式接口开始

//退出登录
const SignOutAsync=()=> fetch('get','/api/App/SignOutAsync')

//获得菜单
const GetUserRightAsync=()=> fetch('get','/api/App/GetUserRightAsync')

/**
 * 组织机构
 */
const login = data => fetch('post','/api/App/SignInAsync',data );

const GetByQuery = data => fetch('post','/api/Organization/GetByQuery',data );

export {
  //正式接口开始
  SignOutAsync,
  GetUserRightAsync,

  login,
  GetByQuery
}
