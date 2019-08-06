var langTools = ace.require("ace/ext/language_tools");
var snippetManager = ace.require("ace/snippets").snippetManager;

// var htmlResultEditor = ace.edit("html-result-editor");
// htmlResultEditor.setTheme("ace/theme/monokai");
// htmlResultEditor.session.setMode("ace/mode/html");

var editor = ace.edit("editor");
editor.setOptions({
    enableBasicAutocompletion:false,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/formbuilder");
editor.session.on('change', debounce(function() {
    parseForm();
}, 600));

var keywords = "form;name;header;method;autocomplete;action;section;field;type;required;placeholder;icon;value;hint;label;validations;maxlength;minlength;max;min;end validations;options;end options;end field".split(";");
var vars = null;
var consts = "post;get;on;off;textarea;textbox;phone;email;url;number;date;time;hidden;search;password;checkboxgroup;radiogroup;submit;select;combo;datepicker;checked;selected;address;address-google".split(";");

// create a completer object with a required callback function:
var formBuilderCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {
        var completions = [];
        keywords.forEach(function (kw) {
            completions.push({value:kw, scrore:1001, meta:"Keyword"})
        });
        consts.forEach(function (c) {
            completions.push({value:c, score:1000, meta:"Enum"})
        });
        completions.push({value:"f-checkboxes", score:999, meta:"Snippet"});
        completions.push({value:"f-email", score:999, meta:"Snippet"});
        completions.push({value:"f-gaddress", score:999, meta:"Snippet"});
        completions.push({value:"f-name", score:999, meta:"Snippet"});
        completions.push({value:"f-password", score:999, meta:"Snippet"});
        completions.push({value:"f-phone", score:999, meta:"Snippet"});
        completions.push({value:"f-radio", score:999, meta:"Snippet"});
        completions.push({value:"f-select", score:999, meta:"Snippet"});
        completions.push({value:"f-submit", score:999, meta:"Snippet"});
        completions.push({value:"f-text", score:999, meta:"Snippet"});
        completions.push({value:"f-textarea", score:999, meta:"Snippet"});
        completions.push({value:"f-url", score:999, meta:"Snippet"});
        callback(null, completions);
    }
};
langTools.setCompleters([]);
// finally, bind to langTools:
langTools.addCompleter(formBuilderCompleter);



var snippets = [];// snippetManager.parseSnippetFile("snippet test\n  TEST!");
snippets.push({
    content: `field
    name \${1:fieldname}
    type textbox
    required
    placeholder \${2:placeholder_text}
    value \${3:default_value}
    label \${4:field_label}
    hint \${5:field_hint}
    validations
        minlength 1
        maxlength 80
    end validations
end field`,
    name: "Text Field",
    tabTrigger: "f-text"
});
snippets.push({
    content: `field
    name \${1:email}
    type email
    icon fas fa-envelope
    required
    placeholder \${2:Please enter your email}
    value \${3:default_value}
    label \${4:Email}
    hint \${5:We hate spam too. We will never spam you.}
    validations
        minlength 1
        maxlength 200
    end validations
end field`,
    name: "Email Field",
    tabTrigger: "f-email"
});
snippets.push({
    content: `field
    name \${1:phone}
    type phone
    icon fas fa-phone
    required
    placeholder \${2:Please enter your phone}
    value \${3:default_value}
    label \${4:Phone}
    hint \${5:field_hint}
end field`,
    name: "Phone Field",
    tabTrigger: "f-phone"
});
snippets.push({
    content: `field
    name \${1:website}
    type url
    icon fas fa-globe
    required
    placeholder \${2:placeholder_text}
    value \${3:default_value}
    label \${4:Website}
    hint \${5:field_hint}
    validations
        minlength 1
        maxlength 300
    end validations
end field`,
    name: "URL Field",
    tabTrigger: "f-url"
});
snippets.push({
    content: `field
    name \${1:password}
    type password
    icon fas fa-lock
    required
    placeholder \${2:Choose your password}
    label \${4:Password}
    hint \${5:Choose a strong password that you can remember}
    validations
        minlength 6
        maxlength 300
    end validations
end field`,
    name: "Password Field",
    tabTrigger: "f-password"
});
snippets.push({
    content: `field
    name \${1:message}
    type textarea
    icon fas fa-comment-alt
    required
    placeholder \${2:We would love to hear what you have to say}
    value \${3:default_value}
    label \${4:Message}
    hint \${5:field_hint}
    validations
        minlength 1
        maxlength 1500
    end validations
end field`,
    name: "Textarea Field",
    tabTrigger: "f-textarea"
});
snippets.push({
    content: `field
    name name
    icon fas fa-user-tie
    type textbox
    required
    placeholder What is your name?
    label Name
    validations
    minlength 1
    maxlength 200
    end validations
end field`,
    name: "Name Field",
    tabTrigger: "f-name"
});
snippets.push({
    content: `field
    type submit
    label Submit
end field`,
    name: "Submit Button",
    tabTrigger: "f-submit"
});
snippets.push({
    content: `field
    name \${1:color}
    type select
    icon \${2:fas fa-palette}
    options
        \${3:"Red" | "#ff0000"
        "Green" | "#00ff00" | selected
        "Blue" | "#0000ff"
        "Orange" | "#ffa500"
        "Purple" | "#800080"
        "White" | "#ffffff"}
    end options
    \${4:required}
    label \${5:What is your favorite color?}
end field`,
    name: "Select Option",
    tabTrigger: "f-select"
});
snippets.push({
    content: `field
    name \${1:age}
    type radiogroup
    icon \${2:fas fa-birthday-cake}
    options
        \${3:"Less than 18" | "<18" | checked
        "18-25" | "18-25"
        "26-35" | "26-35"
        "36-45" | "36-45"
        "46-65" | "46-65"
        "66+" | ">66"}
    end options
    \${4:required}
    label \${5:How old are you?}
end field`,
    name: "Radio Group",
    tabTrigger: "f-radio"
});
snippets.push({
    content: `field
    name \${1:platforms}
    type checkboxgroup
    icon \${2:fas fa-desktop}
    options
        \${3:"Windows" 
        "Linux"
        "Mac"
        "Other"
    end options
    \${4:required}
    label \${5:Which platforms do you use?}
end field`,
    name: "Checkbox Group",
    tabTrigger: "f-checkboxes"
});
snippets.push({
    content: `field
        name address
        type address-google
        label Address
        icon fas fas fa-map-marker-alt
        required
        placeholder 4 Penny Lane, Liverpool, England
        validations
            maxlength 250
            minlength 2
        end validations
    end field`,
    name: "Google Address Field",
    tabTrigger: "f-gaddress"
});


snippetManager.register(snippets, "formbuilder");


function initAddButtons() {
   document.querySelectorAll(".add-item").forEach(el => {
       el.onclick = e => {
           addSnippet(e.target.dataset.fieldname);
       }
   }) ;
}

initAddButtons();

let sharedHtml;
function getHtml() {
    sharedHtml = `<!-- this should be placed in the HEAD -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/danbars/form-builder@0.1/dist/themes/default.imports.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/danbars/form-builder@0.1/dist/themes/default.css">
<!-- only if you use address-google field, uncomment this line and replace YOUR_API_KEY with your Google API Key (see Help for instructions) -->
<!-- <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=fb_form.initAutocomplete"
        async defer></script> -->
        
<!-- this should be placed anywhere you want the form to appear -->
<div id="form" class="fb-theme-default">
${formHtml}
</div>`;
    document.querySelector("#html-result-editor code").innerHTML = escapeHtml(sharedHtml);
    // document.querySelector("#copyToClipboard").dataset.dataClipboardText = formHtml;
    uglipop({class:'my-styling-class', //styling class for Modal
        source:'div', //'div' instead of 'html'
        content:'html-result'});
}

document.querySelector("#gethtml").onclick = getHtml;

function addSnippet(fname) {
    //TODO: add indent
    editor.find("end form");
    editor.navigateLineStart();
    editor.insert("\n");
    editor.navigateUp();
    snippetManager.insertSnippet(editor,snippetManager.getSnippetByName(fname,editor).content);
}

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
let formHtml;
function parseForm() {
    let parser = new nearley.Parser(grammar);
    let formText = editor.getValue();
    parser.feed(formText);
    let formJson = parser.results[0];
    console.log(formJson);
//        jsonResultEditor.setValue(JSON.stringify(formJson, null,2));
    formHtml = builder(formJson);
    // setInnerHtml(document.querySelector("#form"), formHtml);
    document.querySelector("#form").innerHTML = formHtml;
    updateViewer("#form");
}
parseForm(); //first time

// function setInnerHtml (elm, html) {
//     elm.innerHTML = html;
//     Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
//         const newScript = document.createElement("script");
//         Array.from(oldScript.attributes)
//             .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
//         newScript.appendChild(document.createTextNode(oldScript.innerHTML));
//         oldScript.parentNode.replaceChild(newScript, oldScript);
//     });
// }


function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function handleCopy() {
    let clipboard = new ClipboardJS('#copyToClipboard', {
        text: function(trigger) {
            return sharedHtml;
        }
    });
    clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);

        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });
}



