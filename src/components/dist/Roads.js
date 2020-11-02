"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var Roads_module_css_1 = require("./Roads.module.css");
var ExitToApp_1 = require("@material-ui/icons/ExitToApp");
var Fab_1 = require("@material-ui/core/Fab");
var Navigation_1 = require("@material-ui/icons/Navigation");
var styles_1 = require("@material-ui/core/styles");
var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
var a = 0;
var temp = 0;
var latlon = new Array();
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            color: 'green'
        },
        margin: {
            margin: theme.spacing(1)
        },
        extendedIcon: {
            marginRight: theme.spacing(1)
        }
    });
});
function Roads(props) {
    var _a = react_1.useState("not_started"), ButtonState = _a[0], setButton = _a[1];
    var _b = react_1.useState(""), startLandmark = _b[0], setStartLandmark = _b[1];
    var _c = react_1.useState(""), terminalLandmark = _c[0], setTerminalLandmark = _c[1];
    var _d = react_1.useState("school"), startLandMarkType = _d[0], setStartLandMarkType = _d[1];
    var _e = react_1.useState("school"), terminalLandMarkType = _e[0], setTerminalLandmarkType = _e[1];
    var classes = useStyles();
    function delay(ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    }
    function handleChange(event) {
        if (event.target.name == "startType") {
            setStartLandMarkType(event.target.value);
        }
        else if (event.target.name == "endType") {
            setTerminalLandmarkType(event.target.value);
        }
        else if (event.target.name == "startName") {
            setStartLandmark(event.target.value);
        }
        else if (event.target.name == "endName") {
            setTerminalLandmark(event.target.value);
        }
    }
    function start() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setButton("started");
                        console.log("started");
                        _a.label = 1;
                    case 1:
                        if (!(ButtonState == "not_started" && a == 0)) return [3 /*break*/, 3];
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition(function (position) {
                                latlon.push([position.coords.latitude, position.coords.longitude]);
                            });
                        }
                        console.log("hi");
                        return [4 /*yield*/, delay(2500)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function stop() {
        a = 1;
        setButton("stopped");
        console.log("stopped");
        console.log(latlon);
    }
    function send() {
        console.log("sent");
        setButton("not_started");
        a = 0;
        temp = 0;
        console.log(latlon);
    }
    function handleSubmit(event) {
        return __awaiter(this, void 0, void 0, function () {
            var temp, response, body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        return [4 /*yield*/, delay(250)];
                    case 1:
                        _a.sent();
                        temp = JSON.stringify({
                            start_landmark_type: startLandMarkType,
                            start_landmark: startLandmark,
                            end_landmark_type: terminalLandMarkType,
                            end_landmark: terminalLandmark,
                            route: latlon
                        });
                        return [4 /*yield*/, fetch('http://localhost:5000/storeRoutes', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: temp
                            })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 3:
                        body = _a.sent();
                        console.log('sent');
                        setButton("not_started");
                        setStartLandmark("");
                        setStartLandMarkType("school");
                        setTerminalLandmark("");
                        setTerminalLandmarkType("school");
                        return [2 /*return*/];
                }
            });
        });
    }
    ;
    return (react_1["default"].createElement("div", { className: Roads_module_css_1["default"].Container },
        react_1["default"].createElement(ExitToApp_1["default"], { className: Roads_module_css_1["default"].back, style: { fontSize: "2vw" }, onClick: props.Back }),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("b", { className: Roads_module_css_1["default"].text }, "Press Start to Initialize Route Collection"),
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement("div", { className: Roads_module_css_1["default"].wrapper },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", null, "Select Type of Start Landmark:"),
                        react_1["default"].createElement("select", { name: "startType", id: "cars", className: Roads_module_css_1["default"].selector, onChange: handleChange },
                            react_1["default"].createElement("option", { value: "school" }, "School"),
                            react_1["default"].createElement("option", { value: "hospital" }, "Hospital"),
                            react_1["default"].createElement("option", { value: "temple" }, "Temple"),
                            react_1["default"].createElement("option", { value: "mosque" }, "Mosque"),
                            react_1["default"].createElement("option", { value: "church" }, "Church"))),
                    react_1["default"].createElement("div", { className: Roads_module_css_1["default"].emailInputWrapper },
                        react_1["default"].createElement("input", { className: Roads_module_css_1["default"].emailInput, name: "startName", placeholder: "Name", onChange: handleChange }))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", null, "Select Type of End Landmark:"),
                        react_1["default"].createElement("select", { name: "endType", id: "cars", className: Roads_module_css_1["default"].selector, onChange: handleChange },
                            react_1["default"].createElement("option", { value: "school" }, "School"),
                            react_1["default"].createElement("option", { value: "hospital" }, "Hospital"),
                            react_1["default"].createElement("option", { value: "temple" }, "Temple"),
                            react_1["default"].createElement("option", { value: "mosque" }, "Mosque"),
                            react_1["default"].createElement("option", { value: "church" }, "Church"))),
                    react_1["default"].createElement("div", { className: Roads_module_css_1["default"].emailInputWrapper },
                        react_1["default"].createElement("input", { className: Roads_module_css_1["default"].emailInput, name: "endName", placeholder: "Name", onChange: handleChange }))),
                ButtonState == "not_started" ?
                    react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "primary", "aria-label": "add", className: classes.margin, onClick: start },
                        react_1["default"].createElement(Navigation_1["default"], { className: classes.extendedIcon }),
                        "Start")
                    : react_1["default"].createElement("b", null),
                ButtonState == "started" ?
                    react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "secondary", "aria-label": "add", className: classes.margin, onClick: stop },
                        react_1["default"].createElement(Navigation_1["default"], { className: classes.extendedIcon }),
                        "Stop")
                    : react_1["default"].createElement("b", null),
                ButtonState == "stopped" ?
                    react_1["default"].createElement(Fab_1["default"], { variant: "extended", color: "inherit", "aria-label": "add", className: classes.margin, type: "submit" },
                        react_1["default"].createElement(Navigation_1["default"], { className: classes.extendedIcon }),
                        "Send?")
                    : react_1["default"].createElement("b", null)))));
}
;
exports["default"] = Roads;
