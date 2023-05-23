import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayout from "../Layouts/Auth/AuthLayout";
import ProjectDashboardLayout from "../Layouts/Dashboard/ProjectDashboardLayout";
import ManagerDashboardLayout from "../Layouts/Dashboard/ManagerDashboardLayout";
import Login from "../Pages/Auth/Login";
import ResetInstructions from "../Pages/Auth/Instructions";
import PasswordReset from "../Pages/Auth/PasswordReset";
import Home from "../Pages/Project/Home";
import ProjectInformation from "../Pages/Project/ProjectInformation";
import Scope from "../Pages/Project/Scope";
import KeyChanges from "../Pages/Project/KeyChanges";
import ChangeApproach from "../Pages/Project/ChangeApproach";
import CmMatrix from "../Pages/Project/CmMatrix";
import Budget from "../Pages/Project/Budget";
import CaseChange from "../Pages/Project/CaseChange";
import TransitionCurve from "../Pages/Project/TransitionCurve";
import RiskRegister from "../Pages/Project/RiskRegister";
import IssueRegister from "../Pages/Project/IssueRegister";
import DecisionRegister from "../Pages/Project/DecisionRegister";
import Lessons from "../Pages/Project/Lessons";
import ManagerHome from "../Pages/Manager/Home";
import ManagerProjects from "../Pages/Manager/Projects";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          {
            path: "/",
            element: <Login />,
          },
          {
            path: "/reset",
            element: <PasswordReset />,
          },
          {
            path: "/instruction",
            element: <ResetInstructions />,
          },
        ],
      },
    ],
  },
  {
    path: "/project/dashboard",
    element: <ProjectDashboardLayout />,
    children: [
      {
        path: "/project/dashboard",
        element: <Home />,
      },
      {
        path: "/project/dashboard/project-info",
        element: <ProjectInformation />,
      },
      {
        path: "/project/dashboard/scope",
        element: <Scope />,
      },
      {
        path: "/project/dashboard/keychange",
        element: <KeyChanges />,
      },
      {
        path: "/project/dashboard/changeapproach",
        element: <ChangeApproach />,
      },
      {
        path: "/project/dashboard/cmmatrix",
        element: <CmMatrix />,
      },
      {
        path: "/project/dashboard/budget",
        element: <Budget />,
      },
      {
        path: "/project/dashboard/casechange",
        element: <CaseChange />,
      },
      {
        path: "/project/dashboard/transitioncurve",
        element: <TransitionCurve />,
      },
      {
        path: "/project/dashboard/riskregister",
        element: <RiskRegister />,
      },
      {
        path: "/project/dashboard/issueregister",
        element: <IssueRegister />,
      },
      {
        path: "/project/dashboard/decisionregister",
        element: <DecisionRegister />,
      },
      {
        path: "/project/dashboard/lessons",
        element: <Lessons />,
      },
    ],
  },
  {
    path: "/manager/dashboard",
    element: <ManagerDashboardLayout />,
    children: [
      {
        path: "/manager/dashboard",
        element: <ManagerHome />,
      },
      {
        path: "/manager/dashboard/projects",
        element: <ManagerProjects />,
      },
    ],
  },
]);
