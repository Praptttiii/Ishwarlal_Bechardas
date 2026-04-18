import { MessageCircle, Mail } from "lucide-react";

const FloatingContactButtons = () => {
  const whatsappNumber = "+919428960482";
  const email = "ankur9428960482@gmail.com";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello, I am interested in your spices and seeds products. Please share more details.",
    );
    window.open(
      `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${message}`,
      "_blank",
    );
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Inquiry for Bulk Spices and Seeds");
    const body = encodeURIComponent(
      "Dear Bechardas Maadhavdas Patel Exports ,\n\nI am interested in your products. Please share more details.\n\nThank you.",
    );
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Email Button */}
      <button
        onClick={handleEmailClick}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 group"
        aria-label="Send email inquiry"
      >
        <Mail className="h-6 w-6" />
        <span className="absolute right-16 bg-foreground text-background text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          Email Us
        </span>
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-16 bg-foreground text-background text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          WhatsApp
        </span>
      </button>
    </div>
  );
};

export default FloatingContactButtons;
