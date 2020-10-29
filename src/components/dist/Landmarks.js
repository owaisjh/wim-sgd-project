"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Landmarks_module_css_1 = require("./Landmarks.module.css");
var ExitToApp_1 = require("@material-ui/icons/ExitToApp");
var LocationOn_1 = require("@material-ui/icons/LocationOn");
function Roads(props) {
    var _a = react_1.useState(""), name = _a[0], setName = _a[1];
    var _b = react_1.useState("school"), typeLandmark = _b[0], setTypeLandMark = _b[1];
    function getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position.coords.latitude, position.coords.longitude);
                console.log(name);
                console.log(typeLandmark);
            });
        }
    }
    ;
    function handleChange(event) {
        if (event.target.name == "type") {
            setTypeLandMark(event.target.value);
        }
        else {
            setName(event.target.value);
        }
    }
    return (react_1["default"].createElement("div", { className: Landmarks_module_css_1["default"].Container },
        react_1["default"].createElement(ExitToApp_1["default"], { className: Landmarks_module_css_1["default"].back, style: { fontSize: "2vw" }, onClick: props.Back }),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("b", { className: Landmarks_module_css_1["default"].text }, "Please enter the details of the location"),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("label", null, "Select Type of Landmark:"),
            react_1["default"].createElement("select", { name: "type", id: "cars", className: Landmarks_module_css_1["default"].selector, onChange: handleChange },
                react_1["default"].createElement("option", { value: "school" }, "School"),
                react_1["default"].createElement("option", { value: "hospital" }, "Hospital"),
                react_1["default"].createElement("option", { value: "temple" }, "Temple"),
                react_1["default"].createElement("option", { value: "mosque" }, "Mosque"),
                react_1["default"].createElement("option", { value: "church" }, "Church"))),
        react_1["default"].createElement("div", { className: Landmarks_module_css_1["default"].emailInputWrapper },
            react_1["default"].createElement("input", { className: Landmarks_module_css_1["default"].emailInput, name: "text", placeholder: "Name", onChange: handleChange }),
            react_1["default"].createElement("button", { className: Landmarks_module_css_1["default"].emailButton, onClick: getPosition },
                react_1["default"].createElement(LocationOn_1["default"], { className: Landmarks_module_css_1["default"].emailLogo })))));
}
;
exports["default"] = Roads;
