define(["doh/runner", "app/components/pbar/PBarContainer"], function(doh, PBarContainer) {

    doh.register("PBarTest", [{
            name: "Data Validation Test",
            runTest: function() {
                this.pbar0 = new PBarContainer({ sdata: {} });
                this.pbar1 = new PBarContainer({ sdata: { "buttons": [], "bars": [71, 16, 45], "limit": 230 } });
                this.pbar2 = new PBarContainer({ sdata: { "buttons": [31, 39, -13, -30], "bars": [], "limit": 230 } });
                this.pbar3 = new PBarContainer({ sdata: { "buttons": [31, 39, -13, -30], "bars": [71, 16, 45], "limit": 0 } });
                this.pbar4 = new PBarContainer({ sdata: { "buttons": [], "bars": [], "limit": 0 } });
                this.pbar5 = new PBarContainer({ sdata: { "buttons": [31, 39, -13, -30], "bars": [71, 16, 45], "limit": 170 } });
                doh.assertTrue(this.pbar0.pbarContCtrNode.getChildren().length == 0);
                doh.assertTrue(this.pbar0.pbarContCtrNode.getChildren().length == 0);
                doh.assertTrue(this.pbar1.pbarContNode.getChildren().length == 0);
                doh.assertTrue(this.pbar1.pbarContNode.getChildren().length == 0);
                doh.assertTrue(this.pbar2.pbarContCtrNode.getChildren().length == 0);
                doh.assertTrue(this.pbar2.pbarContCtrNode.getChildren().length == 0);
                doh.assertTrue(this.pbar3.pbarContCtrNode.getChildren().length > 0);
                doh.assertTrue(this.pbar3.pbarContCtrNode.getChildren().length > 0);
                doh.assertTrue(this.pbar4.pbarContCtrNode.getChildren().length == 0);
                doh.assertTrue(this.pbar4.pbarContCtrNode.getChildren().length == 0);
                doh.assertTrue(this.pbar5.pbarContCtrNode.getChildren().length > 0);
                doh.assertTrue(this.pbar5.pbarContCtrNode.getChildren().length > 0);

            }

        },

    ]);

});
