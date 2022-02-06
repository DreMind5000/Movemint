"use strict";
(() => {
var exports = {};
exports.id = 362;
exports.ids = [362];
exports.modules = {

/***/ 148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccountDashBoard)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(879);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(519);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);
/* harmony import */ var _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(615);
/* harmony import */ var _artifacts_contracts_KBMarket_sol_KBMarket_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(928);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
// we want to load the users nfts and display









function AccountDashBoard() {
  // array of nfts
  const {
    0: nfts,
    1: setNFts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: sold,
    1: setSold
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loadingState,
    1: setLoadingState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('not-loaded');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    // what we want to load:
    // we want to get the msg.sender hook up to the signer to display the owner nfts
    const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();
    const connection = await web3Modal.connect();
    const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_7__/* .nftaddress */ .k, _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_4__/* .abi */ .Mt, provider);
    const marketContract = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_7__/* .nftmarketaddress */ .A, _artifacts_contracts_KBMarket_sol_KBMarket_json__WEBPACK_IMPORTED_MODULE_5__/* .abi */ .Mt, signer);
    const data = await marketContract.fetchItemsCreated();
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId); // we want get the token metadata - json 

      const meta = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(tokenUri);
      let price = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.formatUnits(i.price.toString(), 'ether');
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
    })); // create a filtered aray of items that have been sold

    const soldItems = items.filter(i => i.sold);
    setSold(soldItems);
    setNFts(items);
    setLoadingState('loaded');
  }

  if (loadingState === 'loaded' && !nfts.length) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
    className: "px-20 py-7 text-4x1",
    children: "You have not minted any NFTs!"
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "p-4",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
      style: {
        fontSize: '20px',
        color: 'purple'
      },
      children: "Tokens Minted"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: "px-4",
      style: {
        maxWidth: '1600px'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",
        children: nfts.map((nft, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "border shadow rounded-x1 overflow-hidden",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
            src: nft.image
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "p-4",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
              style: {
                height: '64px'
              },
              className: "text-3x1 font-semibold",
              children: nft.name
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              style: {
                height: '72px',
                overflow: 'hidden'
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                className: "text-gray-400",
                children: nft.description
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "p-4 bg-black",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
              className: "text-3x-1 mb-4 font-bold text-white",
              children: [nft.price, " ETH"]
            })
          })]
        }, i))
      })
    })]
  });
}

/***/ }),

/***/ 376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 879:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 519:
/***/ ((module) => {

module.exports = require("web3modal");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [571], () => (__webpack_exec__(148)));
module.exports = __webpack_exports__;

})();