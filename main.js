/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fromUnixTime)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name fromUnixTime\n * @category Timestamp Helpers\n * @summary Create a date from a Unix timestamp.\n *\n * @description\n * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Number} unixTime - the given Unix timestamp (in seconds)\n * @returns {Date} the date\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Create the date 29 February 2012 11:45:05:\n * const result = fromUnixTime(1330515905)\n * //=> Wed Feb 29 2012 11:45:05\n */\n\nfunction fromUnixTime(dirtyUnixTime) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyUnixTime);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(unixTime * 1000);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/fromUnixTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/city.js":
/*!*********************!*\
  !*** ./src/city.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"City\": () => (/* binding */ City)\n/* harmony export */ });\n/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/fromUnixTime */ \"./node_modules/date-fns/esm/fromUnixTime/index.js\");\n\r\n\r\nclass City {\r\n  constructor(\r\n    lon,\r\n    lat,\r\n    desc,\r\n    temp,\r\n    humidity,\r\n    windSpeed,\r\n    cloudPercentage,\r\n    name,\r\n    country,\r\n    icon,\r\n    offset,\r\n    feelsLike\r\n  ) {\r\n    this.longitude = lon;\r\n    this.latitude = lat;\r\n    this.description = desc;\r\n    this.temperature = temp;\r\n    this.humidity = humidity;\r\n    this.windSpeed = windSpeed;\r\n    this.cloudPercentage = cloudPercentage;\r\n    this.name = name;\r\n    this.country = country;\r\n    this.icon = icon;\r\n    this.offset = offset;\r\n    this.feelsLike = feelsLike;\r\n    this.forecast;\r\n  }\r\n\r\n  getTemperature() {\r\n    return (Math.round((this.temperature - 273.15) * 100) / 100).toFixed(0);\r\n  }\r\n\r\n  getFeelsLike() {\r\n    return (Math.round((this.feelsLike - 273.15) * 100) / 100).toFixed(0);\r\n  }\r\n\r\n  getLongitude() {\r\n    return this.longitude;\r\n  }\r\n\r\n  getLatitude() {\r\n    return this.latitude;\r\n  }\r\n\r\n  getDescription() {\r\n    return this.description;\r\n  }\r\n\r\n  getHumidity() {\r\n    return this.humidity;\r\n  }\r\n\r\n  getWindSpeed() {\r\n    return this.windSpeed;\r\n  }\r\n\r\n  getCloudPercentage() {\r\n    return this.cloudPercentage;\r\n  }\r\n\r\n  getCity() {\r\n    return this.name;\r\n  }\r\n\r\n  getCountry() {\r\n    return this.country;\r\n  }\r\n\r\n  setForecast(forecast) {\r\n    this.forecast = forecast;\r\n  }\r\n\r\n  getForecast() {\r\n    return this.forecast.slice(1);\r\n  }\r\n\r\n  getIcon() {\r\n    return \"http://openweathermap.org/img/wn/\" + this.icon + \"@2x.png\";\r\n  }\r\n\r\n  getCurrentDay() {\r\n    let allDays = [\r\n      \"Sunday\",\r\n      \"Monday\",\r\n      \"Tuesday\",\r\n      \"Wednesday\",\r\n      \"Thursday\",\r\n      \"Friday\",\r\n      \"Saturday\",\r\n    ];\r\n    let date = new Date(this.datetime * 1000);\r\n    let dayName = allDays[date.getDay()];\r\n    return dayName;\r\n  }\r\n\r\n  getCurrentTime() {\r\n    const localTime = (0,date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.datetime + this.offset).toUTCString();\r\n    let hours = localTime.slice(17, 19);\r\n    let minutes = localTime.slice(20, 22);\r\n    let suffix = \"am\";\r\n    if (hours > 11) {\r\n      suffix = \"pm\";\r\n    }\r\n    if (hours > 12) {\r\n      hours -= 12;\r\n    }\r\n    return hours + \":\" + minutes + \" \" + suffix;\r\n  }\r\n\r\n  isNight() {\r\n    if (this.icon.slice(-1) == \"n\") {\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n\r\n  setDt(dt) {\r\n    this.datetime = dt;\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/city.js?");

/***/ }),

