// see src\com\android\mail\utils\HtmlSanitizer.java 
// TODO parse and sanitize CSS...
SanitizeANDROIDGMAIL = {
  elements: [
    'a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside',
    'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'br', 'button',
    'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 
    'datalist', 'dd', 'del', 'details', 'div', 'dfn', 
    'dl', 'dt', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 
    'header', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr',
    'i', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li',
    'main', 'map', 'mark', 'menu', 'menuitem', 'meter', 'nav', 'ol',
    'ol', 'optgroup', 'option', 'output', 'p', 'pre', 'progress', 
    'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'small',
    'span', 'strike', 'strong', 'sub', 'summary', 'sup',
    'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 
    'tr', 'tt', 'u', 'ul', 'var', 'wbr'],

  attributes: {
    'a'         : ['href', 'coords', 'name', 'shape'],
    'abbr'      : ['title'],
    'acronym'   : ['title'],
    'address'   : ['title'],
    'area'      : ['alt', 'coords', 'nohref', 'name', 'shape', 'href'],
    'base'      : ['href'],
    'bdi'       : ['dir'],
    'bdo'       : ['dir'],
    'blockquote': ['cite'],
    'br'        : ['clear'],
    'button'    : ['autofocus', 'disabled', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'name', 'type', 'value'],
    'canvas'    : ['width', 'height'],
    'caption'   : ['align'],
    'col'       : ['align', 'bgcolor', 'char', 'charoff', 'span', 'valign', 'width'],
    'colgroup'  : ['align', 'char', 'charoff', 'span', 'valign', 'width'],
    'del'       : ['cite', 'datetime'],
    'dir'       : ['compact'],
    'div'       : ['align', 'background', 'class', 'id'],
    'fieldset'  : ['disabled', 'form', 'name'],
    'font'      : ['color', 'face', 'size'],
    'form'      : ['accept', 'action', 'accept-charset', 'autocomplete', 'enctype', 'method', 'name', 'novalidate', 'target'],
    'h1'        : ['align'],
    'h2'        : ['align'],
    'h3'        : ['align'],
    'h4'        : ['align'],
    'h5'        : ['align'],
    'h6'        : ['align'],
    'hr'        : ['align', 'noshade', 'size', 'width'],
    'img'       : ['src', 'longdesc', 'align', 'alt', 'border', 'crossorigin', 'height', 'hspace', 'ismap', 'usemap', 'vspace', 'width'],
    'input'     : ['src', 'formaction', 'accept', 'align', 'alt', 'autocomplete', 'autofocus', 'checked', 'disabled', 'form', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'height', 'list', 'max', 'maxlength', 'min', 'multiple', "name", "pattern", "placeholder", "readonly", "required", "size", "step",
                        "type", "value", "width"],
    'ins'       : ['cite', 'datetime'],
    'keygen'    : ["autofocus", "challenge", "disabled", "form", "keytype", "name"],
    'label'     : ["form"],
    'legend'    : ["align"],
    'li'        : ["type", "value"],
    'map'       : ["name"],
    'menu'      : ["label", "type"],
    'menuitem'  : ["icon", "checked", "command", "default", "disabled", "label", "type", "radiogroup"],
    'meter'     : ["form", "high", "low", "max", "min", "optimum", "value"],
    'ol'        : ["compact", "reversed", "start", "type"],
    'optgroup'  : ["disabled", "label"],
    'option'    : ["disabled", "label", "selected", "value"],
    'output'    : ["form", "name"],
    'p'         : ["align"],
    'pre'       : ["width"],
    'progress'  : ["max", "value"],
    'q'         : ["cite"],
    'select'    : ["autofocus", "disabled", "form", "multiple", "name", "required", "size"],
    'table'     : ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "sortable", "summary", "width"],
    'tbody'     : ["align", "char", "charoff", "valign"],
    'td'        : ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "height", "nowrap", "rowspan", "scope", "valign", "width"],
    'textarea'  : ["autofocus", "cols", "disabled", "form", "maxlength", "name", "placeholder", "readonly", "required", "rows", "wrap"],
    'tfoot'     : ["align", "char", "charoff", "valign"],
    'th'        : ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "height", "nowrap", "rowspan", "scope", "sorted", "valign", "width"],
    'thead'     : ["align", "char", "charoff", "valign"],
    'time'      : ["datetime"],
    'tr'        : ["align", "bgcolor", "char", "charoff", "valign"],
    'ul'        : ["compact", "type"]
  },

  protocols: {
    'a'         : {'href': ['ftp', 'http', 'https', 'mailto', Sanitize.RELATIVE]},
    'area'      : {'href': ['ftp', 'http', 'https', 'mailto', Sanitize.RELATIVE]},
    'base'      : {'href': ['http', 'https', Sanitize.RELATIVE]},
    'blockquote': {'cite': ['http', 'https', Sanitize.RELATIVE]},
    'img'       : {'src' : ['http', 'https', Sanitize.RELATIVE], 'longdesc' : ['http', 'https', Sanitize.RELATIVE]},
    'input'     : {'src' : ['http', 'https', Sanitize.RELATIVE], 'formaction' : ['http', 'https', Sanitize.RELATIVE]},
    'ins'       : {'cite': ['http', 'https', Sanitize.RELATIVE]},
    'menuitem'  : {'icon': ['http', 'https', Sanitize.RELATIVE]},
    'q'         : {'cite': ['http', 'https', Sanitize.RELATIVE]}
  }
};

var elname;
for (var i = 0; i < SanitizeANDROIDGMAIL.elements.length; i++) { 
    elname = SanitizeANDROIDGMAIL.elements[i];
    if (typeof SanitizeANDROIDGMAIL.attributes[elname] == 'undefined') SanitizeANDROIDGMAIL.attributes[elname] = [];
    SanitizeANDROIDGMAIL.attributes[elname].push('dir');
    SanitizeANDROIDGMAIL.attributes[elname].push('style');
}

console.log("app.js", SanitizeANDROIDGMAIL);

(function() {
    var s = new Sanitize(SanitizeANDROIDGMAIL);
    var element = document.getElementsByClassName("mail-message-content")[0];
    console.log("XX", element.innerHTML.length, element.innerHTML.substring(0,100));
    var cleaned = s.clean_node(element);
    element.innerHTML = ' ';
    element.appendChild(cleaned);
    console.log("YY", element.innerHTML.length, element.innerHTML.substring(0,100));

    var script = document.createElement("script");
    script.innerHTML = 'window.mail = { onWebContentGeometryChange: function() { console.log("onWebContentGeometryChange", arguments); }, onInlineAttachmentsParsed: function() { console.log("onInlineAttachmentsParsed", arguments); } };';
    document.body.appendChild(script);
    var script2 = document.createElement("script");
    script2.setAttribute('src','assets/script.js');
    document.body.appendChild(script2);
    /*
    element.parentNode.insertAdjacentHTML("beforebegin", '<scr'+'ipt>'+'window.mail = { onWebContentGeometryChange: function() { console.log("onWebContentGeometryChange", arguments); }, onInlineAttachmentsParsed: function() { console.log("onInlineAttachmentsParsed", arguments); } };'+'</scr'+'ipt>');
    element.parentNode.insertAdjacentHTML("beforebegin", '<scr'+'ipt lang="javascript" src="assets/script.js"></scr'+'ipt>');
    */
})();