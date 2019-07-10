// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "dqstring$ebnf$1", "symbols": []},
    {"name": "dqstring$ebnf$1", "symbols": ["dqstring$ebnf$1", "dstrchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "dqstring", "symbols": [{"literal":"\""}, "dqstring$ebnf$1", {"literal":"\""}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "sqstring$ebnf$1", "symbols": []},
    {"name": "sqstring$ebnf$1", "symbols": ["sqstring$ebnf$1", "sstrchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sqstring", "symbols": [{"literal":"'"}, "sqstring$ebnf$1", {"literal":"'"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "btstring$ebnf$1", "symbols": []},
    {"name": "btstring$ebnf$1", "symbols": ["btstring$ebnf$1", /[^`]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "btstring", "symbols": [{"literal":"`"}, "btstring$ebnf$1", {"literal":"`"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "dstrchar", "symbols": [/[^\\"\n]/], "postprocess": id},
    {"name": "dstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": 
        function(d) {
            return JSON.parse("\""+d.join("")+"\"");
        }
        },
    {"name": "sstrchar", "symbols": [/[^\\'\n]/], "postprocess": id},
    {"name": "sstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": function(d) { return JSON.parse("\""+d.join("")+"\""); }},
    {"name": "sstrchar$string$1", "symbols": [{"literal":"\\"}, {"literal":"'"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "sstrchar", "symbols": ["sstrchar$string$1"], "postprocess": function(d) {return "'"; }},
    {"name": "strescape", "symbols": [/["\\\/bfnrt]/], "postprocess": id},
    {"name": "strescape", "symbols": [{"literal":"u"}, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/], "postprocess": 
        function(d) {
            return d.join("");
        }
        },
    {"name": "MAIN$ebnf$1", "symbols": []},
    {"name": "MAIN$ebnf$1", "symbols": ["MAIN$ebnf$1", "COMMENT"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "MAIN", "symbols": ["MAIN$ebnf$1", "FORM"], "postprocess": function(d) {return d[1]}},
    {"name": "COMMENT$ebnf$1", "symbols": []},
    {"name": "COMMENT$ebnf$1", "symbols": ["COMMENT$ebnf$1", /./], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "COMMENT", "symbols": ["_", {"literal":"#"}, "COMMENT$ebnf$1", {"literal":"\n"}], "postprocess": function(d) { return {comment:true} }},
    {"name": "FORM$ebnf$1", "symbols": []},
    {"name": "FORM$ebnf$1", "symbols": ["FORM$ebnf$1", "FORM_PROPERTIES"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "FORM", "symbols": ["START_FORM", "FORM$ebnf$1", "END_FORM"], "postprocess": function(d) {var form={name:d[0].value,elements:[]};d[1].forEach(function(p){if(p.key==="field" || p.key==="section"){form.elements.push(p.value)} else if (!p.comment) {form[p.key]=p.value}}); return form}},
    {"name": "FORM_PROPERTIES$subexpression$1", "symbols": ["METHOD"]},
    {"name": "FORM_PROPERTIES$subexpression$1", "symbols": ["ACTION"]},
    {"name": "FORM_PROPERTIES$subexpression$1", "symbols": ["HEADER"]},
    {"name": "FORM_PROPERTIES$subexpression$1", "symbols": ["FIELD"]},
    {"name": "FORM_PROPERTIES$subexpression$1", "symbols": ["SECTION"]},
    {"name": "FORM_PROPERTIES$subexpression$1", "symbols": ["COMMENT"]},
    {"name": "FORM_PROPERTIES$subexpression$1", "symbols": ["AUTOCOMPLETE"]},
    {"name": "FORM_PROPERTIES", "symbols": ["FORM_PROPERTIES$subexpression$1"], "postprocess": function(d){return d[0][0]}},
    {"name": "START_FORM$subexpression$1", "symbols": [/[fF]/, /[oO]/, /[rR]/, /[mM]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "START_FORM$ebnf$1", "symbols": [/./]},
    {"name": "START_FORM$ebnf$1", "symbols": ["START_FORM$ebnf$1", /./], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "START_FORM", "symbols": ["_", "START_FORM$subexpression$1", "__", "START_FORM$ebnf$1", {"literal":"\n"}], "postprocess": function (d) {return {key:"name", value:d[3].join("")}}},
    {"name": "END_FORM$subexpression$1", "symbols": [/[eE]/, /[nN]/, /[dD]/, {"literal":" "}, /[fF]/, /[oO]/, /[rR]/, /[mM]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "END_FORM$ebnf$1", "symbols": [{"literal":"\n"}], "postprocess": id},
    {"name": "END_FORM$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "END_FORM", "symbols": ["_", "END_FORM$subexpression$1", "_", "END_FORM$ebnf$1"]},
    {"name": "METHOD$subexpression$1", "symbols": [/[mM]/, /[eE]/, /[tT]/, /[hH]/, /[oO]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "METHOD$subexpression$2$subexpression$1", "symbols": [/[gG]/, /[eE]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "METHOD$subexpression$2", "symbols": ["METHOD$subexpression$2$subexpression$1"]},
    {"name": "METHOD$subexpression$2$subexpression$2", "symbols": [/[pP]/, /[oO]/, /[sS]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "METHOD$subexpression$2", "symbols": ["METHOD$subexpression$2$subexpression$2"]},
    {"name": "METHOD", "symbols": ["_", "METHOD$subexpression$1", "__", "METHOD$subexpression$2", "_", {"literal":"\n"}], "postprocess": function(d){return {key:"method", value:d[3][0]}}},
    {"name": "AUTOCOMPLETE$subexpression$1", "symbols": [/[aA]/, /[uU]/, /[tT]/, /[oO]/, /[cC]/, /[oO]/, /[mM]/, /[pP]/, /[lL]/, /[eE]/, /[tT]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "AUTOCOMPLETE$subexpression$2$subexpression$1", "symbols": [/[oO]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "AUTOCOMPLETE$subexpression$2", "symbols": ["AUTOCOMPLETE$subexpression$2$subexpression$1"]},
    {"name": "AUTOCOMPLETE$subexpression$2$subexpression$2", "symbols": [/[oO]/, /[fF]/, /[fF]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "AUTOCOMPLETE$subexpression$2", "symbols": ["AUTOCOMPLETE$subexpression$2$subexpression$2"]},
    {"name": "AUTOCOMPLETE", "symbols": ["_", "AUTOCOMPLETE$subexpression$1", "__", "AUTOCOMPLETE$subexpression$2", "_", {"literal":"\n"}], "postprocess": function(d){return {key:"autocomplete", value:d[3][0]}}},
    {"name": "ACTION$subexpression$1", "symbols": [/[aA]/, /[cC]/, /[tT]/, /[iI]/, /[oO]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ACTION$ebnf$1", "symbols": [/./]},
    {"name": "ACTION$ebnf$1", "symbols": ["ACTION$ebnf$1", /./], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ACTION", "symbols": ["_", "ACTION$subexpression$1", "__", "ACTION$ebnf$1", {"literal":"\n"}], "postprocess": function(d){return {key:"action", value:d[3].join("")}}},
    {"name": "HEADER$subexpression$1", "symbols": [/[hH]/, /[eE]/, /[aA]/, /[dD]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "HEADER$ebnf$1", "symbols": [/./]},
    {"name": "HEADER$ebnf$1", "symbols": ["HEADER$ebnf$1", /./], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "HEADER", "symbols": ["_", "HEADER$subexpression$1", "__", "HEADER$ebnf$1", {"literal":"\n"}], "postprocess": function(d){return {key:"header", value:d[3].join("")}}},
    {"name": "SECTION$subexpression$1", "symbols": [/[sS]/, /[eE]/, /[cC]/, /[tT]/, /[iI]/, /[oO]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "SECTION$ebnf$1", "symbols": [/./]},
    {"name": "SECTION$ebnf$1", "symbols": ["SECTION$ebnf$1", /./], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "SECTION", "symbols": ["_", "SECTION$subexpression$1", "__", "SECTION$ebnf$1", {"literal":"\n"}], "postprocess": function(d){return {key:"section", value:{element:"section", title:d[3].join("")}}}},
    {"name": "FIELD$ebnf$1", "symbols": []},
    {"name": "FIELD$ebnf$1", "symbols": ["FIELD$ebnf$1", "FIELD_PROPERTIES"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "FIELD", "symbols": ["START_FIELD", "FIELD$ebnf$1", "END_FIELD"], "postprocess": function(d) {var field={key:"field", value:{element:"field"}};d[1].forEach(function(p){if (!p.comment) {field.value[p.key]=p.value}}); return field}},
    {"name": "FIELD_PROPERTIES$subexpression$1", "symbols": ["ID"]},
    {"name": "FIELD_PROPERTIES$subexpression$1", "symbols": ["COMMENT"]},
    {"name": "FIELD_PROPERTIES$subexpression$1", "symbols": ["NAME"]},
    {"name": "FIELD_PROPERTIES$subexpression$1", "symbols": ["TYPE"]},
    {"name": "FIELD_PROPERTIES$subexpression$1", "symbols": ["REQUIRED"]},
    {"name": "FIELD_PROPERTIES$subexpression$1", "symbols": ["AUTOFOCUS"]},
    {"name": "FIELD_PROPERTIES$subexpression$1", "symbols": ["PLACEHOLDER"]},
    {"name": "FIELD_PROPERTIES$subexpression$1", "symbols": ["VALUE"]},
    {"name": "FIELD_PROPERTIES$subexpression$1", "symbols": ["HINT"]},
    {"name": "FIELD_PROPERTIES$subexpression$1", "symbols": ["LABEL"]},
    {"name": "FIELD_PROPERTIES$subexpression$1", "symbols": ["ICON"]},
    {"name": "FIELD_PROPERTIES$subexpression$1", "symbols": ["VALIDATIONS"]},
    {"name": "FIELD_PROPERTIES$subexpression$1", "symbols": ["OPTIONS"]},
    {"name": "FIELD_PROPERTIES$subexpression$1", "symbols": ["AUTOCOMPLETE"]},
    {"name": "FIELD_PROPERTIES", "symbols": ["FIELD_PROPERTIES$subexpression$1"], "postprocess": function(d){return d[0][0]}},
    {"name": "START_FIELD$subexpression$1", "symbols": [/[fF]/, /[iI]/, /[eE]/, /[lL]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "START_FIELD", "symbols": ["_", "START_FIELD$subexpression$1", "_", {"literal":"\n"}]},
    {"name": "END_FIELD$subexpression$1", "symbols": [/[eE]/, /[nN]/, /[dD]/, {"literal":" "}, /[fF]/, /[iI]/, /[eE]/, /[lL]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "END_FIELD", "symbols": ["_", "END_FIELD$subexpression$1", "_", {"literal":"\n"}]},
    {"name": "TYPE$subexpression$1", "symbols": [/[tT]/, /[yY]/, /[pP]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2$subexpression$1", "symbols": [/[tT]/, /[eE]/, /[xX]/, /[tT]/, /[bB]/, /[oO]/, /[xX]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$1"]},
    {"name": "TYPE$subexpression$2$subexpression$2", "symbols": [/[pP]/, /[hH]/, /[oO]/, /[nN]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$2"]},
    {"name": "TYPE$subexpression$2$subexpression$3", "symbols": [/[eE]/, /[mM]/, /[aA]/, /[iI]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$3"]},
    {"name": "TYPE$subexpression$2$subexpression$4", "symbols": [/[uU]/, /[rR]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$4"]},
    {"name": "TYPE$subexpression$2$subexpression$5", "symbols": [/[sS]/, /[eE]/, /[aA]/, /[rR]/, /[cC]/, /[hH]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$5"]},
    {"name": "TYPE$subexpression$2$subexpression$6", "symbols": [/[nN]/, /[uU]/, /[mM]/, /[bB]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$6"]},
    {"name": "TYPE$subexpression$2$subexpression$7", "symbols": [/[pP]/, /[aA]/, /[sS]/, /[sS]/, /[wW]/, /[oO]/, /[rR]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$7"]},
    {"name": "TYPE$subexpression$2$subexpression$8", "symbols": [/[dD]/, /[aA]/, /[tT]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$8"]},
    {"name": "TYPE$subexpression$2$subexpression$9", "symbols": [/[tT]/, /[iI]/, /[mM]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$9"]},
    {"name": "TYPE$subexpression$2$subexpression$10", "symbols": [/[hH]/, /[iI]/, /[dD]/, /[dD]/, /[eE]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$10"]},
    {"name": "TYPE$subexpression$2$subexpression$11", "symbols": [/[tT]/, /[eE]/, /[xX]/, /[tT]/, /[aA]/, /[rR]/, /[eE]/, /[aA]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$11"]},
    {"name": "TYPE$subexpression$2$subexpression$12", "symbols": [/[sS]/, /[uU]/, /[bB]/, /[mM]/, /[iI]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$12"]},
    {"name": "TYPE$subexpression$2$subexpression$13", "symbols": [/[sS]/, /[eE]/, /[lL]/, /[eE]/, /[cC]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$13"]},
    {"name": "TYPE$subexpression$2$subexpression$14", "symbols": [/[cC]/, /[oO]/, /[mM]/, /[bB]/, /[oO]/, /[bB]/, /[oO]/, /[xX]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$14"]},
    {"name": "TYPE$subexpression$2$subexpression$15", "symbols": [/[rR]/, /[aA]/, /[dD]/, /[iI]/, /[oO]/, /[gG]/, /[rR]/, /[oO]/, /[uU]/, /[pP]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$15"]},
    {"name": "TYPE$subexpression$2$subexpression$16", "symbols": [/[cC]/, /[hH]/, /[eE]/, /[cC]/, /[kK]/, /[bB]/, /[oO]/, /[xX]/, /[gG]/, /[rR]/, /[oO]/, /[uU]/, /[pP]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TYPE$subexpression$2", "symbols": ["TYPE$subexpression$2$subexpression$16"]},
    {"name": "TYPE", "symbols": ["_", "TYPE$subexpression$1", "__", "TYPE$subexpression$2", "_", {"literal":"\n"}], "postprocess": function(d){return {key:"type", value:d[3][0]}}},
    {"name": "REQUIRED$subexpression$1", "symbols": [/[rR]/, /[eE]/, /[qQ]/, /[uU]/, /[iI]/, /[rR]/, /[eE]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "REQUIRED", "symbols": ["_", "REQUIRED$subexpression$1", "_", {"literal":"\n"}], "postprocess": function(d){return {key:"required", value:true}}},
    {"name": "AUTOFOCUS$subexpression$1", "symbols": [/[aA]/, /[uU]/, /[tT]/, /[oO]/, /[fF]/, /[oO]/, /[cC]/, /[uU]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "AUTOFOCUS", "symbols": ["_", "AUTOFOCUS$subexpression$1", "_", {"literal":"\n"}], "postprocess": function(d){return {key:"autofocus", value:true}}},
    {"name": "PLACEHOLDER$subexpression$1", "symbols": [/[pP]/, /[lL]/, /[aA]/, /[cC]/, /[eE]/, /[hH]/, /[oO]/, /[lL]/, /[dD]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "PLACEHOLDER$ebnf$1", "symbols": [/./]},
    {"name": "PLACEHOLDER$ebnf$1", "symbols": ["PLACEHOLDER$ebnf$1", /./], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "PLACEHOLDER", "symbols": ["_", "PLACEHOLDER$subexpression$1", "__", "PLACEHOLDER$ebnf$1", {"literal":"\n"}], "postprocess": function(d){return {key:"placeholder", value:d[3].join("")}}},
    {"name": "VALUE$subexpression$1", "symbols": [/[vV]/, /[aA]/, /[lL]/, /[uU]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "VALUE$ebnf$1", "symbols": [/./]},
    {"name": "VALUE$ebnf$1", "symbols": ["VALUE$ebnf$1", /./], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "VALUE", "symbols": ["_", "VALUE$subexpression$1", "__", "VALUE$ebnf$1", {"literal":"\n"}], "postprocess": function(d){return {key:"value", value:d[3].join("")}}},
    {"name": "HINT$subexpression$1", "symbols": [/[hH]/, /[iI]/, /[nN]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "HINT$ebnf$1", "symbols": [/./]},
    {"name": "HINT$ebnf$1", "symbols": ["HINT$ebnf$1", /./], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "HINT", "symbols": ["_", "HINT$subexpression$1", "__", "HINT$ebnf$1", {"literal":"\n"}], "postprocess": function(d){return {key:"hint", value:d[3].join("")}}},
    {"name": "NAME$subexpression$1", "symbols": [/[nN]/, /[aA]/, /[mM]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "NAME$ebnf$1", "symbols": [/[a-zA-Z0-9_-]/]},
    {"name": "NAME$ebnf$1", "symbols": ["NAME$ebnf$1", /[a-zA-Z0-9_-]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "NAME", "symbols": ["_", "NAME$subexpression$1", "__", "NAME$ebnf$1", {"literal":"\n"}], "postprocess": function(d){return {key:"name", value:d[3].join("")}}},
    {"name": "ICON$subexpression$1", "symbols": [/[iI]/, /[cC]/, /[oO]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ICON$ebnf$1", "symbols": [/[ a-zA-Z0-9_-]/]},
    {"name": "ICON$ebnf$1", "symbols": ["ICON$ebnf$1", /[ a-zA-Z0-9_-]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ICON", "symbols": ["_", "ICON$subexpression$1", "__", "ICON$ebnf$1", {"literal":"\n"}], "postprocess": function(d){return {key:"icon", value:d[3].join("")}}},
    {"name": "ID$subexpression$1", "symbols": [/[iI]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ID$ebnf$1", "symbols": [/[a-zA-Z0-9_-]/]},
    {"name": "ID$ebnf$1", "symbols": ["ID$ebnf$1", /[a-zA-Z0-9_-]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ID", "symbols": ["_", "ID$subexpression$1", "__", "ID$ebnf$1", {"literal":"\n"}], "postprocess": function(d){return {key:"id", value:d[3].join("")}}},
    {"name": "LABEL$subexpression$1", "symbols": [/[lL]/, /[aA]/, /[bB]/, /[eE]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "LABEL$ebnf$1", "symbols": [/./]},
    {"name": "LABEL$ebnf$1", "symbols": ["LABEL$ebnf$1", /./], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "LABEL", "symbols": ["_", "LABEL$subexpression$1", "__", "LABEL$ebnf$1", {"literal":"\n"}], "postprocess": function(d){return {key:"label", value:d[3].join("")}}},
    {"name": "OPTIONS$ebnf$1", "symbols": []},
    {"name": "OPTIONS$ebnf$1", "symbols": ["OPTIONS$ebnf$1", "OPTION_VALUE"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "OPTIONS", "symbols": ["START_OPTIONS", "OPTIONS$ebnf$1", "END_OPTIONS"], "postprocess": function(d) {var options={key:"options", value:[]};d[1].forEach(function(p){if (!p.comment){options.value.push(p)}}); return options}},
    {"name": "START_OPTIONS$subexpression$1", "symbols": [/[oO]/, /[pP]/, /[tT]/, /[iI]/, /[oO]/, /[nN]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "START_OPTIONS", "symbols": ["_", "START_OPTIONS$subexpression$1", "_", {"literal":"\n"}]},
    {"name": "END_OPTIONS$subexpression$1", "symbols": [/[eE]/, /[nN]/, /[dD]/, {"literal":" "}, /[oO]/, /[pP]/, /[tT]/, /[iI]/, /[oO]/, /[nN]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "END_OPTIONS", "symbols": ["_", "END_OPTIONS$subexpression$1", "_", {"literal":"\n"}]},
    {"name": "OPTION_VALUE$subexpression$1", "symbols": ["OPTION_LABEL_AND_VALUE"]},
    {"name": "OPTION_VALUE$subexpression$1", "symbols": ["OPTION_LABEL"]},
    {"name": "OPTION_VALUE$ebnf$1$subexpression$1$subexpression$1$subexpression$1", "symbols": [/[cC]/, /[hH]/, /[eE]/, /[cC]/, /[kK]/, /[eE]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "OPTION_VALUE$ebnf$1$subexpression$1$subexpression$1", "symbols": ["OPTION_VALUE$ebnf$1$subexpression$1$subexpression$1$subexpression$1"]},
    {"name": "OPTION_VALUE$ebnf$1$subexpression$1$subexpression$1$subexpression$2", "symbols": [/[sS]/, /[eE]/, /[lL]/, /[eE]/, /[cC]/, /[tT]/, /[eE]/, /[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "OPTION_VALUE$ebnf$1$subexpression$1$subexpression$1", "symbols": ["OPTION_VALUE$ebnf$1$subexpression$1$subexpression$1$subexpression$2"]},
    {"name": "OPTION_VALUE$ebnf$1$subexpression$1", "symbols": ["_", {"literal":"|"}, "_", "OPTION_VALUE$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "OPTION_VALUE$ebnf$1", "symbols": ["OPTION_VALUE$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "OPTION_VALUE$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "OPTION_VALUE", "symbols": ["OPTION_VALUE$subexpression$1", "OPTION_VALUE$ebnf$1", "_", {"literal":"\n"}], "postprocess": function(d) {if (d[1]) {d[0][0].checked=true}; return d[0][0]}},
    {"name": "OPTION_LABEL_AND_VALUE", "symbols": ["_", "dqstring", "_", {"literal":"|"}, "_", "dqstring"], "postprocess": function(d) {return {label:d[1], value:d[5]}}},
    {"name": "OPTION_LABEL", "symbols": ["_", "dqstring"], "postprocess": function(d) {return {label:d[1], value:d[1]}}},
    {"name": "VALIDATIONS$ebnf$1", "symbols": []},
    {"name": "VALIDATIONS$ebnf$1", "symbols": ["VALIDATIONS$ebnf$1", "VALIDATION_RULE"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "VALIDATIONS", "symbols": ["START_VALIDATIONS", "VALIDATIONS$ebnf$1", "END_VALIDATIONS"], "postprocess": function(d) {var validations={key:"validations", value:{}};d[1].forEach(function(p){if (!p.comment){validations.value[p.key]=p.value}}); return validations}},
    {"name": "START_VALIDATIONS$subexpression$1", "symbols": [/[vV]/, /[aA]/, /[lL]/, /[iI]/, /[dD]/, /[aA]/, /[tT]/, /[iI]/, /[oO]/, /[nN]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "START_VALIDATIONS", "symbols": ["_", "START_VALIDATIONS$subexpression$1", "_", {"literal":"\n"}]},
    {"name": "END_VALIDATIONS$subexpression$1", "symbols": [/[eE]/, /[nN]/, /[dD]/, {"literal":" "}, /[vV]/, /[aA]/, /[lL]/, /[iI]/, /[dD]/, /[aA]/, /[tT]/, /[iI]/, /[oO]/, /[nN]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "END_VALIDATIONS", "symbols": ["_", "END_VALIDATIONS$subexpression$1", "_", {"literal":"\n"}]},
    {"name": "VALIDATION_RULE$subexpression$1", "symbols": ["COMMENT"]},
    {"name": "VALIDATION_RULE$subexpression$1", "symbols": ["MIN"]},
    {"name": "VALIDATION_RULE$subexpression$1", "symbols": ["MAX"]},
    {"name": "VALIDATION_RULE$subexpression$1", "symbols": ["MIN_LENGTH"]},
    {"name": "VALIDATION_RULE$subexpression$1", "symbols": ["MAX_LENGTH"]},
    {"name": "VALIDATION_RULE", "symbols": ["VALIDATION_RULE$subexpression$1"], "postprocess": function(d) {return d[0][0]}},
    {"name": "MIN$subexpression$1", "symbols": [/[mM]/, /[iI]/, /[nN]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "MIN", "symbols": ["_", "MIN$subexpression$1", "__", "decimal", "_", {"literal":"\n"}], "postprocess": function(d) {return {key:"min", value:d[3]}}},
    {"name": "MAX$subexpression$1", "symbols": [/[mM]/, /[aA]/, /[xX]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "MAX", "symbols": ["_", "MAX$subexpression$1", "__", "decimal", "_", {"literal":"\n"}], "postprocess": function(d) {return {key:"max", value:d[3]}}},
    {"name": "MIN_LENGTH$subexpression$1", "symbols": [/[mM]/, /[iI]/, /[nN]/, /[lL]/, /[eE]/, /[nN]/, /[gG]/, /[tT]/, /[hH]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "MIN_LENGTH", "symbols": ["_", "MIN_LENGTH$subexpression$1", "__", "unsigned_int", "_", {"literal":"\n"}], "postprocess": function(d) {return {key:"minlength", value:d[3]}}},
    {"name": "MAX_LENGTH$subexpression$1", "symbols": [/[mM]/, /[aA]/, /[xX]/, /[lL]/, /[eE]/, /[nN]/, /[gG]/, /[tT]/, /[hH]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "MAX_LENGTH", "symbols": ["_", "MAX_LENGTH$subexpression$1", "__", "unsigned_int", "_", {"literal":"\n"}], "postprocess": function(d) {return {key:"maxlength", value:d[3]}}}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