/***/ "./src/forecast.js":
/*!*************************!*\
  !*** ./src/forecast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Day\": () => (/* binding */ Day)\n/* harmony export */ });\nclass Day {\r\n  constructor(temp, desc, windSpeed, cloudPercentage, icon, dt) {\r\n    this.temperature = temp;\r\n    this.description = desc;\r\n    this.windSpeed = windSpeed;\r\n    this.cloudPercentage = cloudPercentage;\r\n    this.icon = icon;\r\n    this.datetime = dt;\r\n  }\r\n\r\n  getTemperature() {\r\n    return (Math.round((this.temperature - 273.15) * 100) / 100).toFixed(0);\r\n  }\r\n\r\n  getDescription() {\r\n    return this.description;\r\n  }\r\n\r\n  getWindSpeed() {\r\n    return this.windSpeed;\r\n  }\r\n\r\n  getCloudPercentage() {\r\n    return this.cloudPercentage;\r\n  }\r\n\r\n  getCurrentDay() {\r\n    let allDays = [\r\n      \"Sunday\",\r\n      \"Monday\",\r\n      \"Tuesday\",\r\n      \"Wednesday\",\r\n      \"Thursday\",\r\n      \"Friday\",\r\n      \"Saturday\",\r\n    ];\r\n    let date = new Date(this.datetime * 1000);\r\n    let dayName = allDays[date.getDay()];\r\n    return dayName;\r\n  }\r\n\r\n  getCurrentTime() {\r\n    let date = new Date(this.dt * 1000);\r\n    let hours = date.getHours();\r\n    let minutes = \"0\" + date.getMinutes();\r\n    return hours + \":\" + minutes;\r\n  }\r\n\r\n  getIcon() {\r\n    return \"http://openweathermap.org/img/wn/\" + this.icon + \"@2x.png\";\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/forecast.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./src/script.js\");\n\r\n\r\n(0,_script__WEBPACK_IMPORTED_MODULE_0__.callWeatherData)(\"Frankfurt\");\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"callWeatherData\": () => (/* binding */ callWeatherData)\n/* harmony export */ });\n/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city */ \"./src/city.js\");\n/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast */ \"./src/forecast.js\");\n\r\n\r\n\r\nasync function callWeatherData(city) {\r\n  try {\r\n    const response = await fetch(\r\n      \"http://api.openweathermap.org/data/2.5/weather?q=\" +\r\n        city +\r\n        \"&APPID=2721941ff1d23996817409883d4be5dd\",\r\n      { mode: \"cors\" }\r\n    );\r\n    const data = await response.json();\r\n    makeObject(data);\r\n  } catch (error) {\r\n    console.log(\"Something went wrong: \" + error);\r\n  }\r\n}\r\n\r\nasync function callForecastData(lat, lon, city) {\r\n  try {\r\n    const response = await fetch(\r\n      \"http://api.openweathermap.org/data/2.5/onecall?lon=\" +\r\n        lon +\r\n        \"&lat=\" +\r\n        lat +\r\n        \"&APPID=2721941ff1d23996817409883d4be5dd\",\r\n      { mode: \"cors\" }\r\n    );\r\n    const data = await response.json();\r\n    addForecast(data, city);\r\n  } catch (error) {\r\n    console.log(\"Something went wrong: 2\" + error);\r\n  }\r\n}\r\n\r\nfunction makeObject(data) {\r\n  let lat = data.coord.lat;\r\n  let lon = data.coord.lon;\r\n  let desc = data.weather[0].description;\r\n  let temp = data.main.temp;\r\n  let humidity = data.main.humidity;\r\n  let windSpeed = data.wind.speed;\r\n  let cloudPercentage = data.clouds.all;\r\n  let name = data.name;\r\n  let country = data.sys.country;\r\n  let icon = data.weather[0].icon;\r\n  let offset = data.timezone;\r\n  let feelsLike = data.main.feels_like;\r\n  let city = new _city__WEBPACK_IMPORTED_MODULE_0__.City(\r\n    lat,\r\n    lon,\r\n    desc,\r\n    temp,\r\n    humidity,\r\n    windSpeed,\r\n    cloudPercentage,\r\n    name,\r\n    country,\r\n    icon,\r\n    offset,\r\n    feelsLike\r\n  );\r\n  callForecastData(lat, lon, city);\r\n}\r\n\r\nfunction addForecast(data, city) {\r\n  let sevenDayForecast = [];\r\n  let cityDt = data.current.dt;\r\n  for (let day of data.daily) {\r\n    let temp = day.temp.day;\r\n    let desc = day.weather[0].description;\r\n    let windSpeed = day.wind_speed;\r\n    let cloudPercentage = day.clouds;\r\n    let icon = day.weather[0].icon;\r\n    let dt = day.dt;\r\n    let fcDay = new _forecast__WEBPACK_IMPORTED_MODULE_1__.Day(temp, desc, windSpeed, cloudPercentage, icon, dt);\r\n    sevenDayForecast.push(fcDay);\r\n  }\r\n  city.setForecast(sevenDayForecast);\r\n  city.setDt(cityDt);\r\n  renderCurrentDay(city);\r\n  renderForecast(city);\r\n}\r\n\r\nfunction renderCurrentDay(city) {\r\n  const content = document.getElementById(\"content\");\r\n  const forecast = document.getElementById(\"forecast\");\r\n  const tempDiv = document.getElementById(\"temp\");\r\n  const windSpeedDiv = document.getElementById(\"windSpeed\");\r\n  const nameDiv = document.getElementById(\"name\");\r\n  const icon = document.getElementById(\"icon\");\r\n  tempDiv.innerHTML = `Feels like: <br> <i class=\"fa-solid fa-temperature-high\"></i> ${city.getTemperature()} ° C`;\r\n  windSpeedDiv.innerHTML = `Wind speed: <br> <i class=\"fa-solid fa-wind\"></i>  ${city.getWindSpeed()} km/h`;\r\n  nameDiv.textContent = city.getCity() + \", \" + city.getCountry();\r\n  icon.src = city.getIcon();\r\n  const dayName = document.getElementById(\"dayName\");\r\n  dayName.textContent = city.getCurrentDay() + \", \" + city.getCurrentTime();\r\n}\r\n\r\nfunction renderForecast(city) {\r\n  const forecasts = document.getElementById(\"forecast\");\r\n  forecasts.innerHTML = \"\";\r\n  for (let day of city.getForecast()) {\r\n    let dayDiv = document.createElement(\"div\");\r\n    dayDiv.classList.add(\"forecast-day\");\r\n    let nameDiv = document.createElement(\"div\");\r\n    nameDiv.textContent = day.getCurrentDay();\r\n    let descDiv = document.createElement(\"div\");\r\n    let descImg = document.createElement(\"img\");\r\n    descImg.src = day.getIcon();\r\n    descDiv.append(descImg);\r\n    let tempDiv = document.createElement(\"div\");\r\n    tempDiv.textContent = day.getTemperature() + \"° C\";\r\n    dayDiv.append(nameDiv, descDiv, tempDiv);\r\n    forecasts.appendChild(dayDiv);\r\n  }\r\n}\r\n\r\nconst button = document.getElementById(\"inputs\");\r\nbutton.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  let input = document.getElementById(\"city-input\").value;\r\n  callWeatherData(input);\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;