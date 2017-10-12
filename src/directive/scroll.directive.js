import Vue from 'vue';
import $ from 'jquery';
require('../common/js/jquery.mCustomScrollbar.concat.min.js');
require('../common/js/jquery.mCustomScrollbar.min.js');

const CustomScrollbar = Vue.directive('CustomScrollbar', {
  unbind: function (el) {
      console.log($(el));
      $(el).mCustomScrollbar({
        theme: 'minimal-dark',
        mouseWheel: true,
        autoHideScrollbar: true
      });
  }
});
export { CustomScrollbar };
