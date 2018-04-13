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

    let data = d3.range(10).map(function (d, i) {
      return { v: Math.random() };
    });

    let entities = d3.select(this.el)
      .selectAll('a-entity')
      .data(data);

    let newobject = entities.enter()
      .append('a-entity');
    newobject.append('a-cylinder')
      .attr('color', this.data.color)
      .attr('radius', 0.025)
      .attr('height', function (d, i) {
        return d.v;
      })
      .attr('position', function (d, i) {
        return  (i * 0.05 - 0.25 + 0.025) + ' ' + d.v / 2 + ' 0';
      });
  }
});

AFRAME.registerPrimitive('a-chart', {
  defaultComponents: {
    chart: {}
  },
  mappings: {
    color: 'chart.color'
  }
});
