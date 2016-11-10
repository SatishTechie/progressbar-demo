define(["require","dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin", "dijit/_Container",
        "dojo/dom-class",
        "dojo/_base/lang",
        "dojo/number",
         "dijit/ProgressBar"

    ],
    function(require,declare,
        _WidgetBase, _TemplatedMixin,
        _WidgetsInTemplateMixin, _Container, domClass, lang, number, ProgressBar) {
        return declare(ProgressBar, {

            buildRendering: function() {
                this.inherited(arguments);
                this.indeterminateHighContrastImage.setAttribute("src",
                    this._indeterminateHighContrastImagePath.toString());
                this.update();
            },

            _setValueAttr: function(v) {
            	v = v >= 0?v : 0; 
                this._set("value", v);
                if (v == Infinity) {
                    this.update({ indeterminate: true });
                } else {
                    this.update({ indeterminate: false, progress: v });
                }
            },

            _setLabelAttr: function(label) {
                this._set("label", label);
                this.update();
            },

            update: function( /*Object?*/ attributes) {
                // summary:
                //		Internal method to change attributes of ProgressBar, similar to set(hash).  Users should call
                //		set("value", ...) rather than calling this method directly.
                // attributes:
                //		May provide progress and/or maximum properties on this parameter;
                //		see attribute specs for details.
                // example:
                //	|	myProgressBar.update({'indeterminate': true});
                //	|	myProgressBar.update({'progress': 80});
                //	|	myProgressBar.update({'indeterminate': true, label:"Loading ..." })
                // tags:
                //		private

                // TODO: deprecate this method and use set() instead

                lang.mixin(this, attributes || {});
                var tip = this.internalProgress,
                    ap = this.domNode;
                var percent = 1;
                if (this.indeterminate) {
                    ap.removeAttribute("aria-valuenow");
                } else {
                    if (String(this.progress).indexOf("%") != -1) {
                        percent = Math.min(parseFloat(this.progress) / 100, 1);
                        this.progress = percent * this.maximum;
                    } else {
                        //this.progress = Math.min(this.progress, this.maximum);
                        percent = this.maximum ? this.progress / this.maximum : 0;
                    }
                    ap.setAttribute("aria-valuenow", this.progress);
                }

                // Even indeterminate ProgressBars should have these attributes
                ap.setAttribute("aria-labelledby", this.labelNode.id);
                ap.setAttribute("aria-valuemin", 0);
                ap.setAttribute("aria-valuemax", this.maximum);

                this.labelNode.innerHTML = this.report(percent>0?percent:0);

                domClass.toggle(this.domNode, "dijitProgressBarIndeterminate", this.indeterminate);
                domClass.toggle(this.domNode, "dijitProgressBarIndeterminateRtl", this.indeterminate && !this.isLeftToRight());

                tip.style.width = (percent * 100) + "%";
                this.onChange();
            }
        });
    });
