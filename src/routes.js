import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import GuestGuard from './components/Auth/GuestGuard';
import AuthGuard from './components/Auth/AuthGuard';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    exact: 'true',
    guard: GuestGuard,
    path: '/login',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/404',
    element: lazy(() => import('./views/errors/NotFound404'))
  },
  {
    exact: 'true',
    path: '/maintenance/coming-soon',
    element: lazy(() => import('./views/maintenance/ComingSoon'))
  },
  {
    exact: 'true',
    path: '/maintenance/error',
    element: lazy(() => import('./views/maintenance/Error'))
  },
  {
    exact: 'true',
    path: '/maintenance/offline-ui',
    element: lazy(() => import('./views/maintenance/OfflineUI'))
  },
  {
    exact: 'true',
    path: '/auth/signin-1',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/signup-1',
    element: lazy(() => import('./views/auth/signup/SignUp1'))
  },
  {
    exact: 'true',
    path: '/auth/signup-2',
    element: lazy(() => import('./views/auth/signup/SignUp2'))
  },
  {
    exact: 'true',
    path: '/auth/signup-3',
    element: lazy(() => import('./views/auth/signup/SignUp3'))
  },
  {
    exact: 'true',
    path: '/auth/signup-4',
    element: lazy(() => import('./views/auth/signup/SignUp4'))
  },
  {
    exact: 'true',
    path: '/auth/signup-5',
    element: lazy(() => import('./views/auth/signup/SignUp5'))
  },
  {
    exact: 'true',
    path: '/auth/signin-2',
    element: lazy(() => import('./views/auth/signin/SignIn2'))
  },
  {
    exact: 'true',
    path: '/auth/signin-3',
    element: lazy(() => import('./views/auth/signin/SignIn3'))
  },
  {
    exact: 'true',
    path: '/auth/signin-4',
    element: lazy(() => import('./views/auth/signin/SignIn4'))
  },
  {
    exact: 'true',
    path: '/auth/signin-5',
    element: lazy(() => import('./views/auth/signin/SignIn5'))
  },
  {
    exact: 'true',
    path: '/auth/reset-password-1',
    element: lazy(() => import('./views/auth/reset-password/ResetPassword1'))
  },
  {
    exact: 'true',
    path: '/auth/reset-password-2',
    element: lazy(() => import('./views/auth/reset-password/ResetPassword2'))
  },
  {
    exact: 'true',
    path: '/auth/reset-password-3',
    element: lazy(() => import('./views/auth/reset-password/ResetPassword3'))
  },
  {
    exact: 'true',
    path: '/auth/reset-password-4',
    element: lazy(() => import('./views/auth/reset-password/ResetPassword4'))
  },
  {
    exact: 'true',
    path: '/auth/reset-password-5',
    element: lazy(() => import('./views/auth/reset-password/ResetPassword5'))
  },
  {
    exact: 'true',
    path: '/auth/change-password',
    element: lazy(() => import('./views/auth/ChangePassword'))
  },
  {
    exact: 'true',
    path: '/auth/profile-settings',
    element: lazy(() => import('./views/auth/ProfileSettings'))
  },
  {
    exact: 'true',
    path: '/auth/tabs-auth',
    element: lazy(() => import('./views/auth/TabsAuth'))
  },
  {
    exact: 'true',
    path: '/auth/map-form',
    element: lazy(() => import('./views/auth/MapForm'))
  },
  {
    exact: 'true',
    path: '/auth/subscribe',
    element: lazy(() => import('./views/auth/Subscribe'))
  },
  {
    exact: 'true',
    path: '/landing',
    element: lazy(() => import('./views/landing'))
  },
  {
    path: '*',
    layout: AdminLayout,
    guard: AuthGuard,
    routes: [
      {
        exact: 'true',
        path: '/app/dashboard/default',
        element: lazy(() => import('./views/dashboard/DashDefault'))
      },
      {
        exact: 'true',
        path: '/app/dashboard/e-commerce',
        element: lazy(() => import('./views/dashboard/DashEcommerce'))
      },
      {
        exact: 'true',
        path: '/app/dashboard/crm',
        element: lazy(() => import('./views/dashboard/DashCrm'))
      },
      {
        exact: 'true',
        path: '/app/dashboard/analytics',
        element: lazy(() => import('./views/dashboard/DashAnalytics'))
      },
      {
        exact: 'true',
        path: '/app/dashboard/crypto',
        element: lazy(() => import('./views/dashboard/DashCrypto'))
      },
      {
        exact: 'true',
        path: '/app/dashboard/project',
        element: lazy(() => import('./views/dashboard/DashProject'))
      },
      {
        exact: 'true',
        path: '/app/widgets/widget-statistic',
        element: lazy(() => import('./views/widgets/WidgetStatistic'))
      },
      {
        exact: 'true',
        path: '/app/widgets/widget-data',
        element: lazy(() => import('./views/widgets/WidgetData'))
      },
      {
        exact: 'true',
        path: '/app/widgets/widget-table',
        element: lazy(() => import('./views/widgets/WidgetTable'))
      },
      {
        exact: 'true',
        path: '/app/widgets/widget-user',
        element: lazy(() => import('./views/widgets/WidgetUser'))
      },
      {
        exact: 'true',
        path: '/app/widgets/widget-chart',
        element: lazy(() => import('./views/widgets/WidgetChart'))
      },
      {
        exact: 'true',
        path: '/layout/vertical/static',
        element: lazy(() => import('./views/page-layouts/vertical/Static'))
      },
      {
        exact: 'true',
        path: '/layout/vertical/fixed',
        element: lazy(() => import('./views/page-layouts/vertical/Fixed'))
      },
      {
        exact: 'true',
        path: '/layout/vertical/nav-fixed',
        element: lazy(() => import('./views/page-layouts/vertical/NavFixed'))
      },
      {
        exact: 'true',
        path: '/layout/vertical/collapse-menu',
        element: lazy(() => import('./views/page-layouts/vertical/CollapseMenu'))
      },
      {
        exact: 'true',
        path: '/layout/vertical/v-rtl',
        element: lazy(() => import('./views/page-layouts/vertical/RTLLayout'))
      },
      {
        exact: 'true',
        path: '/layout/horizontal',
        element: lazy(() => import('./views/page-layouts/horizontal/Static'))
      },
      {
        exact: 'true',
        path: '/layout/horizontal-v2',
        element: lazy(() => import('./views/page-layouts/horizontal/Static-v2'))
      },
      {
        exact: 'true',
        path: '/layout/horizontal-rtl',
        element: lazy(() => import('./views/page-layouts/horizontal/RTLLayout'))
      },
      {
        exact: 'true',
        path: '/layout/box',
        element: lazy(() => import('./views/page-layouts/extra-layouts/Box'))
      },
      {
        exact: 'true',
        path: '/layout/light',
        element: lazy(() => import('./views/page-layouts/extra-layouts/Light'))
      },
      {
        exact: 'true',
        path: '/layout/dark',
        element: lazy(() => import('./views/page-layouts/extra-layouts/Dark'))
      },
      {
        exact: 'true',
        path: '/layout/color-icon',
        element: lazy(() => import('./views/page-layouts/extra-layouts/ColorIcon'))
      },
      {
        exact: 'true',
        path: '/layout/nav-color',
        element: lazy(() => import('./views/page-layouts/extra-layouts/NavColor'))
      },
      {
        exact: 'true',
        path: '/layout/layout-2',
        element: lazy(() => import('./views/page-layouts/extra-layouts/Layout-2'))
      },
      {
        exact: 'true',
        path: '/layout/layout-2-2',
        element: lazy(() => import('./views/page-layouts/extra-layouts/Layout-22'))
      },
      {
        exact: 'true',
        path: '/layout/layout-3',
        element: lazy(() => import('./views/page-layouts/extra-layouts/Layout-3'))
      },
      {
        exact: 'true',
        path: '/layout/layout-4',
        element: lazy(() => import('./views/page-layouts/extra-layouts/Layout-4'))
      },
      {
        exact: 'true',
        path: '/layout/layout-4-2',
        element: lazy(() => import('./views/page-layouts/extra-layouts/Layout-42'))
      },
      {
        exact: 'true',
        path: '/layout/layout-5h',
        element: lazy(() => import('./views/page-layouts/extra-layouts/Layout-5h'))
      },
      {
        exact: 'true',
        path: '/layout/layout-6',
        element: lazy(() => import('./views/page-layouts/extra-layouts/Layout-6'))
      },
      {
        exact: 'true',
        path: '/layout/layout-8',
        element: lazy(() => import('./views/page-layouts/extra-layouts/Layout-8'))
      },
      {
        exact: 'true',
        path: '/users/user-profile',
        element: lazy(() => import('./views/users/UserProfile'))
      },
      {
        exact: 'true',
        path: '/users/user-cards',
        element: lazy(() => import('./views/users/UserCard'))
      },
      {
        exact: 'true',
        path: '/users/user-list',
        element: lazy(() => import('./views/users/UserList'))
      },
      {
        exact: 'true',
        path: '/basic/alert',
        element: lazy(() => import('./views/ui-elements/basic/BasicAlert'))
      },
      {
        exact: 'true',
        path: '/basic/button',
        element: lazy(() => import('./views/ui-elements/basic/BasicButton'))
      },
      {
        exact: 'true',
        path: '/basic/badges',
        element: lazy(() => import('./views/ui-elements/basic/BasicBadges'))
      },
      {
        exact: 'true',
        path: '/basic/breadcrumb',
        element: lazy(() => import('./views/ui-elements/basic/BasicBreadcrumb'))
      },
      {
        exact: 'true',
        path: '/basic/pagination',
        element: lazy(() => import('./views/ui-elements/basic/BasicPagination'))
      },
      {
        exact: 'true',
        path: '/basic/cards',
        element: lazy(() => import('./views/ui-elements/basic/BasicCards'))
      },
      {
        exact: 'true',
        path: '/basic/collapse',
        element: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      },
      {
        exact: 'true',
        path: '/basic/carousel',
        element: lazy(() => import('./views/ui-elements/basic/BasicCarousels'))
      },
      {
        exact: 'true',
        path: '/basic/grid-system',
        element: lazy(() => import('./views/ui-elements/basic/BasicGridSystem'))
      },
      {
        exact: 'true',
        path: '/basic/progress',
        element: lazy(() => import('./views/ui-elements/basic/BasicProgress'))
      },
      {
        exact: 'true',
        path: '/basic/modal',
        element: lazy(() => import('./views/ui-elements/basic/BasicModals'))
      },
      {
        exact: 'true',
        path: '/basic/spinner',
        element: lazy(() => import('./views/ui-elements/basic/BasicSpinner'))
      },
      {
        exact: 'true',
        path: '/basic/tabs-pills',
        element: lazy(() => import('./views/ui-elements/basic/BasicTabsPills'))
      },
      {
        exact: 'true',
        path: '/basic/typography',
        element: lazy(() => import('./views/ui-elements/basic/BasicTypography'))
      },
      {
        exact: 'true',
        path: '/basic/tooltip',
        element: lazy(() => import('./views/ui-elements/basic/BasicTooltips'))
      },
      {
        exact: 'true',
        path: '/basic/popovers',
        element: lazy(() => import('./views/ui-elements/basic/BasicPopovers'))
      },
      {
        exact: 'true',
        path: '/basic/other',
        element: lazy(() => import('./views/ui-elements/basic/BasicOther'))
      },
      {
        exact: 'true',
        path: '/advance/sweet-alert',
        element: lazy(() => import('./views/ui-elements/advance/AdvanceAlert'))
      },
      {
        exact: 'true',
        path: '/advance/datepicker',
        element: lazy(() => import('./views/ui-elements/advance/AdvanceDatepicker'))
      },
      {
        exact: 'true',
        path: '/advance/task-board',
        element: lazy(() => import('./views/ui-elements/advance/AdvanceTaskBoard'))
      },
      {
        exact: 'true',
        path: '/advance/light-box',
        element: lazy(() => import('./views/ui-elements/advance/AdvanceLightBox'))
      },
      {
        exact: 'true',
        path: '/advance/adv-modal',
        element: lazy(() => import('./views/ui-elements/advance/AdvanceModal'))
      },
      {
        exact: 'true',
        path: '/advance/notification',
        element: lazy(() => import('./views/ui-elements/advance/AdvanceNotification'))
      },
      {
        exact: 'true',
        path: '/advance/nestable',
        element: lazy(() => import('./views/ui-elements/advance/AdvanceNestable'))
      },
      {
        exact: 'true',
        path: '/advance/p-notify',
        element: lazy(() => import('./views/ui-elements/advance/AdvancePNotify'))
      },
      {
        exact: 'true',
        path: '/advance/rating',
        element: lazy(() => import('./views/ui-elements/advance/AdvanceRating'))
      },
      {
        exact: 'true',
        path: '/advance/range-slider',
        element: lazy(() => import('./views/ui-elements/advance/AdvanceRangeSlider'))
      },
      {
        exact: 'true',
        path: '/advance/slider',
        element: lazy(() => import('./views/ui-elements/advance/AdvanceSlider'))
      },
      {
        exact: 'true',
        path: '/advance/syntax-highlighter',
        element: lazy(() => import('./views/ui-elements/advance/AdvanceSyntaxHighlighter'))
      },
      {
        exact: 'true',
        path: '/advance/tour',
        element: lazy(() => import('./views/ui-elements/advance/AdvanceTour'))
      },
      {
        exact: 'true',
        path: '/advance/tree-view',
        element: lazy(() => import('./views/ui-elements/advance/AdvanceTree'))
      },
      {
        exact: 'true',
        path: '/forms/form-basic',
        element: lazy(() => import('./views/forms/FormsElements'))
      },
      {
        exact: 'true',
        path: '/forms/form-advance',
        element: lazy(() => import('./views/forms/FormsAdvance'))
      },
      {
        exact: 'true',
        path: '/forms/form-validation',
        element: lazy(() => import('./views/forms/FormsValidation'))
      },
      {
        exact: 'true',
        path: '/forms/form-masking',
        element: lazy(() => import('./views/forms/FormsMasking'))
      },
      {
        exact: 'true',
        path: '/forms/form-wizard',
        element: lazy(() => import('./views/forms/FormsWizard'))
      },
      {
        exact: 'true',
        path: '/forms/form-picker',
        element: lazy(() => import('./views/forms/FormsPicker'))
      },
      {
        exact: 'true',
        path: '/forms/form-select',
        element: lazy(() => import('./views/forms/FormsSelect'))
      },
      {
        exact: 'true',
        path: '/tables/bootstrap',
        element: lazy(() => import('./views/tables/BootstrapTable'))
      },
      {
        exact: 'true',
        path: '/table/datatable/tbl-basic',
        element: lazy(() => import('./views/tables/react-table/Basic'))
      },
      {
        exact: 'true',
        path: '/table/datatable/tbl-footer',
        element: lazy(() => import('./views/tables/react-table/Footers'))
      },
      {
        exact: 'true',
        path: '/table/datatable/tbl-sorting',
        element: lazy(() => import('./views/tables/react-table/Sorting'))
      },
      {
        exact: 'true',
        path: '/table/datatable/tbl-filtering',
        element: lazy(() => import('./views/tables/react-table/Filtering'))
      },
      {
        exact: 'true',
        path: '/table/datatable/tbl-grouping',
        element: lazy(() => import('./views/tables/react-table/Grouping'))
      },
      {
        exact: 'true',
        path: '/table/datatable/tbl-pagination',
        element: lazy(() => import('./views/tables/react-table/Pagination'))
      },
      {
        exact: 'true',
        path: '/charts/amchart',
        element: lazy(() => import('./views/charts/am-chart'))
      },
      {
        exact: 'true',
        path: '/charts/apex-chart',
        element: lazy(() => import('./views/charts/apex-chart'))
      },
      {
        exact: 'true',
        path: '/charts/chart-js',
        element: lazy(() => import('./views/charts/chart-js'))
      },
      {
        exact: 'true',
        path: '/charts/e-chart',
        element: lazy(() => import('./views/charts/e-chart'))
      },
      {
        exact: 'true',
        path: '/charts/google-chart',
        element: lazy(() => import('./views/charts/google-chart'))
      },
      {
        exact: 'true',
        path: '/charts/highchart',
        element: lazy(() => import('./views/charts/highchart'))
      },
      {
        exact: 'true',
        path: '/charts/rechart',
        element: lazy(() => import('./views/charts/re-chart'))
      },
      {
        exact: 'true',
        path: '/charts/nvd3',
        element: lazy(() => import('./views/charts/nvd3-chart'))
      },
      {
        exact: 'true',
        path: '/charts/radial',
        element: lazy(() => import('./views/charts/radial-chart'))
      },
      {
        exact: 'true',
        path: '/maps/google-map',
        element: lazy(() => import('./views/maps/GoogleMaps'))
      },
      {
        exact: 'true',
        path: '/maps/vector-map',
        element: lazy(() => import('./views/maps/VectorMaps'))
      },
      {
        exact: 'true',
        path: '/todo/todo-basic',
        element: lazy(() => import('./views/applications/to-do/ToDo'))
      },
      {
        exact: 'true',
        path: '/message',
        element: lazy(() => import('./views/applications/message'))
      },
      {
        exact: 'true',
        path: '/task/task-list',
        element: lazy(() => import('./views/applications/task/TaskList'))
      },
      {
        exact: 'true',
        path: '/task/task-board',
        element: lazy(() => import('./views/applications/task/TaskBoard'))
      },
      {
        exact: 'true',
        path: '/task/task-detail',
        element: lazy(() => import('./views/applications/task/TaskDetails'))
      },
      {
        exact: 'true',
        path: '/gallery/gallery-grid',
        element: lazy(() => import('./views/applications/gallery/GalleryGrid'))
      },
      {
        exact: 'true',
        path: '/gallery/photo-grid',
        element: lazy(() => import('./views/applications/gallery/PhotoGrid'))
      },
      {
        exact: 'true',
        path: '/gallery/gallery-masonry',
        element: lazy(() => import('./views/applications/gallery/MasonryGallery'))
      },
      {
        exact: 'true',
        path: '/gallery/gallery-advance',
        element: lazy(() => import('./views/applications/gallery/GalleryAdvance'))
      },
      {
        exact: 'true',
        path: '/editor/ck-editor/ck-classic',
        element: lazy(() => import('./views/extensions/editors/ck-editor/EditorCkClassic'))
      },
      {
        exact: 'true',
        path: '/editor/ck-editor/ck-balloon',
        element: lazy(() => import('./views/extensions/editors/ck-editor/EditorCkBalloon'))
      },
      {
        exact: 'true',
        path: '/editor/ck-editor/ck-inline',
        element: lazy(() => import('./views/extensions/editors/ck-editor/EditorCkInline'))
      },
      {
        exact: 'true',
        path: '/editor/ck-editor/ck-document',
        element: lazy(() => import('./views/extensions/editors/ck-editor/EditorCkDocument'))
      },
      {
        exact: 'true',
        path: '/editor/rich-editor',
        element: lazy(() => import('./views/extensions/editors/EditorRichNib'))
      },
      {
        exact: 'true',
        path: '/editor/jodit-wysiwyg',
        element: lazy(() => import('./views/extensions/editors/EditorJoditWYSIWYG'))
      },
      {
        exact: 'true',
        path: '/image-cropper',
        element: lazy(() => import('./views/extensions/ImageCropper'))
      },
      {
        exact: 'true',
        path: '/file-upload',
        element: lazy(() => import('./views/extensions/FileUpload'))
      },
      {
        exact: 'true',
        path: '/full-calendar',
        element: lazy(() => import('./views/extensions/FullEventCalendar'))
      },
      {
        exact: 'true',
        path: '/invoice/invoice-basic',
        element: lazy(() => import('./views/extensions/invoice/InvoiceBasic'))
      },
      {
        exact: 'true',
        path: '/invoice/invoice-summary',
        element: lazy(() => import('./views/extensions/invoice/InvoiceSummary'))
      },
      {
        exact: 'true',
        path: '/invoice/invoice-list',
        element: lazy(() => import('./views/extensions/invoice/InvoiceList'))
      },
      {
        exact: 'true',
        path: '/sample-page',
        element: lazy(() => import('./views/extra/SamplePage'))
      },
      {
        path: '*',
        exact: 'true',
        element: () => <Navigate to={BASE_URL} />
      }
    ]
  }
];

export default routes;