handleCopy();


//side panel trigger
(function(){
    // Slide In Panel - by CodyHouse.co
    var panelTriggers = document.getElementsByClassName('js-cd-panel-trigger');
    if( panelTriggers.length > 0 ) {
        for(var i = 0; i < panelTriggers.length; i++) {
            (function(i){
                var panelClass = 'js-cd-panel-'+panelTriggers[i].getAttribute('data-panel'),
                    panel = document.getElementsByClassName(panelClass)[0];
                // open panel when clicking on trigger btn
                panelTriggers[i].addEventListener('click', function(event){
                    event.preventDefault();
                    addClass(panel, 'cd-panel--is-visible');
                });
                //close panel when clicking on 'x' or outside the panel
                panel.addEventListener('click', function(event){
                    if( hasClass(event.target, 'js-cd-close') || hasClass(event.target, panelClass)) {
                        event.preventDefault();
                        removeClass(panel, 'cd-panel--is-visible');
                    }
                });
            })(i);
        }
    }

    //class manipulations - needed if classList is not supported
    //https://jaketrent.com/post/addremove-classes-raw-javascript/
    function hasClass(el, className) {
        if (el.classList) return el.classList.contains(className);
        else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
    function addClass(el, className) {
        if (el.classList) el.classList.add(className);
        else if (!hasClass(el, className)) el.className += " " + className;
    }
    function removeClass(el, className) {
        if (el.classList) el.classList.remove(className);
        else if (hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className=el.className.replace(reg, ' ');
        }
    }
})();