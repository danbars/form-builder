define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"], function(require, exports, module) {
"use strict";

var Range = require("../range").Range;

var MatchingBraceOutdent = function() {};

(function() {

    this.checkOutdent = function(line, input) {
        if (! /^\s+$/.test(line))
            return false;

        return /^\s*\}/.test(input);
    };

    this.autoOutdent = function(doc, row) {
        var line = doc.getLine(row);
        var match = line.match(/^(\s*\})/);

        if (!match) return 0;

        var column = match[1].length;
        var openBracePos = doc.findMatchingBracket({row: row, column: column});

        if (!openBracePos || openBracePos.row == row) return 0;

        var indent = this.$getIndent(doc.getLine(openBracePos.row));
        doc.replace(new Range(row, 0, row, column-1), indent);
    };

    this.$getIndent = function(line) {
        return line.match(/^\s*/)[0];
    };

}).call(MatchingBraceOutdent.prototype);

exports.MatchingBraceOutdent = MatchingBraceOutdent;
});

define("ace/mode/formbuilder_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

    var FormBuilderHighlightRules = function() {
        this.$rules = {
            start: [
                {
                    token: ["keyword", "text", "text"],
                    regex: /^(\s*form)(\s+)([\w," \\]+)/,
                    next: "form"
                },
                {
                    caseInsensitive: !0
                }],
            form: [
                {
                    token: "keyword",
                    regex: /^\s*end form/,
                    next: "start"
                },
                {
                    token: ["keyword", "text", "constant.language"],
                    regex: /^(\s*method)(\s+)(post|get)/,
                    next: "form"
                },
                {
                    token: ["keyword", "text", "constant.language"],
                    regex: /^(\s*autocomplete)(\s+)(on|off)/,
                    next: "form"
                },
                {
                    token: ["keyword", "text", "text"],
                    regex: /^(\s*action)(\s+)([a-zA-Z0-9,|_:.\-\/\\]+)/,
                    next: "form"
                },
                {
                    token: ["keyword", "text", "text"],
                    regex: /^(\s*header)(\s+)(.+)/,
                    next: "form"
                },
                {
                    token: ["keyword", "text", "text"],
                    regex: /^(\s*section)(\s+)(.+)/,
                    next: "form"
                },
                {
                    token: ["keyword", "text"],
                    regex: /^(\s*field)(\s*)/,
                    next: "fielddef"
                },
                {
                    caseInsensitive: !0
                }
            ],


            fielddef: [
                {
                    token: ["keyword", "text", "variable.language"],
                    regex: /^(\s*name)(\s+)(\w+)/,
                    next: "fielddef"
                },
                {
                    token: ["keyword", "text", "constant.language"],
                    regex: /^(\s*type)(\s+)(textbox|phone|email|url|number|date|time|hidden|search|textarea|submit|select|combo|checkboxgroup|radiogroup)/,
                    next: "fielddef"
                },
                {
                    token: ["keyword", "text"],
                    regex: /^(\s*required)(\s*)/,
                    next: "fielddef"
                },
                {
                    token: ["keyword", "text", "constant.language"],
                    regex: /^(\s*autocomplete)(\s+)(on|off)/,
                    next: "fielddef"
                },
                {
                    token: ["keyword", "text", "text"],
                    regex: /^(\s*placeholder)(\s+)([\w\s]+)/,
                    next: "fielddef"
                },
                {
                    token: ["keyword", "text", "text"],
                    regex: /^(\s*value)(\s+)([\w\s]+)/,
                    next: "fielddef"
                },
                {
                    token: ["keyword", "text", "text"],
                    regex: /^(\s*label)(\s+)([\w\s]+)/,
                    next: "fielddef"
                },
                {
                    token: ["keyword", "text", "text"],
                    regex: /^(\s*hint)(\s+)([\w\s]+)/,
                    next: "fielddef"
                },
                {
                    token: ["keyword", "text", "text"],
                    regex: /^(\s*icon)(\s+)([\w\s]+)/,
                    next: "fielddef"
                },
                {
                    token: ["keyword", "text"],
                    regex: /^(\s*validations)(\s*)/,
                    next: "fieldvalidations"
                },
                {
                    token: "keyword",
                    regex: /^\s*end field/,
                    next: "form"
                },
                {
                    caseInsensitive: !0
                }
            ],
            fieldvalidations: [
                {
                    token: ["text", "keyword", "text", "variable.language.numeric"],
                    regex: /^(\s*)(maxlength|minlength)(\s+)(\d+)/,
                    next: "fieldvalidations"
                },
                {
                    token: "keyword",
                    regex: /^\s*end validations/,
                    next: "fielddef"
                },
            ]
        };
    };

    oop.inherits(FormBuilderHighlightRules, TextHighlightRules);

    exports.FormBuilderHighlightRules = FormBuilderHighlightRules;

});

define("ace/mode/formbuilder",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/matching_brace_outdent","ace/mode/formbuilder_highlight_rules"], function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
    var Tokenizer = require("../tokenizer").Tokenizer;
    var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
    var FormBuilderHighlightRules = require("./formbuilder_highlight_rules").FormBuilderHighlightRules;

    var Mode = function() {
        this.HighlightRules = FormBuilderHighlightRules;
        this.$outdent = new MatchingBraceOutdent();
    };
    oop.inherits(Mode, TextMode);

    (function() {
        this.lineCommentStart = "#";
        this.getNextLineIndent = function(state, line, tab) {
            var indent = this.$getIndent(line);
            if ((state === 'form' && /^(\s)*form(.)*$/i.test(line)) ||
                (state === 'fielddef' && /^(\s)*field(\s)*$/i.test(line)) ||
                (state === 'fieldvalidations' && /^(\s)*validations(\s)*$/i.test(line))) {
                return indent + tab;
            }

            return indent;
        };

        this.checkOutdent = function(state, line, input) {
            return ((state === 'fielddef' && /^(\s)*end validations(\s)*$/i.test(line)) ||
                (state === 'form' && /^(\s)*end field(\s)*$/i.test(line)) ||
                (state === 'start' && /^(\s)*end form(\s)*$/i.test(line)) ||

                (state === 'fieldvalidations' && /^(\s)*end validations(\s)*$/i.test(input)) ||
                (state === 'fielddef' && /^(\s)*end field(\s)*$/i.test(input)) ||
                (state === 'form' && /^(\s)*end form(\s)*$/i.test(input))
            );
        };

        this.autoOutdent = function(state, doc, row) {
        };

    }).call(Mode.prototype);

    exports.Mode = Mode;
});
                (function() {
                    window.require(["ace/mode/formbuilder"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            