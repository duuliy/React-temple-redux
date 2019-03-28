


/**
 * @method filterDate  转换时间格式
 * @param {number} time 需要转换的时间格式
 * @returns {String} 转换之后的时间格式
 * * @author 
 */
const filterDate = time => {
  return `${new Date(time).toLocaleDateString().replace(/\//g,'-')} ${new Date(time).toTimeString()}`.replace('GMT','').replace(/\((.*)\)/g,'').trim();
};

/**  把这个方法改成全局
 * @method validCtr  验证按钮是否有效
 * @param {string} id 按钮id
 * @returns {boolean} 是否有权限
 * * @author 
 */  //这里其实是可以封装成高阶组件的!!!
global.validCtr = id => {
  let userRight = JSON.parse(unescape(localStorage.getItem("userRight")));
  for (let item of userRight.resRight){
    if(id === item.ctrlId){
      return true;
    }
  }
  return false;
};


export {

  filterDate,
  // validCtr
};
