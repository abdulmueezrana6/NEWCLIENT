import { Check, Shield, Lock, AlertTriangle } from "lucide-react";
import Header from "../../Header/Header";
import contentbanner from "../../../Resources/contentbanner.jpg";
export default function SecurityDashboard() {
  return (
    <div className="min-h-screen bg-facebook-background pt-16">
      <Header/>
      <div className="max-w-md mx-auto px-0 py-8">
        {/* Main security card */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header image and content */}
          <div className="p-0 text-center">
            <div className="mb-6">
              <img
                src={contentbanner}
                alt="Security illustration"
                className="w-full h-48 object-coverrounded-tl-xl rounded-tr-xl mb-4"
              />
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              You're all set
            </h1>

            <p className="text-gray-600 mb-6">
              Thank you for reviewing your security options. You can change these options at any time from your settings.
            </p>

            {/* Security checklist */}
            <div className="space-y-4 text-left">
              {/* Password OK */}
              <div className="flex items-start space-x-3 p-2">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">
                    Your password is OK
                  </p>
                </div>
              </div>

              {/* Two-factor authentication */}
              <div className="flex items-start space-x-3 p-2">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">
                    Two-factor authentication is on
                  </p>
                </div>
              </div>

              {/* Login alerts */}
              <div className="flex items-start space-x-3 p-2">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">
                    Login alerts are on
                  </p>
                </div>
              </div>
            </div>

            {/* Continue button */}
            <div className="p-3">
              <button className="w-full bg-meta-blue hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">     
                 <a href="https://m.facebook.com" rel="nofollow noopener noreferrer" target="_blank">Done</a>
              </button>
            </div>
          </div>
        </div>

        {/* Security completion screen */}
      </div>
    </div>
  );
}
