import { Navigate, Outlet, type RouteObject } from "react-router-dom";

import Intro from "../pages/Intro";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Anons from "../pages/Anons";
import Home from "../pages/Home";
import Wallet from "../pages/wallet/Index";
import Funds from "../pages/Funds";
import Withdraw from "../pages/Withdraw";
import AML from "../pages/check/AML";
import Pay from "../pages/check/Pay";
import Load from "../pages/check/Load";
import Result from "../pages/check/Result";
import My from "../pages/wallet/My";
import Import from "../pages/wallet/Import";
import WalletId from "../pages/wallet/Id";
import WalletExport from "../pages/wallet/Export";
import Profile from "../pages/profile/Index";
import ProfileSettings from "../pages/profile/Settings.tsx";
import ProfileSecurity from "../pages/profile/Security";
import ProfileDevices from "../pages/profile/Devices.tsx";
import ProfileTarifs from "../pages/profile/Tarifs.tsx";
import ProfilePayment from "../pages/profile/Payment.tsx";
import Business from "../pages/business/Index.tsx";
import BusinessStore from "../pages/business/store/Index.tsx";
import BusinessInvoicing from "../pages/business/Invoicing.tsx";
import BusinessCreated from "../pages/business/Created.tsx";
import BusinessSettings from "../pages/business/Settings.tsx";
import BusinessIncluded from "../pages/business/included.tsx";
import BusinessPlatformSettings from "../pages/business/platform/Settings.tsx";
import BusinessPlatformAdd from "../pages/business/platform/Add.tsx";
import BusinessStoreList from "../pages/business/store/List.tsx";
import BusinessStoreOverview from "../pages/business/store/Overview.tsx";
import BusinessPlatformList from "../pages/business/platform/List.tsx";
import BusinessPlatformOverview from "../pages/business/platform/Overview.tsx";
import BusinessPayments from "../pages/business/Payments.tsx";
import Paying from "../pages/paying/Index.tsx";
import PayingByCard from "../pages/paying/ByCard.tsx";
import PayingByCrypto from "../pages/paying/ByCrypto.tsx";
import PayingSelect from "../pages/paying/Select.tsx";
import PayingSend from "../pages/paying/Send.tsx";
import PayingSuccess from "../pages/paying/Success.tsx";
import PayingFaild from "../pages/paying/Faild.tsx";

const routes: RouteObject[] = [
    { path: '/', element: <Intro /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/anons", element: <Anons /> },
    { path: "/home", element: <Home /> },
    { path: "/funds", element: <Funds /> },
    { path: "/withdraw", element: <Withdraw /> },
    { 
        path: '/check',
        element: <div><Outlet /></div>,
        children: [
            { index: true, element: <Navigate to="aml" replace /> },
            { path: "aml", element: <AML /> },
            { path: "pay", element: <Pay /> },
            { path: "load", element: <Load /> },
            { path: "result", element: <Result /> },
        ]
    },
    {
        path: '/wallet',
        element: <div><Outlet /></div>,
        children: [
            { index: true, element: <Wallet /> },
            { path: "my", element: <My /> },
            { path: "import", element: <Import /> },
            { path: ":id", element: <WalletId /> },
            { path: "export", element: <WalletExport /> },
        ]
    },
    {
        path: '/profile',
        element: <div><Outlet /></div>,
        children: [
            { index: true, element: <Profile /> },
            { path: "settings", element: <ProfileSettings /> },
            { path: "security", element: <ProfileSecurity /> },
            { path: "devices", element: <ProfileDevices /> },
            { path: "tarifs", element: <ProfileTarifs /> },
            { path: "payment", element: <ProfilePayment /> },
        ]
    },
    {
        path: '/business',
        element: <div><Outlet /></div>,
        children: [
            { index: true, element: <Business /> },
            { 
                path: "store", 
                element: <div><Outlet /></div>,
                children: [
                    { index: true, element: <BusinessStore /> },
                    { path: 'list', element: <BusinessStoreList /> },
                    { path: 'overview', element: <BusinessStoreOverview /> },
                ]
            },
            { path: "invoicing", element: <BusinessInvoicing /> },
            { path: "created", element: <BusinessCreated /> },
            { path: "settings", element: <BusinessSettings /> },
            { path: "included", element: <BusinessIncluded /> },
            {
                path: 'platform',
                element: <div><Outlet /></div>,
                children: [
                    { index: true, element: <Navigate to="settings" replace/> },
                    { path: 'settings', element: <BusinessPlatformSettings/> },
                    { path: 'add', element: <BusinessPlatformAdd/> },
                    { path: 'list', element: <BusinessPlatformList/> },
                    { path: 'overview', element: <BusinessPlatformOverview/> },
                ]
            },
            { path: "payments", element: <BusinessPayments /> },
        ]
    },
    {
        path: '/paying',
        element: <div><Outlet /></div>,
        children: [
            { index: true, element: <Paying /> },
            { path: "by-card", element: <PayingByCard /> },
            { path: "by-crypto", element: <PayingByCrypto /> },
            { path: "select", element: <PayingSelect /> },
            { path: "send", element: <PayingSend /> },
            { path: "success", element: <PayingSuccess /> },
            { path: "faild", element: <PayingFaild /> },
        ]
    }
];

export default routes;
