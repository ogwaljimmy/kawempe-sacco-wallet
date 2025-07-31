import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, TrendingUp, CreditCard, Users, Shield, BarChart3 } from "lucide-react";
import communityImage from "@/assets/community-meeting.jpg";
import walletImage from "@/assets/wallet-interface.jpg";

const Features = () => {
  const features = [
    {
      icon: Wallet,
      title: "Digital Wallet",
      description: "Secure digital wallet for all your SACCO transactions with real-time balance updates."
    },
    {
      icon: TrendingUp,
      title: "Savings Growth",
      description: "Track your savings growth with detailed analytics and projected returns."
    },
    {
      icon: CreditCard,
      title: "Quick Loans",
      description: "Apply for loans instantly with competitive rates and flexible repayment terms."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by the community, for the community. Transparent governance and decision making."
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Advanced encryption and security measures to protect your financial data."
    },
    {
      icon: BarChart3,
      title: "Financial Insights",
      description: "Comprehensive reports and analytics to help you make informed financial decisions."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Kawempe SACCO?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience modern banking with traditional community values. 
            Our platform combines cutting-edge technology with the trust of cooperative finance.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-strong transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Built for Our Community
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Kawempe SACCO has been serving our community for over 15 years. 
              Our digital wallet system brings traditional cooperative banking 
              into the modern age, making financial services more accessible 
              and transparent than ever before.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground">Zero hidden fees or charges</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground">24/7 access to your funds</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground">Community-backed loans</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={communityImage} 
              alt="Community meeting" 
              className="rounded-lg shadow-strong w-full"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
          <div className="lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Modern Digital Experience
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our intuitive dashboard gives you complete control over your finances. 
              Monitor savings growth, track loan payments, and access detailed 
              transaction history - all from one secure platform.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">UGX 50M+</div>
                <div className="text-sm text-muted-foreground">Monthly Transactions</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
            </div>
          </div>
          <div className="lg:order-1 relative">
            <img 
              src={walletImage} 
              alt="Wallet interface" 
              className="rounded-lg shadow-strong w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;