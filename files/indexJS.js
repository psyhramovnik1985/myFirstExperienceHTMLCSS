$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
    $spinner = $preloader.find('.spinner');
    setTimeout(function(){$('#page-preloader').fadeOut('slow')},1500);
});

new Vue({
  		el: '#example-4',
  		data: {
    		show: false
  		},
  		methods: {
    		beforeEnter: function (el) {
      			el.style.opacity = 0
    		},
    		enter: function (el, done) {
      			Velocity(el, { opacity: 1 }, { duration: 300 })
      			Velocity(el, { complete: done })
    		},
    		leave: function (el, done) {
      			Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      			Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      			Velocity(el, {
        			rotateZ: '45deg',
        			translateY: '30px',
        			translateX: '30px',
        			opacity: 0
      			}, { complete: done })
    		}
  		}
})

new Vue({
 		el: '#example-2',
  		data: {
    		show: false
 		}
})

