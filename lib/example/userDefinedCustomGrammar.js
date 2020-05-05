"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _customGrammar = _interopRequireDefault(require("../customGrammar"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var name = _constants.USER_DEFINED_CUSTOM_GRAMMAR_NAME,
    ///
lexicalPattern = "<=|\\+|\\-|\\||insert|delete|empty",
    termBNF = "                term  ::=  operation\n\n                        |  operator\n                       \n                        |  substring\n\n                        |  stringLength\n\n                        ;\n\n\n           operation  ::=  operator<NO_WHITESPACE>\"(\" term \")\" ;\n\n\n            operator  ::=  \"insert\"<NO_WHITESPACE>\"(\" term \",\" term \")\"\n\n                        |  \"delete\"<NO_WHITESPACE>\"(\" term \",\" term \")\" \n\n                        |  \"empty\"<NO_WHITESPACE>\"(\"<NO_WHITESPACE>\")\"\n\n                        ;\n\n\n           substring  ::=  name<NO_WHITESPACE>\"[\" \"...\" expression \"]\" \n\n                        |  name<NO_WHITESPACE>\"[\" expression \"...\" expression \"]\" \n\n                        |  name<NO_WHITESPACE>\"[\" expression \"...\"  \"]\" \n\n                        ;\n\n\n      stringLength  ::=  \"|\" term \"|\" ;",
    expressionBNF = "          expression  ::=  arithmeticExpression\n\n                        ;\n\n\narithmeticExpression  ::=  addition \n\n                        |  subtraction \n\n                        ;\n\n\n            addition  ::=  expression \"+\" expression ;\n\n         subtraction  ::=  expression \"-\" expression ;",
    statementBNF = "           statement  ::=  lessThanOrEqualTo\n\n                        ;\n\n\n   lessThanOrEqualTo  ::=  expression \"<=\" expression ;",
    metastatementBNF = "",
    json = {
  "name": name,
  "lexicalPattern": lexicalPattern,
  "termBNF": termBNF,
  "expressionBNF": expressionBNF,
  "statementBNF": statementBNF,
  "metastatementBNF": metastatementBNF
},
    userDefinedCustomGrammar = _customGrammar["default"].fromJSON(json);

var _default = userDefinedCustomGrammar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5qcyJdLCJuYW1lcyI6WyJuYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsImpzb24iLCJ1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIiLCJDdXN0b21HcmFtbWFyIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLDJDQUFiO0FBQUEsSUFBZ0Q7QUFDMUNDLGNBQWMsdUNBRHBCO0FBQUEsSUFFTUMsT0FBTyxzNEJBRmI7QUFBQSxJQW1DTUMsYUFBYSw2VEFuQ25CO0FBQUEsSUFrRE1DLFlBQVksNklBbERsQjtBQUFBLElBd0RNQyxnQkFBZ0IsS0F4RHRCO0FBQUEsSUF5RE1DLElBQUksR0FBRztBQUNMLFVBQVFQLElBREg7QUFFTCxvQkFBa0JFLGNBRmI7QUFHTCxhQUFXQyxPQUhOO0FBSUwsbUJBQWlCQyxhQUpaO0FBS0wsa0JBQWdCQyxZQUxYO0FBTUwsc0JBQW9CQztBQU5mLENBekRiO0FBQUEsSUFpRU1FLHdCQUF3QixHQUFHQywwQkFBY0MsUUFBZCxDQUF1QkgsSUFBdkIsQ0FqRWpDOztlQW1FZUMsd0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4uL2N1c3RvbUdyYW1tYXJcIjtcblxuaW1wb3J0IHsgVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IG5hbWUgPSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSwgIC8vL1xuICAgICAgbGV4aWNhbFBhdHRlcm4gPSBgPD18XFxcXCt8XFxcXC18XFxcXHx8aW5zZXJ0fGRlbGV0ZXxlbXB0eWAsXG4gICAgICB0ZXJtQk5GID0gYCAgICAgICAgICAgICAgICB0ZXJtICA6Oj0gIG9wZXJhdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBvcGVyYXRvclxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIHN1YnN0cmluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBzdHJpbmdMZW5ndGhcblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICAgICAgICAgb3BlcmF0aW9uICA6Oj0gIG9wZXJhdG9yPE5PX1dISVRFU1BBQ0U+XCIoXCIgdGVybSBcIilcIiA7XG5cblxuICAgICAgICAgICAgb3BlcmF0b3IgIDo6PSAgXCJpbnNlcnRcIjxOT19XSElURVNQQUNFPlwiKFwiIHRlcm0gXCIsXCIgdGVybSBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcImRlbGV0ZVwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgdGVybSBcIixcIiB0ZXJtIFwiKVwiIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcImVtcHR5XCI8Tk9fV0hJVEVTUEFDRT5cIihcIjxOT19XSElURVNQQUNFPlwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgICAgICAgIHN1YnN0cmluZyAgOjo9ICBuYW1lPE5PX1dISVRFU1BBQ0U+XCJbXCIgXCIuLi5cIiBleHByZXNzaW9uIFwiXVwiIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBuYW1lPE5PX1dISVRFU1BBQ0U+XCJbXCIgZXhwcmVzc2lvbiBcIi4uLlwiIGV4cHJlc3Npb24gXCJdXCIgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIG5hbWU8Tk9fV0hJVEVTUEFDRT5cIltcIiBleHByZXNzaW9uIFwiLi4uXCIgIFwiXVwiIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgICAgc3RyaW5nTGVuZ3RoICA6Oj0gIFwifFwiIHRlcm0gXCJ8XCIgO2AsXG4gICAgICBleHByZXNzaW9uQk5GID0gYCAgICAgICAgICBleHByZXNzaW9uICA6Oj0gIGFyaXRobWV0aWNFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG5hcml0aG1ldGljRXhwcmVzc2lvbiAgOjo9ICBhZGRpdGlvbiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgc3VidHJhY3Rpb24gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgICAgICAgICBhZGRpdGlvbiAgOjo9ICBleHByZXNzaW9uIFwiK1wiIGV4cHJlc3Npb24gO1xuXG4gICAgICAgICBzdWJ0cmFjdGlvbiAgOjo9ICBleHByZXNzaW9uIFwiLVwiIGV4cHJlc3Npb24gO2AsXG4gICAgICBzdGF0ZW1lbnRCTkYgPSBgICAgICAgICAgICBzdGF0ZW1lbnQgIDo6PSAgbGVzc1RoYW5PckVxdWFsVG9cblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgIGxlc3NUaGFuT3JFcXVhbFRvICA6Oj0gIGV4cHJlc3Npb24gXCI8PVwiIGV4cHJlc3Npb24gO2AsXG4gICAgICBtZXRhc3RhdGVtZW50Qk5GID0gYGAsXG4gICAgICBqc29uID0ge1xuICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgXCJsZXhpY2FsUGF0dGVyblwiOiBsZXhpY2FsUGF0dGVybixcbiAgICAgICAgXCJ0ZXJtQk5GXCI6IHRlcm1CTkYsXG4gICAgICAgIFwiZXhwcmVzc2lvbkJORlwiOiBleHByZXNzaW9uQk5GLFxuICAgICAgICBcInN0YXRlbWVudEJORlwiOiBzdGF0ZW1lbnRCTkYsXG4gICAgICAgIFwibWV0YXN0YXRlbWVudEJORlwiOiBtZXRhc3RhdGVtZW50Qk5GXG4gICAgICB9LFxuICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyID0gQ3VzdG9tR3JhbW1hci5mcm9tSlNPTihqc29uKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyO1xuIl19