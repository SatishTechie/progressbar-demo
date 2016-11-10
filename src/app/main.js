define(["dojo/_base/declare", "app/controllers/HomeController"],
        function (declare, homeController) {
            return declare('app.main', [], {
                constructor: function () {
                    app.homeController = new homeController();
                }
            });
        });


