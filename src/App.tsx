import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Savings from "./pages/Savings";
import Loans from "./pages/Loans";
import Transactions from "./pages/Transactions";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Protected Routes with Navigation */}
          <Route path="/dashboard" element={
            <>
              <Navigation />
              <div className="lg:pl-64">
                <Dashboard />
              </div>
            </>
          } />
          <Route path="/savings" element={
            <>
              <Navigation />
              <div className="lg:pl-64">
                <Savings />
              </div>
            </>
          } />
          <Route path="/loans" element={
            <>
              <Navigation />
              <div className="lg:pl-64">
                <Loans />
              </div>
            </>
          } />
          <Route path="/transactions" element={
            <>
              <Navigation />
              <div className="lg:pl-64">
                <Transactions />
              </div>
            </>
          } />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
