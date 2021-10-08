(function() {
var exports = {};
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const premoderation = true;
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  console.log("Cookie was accepted");
  res.status(200).json({
    name: "John Doe"
  });
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/hello.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXNlcnZlci1jbG8vLi9wYWdlcy9hcGkvaGVsbG8uanMiXSwibmFtZXMiOlsicHJlbW9kZXJhdGlvbiIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLGFBQWEsR0FBRyxJQUF0QjtBQUVBLCtEQUFlLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBRixLQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFyQjtBQUNILENBSEQsRSIsImZpbGUiOiJwYWdlcy9hcGkvaGVsbG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuXG5jb25zdCBwcmVtb2RlcmF0aW9uID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDb29raWUgd2FzIGFjY2VwdGVkXCIpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbmFtZTogXCJKb2huIERvZVwiIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=