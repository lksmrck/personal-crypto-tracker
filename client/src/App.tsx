import React, { Suspense } from "react";
import { DashboardContextProvider } from "./state/DashboardContext";
import { Route, Redirect, Switch } from "react-router-dom";
import { FormContextProvider } from "./state/FormContext";
import Navbar from "./components/layout/Navbar";
import { useAppSelector } from "./state/hooks";
import { RootState } from ".";
import ErrorScreen from "./pages/screens/ErrorScreen";
import Footer from "./components/layout/Footer";
import { PageContainer, ContentWrapper } from "./components/layout/styled";
import FloatingScrollButton from "./components/layout/FloatingScrollButton";
import LoadingSpinner from "./components/layout/LoadingSpinner";

const HomeDashboard = React.lazy(() => import("./pages/HomeDashboard"));
const Holdings = React.lazy(() => import("./pages/Holdings"));
const Transactions = React.lazy(() => import("./pages/Transactions"));
const Auth = React.lazy(() => import("./components/auth/Auth"));

const App: React.FC = () => {
  const error = useAppSelector((state: RootState) => state.errorAndLoading);

  return (
    <DashboardContextProvider>
      <FloatingScrollButton />
      <Navbar />
      <PageContainer>
        <ContentWrapper>
          {error.isError ? (
            <ErrorScreen />
          ) : (
            <div>
              <Suspense fallback={<LoadingSpinner />}>
                <Route path="/" exact>
                  <Redirect to="/dashboard" />
                </Route>
                {/* Route kvůli github pages */}
                <Route path="/personal-crypto-tracker" exact>
                  <Redirect to="/dashboard" />
                </Route>
                <Switch>
                  <FormContextProvider>
                    <Route path="/dashboard" exact component={HomeDashboard} />
                    <Route path="/holdings" exact component={Holdings} />
                    <Route
                      path="/transactions"
                      exact
                      component={Transactions}
                    />
                    <Route path="/auth" exact component={Auth} />
                  </FormContextProvider>
                </Switch>
              </Suspense>
            </div>
          )}
        </ContentWrapper>
        <Footer />
      </PageContainer>
    </DashboardContextProvider>
  );
};

export default App;
