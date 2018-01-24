export default function dragAndDrop() {
    var el = document.querySelector('.root-node');
    var mover = false, x, y, posx, posy, first = true;
    el.onmousedown = function() {
        mover = true;
    };
    el.onmouseup = function() {
        mover = true;
        first = true;
    };
    el.onmousemove = function(e) {
        if (mover) {
            if (first) {
                x = e.offsetX;
                y = e.offsetY;
                first = false;
            }
            posx = e.pageX - x;
            posy = e.pageY - y;
            this.style.left = posx + 'px';
            this.style.top = posy + 'px';
        }
    };
}