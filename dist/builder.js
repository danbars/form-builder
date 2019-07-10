(function(w) {

    function buildForm(form) {
        return `<form 
    ${ form.action? `action="${form.action}"` : '' } 
    ${ form.method? `method="${form.method}"` : ''} 
    ${templates.autocomplete(form)}>
    ${ form.header? `<h1>${form.header}</h1>` : ''}
    <input type="hidden" name="_charset_" />
    ${buildElements(form.elements)}
</form>`;
    }

    function buildElements(elements) {
        if (!elements.length || elements[0].element!=="section") {
            //add syntethic sectionForm-Builder.mp4
            elements.unshift({element:"section"})
        }
        let html = elements.reduce((acc, el) => {
            let template = el.type ? (el.element + '.' + el.type) : el.element;
            return acc + templates[template](el);
        }, '');
        if (inSection) {
            html += '</section>';
            inSection = false;
        }
        return html;
    }

    function getId(el) {
        if (el.id) {
            ids.push(el.id);
            return el.id;
        }
        let base = el.name || el.type;
        if (ids.indexOf(base) < 0) {
            ids.push(base);
            return base;
        }
        let i = 1;
        while (ids.indexOf(base+i)>=0) {i++}
        ids.push (base+i);
        return base+i;
    }
    let ids = [];
    let inSection = false;

    let templates = {
        'section': el => {let str='';
            str += inSection? '</section>': '';
            str += "<section>";
            str += el.title? `<h2>${el.title}</h2>`:'';
            inSection = true;
            return str;
        },

        'field.textbox': el => templates.textinput(el,'text'),
        'field.phone': el => templates.textinput(el,'tel'),
        'field.email': el => templates.textinput(el,'email'),
        'field.url': el => templates.textinput(el,'url'),
        'field.password': el => templates.textinput(el,'password'),
        'field.submit': el => `<input type="submit" value="${el.label}"
    ${templates.id(el)}>`,
//-----------------------------
        'field.select': el => {el.id = getId(el);return `<div class="form-field form-select ${el.required?'required':''}">
    ${templates.label(el)}
    <div class="input-wrapper ${el.icon?'with-icon':''}"><select ${templates.id(el)} 
            ${templates.name(el)} 
            ${templates.value(el)}
            ${templates.required(el)}
            ${templates.autofocus(el)}
            ${templates.autocomplete(el)}
            ${templates.placeholder(el)} > 
            ${templates.options(el)}
            </select>
        ${templates.icon(el)} 
    </div>
        ${templates.hint(el)}
</div>`},
//-----------------------------
        'options': el => {return el.options && el.options.length ? el.options.reduce((all, o) => {return all + `<option value="${o.value}" ${o.checked?"selected":""}>${o.label}</option>\n`}, ''): ''},
//-----------------------------
        'field.radiogroup': el => {el.id = getId(el);return `<div class="form-field form-radio ${el.required?'required':''}">
    ${templates.fieldsetwrapper(el, templates.radiooptions(el))}
    ${templates.hint(el)}
</div>`},
//-----------------------------
        'field.checkboxgroup': el => {el.id = getId(el);return `<div class="form-field form-checkbox ${el.required?'required':''}">
    ${templates.fieldsetwrapper(el, templates.checkboxoptions(el))}
    ${templates.hint(el)}
</div>`},
//-----------------------------
        'radiooptions': el => {
            return el.options && el.options.length ?
                el.options.reduce(
                    (all, o, idx) => {
                        return all + `<div class="radiowrapper"><input type="radio" name="${el.name}" ${o.checked?"checked":""} value="${o.value}" id="${el.id+idx }" >
<label for="${el.id+idx }">${o.label}</label></div>\n`
                    }, '')
                : ''},
//-----------------------------
        'checkboxoptions': el => {
            return el.options && el.options.length ?
                el.options.reduce(
                    (all, o, idx) => {
                        return all + `<div class="checkboxwrapper"><input type="checkbox" name="${el.name}" ${o.checked?"checked":""} value="${o.value}" id="${el.id+idx }" >
<label for="${el.id+idx }">${o.label}</label></div>\n`
                    }, '')
                : ''},
//-----------------------------
        'fieldsetwrapper': (el, content) => `<div class="input-wrapper ${el.icon?'with-icon':''}">
    <fieldset>
        <legend>${templates.icon(el)}${el.label || ''}${el.required?`<abbr class="required" title="required">*</abbr>`:''}</legend>
    ${content}
    </fieldset>
</div>`,
//-----------------------------
        'textinput': (el,type) => {el.id = getId(el);return `<div class="form-field form-text form-${type} ${el.required?'required':''}">
    ${templates.label(el)}
    <div class="input-wrapper ${el.icon?'with-icon':''}">
        <input type="${type}" 
            ${templates.id(el)} 
            ${templates.name(el)} 
            ${templates.value(el)}
            ${templates.required(el)}
            ${templates.autofocus(el)}
            ${templates.autocomplete(el)}
            ${templates.placeholder(el)} > </input>
        ${templates.icon(el)} 
    </div>
        ${templates.hint(el)}
</div>`},
//-----------------------------
        'field.textarea': el => {el.id = getId(el);return `<div class="form-field form-text form-textartea ${el.required?'required':''}">
    ${templates.label(el)}
    <div class="input-wrapper ${el.icon?'with-icon':''}"">
        <textarea 
            ${templates.id(el)} 
            ${templates.name(el)} 
            ${templates.required(el)}
            ${templates.autofocus(el)}
            ${templates.autocomplete(el)}
            ${templates.placeholder(el)} >${el.value||""}</textarea>
        ${templates.icon(el)} 
    </div>
        ${templates.hint(el)}
</div>`},
//-----------------------------
        'id': el => `id="${el.id}"`,
        'label': el => el.label || el.required? `<label for="${el.id}">${el.label || ''}${el.required?`<abbr class="required" title="required">*</abbr>`:''}</label>` : '',
        'placeholder': el => el.placeholder? `placeholder="${el.placeholder}"` : '',
        'required': el => el.required? 'required' : '',
        'autofocus': el => el.autofocus? 'autofocus' : '',
        'autocomplete': el => el.autocomplete? `autocomplete="${el.autocomplete}"`: '',
        'value': el => el.value? `value="${el.value}"` : '',
        'name': el => `name="${el.name? el.name : 'MISSING_NAME'}"`,
        'hint': el => el.hint? `<span class="form-hint">${el.hint}</span>` : '',
        'icon': el => el.icon? `<i class="${el.icon}" aria-hidden="true"></i>`: '',
    };
    w.builder = buildForm;
})(window);
