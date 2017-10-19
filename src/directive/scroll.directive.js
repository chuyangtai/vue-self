import Vue from 'vue';
import $ from 'jquery';
require('../common/js/jquery.mCustomScrollbar.concat.min.js');
require('../common/js/jquery.mCustomScrollbar.min.js');

const CustomScrollbar = Vue.directive('CustomScrollbar', {
  bind: function (el) {
      var $el = $(el);
      console.log($el.find('ul')
      );
    $el.mCustomScrollbar({
        theme: 'minimal-dark',
        mouseWheel: true,
        autoHideScrollbar: true
      });
  }
});
module.export = window.CustomScrollbar;

