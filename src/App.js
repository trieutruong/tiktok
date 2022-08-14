import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import  DefaultLayout  from '~/layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        } 

                        return (
                            <Route key={index} path={route.path}>
                                <Route
                                    index
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                                {route.children &&
                                    route.children.length > 0 &&
                                    route.children.map((child, index) => (
                                        <Route key={index} path={child.path} element={<child.component />} />
                                    ))}
                            </Route>
                        );
                    })}

                    {/* {publicRoutes.map((route, index) => (                     
                        <Route key={index} {...route}>                
                            {route.children &&
                                route.children.map((children, indexChildren) => (
                                    <Route key={indexChildren} {...children} />
                                ))}
                        </Route>
                    ))} */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
