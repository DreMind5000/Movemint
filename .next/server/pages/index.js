(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(879);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(519);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(942);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(664);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25);
/* harmony import */ var _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(615);
/* harmony import */ var _artifacts_contracts_KBMarket_sol_KBMarket_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(928);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(120);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);













function Home() {
  const security = [{
    name: "Full on-chain metadata",
    email: "Avoid power cheating, you can verify dicks attributes by yourself.",
    role: "Avoid power cheating, you can verify dicks attributes by yourself.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__/* .ClockIcon */ .T39,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50"
  }, {
    name: "Decentralized storage",
    email: "lesliealexander@example.com",
    role: "Images are stored on IPFS to be immutable, immortal, unstoppable.",
    imageUrl: "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__/* .BadgeCheckIcon */ .js$,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50"
  }, {
    name: "Rarity algorithm",
    email: "lesliealexander@example.com",
    role: "Each dick is unique and each attribute has a rarity level.",
    imageUrl: "https://netstorm-react.theme-land.com/img/avatar_2.jpg",
    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__/* .ShieldCheckIcon */ .FjK,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50"
  }, {
    name: "Vectorized images",
    email: "lesliealexander@example.com",
    role: "Ensure high quality in all sizes using SVG format.",
    imageUrl: "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__/* .CashIcon */ .NbN,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50"
  } // More security...
  ];
  const actions = [{
    title: "Set up your wallet",
    description: "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.",
    href: "#",
    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__/* .ClockIcon */ .T39,
    iconForeground: "text-purple-600",
    iconBackground: "bg-purple-50"
  }, {
    title: "Create your collection",
    href: "#",
    description: "Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__/* .BadgeCheckIcon */ .js$,
    iconForeground: "text-purple-600",
    iconBackground: "bg-purple-50"
  }, {
    title: "Add your NFTs",
    description: "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.",
    href: "#",
    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__/* .UsersIcon */ .oyc,
    iconForeground: "text-purple-600",
    iconBackground: "bg-purple-50"
  }, {
    title: "List them for sale",
    description: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
    href: "#",
    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__/* .CashIcon */ .NbN,
    iconForeground: "text-purple-600",
    iconBackground: "bg-purple-50"
  }];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const {
    0: nfts,
    1: setNFts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loadingState,
    1: setLoadingState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("not-loaded");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    // what we want to load:
    // ***provider, tokenContract, marketContract, data for our marketItems***
    const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com");
    const tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_10__/* .nftaddress */ .k, _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__/* .abi */ .Mt, provider);
    const marketContract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_10__/* .nftmarketaddress */ .A, _artifacts_contracts_KBMarket_sol_KBMarket_json__WEBPACK_IMPORTED_MODULE_7__/* .abi */ .Mt, provider);
    const data = await marketContract.fetchMarketTokens();
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId); // we want get the token metadata - json

      const meta = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(tokenUri);
      let price = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.formatUnits(i.price.toString(), "ether");
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description
      };
      return item;
    }));
    setNFts(items);
    setLoadingState("loaded");
  } // function to buy nfts for market


  async function buyNFT(nft) {
    const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();
    const connection = await web3Modal.connect();
    const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_10__/* .nftmarketaddress */ .A, _artifacts_contracts_KBMarket_sol_KBMarket_json__WEBPACK_IMPORTED_MODULE_7__/* .abi */ .Mt, signer);
    const price = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(_config__WEBPACK_IMPORTED_MODULE_10__/* .nftaddress */ .k, nft.tokenId, {
      value: price
    });
    await transaction.wait();
    loadNFTs();
  }

  if (loadingState === "loaded" && !nfts.length) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("h1", {
    className: "px-20 py-7 text-4x1",
    children: "No NFts in marketplace"
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: "min-h-screen pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: "mx-auto max-w-7xl lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "lg:grid lg:grid-cols-2 lg:gap-8",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            className: "mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "lg:py-24",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                  className: "px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full",
                  children: "We are Selling"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                  className: "ml-4 text-sm",
                  children: "NFTS"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__/* .ChevronRightIcon */ .XCv, {
                  className: "ml-2 w-5 h-5 text-gray-500",
                  "aria-hidden": "true"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h1", {
                className: "mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                  className: "block",
                  children: " Discover, collect, and sell "
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                  className: "block text-indigo-400",
                  children: "extraordinary NFTs"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                className: "mt-10 text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl",
                children: ["10,000 unique NTFs with proof of ownership living on the Polygon blockchain and following the ERC-721 standard, but yeah, these are NFTs.", " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "mt-10",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                  href: "/mint-item",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("button", {
                    className: " mt-2 bg-gray-50 bg-opacity-5 border py-3 px-10 text-white rounded-full",
                    children: "Create NFTS"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("button", {
                  className: "ml-5 mt-2 bg-indigo-700  py-3 px-10 text-white rounded-full",
                  children: "Connect Wallet"
                })]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            className: "mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
              className: "mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("img", {
                className: "w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none",
                src: "https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg",
                alt: ""
              })
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: " mx-0 pl-6 sm:mx-24 pb-10 pt-32 flex justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
          className: "text-indigo-500 font-bold text-sm  tracking-wider ",
          children: "Exclusive Assets"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
          className: "font-bold text-4xl pb-5  tracking-widest",
          children: "Explore"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "font-semibold text-xl pb-5 flex items-center",
        children: ["View All", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__/* .ArrowNarrowRightIcon */ .BZ6, {
            className: "h-6 ml-3 font-semibold"
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "mx-0 sm:mx-24 pl-6 pr-6",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4 pb-10",
          children: nfts.map((nft, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: " border w-full shadow-2xl rounded-2xl overflow-hidden ",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("img", {
                src: nft.image,
                className: " h-48 object-cover w-full bg-gray-200 "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "p-7 border-t border-5",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                  className: "flex justify-between items-center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
                    style: {
                      height: "50px"
                    },
                    className: "text-2xl font-semibold  capitalize",
                    children: nft.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                    className: "text-xl mb-4 font-semibold text-gray-900  ",
                    children: [nft.price, " ETH"]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                  style: {
                    height: "40px",
                    overflow: "hidden"
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                    className: "",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                      className: "font-medium pr-1",
                      children: "Description: "
                    }), nft.description]
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                className: "p-4 ",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("button", {
                  className: "mb-2 w-full tracking-widest bg-indigo-700 text-white font-semibold py-3 px-12 rounded",
                  onClick: () => buyNFT(nft),
                  children: "Buy"
                })
              })]
            }, i)
          }))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
          className: "text-center pt-20 pb-10",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("button", {
            className: " bg-purple-50 border border-indigo-700 py-3 px-10 text-indigo-700 rounded-full",
            children: "Load More"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "mx-0 pl-6 sm:mx-24 pb-10 pt-10",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
        className: "text-indigo-500 tracking-widest font-bold text-sm ",
        children: "How It Works"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
        className: " font-bold text-3xl pb-5 tracking-wide ",
        children: "Create and sell your NFTs"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: " mb-20 rounded-lg  overflow-hidden shadow-xl p-3 sm:grid sm:grid-cols-4 sm:gap-px lg:mx-24 sm:mx-0",
      children: actions.map((action, actionIdx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: classNames("relative group  p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
            className: classNames(action.iconBackground, action.iconForeground, "rounded-lg inline-flex p-4 "),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(action.icon, {
              className: "h-10 w-10",
              "aria-hidden": "true"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "mt-8",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("h3", {
            className: "text-lg font-medium",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
              className: "focus:outline-none",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                className: " text-gray-800 absolute inset-0",
                "aria-hidden": "true"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
                className: "text-2xl",
                children: action.title
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
            className: "mt-2 text-md text-gray-500",
            children: action.description
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
          className: "pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400",
          "aria-hidden": "true",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("svg", {
            className: "h-6 w-6",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
              d: "M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
            })
          })
        })]
      }, action.title))
    })]
  });
}

/***/ }),

/***/ 376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 879:
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

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

/***/ 519:
/***/ ((module) => {

"use strict";
module.exports = require("web3modal");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,571], () => (__webpack_exec__(124)));
module.exports = __webpack_exports__;

})();