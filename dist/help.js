document.write(`
<h3>The editor</h3>
The editor is auto-suggesting keywords as you type tyem. At the moment, keywords are not suggested in the right context. 
For example you will get form attributes suggestions when you're in field block. <br>
To use a suggestion hit the tab key. <br><br>
<h3>Snippets</h3>
There are 2 ways to bring a complete field snippet into the editor. 
<ol>
<li>Use the Add panel to the left of the editor. It will add snippets at the end of the form.</li>
<li>Write <code>f-</code> in the editor, you will get a list of auto-complete suggestions like <code>f-email</code>. 
Hit tab twice (once to choose the auto-complete and once to expand it). It will add the snippet inline. </li>
</ol>
After adding a snippet you can edit it as you like. The tab key will move you between the parts of the snippet that most probably
need to be edited.
<h3>Structure</h3>
Each block of definition starts with the type of the block, and ends with <code>end</code> clause. The following blocks exist:
<pre><code class="language-bro">form
    #form attributes
    field
        #field attributes
        validation
            #validation rules
        end validations

        options
            #field options
        end options
    end field
end form
</code></pre>
Blocks are indented for readability, but you don't have to write them this way.
            
<h3>comments</h3>
Comments start with <code>#</code> sign and have to be on their own line

<h3>Form entity</h3>
The <code>form</code> entity has the following attributes, you can write them in any order you like:
<ul>
<li><code><b>method</b> post|get</code> - Usually you'd want to use <code>post</code>.</li>
<li><code><b>autocompete</b> on|off</code> - whether the form allows the browser to use autocomplete functionality</li>
<li><code><b>action</b> &lt;url></code> - the URL where the form will be submitted</li>
<li><code><b>header</b> &lt;text></code> - the text that appears at the head of the form, as its title</li>
</ul>
The rest of the form is a list of <code>section</code>s and <code>field</code>s. <br>
Example:
<pre><code class="language-bro">form Contact Form
    method post
    autocomplete on
    action https://www.form-data.com/_functions/submit/abc
    header Contact Us
    #sections and fields come here
end form
</code></pre>

<h3>Sections</h3>
Using sections is optional. you can create any number of sections that you like, and it will divide your form into multiple sections with header for each. Usage:<br>
<code><b>section</b> &lt;text></code><br>
Example:
<pre><code class="language-bro">form Contact Form
    method post
    autocomplete on
    action https://www.form-data.com/_functions/submit/abc
    header Contact Us
    section Personal Details
    #fields of that section here
    section Message
    #fields of that section here
end form
</code></pre>

<h3>Fields</h3>
Fields are the main part of the form. They have the following attributes that can be written in any order you like:
<ul>
<li><code><b>name</b> &ltname></code> - The <i>name</i> attribute of the html field. It does not affect the appearance of the form. 
When the form is submitted it is used to identify this field's value. It can only contain English letters and digits.</li>
<li><code><b>type</b> textbox | phone | email | url | search | password | textarea | submit | select | radiogroup | checkboxgroup | address-google | address </code> - The type of the field</li>
<li><code><b>label</b> &lt;text></code> - The label that appears above the field. Can be any text you like.</li>
<li><code><b>required</b></code> - Marks the field as required. Remove completely if the field is optional.</li>
<li><code><b>placeholder</b> &lt;text></code> - The placeholder that appears inside the field before the user has typed anything.</li>
<li><code><b>value</b> &lt;text></code> - A value pre-filled for the user. Only affect fields that the user has can type into. 
I.e. does not have any affect on checkboxes, radio buttons, and dropdowns.</li>
<li><code><b>icon</b> &lt;classes></code> - Places an icon inside the input field. Supported in all field types except for Submit buttons. 
You can use any icon from <a href="https://fontawesome.com/icons?d=gallery&m=free" target="_blank">Font Awesome</a>. 
Note you should probably use the free font (unless you have a license)</li>
</ul>
<br>
In addition to those you can add <code>validations</code> and <code>options</code> blocks. See below.

<h3>Address Fields</h3>
If you set the address field to be <code>address-google</code> you'll have to provide a Google API Key. <br>
To acquire a key follow the instructions <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">here</a> <br>
Make sure you restrict the key to be used only in your domain, and only for <em>Maps Javascript API</em>. 
The instructions for restriction are on the same page. <br><br>
Note that it is not mentioned that you have to enable Maps API and Places API before you
can restrict the key to use it. To do that go <a href="https://console.cloud.google.com/marketplace/details/google/maps-backend.googleapis.com">here</a>
and <a href="https://console.developers.google.com/apis/library/places-backend.googleapis.com">here</a> 
and click <em>Enable</em> (or go there through the hamburger menu > marketplace > search for <i>Maps Javascript API</i> and <i>Places API</i>)

<h3>Validations</h3>
You can add validation block for each field. Validation block starts with <code>validations</code> line 
and ends with <code>end validations</code> line. <br>
In between those lines you can add any number of validation rules:
<ul>
<li><code><b>maxlength</b> &lt;length></code> - maximum length of the text allowed in this field.</li>
<li><code><b>minlength</b> &lt;length></code> - minimum length of the text allowed in this field.</li>
<li><code><b>max</b> &lt;max value<</code> - Maximum numeric value</li>
<li><code><b>min</b> &lt;min value<</code> - Minimum numeric value</li>
</ul>

<h3>Options</h3>
Fields with type <code>select</code>, <code>radiogroup</code> and <code>checkboxgroup</code> can have options block that 
starts with <code>options</code> line and ends with <code>end options</code> line. <br>
In between those lines you can add any number of options lines. Each line has the form: <br>
<code>&lt;quoted label> [| &lt;quoted value>] [| checked|selected]</code>
<ul>
<li><b>quoted label</b> - The label that appears in the select box or next to the checkbox / radio button. Must be within double quotes.</li>
<li><b>quoted value</b> - Optional, the value of the field when submitted. If omitted, the label will be used as value. Must be within double quotes.</li>
<li><b>checked|selected</b> - Either term can be used in all field types. Makes the option pre-selected or checked.</li>
</ul>

`);


