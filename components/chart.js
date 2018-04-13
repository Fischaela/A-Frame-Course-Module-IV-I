AFRAME.registerComponent('chart', {
  schema: {
    color: {type: 'string', default: 'tomato'}
  },
  init: function () {
    let plane = document.createElement('a-plane');
    plane.setAttribute('rotation', '-90 0 0')
    plane.setAttribute('color', 'grey');
    plane.setAttribute('width', '1');
    plane.setAttribute('height', '1');
    plane.setAttribute('position', '0 0 0');
    this.el.appendChild(plane);
  }
});
