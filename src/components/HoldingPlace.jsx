import React from 'react'


const HoldingPlace = () => (
    <section className="Holders container">
        <h2>محل برگزاری</h2>
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe
                    title="نقشه محل برگزاری"
                    width="100%"
                    height="350"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87%20%D8%A7%D8%B1%D8%A7%DA%A9-%D9%BE%D8%B1%D8%AF%DB%8C%D8%B3%20%D8%B3%D8%B1%D8%AF%D8%B4%D8%AA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0">
                </iframe>
                </div>
            <style>
                {"\
                    .mapouter {\
                        position: relative;\
                        text-align:right;\
                        height: 350px;\
                        width: 100%;\
                    }\
                    .gmap_canvas {\
                            overflow: hidden;\
                            background:none!important;\
                            height: 350px;\
                            width: 100%;\
                    }\
                "}
            </style>
        </div>
    </section>
);
export default HoldingPlace
