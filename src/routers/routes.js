
import Home from '@pages/index';
import not404 from '@pages/404.jsx';
import { lazy } from 'react' 

const organization = lazy(() => import(/* webpackChunkName: "organization" */ "@pages/organization/index.jsx")); 
const Test1 = lazy(() => import(/* webpackChunkName: "test1" */ "@pages/main/test1/index.jsx")); 
const Test2 = lazy(() => import(/* webpackChunkName: "test2" */ "@pages/main/test2/index.jsx")); 

const routes = [
    {
        path:`/home`,
        exact:false,
        component:Home,
        routes:[
            {
                id:'10100000',
                path:`/home/organization`,
                exact:true,
                component:organization
            },
            {
                id:'10200000',
                path:`/home/main/test1`,
                exact:true,
                component:Test1
            },
            {
                id:'10300000',
                path:`/home/main/test2`,
                exact:true,
                component:Test2
            }
        ]
    },
    {
        path:`/404`,
        component:not404
    },
];

export {routes};