import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Security from "@/pages/Security";
import Compliance from "@/pages/Compliance";
import Documentation from "@/pages/Documentation";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/security" component={Security} />
        <Route path="/compliance" component={Compliance} />
        <Route path="/documentation" component={Documentation} />
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </>
  );
}

export default App;
