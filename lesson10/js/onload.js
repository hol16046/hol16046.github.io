function AddOnloadEvent(f) {
    if(typeof window.onload != 'function') {window.onload = f; }
    else {
        var cache = window.onload;
        window.onload = function() {
            if(cache) { cache(); }
            f();
        };
    }
}


AddOnloadEvent (pancakes);
AddOnloadEvent (compute);