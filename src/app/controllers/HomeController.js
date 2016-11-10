define([
    'dojo/_base/declare',
    'dijit/layout/BorderContainer',
    'dijit/layout/ContentPane',
    'dojo/topic',
    'dojo/dom-style',
    "dojo/query",
    "dojo/request/xhr",
    "app/components/pbar/PBarContainer"
], function(
    declare, BorderContainer,
    ContentPane, topic,
    domStyle, query,
    XHR, PBarContainer) {

    return declare('app.controllers.homeController', [], {
        isFirst: true,
        constructor: function() {
            this.serviceCall();
            
        },
        createLayout: function(data) {
            // create a BorderContainer as the top widget in the hierarchy
            this.container = new BorderContainer({
                style: "height: 100%; width: 100%; padding:0px;",
                id: 'mainContainer',
                gutters: false,
                isLayoutContainer: true,
                focused: true,
                splitter: false
            }, 'mainLayout');

            // create a ContentPane as the left pane in the BorderContainer


            this.topPane = new ContentPane({
                region: "top",
                style: "width: 100%; height:5%; border:0px; margin:0px; padding:0px 0px 0px 0px;",
                id: "tpc_1",
                gutters: false
            });


            
            this.container.addChild(this.topPane);

            // create a ContentPane as the center pane in the BorderContainer


            this.centerPane = new ContentPane({
                region: "top",
                style: "width: 100%; height:90%; border:0px; margin:0px; padding:25px;",
                id: "cenc_1",
                gutters: false,
                doLayout: true
            });

            this.botPane = new ContentPane({
                region: "bottom",
                style: "width: 100%; height:5%; border:0px; margin:0px; padding:0px 0px 0px 0px;",
                id: "bpc_1",
                gutters: false
            });


            this.container.addChild(this.botPane);

            this.pbarContainer = new PBarContainer({sdata : data});
            this.centerPane.addChild(this.pbarContainer);
            this.container.addChild(this.centerPane);
            this.container.startup();

        },
        serviceCall: function() {
           var me = this;
            XHR("http://pb-api.herokuapp.com/bars", {
                handleAs: "json",
                method: "GET"
            }).then(function(data) {
               document.getElementById('loaderDiv').style.display = "none";
                me.createLayout(data);
            }, function(e) {
                document.getElementById('loaderDiv').style.display = "none";
                document.getElementById('loaderDiv').innerHTML="No input data to show progress bar";
            });
        }

    });

});
