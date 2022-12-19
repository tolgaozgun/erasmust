import {
    BrowserRouter,
    Outlet,
    Navigate,
    Routes,
    Route,
} from "react-router-dom";
import React, { useEffect, useState } from "react";

//Student Pages
import RegisterStudent from "./pages/student/register";
import LoginStudent from "./pages/student/login";
import DashboardStudent from "./pages/student/dashboard";
import AccountStudent from "./pages/student/account";
import SettingsStudent from "./pages/student/settings";
import ErasmusStudent from "./pages/student/StudentErasmusPage";
import StudentPreapprovalList from "./pages/student/Preapproval/StudentErasmusPreapprovalList";
import Applications from "./pages/student/Applications";
import Students from "./pages/student/Students";
import Preapproval from "./pages/student/Preapproval/StudentCreateErasmusPreapproval";
import BeforeMobility from "./pages/student/LearningAgreement/BeforeMobility";
import DuringMobility from "./pages/student/LearningAgreement/DuringMobility";
import AfterMobility from "./pages/student/LearningAgreement/AfterMobility";
import ViewBeforeMobility from "./pages/student/LearningAgreement/ViewBeforeMobility";
import ErasmusApplicationForm from "./pages/student/ErasmusApplication/StudentCreateErasmusApplication";
import StudentErasmusApplicationList from "./pages/student/ErasmusApplication/StudentErasmusApplications";
import CTForm from "./pages/student/courseTransferForm";
import ViewErasmusPreapproval from "./pages/ViewErasmusPreapproval";
import ViewErasmusApplication from "./pages/ViewErasmusApplication";
import StudentCreateErasmusCourseReview from "./pages/student/CourseReviewForm/StudentCreateErasmusCourseReview";
import StaffCourseReviewForm from "./pages/student/StaffCourseReviewForm";
import StudentEditErasmusPreapproval from "./pages/student/Preapproval/StudentEditErasmusPreapproval";
import CourseReviewForms from "./pages/student/CourseReviewForm/StudentErasmusCourseReviewForms";
import ViewCourseReviewForm from "./pages/ViewCourseReviewForm";
import EditErasmusApplication from "./pages/student/ErasmusApplication/EditErasmusApplication";

//Admin Pages
import DashboardAdmin from "./pages/admin/dashboard";
import AccountAdmin from "./pages/admin/account";

//Lists
import StudentList from "./pages/admin/lists/studentList";
import StaffList from "./pages/admin/lists/staffList";
import AdminErasmusApplicationList from "./pages/admin/erasmus/AdminErasmusApplicationList";
import AdminErasmusPreapprovalList from "./pages/admin/erasmus/AdminErasmusPreapprovalList";

//Edits
import StudentEdit from "./pages/admin/edits/studentEdit";
import StaffEdit from "./pages/admin/edits/staffEdits";

//Adds
import StudentAdd from "./pages/admin/adds/studentAdd";

//Staff Pages
import RegisterStaff from "./pages/academic/register";
import LoginStaff from "./pages/academic/login";
import DashboardStaff from "./pages/academic/dashboard";
import AccountStaff from "./pages/academic/account";
import SettingsStaff from "./pages/academic/settings";
import ErasmusStaff from "./pages/academic/erasmus";
import DashboardCourseCoordinator from "./pages/courseCoordinator/dashboard";
import AccountCourseCoordinator from "./pages/courseCoordinator/account";
import SettingsCourseCoordinator from "./pages/courseCoordinator/settings";
import ErasmusCoordinatorErasmusPreapprovalList
    from "./pages/erasmusCoordinator/preapproval/ErasmusCoordinatorErasmusPreapprovalList";
import AccountErasmusCoordinator from "./pages/erasmusCoordinator/account";
import SettingsErasmusCoordinator from "./pages/erasmusCoordinator/settings";

import Splash from "./pages/splash";
import Error from "./pages/404";

import SchoolList from "./pages/academic/SchoolList";
import ExchangeFaq from "./pages/student/exchangeFaq";

import Submissions from "./pages/academic/submissions";
import StudentCreateErasmusPreapproval from "./pages/student/Preapproval/StudentCreateErasmusPreapproval";
import StudentErasmusPreapprovalList from "./pages/student/Preapproval/StudentErasmusPreapprovalList";
import StudentErasmusCourseReviewForms from "./pages/student/CourseReviewForm/StudentErasmusCourseReviewForms";
import StudentCreateErasmusApplication from "./pages/student/ErasmusApplication/StudentCreateErasmusApplication";
import StudentErasmusPage from "./pages/student/StudentErasmusPage";
import StudentLearningAgreements from "./pages/student/LearningAgreement/StudentLearningAgreements";
import CourseCoordinatorErasmusCourseReviewForms
    from "./pages/courseCoordinator/CourseReviewForm/CourseCoordinatorErasmusCourseReviewForms";
