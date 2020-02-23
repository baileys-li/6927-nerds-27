"use strict";

let priceBlock = document.querySelector(".filters--cost");

const thumbRadius = priceBlock.querySelector("#price__thumb circle").r.baseVal.value;

let rangeFull = priceBlock.querySelector("#price__track"),
  rangeSelected = priceBlock.querySelector("#price__track--selected");
const minCord = rangeFull.x1.baseVal.value - thumbRadius,
  maxCord = rangeFull.x2.baseVal.value - thumbRadius;

let minThumb = new Thumb("#price--min", "#price__output--min", rangeSelected.x1),
  maxThumb = new Thumb("#price--max", "#price__output--max", rangeSelected.x2);

function Thumb(thumb, output, rangeSelectedPoint) {
  thumb = priceBlock.querySelector(thumb);
  thumb.output = priceBlock.querySelector(output);
  thumb.rangeSelectedPoint = rangeSelectedPoint;


  thumb.getPosition = function () {
    return this.x.baseVal.value;
  }
  thumb.displayPrice = function (price) {
    this.output.value = price;
  }
  thumb.moveTo = function (coordinate) {
    if (coordinate > maxCord) {
      coordinate = maxCord;
    }

    if (coordinate < minCord) {
      coordinate = minCord;
    }
    this.rangeSelectedPoint.baseVal.value = coordinate + thumbRadius;
    this.x.baseVal.value = coordinate;

    let price = coordinate / maxCord * this.output.max;
    price /= 100;
    this.displayPrice(parseInt(price) * 100);
  }

  thumb.onmousedown = function (event) {
    event.preventDefault;
    let startPos = event.clientX;

    let thisThumb = this;
    document.onmousemove = function (event) {
      let shift = event.clientX - startPos;
      startPos = event.clientX;
      thisThumb.moveTo(thisThumb.getPosition() + shift);
    }

    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }

  return thumb;

}
