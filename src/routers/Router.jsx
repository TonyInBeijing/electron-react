/**
 * @description 路由配置文件
 */

import { lazy, Suspense } from "react"; // 使用 React.lazy 进行代码分割
import { HashRouter, Link, Route, Switch } from "react-router-dom";

// 引入 Home 和 About 组件
const Home = lazy(() => import("../views/Home"));
const About = lazy(() => import("../views/About"));


const Router = () => (
    <HashRouter>
        <Suspense fallback={<div>Error !!!</div>}>
            <div>
                <Link to="/">Home</Link>|
                <Link to="/about">About</Link>
            </div>
            <div>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                </Switch>
            </div>
        </Suspense>
    </HashRouter>
);

export default Router;