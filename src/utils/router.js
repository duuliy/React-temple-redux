export default [
    {
      menuId: 99999999,
      parentId:99999999,
      menuName: '系统管理',
      name:'sub',
      depth:0, 
      seq:0
    },
    {
      menuId: 10000000,
      parentId:99999999,
      menuName: '基础数据',
      name: 'manage',
      icon: 'area-chart',
      depth:1, 
      seq:10
    },
    {
      menuId: 10100000,
      parentId:10000000,
      menuName: '组织机构',
      name: 'organiZation',
      fullPath: '/manage/organiZation',
      icon: 'cluster',
      depth:2, 
      seq:10
    },
    {
      menuId: 10200000,
      parentId:10000000,
      menuName: '用户信息',
      name: 'userStati',
      fullPath: '/manage/userStati',
      icon: 'user',
      depth:2, 
      seq:20
    },
    {
      menuId: 10300000,
      parentId:10000000,
      menuName: '权限管理',
      name: 'rightsManagement',
      fullPath: '/manage/rightsManagement',
      icon: 'idcard',
      depth:2, 
      seq:30
    },
    {
      menuId: 10400000,
      parentId:10000000,
      menuName: '加密狗管理',
      name: 'encryptedDogManagement',
      fullPath: '/manage/encryptedDogManagement',
      icon: 'insurance',
      depth:2, 
      seq:40
    },
    {
      menuId: 10500000,
      parentId:10000000,
      menuName: '充值中心',
      name: 'topUpCenter',
      fullPath: '/manage/topUpCenter',
      icon: 'money-collect',
      depth:2, 
      seq:50
    },
    {
      menuId: 20000000,
      parentId:99999999,
      menuName: '统计报表',
      name: 'statireport',
      icon: 'file-text',
      depth:1, 
      seq:10
    },
    {
      menuId: 20100000,
      parentId:20000000,
      menuName: '剩余字数',
      name: 'reswordcount',
      fullPath: '/statireport/reswordcount',
      icon: 'font-size',
      depth:2, 
      seq:10
    },
    {
      menuId: 20200000,
      parentId:20000000,
      menuName: '公司翻译统计',
      name: 'corporateTranslationStatistics',
      fullPath: '/statireport/corporateTranslationStatistics',
      icon: 'cluster',
      depth:2, 
      seq:20
    },
    {
      menuId: 20300000,
      parentId:20000000,
      menuName: '用户翻译统计',
      name: 'userTranslationStatistics',
      fullPath: '/statireport/userTranslationStatistics',
      icon: 'solution',
      depth:2, 
      seq:30
    },
    {
      menuId: 20400000,
      parentId:20000000,
      menuName: '用户翻译详情统计',
      name: 'userTranslationDetailStatistics',
      fullPath: '/statireport/userTranslationDetailStatistics',
      icon: 'solution',
      depth:2, 
      seq:1
    },
    {
      menuId: 30000000,
      parentId:99999999,
      menuName: '统计图形',
      name: 'statisticalGraphics',
      icon: 'deployment-unit',
      depth:1, 
      seq:10
    },
    {
      menuId: 30100000,
      parentId:30000000,
      menuName: '系统总览',
      name: 'systemOverview',
      fullPath: '/statisticalGraphics/systemOverview',
      icon: 'radar-chart',
      depth:2, 
      seq:10
    },
    {
      menuId: 30200000,
      parentId:30000000,
      menuName: '公司展示',
      name: 'companyShow',
      fullPath: '/statisticalGraphics/companyShow',
      icon: 'code-sandbox',
      depth:2, 
      seq:20
    },
    {
      menuId: 30300000,
      parentId:30000000,
      menuName: '用户展示',
      name: 'userDisplay',
      fullPath: '/statisticalGraphics/userDisplay',
      icon: 'user',
      depth:2, 
      seq:30
    }
    
  ]
  