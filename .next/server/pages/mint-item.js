"use strict";
(() => {
var exports = {};
exports.id = 996;
exports.ids = [996];
exports.modules = {

/***/ 394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MintItem)
});

// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(879);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "web3modal"
var external_web3modal_ = __webpack_require__(519);
var external_web3modal_default = /*#__PURE__*/__webpack_require__.n(external_web3modal_);
;// CONCATENATED MODULE: external "ipfs-http-client"
const external_ipfs_http_client_namespaceObject = require("ipfs-http-client");
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(25);
// EXTERNAL MODULE: ./artifacts/contracts/NFT.sol/NFT.json
var NFT = __webpack_require__(615);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./artifacts/contracts/KBMarket.sol/KBMarket.json
var KBMarket = __webpack_require__(928);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/mint-item.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // in this component we set the ipfs up to host our nft data of
// file storage




const client = (0,external_ipfs_http_client_namespaceObject.create)("https://ipfs.infura.io:5001/api/v0");
function MintItem() {
  const {
    0: fileUrl,
    1: setFileUrl
  } = (0,external_react_.useState)(null);
  const {
    0: formInput,
    1: updateFormInput
  } = (0,external_react_.useState)({
    price: "",
    name: "",
    description: ""
  });
  const router = (0,router_namespaceObject.useRouter)(); // set up a function to fireoff when we update files in our form - we can add our
  // NFT images - IPFS

  async function onChange(e) {
    const file = e.target.files[0];

    try {
      const added = await client.add(file, {
        progress: prog => console.log(`received: ${prog}`)
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file:", error);
    }
  }

  async function createMarket() {
    const {
      name,
      description,
      price
    } = formInput;
    if (!name || !description || !price || !fileUrl) return; // upload to IPFS

    const data = JSON.stringify({
      name,
      description,
      image: fileUrl
    });

    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`; // run a function that creates sale and passes in the url

      createSale(url);
    } catch (error) {
      console.log("Error uploading file:", error);
    }
  }

  async function createSale(url) {
    // create the items and list them on the marketplace
    const web3Modal = new (external_web3modal_default())();
    const connection = await web3Modal.connect();
    const provider = new external_ethers_.ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner(); // we want to create the token

    let contract = new external_ethers_.ethers.Contract(config/* nftaddress */.k, NFT/* abi */.Mt, signer);
    let transaction = await contract.mintToken(url);
    let tx = await transaction.wait();
    let event = tx.events[0];
    let value = event.args[2];
    let tokenId = value.toNumber();
    const price = external_ethers_.ethers.utils.parseUnits(formInput.price, "ether"); // list the item for sale on the marketplace

    contract = new external_ethers_.ethers.Contract(config/* nftmarketaddress */.A, KBMarket/* abi */.Mt, signer);
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();
    transaction = await contract.makeMarketItem(config/* nftaddress */.k, tokenId, price, {
      value: listingPrice
    });
    await transaction.wait();
    router.push("./");
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "sm:mx-auto sm:w-full sm:max-w-md",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "mt-6 text-center text-3xl font-medium ",
          children: "Create Item"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "mt-2 text-center text-sm text-gray-600",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "font-medium text-indigo-600 hover:text-indigo-500",
            children: "GET STARTED"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-8 sm:mx-auto sm:w-full sm:max-w-xl border rounded-xl",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: " py-8 px-4 shadow sm:rounded-lg sm:px-10",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "space-y-6",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "w-full flex flex-col pb-5",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  htmlFor: "email",
                  className: "pt-4 pb-1 block text-md",
                  children: "Name"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  placeholder: "Asset Name",
                  className: "bg-gray-100 p-3 shadow-sm block w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none",
                  onChange: e => updateFormInput(_objectSpread(_objectSpread({}, formInput), {}, {
                    name: e.target.value
                  }))
                }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                  htmlFor: "email",
                  className: "pt-4 pb-1 block text-md",
                  children: "Price"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  placeholder: "Asset Price in Eth",
                  className: "bg-gray-100 p-3 shadow-sm block w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none",
                  onChange: e => updateFormInput(_objectSpread(_objectSpread({}, formInput), {}, {
                    price: e.target.value
                  }))
                }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                  htmlFor: "email",
                  className: "pt-4 pb-1 block text-md ",
                  children: "Select Your File"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "file",
                  name: "Asset",
                  className: "bg-gray-100  shadow-sm block w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none",
                  onChange: onChange
                }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                  htmlFor: "email",
                  className: "pt-4 pb-1 block text-md",
                  children: "Description"
                }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                  rows: "4",
                  placeholder: "Asset Description",
                  className: "p-3 bg-gray-100  shadow-sm block w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none",
                  onChange: e => updateFormInput(_objectSpread(_objectSpread({}, formInput), {}, {
                    description: e.target.value
                  }))
                }), fileUrl && /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "rounded mt-4",
                  width: "350px",
                  src: fileUrl
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  onClick: createMarket,
                  className: "font-bold mt-4 bg-indigo-600 text-white rounded p-4 shadow-lg",
                  children: "Mint NFT"
                })]
              })
            })
          })
        })
      })]
    })
  });
}

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
var __webpack_exports__ = __webpack_require__.X(0, [571], () => (__webpack_exec__(394)));
module.exports = __webpack_exports__;

})();