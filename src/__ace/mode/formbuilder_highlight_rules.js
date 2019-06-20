define(function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

    var FormBuilderHighlightRules = function() {

        // regexp must not have capturing parentheses. Use (?:) instead.
        // regexps are ordered -> the first match is used
        this.$rules = {
            start: [
                {
                    token: "comment",
                    regex: /#[^\n]*/,
                    next: "start"
                },
                {
                    token: ["keyword", "text", "variable.language", "keyword", "variable.language"],
                    regex: /(participant)(\s+)([\w," \\]+)(\s+as\s+)([\w,"]+)/,
                    next: "start"
                },
                {
                    token: ["keyword", "text", "variable.language"],
                    regex: /(participant)(\s+)([\w," \\]+)/,
                    next: "start"
                },
                {
                    token: ["keyword", "variable.language", "text"],
                    regex: /(note over|note left of|note right of|state over|state left of|state right of)(\s+[\w," ]+)(\s*:)/,
                    next: "start"
                },
                {
                    token: "keyword",
                    regex: /(^\s*)(alt|opt|else|loop|par|parallel|option|title)(\b)/,
                    next: "start"
                },
                {
                    token: ["text", "keyword", "text", "constant"],
                    regex: /(^\s*)(include)(\s+)(\"[^\n]*)/,
                    next: "start"
                },
                {
                    token: ["text", "keyword", "variable.language"],
                    regex: /(^\s*)(activate|deactivate|destroy)(\s*\w+)/,
                    next: "start"
                },
                {
                    token: "keyword",
                    regex: /(^\s*end)( \w+)?/,
                    next: "start"
                },
                {
                    token: ["keyword", "variable.language"],
                    regex: /(note over|note left of|note right of)(\s+[\w,"]+)/,
                    next: "notelines"
                },
                {
                    token: ["variable.language", "keyword.operator", "keyword.operator", "variable.language", "text"],
                    regex: /(^\s*[\w," \]\[]+\s*)(->|--\x3e|->>|--\x3e>|<->|<--\x3e)([\*\+\-]?)(\s*[\w," \]\[]+)(\s*:)/,
                    next: "start"
                },
                {
                    token: ["keyword", "variable.language", "text"],
                    regex: /(^\s*ref over\b)([\w," ]+)(:[^\n]*)/,
                    next: "start"
                },
                {
                    token: "variable.language keyword.operator keyword.operator keyword variable.language text".split(" "),
                    regex: /(^\s*[\w," \]\[]+\s*)(->|--\x3e|->>|--\x3e>|<->|<--\x3e)(\+|-|\*)?(\s*ref over\b)([\w," ]+)(:[^\n]*)/,
                    next: "reflines"
                },
                {
                    token: "string",
                    regex: /^\s+[^\n]+/,
                    next: "start"
                },
                {
                    caseInsensitive: !0
                }],
            notelines: [
                {
                    token: "keyword",
                    regex: /^\s*end note/,
                    next: "start"
                },
                {
                    token: "text",
                    next: "notelines"
                },
                {
                    caseInsensitive: !0
                }],
            reflines: [
                {
                    token: ["keyword", "keyword.operator", "variable.language", "text"],
                    regex: /^(\s*end ref)(->|--\x3e|->>|--\x3e>|<->|<--\x3e)([\w," ]+)(:[^\n]*)/,
                    next: "start"
                },
                {
                    token: "keyword",
                    regex: /^\s*end ref/,
                    next: "start"
                },
                {
                    token: "text",
                    next: "reflines"
                },
                {
                    caseInsensitive: !0
                }]
        };
    };

    oop.inherits(FormBuilderHighlightRules, TextHighlightRules);

    exports.FormBuilderHighlightRules = FormBuilderHighlightRules;

});


