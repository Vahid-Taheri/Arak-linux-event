import React from 'react'


const HoldingPlace = () => (
    <section className="HoldingPlace">
        <h2 id="section-title">محل برگزاری</h2>
        <div className="container align-right">
            {/*<div class="mapouter">
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
                        margin: 0 auto 35px;\
                    }\
                    .gmap_canvas {\
                            overflow: hidden;\
                            background:none!important;\
                            height: 350px;\
                            width: 100%;\
                    }\
                "}
                </style>
                </div>*/}
            <iframe width="100%" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=49.60314273834229%2C34.066210179921406%2C49.65833187103272%2C34.09091429795883&amp;layer=transportmap&amp;marker=34.07856313967575%2C49.6307373046875"></iframe>
            <span><i className="mdi mdi-map-marker"></i>اراک، میدان بسیج، بلوار کربلا(سردشت)، دانشگاه اراک</span>
        </div>
    </section>
);
export default HoldingPlace
