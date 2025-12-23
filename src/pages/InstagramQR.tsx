import { ArrowLeft, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import instagramQR from "@/assets/instagram-qr.png";

const InstagramQR = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative">
      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Portfolio</span>
      </button>

      {/* Content */}
      <div className="max-w-md w-full text-center space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-neon-pink via-purple-500 to-orange-500 rounded-2xl flex items-center justify-center">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Follow on Instagram</h1>
          <p className="text-muted-foreground">
            Scan the QR code below to follow <span className="text-neon-pink font-semibold">@santhoshhhz.___</span>
          </p>
        </div>

        {/* QR Code */}
        <div className="bg-white rounded-2xl p-6 shadow-xl shadow-neon-pink/10 border border-neon-pink/20">
          <img
            src={instagramQR}
            alt="Instagram QR Code - @santhoshhhz.___"
            className="w-full h-auto"
          />
        </div>

        {/* Instructions */}
        <div className="text-sm text-muted-foreground space-y-2">
          <p>Open your Instagram app and scan this QR code</p>
          <p className="text-xs opacity-70">or search for @santhoshhhz.___</p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-pink/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default InstagramQR;
