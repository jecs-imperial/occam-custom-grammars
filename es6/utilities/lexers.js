"use strict";

const lexers = require("occam-lexers");

const { Rule, FlorenceLexer } = lexers;

function florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar) {
  const { entries } = FlorenceLexer,
        florenceLexer = florenceLexerFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar);

  return florenceLexer;
}

function florenceLexerFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
  const combinedCustomGrammarLexicalPattern = combinedCustomGrammar.getLexicalPattern(),
        custom = combinedCustomGrammarLexicalPattern, ///
        customGrammarEntry = {
          custom
        },
        customGrammarRule =  Rule.fromEntry(customGrammarEntry),
        rules = entries.map((entry) => Rule.fromEntry(entry));

  rules.unshift(customGrammarRule);

  const florenceLexer = new FlorenceLexer(rules);

  return florenceLexer;
}

module.exports = {
  florenceLexerFromCombinedCustomGrammar,
  florenceLexerFromEntriesAndCombinedCustomGrammar
};
