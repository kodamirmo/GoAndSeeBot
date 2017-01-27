import { Router } from 'meteor/iron:router';

//Layouts
import '/imports/ui/layouts/mainLayout/mainLayout.js';

//Pages
import '/imports/ui/pages/home/home.js';


Router.configure({
  layoutTemplate : 'mainLayout',
  trackPageView: true
});

Router.route('/', {
  name           : 'home',
  template       : 'home'
});