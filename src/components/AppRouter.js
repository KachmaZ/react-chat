import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const user = true;
    return user ?
        (
            <Routes>
                {
                    privateRoutes.map(({path, Component}) =>
                        <Route path={path} element={Component}/>
                    )
                }
                <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />}
                />
            </Routes>
        )
        :
        (
            <Routes>
                {
                    publicRoutes.map(({path, Component}) =>
                        <Route path={path} element={Component}/>
                    )
                }
                <Route
                    path="*"
                    element={<Navigate to={LOGIN_ROUTE} replace />}
                />
            </Routes>
        );
};

export default AppRouter;