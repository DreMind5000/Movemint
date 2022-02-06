(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: external "@headlessui/react"
const react_namespaceObject = require("@headlessui/react");
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(120);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var solid_esm = __webpack_require__(942);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function KryptoBirdMarketplace({
  Component,
  pageProps
}) {
  var _fotterNavigation$soc;

  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  };
  const navigation = [{
    name: "Main Marketplace ",
    href: "/",
    current: false
  }, {
    name: "Mint Tokens",
    href: "/mint-item",
    current: false
  }, {
    name: "My NFTS",
    href: "/my-nfts",
    current: false
  }, {
    name: "Account Dashboard",
    href: "/account-dashboard",
    current: false
  }];
  const fotterNavigation = {
    support: [{
      name: "All NFTs",
      href: "#"
    }, {
      name: "How It Works",
      href: "#"
    }, {
      name: "Create",
      href: "#"
    }, {
      name: " Privacy & Terms",
      href: "#"
    }],
    company: [{
      name: "Help Center",
      href: "#"
    }, {
      name: "Partners",
      href: "#"
    }, {
      name: "Suggestions",
      href: "#"
    }, {
      name: "Blog",
      href: "#"
    }, {
      name: "Newsletter",
      href: "#"
    }],
    social: [{
      name: "Facebook",
      href: "#",
      icon: props => /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), {}, {
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          fillRule: "evenodd",
          d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
          clipRule: "evenodd"
        })
      }))
    }, {
      name: "Instagram",
      href: "#",
      icon: props => /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), {}, {
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          fillRule: "evenodd",
          d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
          clipRule: "evenodd"
        })
      }))
    }, {
      name: "Twitter",
      href: "#",
      icon: props => /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), {}, {
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
        })
      }))
    }, {
      name: "GitHub",
      href: "#",
      icon: props => /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), {}, {
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          fillRule: "evenodd",
          d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
          clipRule: "evenodd"
        })
      }))
    }, {
      name: "Dribbble",
      href: "#",
      icon: props => /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), {}, {
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          fillRule: "evenodd",
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
          clipRule: "evenodd"
        })
      }))
    }]
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Disclosure, {
      as: "nav",
      className: "bg-gray-900  w-full ",
      children: ({
        open
      }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-between h-16",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "-ml-2 mr-2 flex items-center md:hidden",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_namespaceObject.Disclosure.Button, {
                  className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "sr-only",
                    children: "Open main menu"
                  }), open ? /*#__PURE__*/jsx_runtime_.jsx(esm/* XIcon */.b0D, {
                    className: "block h-6 w-6",
                    "aria-hidden": "true"
                  }) : /*#__PURE__*/jsx_runtime_.jsx(esm/* MenuIcon */.Oqj, {
                    className: "block h-6 w-6",
                    "aria-hidden": "true"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex-shrink-0 flex items-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "block lg:hidden h-8 w-auto",
                  src: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
                  alt: "Workflow"
                }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "hidden lg:block h-8 w-auto",
                  src: "https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg",
                  alt: "Workflow"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "hidden md:ml-6 md:flex md:items-center md:space-x-4",
                children: navigation.map(item => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: item.href,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "px-3 py-2 rounded-md text-sm font-medium text-white cursor-pointer "),
                    children: [" ", item.name]
                  })
                }, item.name))
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "pl-5 flex-shrink-0 ",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/account-dashboard",
                  children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                    type: "button",
                    className: "relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: "Wallet connect"
                    })
                  })
                })
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Disclosure.Panel, {
          className: "md:hidden",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: " px-2 pt-2 pb-3 space-y-1 sm:px-3 ",
            children: navigation.map(item => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: item.href,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", " text-white  px-3 py-2 rounded-md text-base font-medium  cursor-pointer"),
                children: [" ", item.name]
              })
            }, item.name))
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
      className: "bg-white border-t",
      "aria-labelledby": "footer-heading",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        id: "footer-heading",
        className: "sr-only",
        children: "Footer"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "pb-8 xl:grid xl:grid-cols-4 xl:gap-8",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-2 gap-8 xl:col-span-4",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "md:grid md:grid-cols-2 md:gap-8",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "text-sm font-semibold text-gray-400 tracking-wider uppercase",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: "block  h-8 w-auto",
                    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
                    alt: "Workflow"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                  role: "list",
                  className: "mt-4 space-y-2 ",
                  children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "text-base text-gray-600 hover:text-gray-900",
                    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae."
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "mt-12 md:mt-0",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "text-sm font-semibold text-indigo-600 tracking-wider uppercase",
                  children: "Useful Links"
                }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                  role: "list",
                  className: "mt-4 space-y-2",
                  children: navigation.map(item => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: item.href,
                    children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "text-base text-gray-700 hover:text-gray-900 cursor-pointer",
                        children: item.name
                      })
                    }, item.name)
                  }, item.name))
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "md:grid md:grid-cols-2 md:gap-8",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "text-sm font-semibold text-indigo-600 tracking-wider uppercase",
                  children: "Community"
                }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                  role: "list",
                  className: "mt-4 space-y-2",
                  children: fotterNavigation.company.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: item.href,
                      className: "text-base text-gray-700 hover:text-gray-900",
                      children: item.name
                    })
                  }, item.name))
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "mt-12 md:mt-0",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "mt-12 xl:mt-0",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    className: "text-sm font-semibold text-indigo-500 tracking-wider uppercase",
                    children: "Language & Currency"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                    className: "mt-4 sm:max-w-xs",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
                      className: "w-full",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                        htmlFor: "language",
                        className: "sr-only",
                        children: "Language"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "relative",
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                          id: "language",
                          name: "language",
                          className: "appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                          defaultValue: "English",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                            children: "English"
                          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                            children: "French"
                          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                            children: "German"
                          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                            children: "Japanese"
                          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                            children: "Spanish"
                          })]
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center",
                          children: /*#__PURE__*/jsx_runtime_.jsx(solid_esm/* ChevronDownIcon */.v4q, {
                            className: "h-4 w-4 text-gray-400",
                            "aria-hidden": "true"
                          })
                        })]
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
                      className: "mt-4 w-full",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                        htmlFor: "currency",
                        className: "sr-only",
                        children: "Currency"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "relative",
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                          id: "currency",
                          name: "currency",
                          className: "appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                          defaultValue: "AUD",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                            children: "ARS"
                          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                            children: "AUD"
                          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                            children: "CAD"
                          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                            children: "CHF"
                          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                            children: "EUR"
                          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                            children: "GBP"
                          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                            children: "JPY"
                          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                            children: "USD"
                          })]
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center",
                          children: /*#__PURE__*/jsx_runtime_.jsx(solid_esm/* ChevronDownIcon */.v4q, {
                            className: "h-4 w-4 text-gray-400",
                            "aria-hidden": "true"
                          })
                        })]
                      })]
                    })]
                  })]
                })
              })]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex space-x-6 md:order-2",
            children: (_fotterNavigation$soc = fotterNavigation.social) === null || _fotterNavigation$soc === void 0 ? void 0 : _fotterNavigation$soc.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              href: item.href,
              className: "text-gray-400 hover:text-gray-500",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: item.name
              }), /*#__PURE__*/jsx_runtime_.jsx(item.icon, {
                className: "h-6 w-6",
                "aria-hidden": "true"
              })]
            }, item.name))
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "mt-8 text-base text-indigo-500 md:mt-0 md:order-1",
            children: "\xA9 2020 Workflow, Inc. All rights reserved."
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ const _app = (KryptoBirdMarketplace);

/***/ }),

/***/ 325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210], () => (__webpack_exec__(218)));
module.exports = __webpack_exports__;

})();