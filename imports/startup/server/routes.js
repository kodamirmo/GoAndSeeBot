///////////////////////////  SERVER ROUTES ////////////////////////

Router.route('/webhook/telegram', { where: 'server' })
  .post(function () {
    console.log("POST WEBHOOK TELEGRAM");
    var json = this.request.body;
    //Meteor.call('handleFacebookWebhook',json);
    this.response.statusCode = 200;
    this.response.end("OK");
  }
);