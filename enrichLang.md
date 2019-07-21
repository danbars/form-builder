## How to enrich the builder's language

The form-builder language is implemented as three main parts:
1. Ace editor - for highlight and autocomplete editor
2. `nearley.js` parser - turns form-definition into structured json
3. A builder that turns the json into html 

In addition, there's a help file

### Adding to Ace editor

1. Add to `ace/lib/ace/mode/formbuilder_highlight_rules.js` the language rules. See documentation [here](https://cloud9-sdk.readme.io/docs/highlighting-rules).
1. Add to `ace/lib/ace/mode/formbuilder.js` indent and outdent rules. Make sure you add both.
1. From the root of the project, run `npm run build_ace`. Files will be compiled into `src/ace`
1. For the autocomplete to work, add `keywords` and `consts` to `src/editor-init.js`
1. In the same file, update the snippets or add new ones to show the new features of the language
1. In `src/index.html` update the default form to show your the new features of the language

### Adding to the language parser

Ace editor is only used for the editor itself. However, the language parser and builder is using [`nearley.js`](https://nearley.js.org/docs/getting-started) - a flexible language parser.

The grammar file is located at `src/parser/grammar`. It is similar concept of Ace highlight rules, but in a slightly different syntax. Unfortunately I couldn't find an easy way to reuse the same language rules for both Ace and nearley.

1. Install nearley globally `npm install -g nearley`
1. Edit the grammar file and add the new language rules. Each rule should have a function that returns a json that represents the new language feature.
1. You can use `nearley-test` in your console to quickly test your new grammar against some form definition, or use [the playground](https://omrelli.ug/nearley-playground/) to do it online.
1. Compile the grammar using `npm run build_grammar`. The result is written to `grammar.js` just next to the grammar source file. 

### Adding to the builder
1. Edit `src/builder.js`. It uses [js template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) as its template engine.
1. Install [sass](https://sass-lang.com) globally using `npm install -g sass`
1. Edit `src/themes/default.scss` and add any relevant css rules. 
1. Compile the scss file using `npm run build_themes` and commit the result css and map files. It will be in the same folder.

### Updating the help file
1. Edit `src/help.js` and describe your additions.