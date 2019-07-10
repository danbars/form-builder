@builtin "number.ne"
@builtin "whitespace.ne"
@builtin "string.ne"

MAIN -> COMMENT:* FORM {% function(d) {return d[1]} %}

COMMENT -> _ "#" .:* "\n" {% function(d) { return {comment:true} } %}

FORM -> START_FORM FORM_PROPERTIES:* END_FORM {% function(d) {var form={name:d[0].value,elements:[]};d[1].forEach(function(p){if(p.key==="field" || p.key==="section"){form.elements.push(p.value)} else if (!p.comment) {form[p.key]=p.value}}); return form} %}
FORM_PROPERTIES -> (METHOD | ACTION | HEADER | FIELD | SECTION | COMMENT | AUTOCOMPLETE) {% function(d){return d[0][0]} %}
START_FORM -> _ "form"i __ .:+ "\n" {% function (d) {return {key:"name", value:d[3].join("")}} %}
END_FORM -> _ "end form"i _ "\n":?

METHOD -> _ "method"i __ ("get"i | "post"i) _ "\n" {% function(d){return {key:"method", value:d[3][0]}} %}
AUTOCOMPLETE -> _ "autocomplete"i __ ("on"i | "off"i) _ "\n" {% function(d){return {key:"autocomplete", value:d[3][0]}} %}
ACTION -> _ "action"i __ .:+ "\n" {% function(d){return {key:"action", value:d[3].join("")}} %}
HEADER -> _ "header"i __ .:+ "\n" {% function(d){return {key:"header", value:d[3].join("")}} %}
SECTION -> _ "section"i __ .:+ "\n" {% function(d){return {key:"section", value:{element:"section", title:d[3].join("")}}} %}

FIELD -> START_FIELD FIELD_PROPERTIES:* END_FIELD {% function(d) {var field={key:"field", value:{element:"field"}};d[1].forEach(function(p){if (!p.comment) {field.value[p.key]=p.value}}); return field} %}

FIELD_PROPERTIES -> (ID | COMMENT | NAME | TYPE | REQUIRED | AUTOFOCUS| PLACEHOLDER | VALUE | HINT | LABEL | ICON | VALIDATIONS | OPTIONS | AUTOCOMPLETE) {% function(d){return d[0][0]} %}
START_FIELD -> _ "field"i _ "\n"
END_FIELD -> _ "end field"i _ "\n"
TYPE -> _ "type"i __ ("textbox"i | "phone"i | "email"i | "url"i | "search"i | "number"i | "password"i | "date"i | "time"i | "hidden"i | "textarea"i | "submit"i | "select"i | "combobox"i | "radiogroup"i | "checkboxgroup"i ) _ "\n" {% function(d){return {key:"type", value:d[3][0]}} %}
REQUIRED -> _ "required"i _ "\n" {% function(d){return {key:"required", value:true}} %}
AUTOFOCUS -> _ "autofocus"i _ "\n" {% function(d){return {key:"autofocus", value:true}} %}
PLACEHOLDER -> _ "placeholder"i __ .:+ "\n" {% function(d){return {key:"placeholder", value:d[3].join("")}} %}
VALUE -> _ "value"i __ .:+ "\n" {% function(d){return {key:"value", value:d[3].join("")}} %}
HINT -> _ "hint"i __ .:+ "\n" {% function(d){return {key:"hint", value:d[3].join("")}} %}
NAME -> _ "name"i __ [a-zA-Z0-9_-]:+ "\n" {% function(d){return {key:"name", value:d[3].join("")}} %}
ICON -> _ "icon"i __ [ a-zA-Z0-9_-]:+ "\n" {% function(d){return {key:"icon", value:d[3].join("")}} %}
ID -> _ "id"i __ [a-zA-Z0-9_-]:+ "\n" {% function(d){return {key:"id", value:d[3].join("")}} %}
LABEL -> _ "label"i __ .:+ "\n" {% function(d){return {key:"label", value:d[3].join("")}} %}

OPTIONS -> START_OPTIONS OPTION_VALUE:* END_OPTIONS {% function(d) {var options={key:"options", value:[]};d[1].forEach(function(p){if (!p.comment){options.value.push(p)}}); return options} %}
START_OPTIONS -> _ "options"i _ "\n"
END_OPTIONS -> _ "end options"i _ "\n"
OPTION_VALUE -> (OPTION_LABEL_AND_VALUE | OPTION_LABEL) (_ "|" _ ("checked"i | "selected"i) ):? _ "\n"  {% function(d) {if (d[1]) {d[0][0].checked=true}; return d[0][0]}%}
OPTION_LABEL_AND_VALUE -> _ dqstring _ "|" _ dqstring {% function(d) {return {label:d[1], value:d[5]}}%}
OPTION_LABEL -> _ dqstring  {% function(d) {return {label:d[1], value:d[1]}}%}

VALIDATIONS -> START_VALIDATIONS VALIDATION_RULE:* END_VALIDATIONS {% function(d) {var validations={key:"validations", value:{}};d[1].forEach(function(p){if (!p.comment){validations.value[p.key]=p.value}}); return validations} %}
START_VALIDATIONS -> _ "validations"i _ "\n"
END_VALIDATIONS -> _ "end validations"i _ "\n"
VALIDATION_RULE -> (COMMENT | MIN | MAX | MIN_LENGTH | MAX_LENGTH) {% function(d) {return d[0][0]}%}
MIN -> _ "min"i __ decimal _ "\n" {% function(d) {return {key:"min", value:d[3]}}%}
MAX -> _ "max"i __ decimal _ "\n" {% function(d) {return {key:"max", value:d[3]}}%}
MIN_LENGTH -> _ "minlength"i __ unsigned_int _ "\n" {% function(d) {return {key:"minlength", value:d[3]}}%}
MAX_LENGTH -> _ "maxlength"i __ unsigned_int _ "\n" {% function(d) {return {key:"maxlength", value:d[3]}}%}


