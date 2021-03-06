"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _select = _interopRequireDefault(require("../select"));
var _constants = require("../../constants");
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
var RuleNameSelect = function(Select) {
    _inherits(RuleNameSelect, Select);
    function RuleNameSelect() {
        _classCallCheck(this, RuleNameSelect);
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameSelect).apply(this, arguments));
    }
    _createClass(RuleNameSelect, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                var value = this.getValue(), ruleName = value; ///
                return ruleName;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var termName = _constants.TERM_RULE_NAME, termValue = termName, expressionName = _constants.EXPRESSION_RULE_NAME, expressionValue = expressionName, statementName = _constants.STATEMENT_RULE_NAME, statementValue = statementName, metastatementName = _constants.METASTATEMENT_RULE_NAME, metastatementValue = metastatementName; ///
                return [
                    /*#__PURE__*/ React.createElement("option", {
                        value: termValue,
                        selected: true
                    }, termName),
                    /*#__PURE__*/ React.createElement("option", {
                        value: expressionValue,
                        selected: true
                    }, expressionName),
                    /*#__PURE__*/ React.createElement("option", {
                        value: statementValue,
                        selected: true
                    }, statementName),
                    /*#__PURE__*/ React.createElement("option", {
                        value: metastatementValue,
                        selected: true
                    }, metastatementName), 
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getRuleName = this.getRuleName.bind(this); ///
                return {
                    getRuleName: getRuleName
                };
            }
        }
    ]);
    return RuleNameSelect;
}(_select.default);
_defineProperty(RuleNameSelect, "defaultProperties", {
    className: "rule-name",
    spellCheck: "false"
});
exports.default = RuleNameSelect;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3NlbGVjdC9ydWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vc2VsZWN0XCI7XG5cbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBFWFBSRVNTSU9OX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSAgZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZVNlbGVjdCBleHRlbmRzIFNlbGVjdCB7XG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB0ZXJtTmFtZSA9IFRFUk1fUlVMRV9OQU1FLCAgLy8vXG4gICAgICAgICAgdGVybVZhbHVlID0gdGVybU5hbWUsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb25OYW1lID0gRVhQUkVTU0lPTl9SVUxFX05BTUUsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb25WYWx1ZSA9IGV4cHJlc3Npb25OYW1lLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROYW1lID0gU1RBVEVNRU5UX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFZhbHVlID0gc3RhdGVtZW50TmFtZSwgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5hbWUgPSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSwgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFZhbHVlID0gbWV0YXN0YXRlbWVudE5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxvcHRpb24gdmFsdWU9e3Rlcm1WYWx1ZX0gc2VsZWN0ZWQgPlxuICAgICAgICB7dGVybU5hbWV9XG4gICAgICA8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPXtleHByZXNzaW9uVmFsdWV9IHNlbGVjdGVkID5cbiAgICAgICAge2V4cHJlc3Npb25OYW1lfVxuICAgICAgPC9vcHRpb24+LFxuICAgICAgPG9wdGlvbiB2YWx1ZT17c3RhdGVtZW50VmFsdWV9IHNlbGVjdGVkID5cbiAgICAgICAge3N0YXRlbWVudE5hbWV9XG4gICAgICA8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPXttZXRhc3RhdGVtZW50VmFsdWV9IHNlbGVjdGVkID5cbiAgICAgICAge21ldGFzdGF0ZW1lbnROYW1lfVxuICAgICAgPC9vcHRpb24+LFxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UnVsZU5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicnVsZS1uYW1lXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVPLE9BQVc7SUFFc0UsVUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFaEcsY0FBYztjQUFkLGNBQWM7YUFBZCxjQUFjOzhCQUFkLGNBQWM7Z0VBQWQsY0FBYzs7aUJBQWQsY0FBYzs7WUFDakMsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztvQkFDSCxLQUFLLFFBQVEsUUFBUSxJQUNyQixRQUFRLEdBQUcsS0FBSyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFcEIsUUFBUTs7OztZQUdqQixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNMLFFBQVEsR0FYa0YsVUFBaUIsaUJBWTNHLFNBQVMsR0FBRyxRQUFRLEVBQ3BCLGNBQWMsR0FiNEUsVUFBaUIsdUJBYzNHLGVBQWUsR0FBRyxjQUFjLEVBQ2hDLGFBQWEsR0FmNkUsVUFBaUIsc0JBZ0IzRyxjQUFjLEdBQUcsYUFBYSxFQUM5QixpQkFBaUIsR0FqQnlFLFVBQWlCLDBCQWtCM0csa0JBQWtCLEdBQUcsaUJBQWlCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOzt1REFJOUMsTUFBTTt3QkFBQyxLQUFLLEVBQUUsU0FBUzt3QkFBRSxRQUFRLEVBQVIsSUFBUTt1QkFDL0IsUUFBUTt1REFFVixNQUFNO3dCQUFDLEtBQUssRUFBRSxlQUFlO3dCQUFFLFFBQVEsRUFBUixJQUFRO3VCQUNyQyxjQUFjO3VEQUVoQixNQUFNO3dCQUFDLEtBQUssRUFBRSxjQUFjO3dCQUFFLFFBQVEsRUFBUixJQUFRO3VCQUNwQyxhQUFhO3VEQUVmLE1BQU07d0JBQUMsS0FBSyxFQUFFLGtCQUFrQjt3QkFBRSxRQUFRLEVBQVIsSUFBUTt1QkFDeEMsaUJBQWlCOzs7OztZQU14QixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNMLFdBQVcsUUFBUSxXQUFXLENBQUMsSUFBSSxPQUFRLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7b0JBR2xELFdBQVcsRUFBWCxXQUFXOzs7OztXQXhDSSxjQUFjO0VBSmhCLE9BQVc7Z0JBSVQsY0FBYyxHQTRDMUIsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxTQUFXO0lBQ3RCLFVBQVUsR0FBRSxLQUFPOztrQkE5Q0YsY0FBYyJ9