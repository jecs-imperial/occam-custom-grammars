"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _input = _interopRequireDefault(require("../input"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var StartRuleNameInput = function(Input) {
    _inherits(StartRuleNameInput, Input);
    function StartRuleNameInput() {
        _classCallCheck(this, StartRuleNameInput);
        return _possibleConstructorReturn(this, _getPrototypeOf(StartRuleNameInput).apply(this, arguments));
    }
    _createClass(StartRuleNameInput, [
        {
            key: "getStartRuleName",
            value: function getStartRuleName() {
                var value = this.getValue(), startRuleName = value; ///
                return startRuleName;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getStartRuleName = this.getStartRuleName.bind(this);
                return {
                    getStartRuleName: getStartRuleName
                };
            }
        }
    ]);
    return StartRuleNameInput;
}(_input.default);
_defineProperty(StartRuleNameInput, "defaultProperties", {
    className: "start-rule-name",
    spellCheck: "false"
});
exports.default = StartRuleNameInput;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2lucHV0L3N0YXJ0UnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRSdWxlTmFtZUlucHV0IGV4dGVuZHMgSW5wdXQge1xuICBnZXRTdGFydFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhcnRSdWxlTmFtZTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0U3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRTdGFydFJ1bGVOYW1lXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInN0YXJ0LXJ1bGUtbmFtZVwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRU0sTUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVQLGtCQUFrQjtjQUFsQixrQkFBa0I7YUFBbEIsa0JBQWtCOzhCQUFsQixrQkFBa0I7Z0VBQWxCLGtCQUFrQjs7aUJBQWxCLGtCQUFrQjs7WUFDckMsR0FBZ0IsR0FBaEIsZ0JBQWdCOzRCQUFoQixnQkFBZ0I7b0JBQ1IsS0FBSyxRQUFRLFFBQVEsSUFDckIsYUFBYSxHQUFHLEtBQUssQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRXpCLGFBQWE7Ozs7WUFHdEIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTCxnQkFBZ0IsUUFBUSxnQkFBZ0IsQ0FBQyxJQUFJOztvQkFHakQsZ0JBQWdCLEVBQWhCLGdCQUFnQjs7Ozs7V0FaRCxrQkFBa0I7RUFGckIsTUFBVTtnQkFFUCxrQkFBa0IsR0FnQjlCLGlCQUFpQjtJQUN0QixTQUFTLEdBQUUsZUFBaUI7SUFDNUIsVUFBVSxHQUFFLEtBQU87O2tCQWxCRixrQkFBa0IifQ==