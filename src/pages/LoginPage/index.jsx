import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("bttung.itdev@gmail.com");
  const [password, setPassword] = useState("tungCHINH30419#@!!@#!@");

  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0) 40%),
                radial-gradient(rgb(255, 209, 82) 30%, rgb(226, 105, 150), rgba(226, 105, 150, 0.4) 41%, rgba(0, 0, 0, 0) 52%),
                radial-gradient(rgb(160, 51, 255) 37%, rgba(160, 51, 255, 0) 46%),
                linear-gradient(155deg, rgba(255, 255, 255, 0) 65%, rgb(37, 212, 102) 95%),
                linear-gradient(45deg, rgb(0, 101, 224), rgb(15, 139, 255))
              `,
              backgroundSize: "200% 200%, 285% 500%, cover, cover",
              backgroundPosition: "0% 100%, 109% 68%, 50% 50%, 50%",
              backgroundRepeat: "no-repeat, no-repeat, no-repeat",
            }}
          />
        </div>
      </div>

      {/* Top gradient bar */}
      <div className="h-1 w-full relative z-10">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 py-2">
        <div className="w-full max-w-sm flex flex-col">
          {/* Language selector */}
          <div className="flex justify-center mb-5">
            <button className="text-[13px] text-gray-600 font-normal">
              English (US)
            </button>
          </div>

          {/* Facebook Logo */}
          <div className="flex justify-center items-center mb-5">
            <img
              src="https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yD/r/5D8s-GsHJlJ.png"
              alt="Facebook from Meta"
              className="max-h-[60px] object-contain"
            />
          </div>

          {/* Login Form */}
          <div className="space-y-3">
            {/* Email Input */}
            <div className="relative">
              <div className="bg-white border border-gray-300 rounded-xl px-4 py-2.5 flex items-center">
                <div className="flex-1">
                  <div className="text-[13px] text-gray-600 mb-0.5">
                    Mobile number or email
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-base font-medium text-gray-900 bg-transparent border-0 outline-none p-0"
                    aria-label="Mobile number or email"
                  />
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="bg-white border border-gray-300 rounded-xl px-4 py-2.5 flex items-center">
                <div className="flex-1">
                  <div className="text-[13px] text-gray-600 mb-0.5">
                    Password
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-base font-medium text-gray-900 bg-transparent border-0 outline-none p-0"
                    aria-label="Password"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-3 flex-shrink-0 w-6 h-6 flex items-center justify-center"
                  aria-label="Show password"
                >
                  {showPassword ? (
                    <EyeOff className="w-6 h-6 text-gray-600" />
                  ) : (
                    <Eye className="w-6 h-6 text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <div className="pt-3">
              <Button
                className="w-full h-11 bg-meta-blue hover:bg-facebook-dark text-white font-medium text-base rounded-[22px] border-0"
                aria-label="Log in"
              >
                Log in
              </Button>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-center pt-3">
              <button
                className="px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg"
                aria-label="Forgot password?"
              >
                Forgot password?
              </button>
            </div>
          </div>

          {/* Create Account Section */}
          <div className="flex-1 flex flex-col justify-end">
            <div className="pt-8">
              <Button
                variant="outline"
                className="w-full h-11 bg-transparent hover:bg-gray-50 text-facebook border-facebook border rounded-[22px] font-medium text-base"
                aria-label="Create new account"
              >
                Create new account
              </Button>
            </div>

            {/* Meta Logo */}
            <div className="flex justify-center py-5">
              <div className="w-[60px] h-3 relative">
                <img
                  src="https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yK/r/soeuNpXL37G.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex justify-center space-x-4 pb-4">
              <button className="text-[10px] text-gray-500 px-1 py-1">
                About
              </button>
              <button className="text-[10px] text-gray-500 px-1 py-1">
                Help
              </button>
              <button className="text-[10px] text-gray-500 px-1 py-1">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ERROR POPUP */}
      <div
      role="presentation"
      className="fixed inset-0 z-[1000] flex items-center justify-around bg-black/50 modal-backdrop-enter"
      style={{
        fontFamily:
          'system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <div
        tabIndex={-1}
        aria-label="Email address or mobile number required"
        className="w-[400px] max-w-[calc(100%-2rem)] mx-4 sm:mx-8 bg-white rounded-xl text-center shadow-2xl modal-enter"
        style={{
          fontFamily:
            'system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        {/* Header section with dark background */}
        <div
          className="px-6 sm:px-8 py-6 sm:py-8 text-center bg-white rounded-t-xl"
          style={{
            fontFamily:
              'system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          }}
        >
          <div
            className="text-black text-lg font-semibold text-center"
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "rgb(255, 255, 255)",
            }}
          >
            Email address or mobile number required
          </div>
          <div
            className="mt-3 text-center text-gray-700"
            style={{
              fontFamily:
                'system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            }}
          >
            Enter your email address or mobile number to continue.
          </div>
        </div>

        {/* Button section */}
        <div
          className="text-center"
          style={{
            fontFamily:
              'system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          }}
        >
          <div
            role="button"
            tabIndex={0}
            className="py-3 px-2.5 text-center cursor-pointer border-t border-solid border-t-gray-300 text-blue-600 hover:bg-gray-50 active:bg-gray-100 focus:bg-gray-50 focus:outline-none transition-colors rounded-b-xl"
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              color: "rgb(0, 100, 224)",
              borderTopColor: "rgb(206, 208, 212)",
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              whiteSpace: "nowrap",
              fontFamily:
                'system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            }}
            onClick={() => {
              // Handle OK button click
              console.log("OK clicked");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                console.log("OK clicked");
              }
            }}
          >
            OK
          </div>
        </div>
      </div>
    </div>
    {/* ERROR POPUP */}
    </div>
    
  );
}
