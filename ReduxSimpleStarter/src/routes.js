
import React from 'react'
import {Route,IndexRoute} from 'react-router';
//이 route 오브젝트는 url과 컴포넌트 사이의 매칭용도

import App from './components/app'


export default (
<Route path="/" component={App} />
//즉해당패스를 들어오면 이컴포넌트가 보여줌
);
