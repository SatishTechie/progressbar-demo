define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin", "dijit/_Container",
    "dojo/text!./template/pbar.html", "dojo/_base/lang",
    "dojo/_base/array","dojo/dom-style",
    "app/components/pbar/CustomPBar",
    "dijit/form/Button"

], function(declare,
    _WidgetBase, _TemplatedMixin,
    _WidgetsInTemplateMixin, _Container, template,
    lang, array, domStyle, ProgressBar
) {
    return declare("PBar", [_WidgetBase, _TemplatedMixin,
        _WidgetsInTemplateMixin, _Container
    ], {
        templateString: template,
        constructor: function(options) {
            lang.mixin(this, options);
        },
        postCreate: function() {


        },
        setprogress: function(value, limit) {
            var orgVal = parseInt(this.pbarNode.get("progress")) + value;
            //this.pbarNode.update({'progress': orgVal});
            this.pbarNode.set("value", orgVal);
            if (orgVal > limit) {
                domStyle.set(this.pbarNode.internalProgress.firstChild, "backgroundColor", "red");
            }else{
                domStyle.set(this.pbarNode.internalProgress.firstChild, "backgroundColor", "#abd6ff");
            }
              
        },
        onChange : function(obj){

        }
            



    });
    if (!_instance) {
        var _instance = new obj();
    }

    return _instance;
});
