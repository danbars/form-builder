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
<li><code><b>type</b> textbox|phone|email|url|search|password|textarea|submit|select|radiogroup|checkboxgroup </code> - The type of the field</li>
<li><code><b>label</b> &lt;text></code> - The label that appears above the field. Can be any text you like.</li>
<li><code><b>required</b></code> - Marks the field as required. Remove completely if the field is optional.</li>
<li><code><b>placeholder</b> &lt;text></code> - The placeholder that appears inside the field before the user has typed anything.</li>
<li><code><b>value</b> &lt;text></code> - A value pre-filled for the user. Only affect fields that the user has can type into. 
I.e. does not have any affect on checkboxes, radio buttons, and dropdowns.</li>
<li><code><b>icon</b> &lt;classes></code> - Places an icon inside the input field. Currently not supported in Submit buttons. 
You can use any icon from <a href="https://fontawesome.com/icons?d=gallery&m=free" target="_blank">Font Awesome</a></li>

</ul>
`);


