'use strict';

const parsers = require('occam-parsers'),
      necessary = require('necessary');

const ruleUtilities = require('./utilities/rule');

const { arrayUtilities } = necessary,
      { unshift } = arrayUtilities,
      { findRuleByName } = ruleUtilities,
      { BasicParser, termDefaultCustomGrammarBNF, statementDefaultCustomGrammarBNF, expressionDefaultCustomGrammarBNF, metastatementDefaultCustomGrammarBNF } = parsers;

class CombinedCustomGrammars {
  constructor(lexicalPattern, rules) {
    this.lexicalPattern = lexicalPattern;
    this.rules = rules;
  }
  
  getLexicalPattern() {
    return this.lexicalPattern;
  }

  getRules() {
    return this.rules;
  }

  static fromCustomGrammars(customGrammars) {
    const combinedLexicalPattern = combinedLexicalPatternFromCustomGrammars(customGrammars),
          combinedRules = combinedRulesFromCustomGrammars(customGrammars),
          lexicalPattern = combinedLexicalPattern,  ///
          rules = combinedRules,  ///
          combinedCustomGrammars = new CombinedCustomGrammars(lexicalPattern, rules);
    
    return combinedCustomGrammars;
  }
}

module.exports = CombinedCustomGrammars;

function combinedLexicalPatternFromCustomGrammars(customGrammars) {
  const lexicalPatterns = lexicalPatternsFromCustomGrammars(customGrammars),
        combinedLexicalPattern = lexicalPatterns.reverse().join('|'); ///

  return combinedLexicalPattern;
}

function combinedRulesFromCustomGrammars(customGrammars) {
  const metastatementDefaultBNF = metastatementDefaultCustomGrammarBNF, ///
        expressionDefaultBNF = expressionDefaultCustomGrammarBNF, ///
        statementDefaultBNF = statementDefaultCustomGrammarBNF, ///
        termDefaultBNF = termDefaultCustomGrammarBNF, ///
        metastatementBNFs = bnfsFromCustomGrammars('metastatement', customGrammars),
        expressionBNFs = bnfsFromCustomGrammars('expression', customGrammars),
        statementBNFs = bnfsFromCustomGrammars('statement', customGrammars),
        termBNFs = bnfsFromCustomGrammars('term', customGrammars),
        metastatementRules = rulesFromBNFs('metastatement', metastatementDefaultBNF, metastatementBNFs),
        expressionRules = rulesFromBNFs('expression', expressionDefaultBNF, expressionBNFs),
        statementRules = rulesFromBNFs('statement', statementDefaultBNF, statementBNFs),
        termRules = rulesFromBNFs('term', termDefaultBNF, termBNFs),
        combinedRules = [].concat(metastatementRules).concat(statementRules).concat(expressionRules).concat(termRules); ///

  return combinedRules;
}

function lexicalPatternsFromCustomGrammars(customGrammars) {
  const lexicalPatterns = [];

  customGrammars.forEach(function(customGrammar) {
    const lexicalPattern = customGrammar.getLexicalPattern();

    if (lexicalPattern) { ///
      lexicalPatterns.push(lexicalPattern);
    }
  });

  return lexicalPatterns;
}

function bnfsFromCustomGrammars(ruleName, customGrammars) {
  const bnfs = [];

  customGrammars.forEach(function(customGrammar) {
    const bnf = customGrammar.getBNF(ruleName);

    if (bnf) {  ///
      bnfs.push(bnf);
    }
  });

  return bnfs;
}

function rulesFromBNFs(ruleName, defaultBNF, bnfs) {
  const defaultRules = rulesFromBNF(defaultBNF),
        defaultMainRule = mainRuleFromRulesAndRuleName(defaultRules, ruleName),
        defaultRemainingRules = remainingRulesFromRulesAndMainRule(defaultRules, defaultMainRule),
        defaultMainRuleDefinitions = defaultMainRule.getDefinitions();

  bnfs.forEach(function(bnf) {
    const rules = rulesFromBNF(bnf),
          mainRule = mainRuleFromRulesAndRuleName(rules, ruleName),
          remainingRules = remainingRulesFromRulesAndMainRule(rules, mainRule),
          mainRuleDefinitions = (mainRule !== null) ?
                                  mainRule.getDefinitions() :
                                    [];

    unshift(defaultRemainingRules, remainingRules);

    unshift(defaultMainRuleDefinitions, mainRuleDefinitions);
  });

  const mainRule = defaultMainRule, ///
        remainingRules = defaultRemainingRules; ///

  const rules = [].concat(mainRule).concat(remainingRules);

  return rules;
}

function rulesFromBNF(bnf) {
  const basicParser = BasicParser.fromBNF(bnf),
        rules = basicParser.getRules();

  return rules;
}

function mainRuleFromRulesAndRuleName(rules, ruleName) {
  const name = ruleName,  ///
        mainRule = findRuleByName(name, rules);

  return mainRule;
}

function remainingRulesFromRulesAndMainRule(rules, mainRule) {
  const remainingRules = rules.filter(function(rule) {
    if (rule !== mainRule) {
      return true;
    }
  });

  return remainingRules;
}
