import { useState } from "react";
import { MessageCircle, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      action: "https://wa.me/919596831195?text=Hi%2C%20I%20found%20your%20profile%20and%20would%20like%20to%20know%20more%20about%20your%20services",
      bg: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Phone,
      label: "Call Now",
      action: "tel:+919596831195",
      bg: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Mail,
      label: "Email",
      action: "mailto:contact@malickumar.com",
      bg: "bg-red-500 hover:bg-red-600"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Actions */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 space-y-3 animate-scale-in">
          {quickActions.map((action, index) => (
            <div
              key={action.label}
              className="flex items-center gap-3 animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="bg-black/80 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                {action.label}
              </span>
              <Button
                asChild
                size="icon"
                className={`w-12 h-12 rounded-full shadow-lg ${action.bg} text-white border-none`}
              >
                <a href={action.action} target="_blank" rel="noopener noreferrer">
                  <action.icon className="h-5 w-5" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="w-14 h-14 rounded-full shadow-lg btn-glow text-black hover:scale-110 transition-transform"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default FloatingContactButton;