import EditLearningAgreement from "./pages/student/LearningAgreement/EditLearningAgreement";
import ErasmusCoordinatorDashboard from "./pages/erasmusCoordinator/ErasmusCoordinatorDashboard";
import ErasmusCoordinatorViewErasmusPreapproval
    from "./pages/erasmusCoordinator/preapproval/ErasmusCoordinatorViewErasmusPreapproval";

const App = () => {
    // const [routes, setRoutes] = useState(routeItemsDefault)
    //
    // let role = sessionStorage.getItem("role")
    // useEffect(() => {
    //     switch (role) {
    //         case "ADMIN":
    //             setRoutes(routeItemsAdmin);
    //             break;
    //         case "STUDENT":
    //             setRoutes(routeItemsStudent);
    //             break;
    //         case null:
    //         default:
    //             setRoutes(routeItemsDefault);
    //             break;
    //     }
    // }, [role])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/splash" />} />
                <Route path="splash" element={<Splash />} />
                <Route path="login" element={<LoginStudent />} />
                <Route path="register" element={<RegisterStudent />} />

                {/* Admin */}
                <Route
                    exact
                    path="/admin"
                    element={<Navigate to="/admin/dashboard" />}
                />
                <Route path="/admin/*" element={<Outlet />}>
                    <Route path="dashboard" element={<DashboardAdmin />} />
                    <Route path="account" element={<AccountAdmin />} />
                    <Route path="applications" element={<Applications />} />
                    <Route exact path="exchange" element={<Splash />} />
                    <Route exact path="exchange/*" element={<Outlet />}>
                        <Route path="application/*" element={<Outlet />}>
                            <Route path="list" element={<Error />} />
                            <Route path="create" element={<Error />} />
                            <Route path="view" element={<Error />} />
                            <Route path="edit" element={<Error />} />
                            <Route path="review" element={<Error />} />
                        </Route>
                        <Route path="preapproval/*" element={<Outlet />}>
                            <Route path="list" element={<Error />} />
                            <Route path="create" element={<Error />} />
                            <Route
                                path="view"
                                element={<ViewErasmusPreapproval />}
                            />
                            <Route path="edit" element={<Error />} />
                            <Route path="review" element={<Error />} />
                        </Route>
                        <Route path="coursereview/*" element={<Outlet />}>
                            <Route path="list" element={<Error />} />
                            <Route path="create" element={<Error />} />
                            <Route path="view" element={<Error />} />
                            <Route path="edit" element={<Error />} />
                            <Route path="review" element={<Error />} />
                        </Route>
                        <Route path="coursetransfer/*" element={<Outlet />}>
                            <Route path="list" element={<Error />} />
                            <Route path="create" element={<Error />} />
                            <Route path="view" element={<Error />} />
                            <Route path="edit" element={<Error />} />
                            <Route path="review" element={<Error />} />
                        </Route>
                        <Route path="learningagreement/*" element={<Outlet />}>
                            <Route path="list" element={<Error />} />
                            <Route path="create" element={<Error />} />
                            <Route path="view" element={<Error />} />
                            <Route path="edit" element={<Error />} />
                            <Route path="review" element={<Error />} />
                        </Route>
                        <Route path="faq" element={<ExchangeFaq />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                    <Route exact path="erasmus" element={<Splash />} />
                    <Route exact path="erasmus/*" element={<Outlet />}>
                        <Route path="application/*" element={<Outlet />}>
                            <Route
                                path="list"
                                element={<AdminErasmusApplicationList />}
                            />
                            <Route
                                path="view"
                                element={<ViewErasmusApplication />}
                            />
                            <Route path="review" element={<Error />} />
                            <Route path="*" element={<Error />} />
                        </Route>
                        <Route path="preapproval/*" element={<Outlet />}>
                            <Route
                                path="list"
                                element={<AdminErasmusPreapprovalList/>}
                            />
                            <Route
                                path="view"
                                element={<ViewErasmusPreapproval/>}
                            />
                            <Route path="review" element={<Error/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Route>
                        <Route path="coursereview/*" element={<Outlet/>}>
                            <Route path="list" element={<Error/>}/>
                            <Route path="view/:id" element={<Error/>}/>
                            <Route path="review" element={<Error/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Route>
                        <Route path="coursetransfer/*" element={<Outlet/>}>
                            <Route path="list" element={<Error/>}/>
                            <Route path="create" element={<Error/>}/>
                            <Route path="view" element={<Error/>}/>
                            <Route path="edit" element={<Error/>}/>
                            <Route path="review" element={<Error/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Route>
                        <Route path="learningagreement/*" element={<Outlet />}>
                            <Route path="list" element={<Error />} />
                            <Route path="view" element={<Error />} />
                            <Route path="review" element={<Error />} />
                            <Route path="*" element={<Error />} />
                        </Route>
                        <Route path="faq" element={<ExchangeFaq />} />
                        <Route path="*" element={<Error />} />
                    </Route>

                    <Route exact path="student" element={<Splash />} />
                    <Route exact path="student/*" element={<Outlet />}>
                        <Route path="list" element={<StudentList />} />
                        <Route path="create" element={<StudentAdd />} />
                        <Route path="view" element={<Error />} />
                        <Route path="edit/:id" element={<StudentEdit />} />
                        <Route path="*" element={<Error />} />
                    </Route>

                    <Route exact path="staff" element={<Splash />} />
                    <Route exact path="staff/*" element={<Outlet />}>
                        <Route path="list" element={<StaffList />} />
                        <Route path="create" element={<Error />} />
                        <Route path="view" element={<Error />} />
                        <Route path="edit/:id" element={<StaffEdit />} />
                        <Route path="*" element={<Error />} />
                    </Route>

                    <Route exact path="school" element={<Splash/>}/>
                    <Route exact path="school/*" element={<Outlet/>}>
                        <Route path="list" element={<SchoolList/>}/>
                        <Route path="create" element={<Error/>}/>
                        <Route path="view" element={<Error/>}/>
                        <Route path="edit" element={<Error/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>
                    <Route path="*" element={<Error/>}/>
                </Route>

                {/* Course Coordinator */}
                <Route
                    exact
                    path="/coursecoordinator"
                    element={<Navigate to="/coursecoordinator/dashboard"/>}
                />
                <Route path="/coursecoordinator/*" element={<Outlet/>}>
                    <Route path="dashboard" element={<DashboardCourseCoordinator/>}/>
                    <Route path="account" element={<AccountCourseCoordinator/>}/>
                    <Route path="settings" element={<SettingsCourseCoordinator/>}/>
                    <Route exact path="exchange" element={<Splash/>}/>
                    <Route exact path="exchange/*" element={<Outlet/>}>
                        <Route path="coursereview/*" element={<Outlet/>}>
                            <Route path="list" element={<Error/>}/>
                            <Route path="create" element={<Error/>}/>
                            <Route path="view" element={<Error/>}/>
                            <Route path="edit" element={<Error/>}/>
                            <Route path="review" element={<Error/>}/>
                        </Route>
                        <Route path="faq" element={<ExchangeFaq/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>
                    <Route exact path="erasmus" element={<Splash/>}/>
                    <Route exact path="erasmus/*" element={<Outlet/>}>
                        <Route path="coursereview/*" element={<Outlet/>}>
                            <Route path="list" element={<CourseCoordinatorErasmusCourseReviewForms/>}/>
                            <Route path="view/:id" element={<Error/>}/>
                            <Route path="review" element={<Error/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Route>
                        <Route path="preapproval/*" element={<Outlet/>}>
                            <Route path="list" element={<Error/>}/>
                            <Route path="view/:id" element={<Error/>}/>
                            <Route path="review" element={<Error/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Route>
                        <Route path="faq" element={<ExchangeFaq/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>

                </Route>

                {/* Erasmus Coordinator */}

                <Route
                    exact
                    path="/erasmuscoordinator"
                    element={<Navigate to="/erasmuscoordinator/dashboard"/>}
                />
                <Route path="/erasmuscoordinator/*" element={<Outlet/>}>
                    <Route path="dashboard" element={<ErasmusCoordinatorDashboard/>}/>
                    <Route path="account" element={<AccountErasmusCoordinator/>}/>
                    <Route path="settings" element={<SettingsErasmusCoordinator/>}/>
                    <Route exact path="exchange" element={<Splash/>}/>
                    <Route exact path="exchange/*" element={<Outlet/>}>
                        <Route path="coursereview/*" element={<Outlet/>}>
                            <Route path="list" element={<Error/>}/>
                            <Route path="create" element={<Error/>}/>
                            <Route path="view" element={<Error/>}/>
                            <Route path="edit" element={<Error/>}/>
                            <Route path="review" element={<Error/>}/>
                        </Route>
                        <Route path="faq" element={<ExchangeFaq/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>
                    <Route exact path="erasmus" element={<Splash/>}/>
                    <Route exact path="erasmus/*" element={<Outlet/>}>
                        <Route path="coursereview/*" element={<Outlet/>}>
                            <Route path="list" element={<Error/>}/>
                            <Route path="view/:id" element={<Error/>}/>
                            <Route path="review" element={<Error/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Route>
                        <Route path="preapproval/*" element={<Outlet/>}>
                            <Route path="list" element={<ErasmusCoordinatorErasmusPreapprovalList/>}/>
                            <Route path="view/:id" element={<ErasmusCoordinatorViewErasmusPreapproval/>}/>
                            <Route path="review" element={<Error/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Route>
                        <Route path="faq" element={<ExchangeFaq/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>

                </Route>

                {/* Student */}
                <Route path="/student/*" element={<Outlet/>}>
                    <Route path="dashboard" element={<DashboardStudent/>}/>
                    <Route path="account" element={<AccountStudent/>}/>
                    <Route path="settings" element={<SettingsStudent/>}/>
                    <Route path="submissions" element={<Submissions/>}/>
                    <Route exact path="exchange" element={<Splash/>}/>
                    <Route exact path="exchange/*" element={<Outlet/>}>
                        <Route path="application/*" element={<Outlet/>}>
                            <Route path="list" element={<Error />} />
                            <Route path="create" element={<Error />} />
                            <Route path="view" element={<Error />} />
                            <Route path="edit" element={<Error />} />
                        </Route>
                        <Route path="preapproval/*" element={<Outlet />}>
                            <Route path="list" element={<Error />} />
                            <Route path="create" element={<Error />} />
                            <Route path="view" element={<Error />} />
                            <Route path="edit" element={<Error />} />
                        </Route>
                        <Route path="coursereview/*" element={<Outlet />}>
                            <Route path="list" element={<Error />} />
                            <Route path="create" element={<Error />} />
                            <Route path="view" element={<Error />} />
                            <Route path="edit" element={<Error />} />
                        </Route>
                        <Route path="coursetransfer/*" element={<Outlet/>}>
                            <Route path="list" element={<Error/>}/>
                            <Route path="create" element={<Error/>}/>
                            <Route path="view" element={<Error/>}/>
                            <Route path="edit" element={<Error/>}/>
                        </Route>
                        <Route path="learningagreement/*" element={<Outlet/>}>
                            <Route path="list" element={<Error/>}/>
                            <Route path="create" element={<Error/>}/>
                            <Route path="view" element={<Error/>}/>
                            <Route path="edit/:id" element={<EditLearningAgreement/>}/>
                        </Route>
                        <Route path="faq" element={<ExchangeFaq/>}/>
                        <Route path="*" element={<Error />} />
                    </Route>
                    <Route
                        exact
                        path="erasmus"
                        element={<StudentErasmusPage />}
                    />
                    <Route exact path="erasmus/*" element={<Outlet />}>
                        <Route
                            path="dashboard"
                            element={<StudentErasmusPage />}
                        ></Route>
                        <Route path="application/*" element={<Outlet />}>
                            <Route
                                path="list"
                                element={<StudentErasmusApplicationList />}
                            />
                            <Route
                                path="create"
                                element={<StudentCreateErasmusApplication />}
                            />
                            <Route
                                path="view/:id"
                                element={<ViewErasmusApplication />}
                            />
                            <Route path="edit/:id" element={<EditErasmusApplication />} />
                        </Route>
                        <Route path="preapproval/*" element={<Outlet />}>
                            <Route
                                path="list"
                                element={<StudentErasmusPreapprovalList />}
                            />
                            <Route
                                path="create"
                                element={<StudentCreateErasmusPreapproval />}
                            />
                            <Route
                                path="view/:id"
                                element={<ViewErasmusPreapproval />}
                            />
                            <Route
                                path="edit"
                                element={<StudentEditErasmusPreapproval />}
                            />
                        </Route>
                        <Route path="coursereview/*" element={<Outlet />}>
                            <Route
                                path="list"
                                element={<StudentErasmusCourseReviewForms />}
                            />
                            <Route
                                path="create"
                                element={<StudentCreateErasmusCourseReview/>}
                            />
                            <Route
                                path="view/:id"
                                element={<ViewCourseReviewForm/>}
                            />
                            <Route path="edit" element={<Error/>}/>
                        </Route>
                        <Route path="coursetransfer/*" element={<Outlet />}>
                            <Route path="list" element={<Error />} />
                            <Route path="create" element={<Error />} />
                            <Route path="view" element={<Error />} />
                            <Route path="edit" element={<Error />} />
                        </Route>
                        <Route path="learningagreement/*" element={<Outlet />}>
                            <Route path="list" element={<StudentLearningAgreements/>}/>
                            <Route path="create" element={<BeforeMobility/>}/>
                            <Route path="view" element={<Error/>}/>
                            <Route path="edit/:id" element={<EditLearningAgreement/>}/>
                        </Route>
                        <Route path="faq" element={<ExchangeFaq />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                </Route>

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
