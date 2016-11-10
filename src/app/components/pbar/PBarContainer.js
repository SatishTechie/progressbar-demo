define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin", "dijit/_Container",
    "dojo/text!./template/pbarContainer.html", "dojo/_base/lang",
    "dojo/_base/array",
    "dijit/form/FilteringSelect",
    "dojo/store/Memory",
    "app/components/pbar/PBar",
    "dijit/ProgressBar",
    "dijit/form/Button",
    "dijit/layout/ContentPane"

], function(declare,
    _WidgetBase, _TemplatedMixin,
    _WidgetsInTemplateMixin, _Container, template,
    lang, array, ComboBox, Memory,
    PBar, ProgressBar, Button
) {
    return declare("PBarContainer", [_WidgetBase, _TemplatedMixin,
        _WidgetsInTemplateMixin, _Container
    ], {
        templateString: template,
        fsData: [],
        ldErrMsg: "Invalid Data",
        errMsg: "Please select valid ProgressBar from dropdown.",
        constructor: function(options) {
            lang.mixin(this, options);
        },
        postCreate: function() {
            var me = this;

            if (this.cleanData() && this.sdata.bars.length > 0 && this.sdata.buttons.length > 0) {
                array.forEach(this.sdata.bars, function(bar) {
                    var pbar = new PBar({ limit: me.sdata.limit });
                    me.pbarContNode.addChild(pbar);
                    me.fsData[me.fsData.length] = { label: pbar.id };
                });

                var me = this;
                array.forEach(this.sdata.buttons, function(btn) {
                    me.pbarContCtrNode.addChild(new Button({
                        label: btn,
                        onClick: dojo.hitch(me,
                            me.clickHandler, btn)
                    }));
                });


                this.barSelect.set("store", new Memory({ data: this.fsData }));
            } else {
                this.errorHandler(this.ldErrMsg);
            }

        },
        cleanData: function() {
            return this.sdata.hasOwnProperty('bars') ? this.sdata.hasOwnProperty('buttons') ? this.sdata.hasOwnProperty('limit') ? true : false : false : false;
        },
        clickHandler: function(lbl, event) {
            if (this.barSelect.validate()) {
                var selBar = this.barSelect.get("displayedValue");
                if (selBar != "") {
                    var _bar = dijit.byId(selBar);
                    _bar.setprogress(lbl, this.sdata.limit);
                    this.errorHandler("");
                } else {
                    this.errorHandler(this.errMsg);
                }
            } else {
                this.errorHandler(this.errMsg);
            }
        },
        errorHandler: function(errMsg) {
            this.pbarErrNode.innerHTML = errMsg;
        }



    });
    if (!_instance) {
        var _instance = new obj();
    }

    return _instance;
});
