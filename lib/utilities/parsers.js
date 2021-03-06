"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.florenceParserFromCombinedCustomGrammar = florenceParserFromCombinedCustomGrammar;
exports.florenceParserFromBNFAndCombinedCustomGrammar = florenceParserFromBNFAndCombinedCustomGrammar;
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _occamParsers = require("occam-parsers");
var _occamGrammars = require("occam-grammars");
var _necessary = require("necessary");
var push = _necessary.arrayUtilities.push;
function florenceParserFromCombinedCustomGrammar(combinedCustomGrammar) {
    var bnf = _occamGrammars.FlorenceParser.bnf, florenceParser = florenceParserFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar);
    return florenceParser;
}
function florenceParserFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
    var combinedCustomGrammarRuleMap = combinedCustomGrammar.getRuleMap(), bnfLexer = _occamLexers.BNFLexer.fromNothing(), bnfParser = _occamParsers.BNFParser.fromNothing(), tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), combinedCustomGrammarRules = Object.values(combinedCustomGrammarRuleMap);
    push(rules, combinedCustomGrammarRules);
    var florenceParser = _occamGrammars.FlorenceParser.fromRules(rules);
    return florenceParser;
}
var _default = {
    florenceParserFromCombinedCustomGrammar: florenceParserFromCombinedCustomGrammar,
    florenceParserFromBNFAndCombinedCustomGrammar: florenceParserFromBNFAndCombinedCustomGrammar
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCB7IGJuZiB9ID0gRmxvcmVuY2VQYXJzZXIsXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXJGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKTtcblxuICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9yZW5jZVBhcnNlckZyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZU1hcCA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hci5nZXRSdWxlTWFwKCksXG4gICAgICAgIGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzID0gT2JqZWN0LnZhbHVlcyhjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlTWFwKTtcblxuICBwdXNoKHJ1bGVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcyk7XG5cbiAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tUnVsZXMocnVsZXMpO1xuXG4gIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIsXG4gIGZsb3JlbmNlUGFyc2VyRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hclxufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBU0ksdUNBQXVDLEdBQXZDLHVDQUF1QztRQU92Qyw2Q0FBNkMsR0FBN0MsNkNBQTZDOztJQWRwQyxZQUFjO0lBQ2IsYUFBZTtJQUNWLGNBQWdCO0lBQ2hCLFVBQVc7SUFFbEMsSUFBSSxHQUZtQixVQUFXLGdCQUVsQyxJQUFJO1NBRUksdUNBQXVDLENBQUMscUJBQXFCO1FBQ25FLEdBQUcsR0FOa0IsY0FBZ0IsZ0JBTXJDLEdBQUcsRUFDTCxjQUFjLEdBQUcsNkNBQTZDLENBQUMsR0FBRyxFQUFFLHFCQUFxQjtXQUV4RixjQUFjOztTQUdQLDZDQUE2QyxDQUFDLEdBQUcsRUFBRSxxQkFBcUI7UUFDaEYsNEJBQTRCLEdBQUcscUJBQXFCLENBQUMsVUFBVSxJQUMvRCxRQUFRLEdBaEJTLFlBQWMsVUFnQlgsV0FBVyxJQUMvQixTQUFTLEdBaEJTLGFBQWUsV0FnQlgsV0FBVyxJQUNqQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQ25DLEtBQUssR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FDeEMsMEJBQTBCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEI7SUFFN0UsSUFBSSxDQUFDLEtBQUssRUFBRSwwQkFBMEI7UUFFaEMsY0FBYyxHQXRCUyxjQUFnQixnQkFzQlAsU0FBUyxDQUFDLEtBQUs7V0FFOUMsY0FBYzs7O0lBSXJCLHVDQUF1QyxFQUF2Qyx1Q0FBdUM7SUFDdkMsNkNBQTZDLEVBQTdDLDZDQUE2QyJ9