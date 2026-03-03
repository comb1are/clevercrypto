import { Navigate, Outlet, type RouteObject } from "react-router-dom";

import { lazy } from "react";
import ProtectedRoute from "../components/ProtectedRoute";

const Intro = lazy(() => import("../pages/Intro"));
const Login = lazy(() => import("../auth/Login"));
const Register = lazy(() => import("../auth/Register"));
const Anons = lazy(() => import("../pages/Anons"));
const Home = lazy(() => import("../pages/Home"));
const Wallet = lazy(() => import("../pages/wallet/Index"));
const Funds = lazy(() => import("../pages/Funds"));
const Withdraw = lazy(() => import("../pages/Withdraw"));
const AML = lazy(() => import("../pages/check/AML"));
const Pay = lazy(() => import("../pages/check/Pay"));
const Load = lazy(() => import("../pages/check/Load"));
const Result = lazy(() => import("../pages/check/Result"));
const My = lazy(() => import("../pages/wallet/My"));
const Import = lazy(() => import("../pages/wallet/Import"));
const WalletId = lazy(() => import("../pages/wallet/Id"));
const WalletExport = lazy(() => import("../pages/wallet/Export"));
const Profile = lazy(() => import("../pages/profile/Index"));
const ProfileSettings = lazy(() => import("../pages/profile/Settings.tsx"));
const ProfileSecurity = lazy(() => import("../pages/profile/Security"));
const ProfileDevices = lazy(() => import("../pages/profile/Devices.tsx"));
const ProfileTarifs = lazy(() => import("../pages/profile/Tarifs.tsx"));
const ProfilePayment = lazy(() => import("../pages/profile/Payment.tsx"));
const Business = lazy(() => import("../pages/business/Index.tsx"));
const BusinessStore = lazy(() => import("../pages/business/store/Index.tsx"));
const BusinessInvoicing = lazy(() => import("../pages/business/Invoicing.tsx"));
const BusinessCreated = lazy(() => import("../pages/business/Created.tsx"));
const BusinessSettings = lazy(() => import("../pages/business/Settings.tsx"));
const BusinessIncluded = lazy(() => import("../pages/business/included.tsx"));
const BusinessPlatformSettings = lazy(() => import("../pages/business/platform/Settings.tsx"));
const BusinessPlatformAdd = lazy(() => import("../pages/business/platform/Add.tsx"));
const BusinessStoreList = lazy(() => import("../pages/business/store/List.tsx"));
const BusinessStoreOverview = lazy(() => import("../pages/business/store/Overview.tsx"));
const BusinessPlatformList = lazy(() => import("../pages/business/platform/List.tsx"));
const BusinessPlatformOverview = lazy(() => import("../pages/business/platform/Overview.tsx"));
const BusinessPayments = lazy(() => import("../pages/business/Payments.tsx"));
const Paying = lazy(() => import("../pages/paying/Index.tsx"));
const PayingByCard = lazy(() => import("../pages/paying/ByCard.tsx"));
const PayingByCrypto = lazy(() => import("../pages/paying/ByCrypto.tsx"));
const PayingSelect = lazy(() => import("../pages/paying/Select.tsx"));
const PayingSend = lazy(() => import("../pages/paying/Send.tsx"));
const PayingSuccess = lazy(() => import("../pages/paying/Success.tsx"));
const PayingFaild = lazy(() => import("../pages/paying/Faild.tsx"));

const routes: RouteObject[] = [
    
    { path: '/', element: <Intro /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/anons", element: <Anons /> },

    
    {
        element: <ProtectedRoute />,
        children: [
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
                            { index: true, element: <Navigate to="settings" replace /> },
                            { path: 'settings', element: <BusinessPlatformSettings /> },
                            { path: 'add', element: <BusinessPlatformAdd /> },
                            { path: 'list', element: <BusinessPlatformList /> },
                            { path: 'overview', element: <BusinessPlatformOverview /> },
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
            },
        ],
    },
];

export default routes;
